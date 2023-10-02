---
title: Learning React
date: 2023-10-01T00:00:00
tags: ["javascript", "react", "frontend"]
type: post
showTableOfContents: true
---

## Preface
[React](https://react.dev/) is extremely popular and has become ubiquitous in frontend development. There are many reasons you would want to learn React. It's used in industry, it's a required skill in many applications for job, and it's a great tool to use to build amazing projects. Here is a simple list of tips and resources to help you understand React. If you've used the terminal before, you can safely jump into [Starting my project](#starting-my-project) otherwise the next section will guide you threw it.

## First steps
The first step is to jump right in an make a project! For this, you're going to have to use the terminal. When you first open your terminal, you should be in your "home" folder. It's usually named after your username.

1. Open your terminal and navigate (using [cd](https://en.wikipedia.org/wiki/Cd_(command)) and [ls](https://linux.die.net/man/1/ls)) to the place where you keep all of your code. If you don't have a specific place, make a folder in your Documents folder, and call it Code. You can do this by running `cd Documents` then running `mkdir Code`

2. Navigate into the Code folder using `cd Code`

## Starting my project

You may need to install [npx](https://www.freecodecamp.org/news/npm-vs-npx-whats-the-difference/). Now it comes with npm, so make sure you have that installed along with [node](https://nodejs.org/en/download). That's a lot to keep track of, so if you're just starting out, you can just install node and everything should be installed with it. If you are on linux, you can use your package manager to install node if it's not included, if you do not use linux, you can use this link [https://nodejs.org/en/download](https://nodejs.org/en/download).

I highly recommend learning by doing. Let's start a small learning project to test out React. To start, type out the following command in the directory you save coding projects in. This will create a basic template for us to add to. It will name the folder "my-app". It may take some time (a few minutes).

The following will run the program called create-react-app, which creates the app. Here is their website about it [create-react-app.dev](https://create-react-app.dev/). Do note, that it's no longer recommended by the React team[[1]](https://www.linkedin.com/pulse/end-era-react-team-longer-recommends-create-app-vivek-dwivedi/).

```
npx create-react-app my-app
```

Now that it's done, `cd my-app` into the project to start coding!

Run the command `cd src` to see the main source code for your new project.

If you run `ls`, you should see the following files.
```
App.css
App.js
App.test.js
index.css
index.js
logo.svg
reportWebVitals.js
setupTests.js
```

You can safely ignore everything but `App.js`.

Open `App.js` in your favorite text editor.

You should see the following.

```js
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

This is the basic source code. There are three main parts to it.

First, the imports. These tell the [interpreter](https://en.wikipedia.org/wiki/Interpreter_(computing)) where resources are located, like our CSS files and images, but also other javascript files.

```js
import logo from './logo.svg';
import './App.css';
```

Secondly, the function in [jsx](https://legacy.reactjs.org/docs/introducing-jsx.html). Here I have removed all of the html-like code and just kept the function. These two parts are the basis for all of it.

```js
function App() {
  return (
    // ...
  );
}

export default App;
```

Before we look at the third part, let's add a simple text field.

```js
function App() {
  return (
    <p>Hello!</p>
  );
}

export default App;
```

The third part is the html-like code we removed in the second example (where the ellipsis is). Here is what that looks like.

```js
<div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
</div>
```

One common point of confusion is that this is [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML). It close, but not exactly. It's called [jsx](https://legacy.reactjs.org/docs/introducing-jsx.html). It's kinda like a combination of [JS](https://developer.mozilla.org/en-US/docs/Web/javascript) and HTML. It makes it really easy to write frontend.

Now that we have looked at the code, go back to that `App.js` and try to predict what you will see when we open the page.

Let's open the page. Go back to your terminal, navigate back to the my-app folder, run the following command to install the needed requirements.

```
npm install
```

Note: you can do `npm i` for short.

Next is to run it! Do so by running the following

```
npm run start
```

The page should now automatically open in your browser!

You should see this the React logo with some text that says `Edit src/App.js and save to reload.`.

You've created a project!

## Next level

It's now your chance to take this to the next level. Make something interesting! Try things out!

Here are some resoruces to help on your journey.

#### React

- [Getting started with React](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
- [React Quick Start](https://react.dev/learn)
- [React.js Cheatsheet](https://devhints.io/react)

#### JavaScript

- [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/javascript)
- [Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)

#### Typescript

- [Handbook (New Programmers)](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)
- [Handbook (For JS Programmers)](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [Learn Typescript](https://www.freecodecamp.org/news/learn-typescript-beginners-guide/)
