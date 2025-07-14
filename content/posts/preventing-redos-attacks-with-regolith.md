---
title: Preventing ReDoS Attacks with Regolith
date: 2025-07-03T00:00:00
tags: ["rust", "regex", "redos"]
type: post
showTableOfContents: true
---

{{< github repo="jakeroggenbuck/regolith" showThumbnail=true >}}

### Description

A server-side TypeScript and JavaScript library immune to Regular Expression Denial of Service (ReDoS) attacks by using Rust and linear Regex under the hood. Regolith has a linear worst case time complexity, compared to the default RegExp found in TypeScript and JavaScript, which has an exponential worst case.

### Install Regolith with NPM

```
npm i @regolithjs/regolith
```

### Try it out

```ts
import { Regolith } from '@regolithjs/regolith';

const pattern = new Regolith("^\\d+$");

pattern.test("12345");  // true
pattern.test("Hello");  // false
```

### What are ReDoS attacks?

Regular Expression Denial of Service (ReDoS) attacks occur when vulnerable Regex patterns are executed with specifically constructed inputs that result in an inefficient execution. This can be exploited to cause services to become unavailable because the services are stuck trying to compute the inefficient Regex.

### Linear vs Exponential Regex Libraries

This table shows popular languages and if their Regex library has a linear worst case or an exponential worst case. It also includes experimental results for how long execution took for a vulnerable Regex pattern that can be attacked with ReDoS and an input of size 30.

![Language Table](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/djsrm73q2cdiamxfe6fl.png)

### Drop-in Replacement

Regolith attempts to be a drop-in replacement for RegExp and requires minimal (to no) changes to be used instead. The goal of Regolith is to allow developers to easily build software that is immune to ReDoS attacks.

![Drop-in Replacement](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1nradvhej00pq735h8ho.png)

### Impact

These vulnerabilities happen relatively often in popular libraries. It's no one's fault specifically, it just comes down to the fact that the language allows for these things to happen.

A recent example of a ReDoS vulnerability is [CVE-2025-5889](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2025-5889) from [brace-expansion](https://github.com/juliangruber/brace-expansion). Again, this isn't any fault of that project, it's simply an issue with the language allowing this to happen. Measures can be put into place to reduce the risk of this, but it's hard to spot and test for these issues.

The [brace-expansion](https://github.com/juliangruber/brace-expansion) project is used by 42.5 million other projects on GitHub. Meaning if everyone were to patch their software (which the hopefully will), that would be 42.5 million pull requests, roughly 42.5 million build minutes, and probably more than 42 million engineering minutes as well. All of that for a single vulnerability, and that's just a lower bound of effort spent on this if everyone were to keep their software patched.

Other versions of [brace-expansion](https://github.com/juliangruber/brace-expansion) had these patches backported to them, needing updates for versions [1](https://github.com/juliangruber/brace-expansion/commit/c3c73c8b088defc70851843be88ccc3af08e7217), [2](https://github.com/juliangruber/brace-expansion/commit/36603d5f3599a37af9e85eda30acd7d28599c36e), [3](https://github.com/juliangruber/brace-expansion/commit/15f9b3c75ebf5988198241fecaebdc45eff28a9f), and the current version [4](https://github.com/juliangruber/brace-expansion/pull/65).

Having a library or project that is immune to these vulnerabilities would save this effort for each project that adopted it, and would save the whole package ecosystem that effort if widely adopted. Adoption of libraries is difficult, especially when they aren't very flashy, but helping library maintainers and engineers not worry about ReDoS for one library, one project at a time, is our goal.

### Trade-off

The Rust [Regex library](https://docs.rs/regex/latest/regex/) purposefully excludes features that make Regex engines particularly vulnerable to ReDoS attacks. Those features are backreferences and look-around. Excluding those features allow [Regex](https://docs.rs/regex/latest/regex/) to guarantee linear time execution.

Since Regolith uses Rust bindings to implement the Rust [Regex library](https://docs.rs/regex/latest/regex/) to achieve linear time worst case, this means that backreferences and look-around aren't available in Regolith either.

This trade-off has proven to be worth it for the Rust community of libraries and projects.

### Results

Since ReDoS vulnerabilities are hard to spot, there are rather frequent CVEs that get submitted. Having a Regex library that has a linear worst case time would completely prevent all of these potential issues for downstream projects.

### Closing

View more info on [GitHub](https://github.com/JakeRoggenbuck/regolith)
