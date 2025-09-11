---
title: bspwm
type: page
date: 2022-12-04T00:00:00
tags: ["None"]
description: "A tiling window manager based on binary space partitioning"
---

## Description

_bspwm_ is a tiling window manager that represents windows as the leaves of a full binary tree.

It only responds to X events, and the messages it receives on a dedicated socket.

_bspc_ is a program that writes messages on _bspwm_'s socket.

_bspwm_ doesn't handle any keyboard or pointer inputs: a third party program (e.g. _sxhkd_) is needed in order to translate keyboard and pointer events to _bspc_ invocations.

The outlined architecture is the following:

```
        PROCESS          SOCKET
sxhkd  -------->  bspc  <------>  bspwm
```

## Configuration

The default configuration file is `$XDG_CONFIG_HOME/bspwm/bspwmrc`: this is simply a shell script that calls _bspc_.

An argument is passed to that script to indicate whether is was executed after a restart (`$1 -gt 0`) or not (`$1 -eq 0`).

Keyboard and pointer bindings are defined with [sxhkd](https://github.com/baskerville/sxhkd).

Example configuration files can be found in the [examples](examples) directory.

## Monitors, desktops and windows

_bspwm_ holds a list of monitors.

A monitor is just a rectangle that contains desktops.

A desktop is just a pointer to a tree.

Monitors only show the tree of one desktop at a time (their focused desktop).

The tree is a partition of a monitor's rectangle into smaller rectangular regions.

Each node in a tree either has zero or two children.

Each internal node is responsible for splitting a rectangle in half.

A split is defined by two parameters: the type (horizontal or vertical) and the ratio (a real number _r_ such that _0 < r < 1_).

Each leaf node holds exactly one window.

## Insertion modes

When _bspwm_ receives a new window, it inserts it into a window tree at the specified insertion point (a leaf) using the insertion mode specified for that insertion point.

The insertion mode tells _bspwm_ how it should alter the tree in order to insert new windows on a given insertion point.

By default the insertion point is the focused window and its insertion mode is _automatic_.

### Manual mode

The user can specify a region in the insertion point where the next new window should appear by sending a _node -p|--presel-dir DIR_ message to _bspwm_.

The _DIR_ argument allows to specify how the insertion point should be split (horizontally or vertically) and if the new window should be the first or the second child of the new internal node (the insertion point will become its _brother_).

After doing so the insertion point goes into _manual_ mode.

Let's consider the following scenario:

```
            a                          a                          a
           / \                        / \                        / \
          1   b         --->         c   b         --->         c   b
          ^  / \                    / \ / \                    / \ / \
            2   3                  4  1 2  3                  d  1 2  3
                                   ^                         / \
                                                            5   4
                                                            ^

+-----------------------+  +-----------------------+  +-----------------------+
|           |           |  |           |           |  |     |     |           |
|           |     2     |  |     4     |     2     |  |  5  |  4  |     2     |
|           |           |  |     ^     |           |  |  ^  |     |           |
|     1     |-----------|  |-----------|-----------|  |-----------|-----------|
|     ^     |           |  |           |           |  |           |           |
|           |     3     |  |     1     |     3     |  |     1     |     3     |
|           |           |  |           |           |  |           |           |
+-----------------------+  +-----------------------+  +-----------------------+

            X                          Y                          Z
```

In state _X_, the insertion point is _1_.

We send the following message to _bspwm_: _node -p north_.

Then add a new window: _4_, this leads to state _Y_: the new internal node, _c_ becomes _a_'s first child.

Finally we send another message: _node -p west_ and add window _5_.

The ratio of the preselection (that ends up being the ratio of the split of the new internal node) can be changed with the _node -o|--presel-ratio_ message.

### Automatic mode

The _automatic_ mode, as opposed to the _manual_ mode, doesn't require any user choice. The way the new window is inserted is determined by the value of the automatic scheme and the initial polarity settings.

#### Longest side scheme

When the value of the automatic scheme is `longest_side`, the window will be attached as if the insertion point was in manual mode and the split direction was chosen based on the dimensions of the tiling rectangle and the initial polarity.

Let's consider the following scenario, where the initial polarity is set to `second_child`:

```
             1                          a                          a
             ^                         / \                        / \
                         --->         1   2         --->         1   b
                                          ^                         / \
                                                                   2   3
                                                                       ^

 +-----------------------+  +-----------------------+  +-----------------------+
 |                       |  |           |           |  |           |           |
 |                       |  |           |           |  |           |     2     |
 |                       |  |           |           |  |           |           |
 |           1           |  |     1     |     2     |  |     1     |-----------|
 |           ^           |  |           |     ^     |  |           |           |
 |                       |  |           |           |  |           |     3     |
 |                       |  |           |           |  |           |     ^     |
 +-----------------------+  +-----------------------+  +-----------------------+

             X                          Y                          Z
```

In state _X_, a new window is added.

Since _1_ is wide, it gets split vertically and _2_ is added as _a_'s second child given the initial polarity.

This leads to _Y_ where we insert window _3_. _2_ is tall and is therefore split horizontally. _3_ is once again added as _b_'s second child.

#### Alternate scheme

When the value of the automatic scheme is `alternate`, the window will be attached as if the insertion point was in manual mode and the split direction was chosen based on the split type of the insertion point's parent and the initial polarity. If the parent is split horizontally, the insertion point will be split vertically and vice versa.

#### Spiral scheme

When the value of the automatic scheme is `spiral`, the window will _take the space_ of the insertion point.

Let's dive into the details with the following scenario:

```
             a                          a                          a
            / \                        / \                        / \
           1   b         --->         1   c         --->         1   d
              / \                        / \                        / \
             2   3                      4   b                      5   c
             ^                          ^  / \                     ^  / \
                                          3   2                      b   4
                                                                    / \
                                                                   3   2

 +-----------------------+  +-----------------------+  +-----------------------+
 |           |           |  |           |           |  |           |           |
 |           |     2     |  |           |     4     |  |           |     5     |
 |           |     ^     |  |           |     ^     |  |           |     ^     |
 |     1     |-----------|  |     1     |-----------|  |     1     |-----------|
 |           |           |  |           |     |     |  |           |  3  |     |
 |           |     3     |  |           |  3  |  2  |  |           |-----|  4  |
 |           |           |  |           |     |     |  |           |  2  |     |
 +-----------------------+  +-----------------------+  +-----------------------+

             X                          Y                          Z
```

In state _X_, the insertion point, _2_ is in automatic mode.

When we add a new window, _4_, the whole tree rooted at _b_ is reattached, as the second child of a new internal node, _c_.

The splitting parameters of _b_ (type: _horizontal_, ratio: _½_) are copied to _c_ and _b_ is rotated by 90° clockwise.

The tiling rectangle of _4_ in state _Y_ is equal to the tiling rectangle of _2_ in state _X_.

Then the insertion of _5_, with _4_ as insertion point, leads to _Z_.

The _spiral_ automatic scheme generates window spirals that rotate clockwise (resp. anti-clockwise) if the insertion point is the first (resp. second) child of its parent.

## Supported protocols and standards

- The RandR and Xinerama protocols.
- A subset of the EWMH and ICCCM standards.

## Community

Want to get in touch with other _bspwm_ users or you need help? Join us on our:

- Subreddit at [r/bspwm](https://www.reddit.com/r/bspwm/).
- IRC channel at `#bspwm` on `irc.libera.chat` (maintained by [@dannycolin](https://github.com/dannycolin) / sdk on IRC).
- Matrix room at https://matrix.to/#/#bspwm:matrix.org
