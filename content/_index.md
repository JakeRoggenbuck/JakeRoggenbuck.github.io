---
tags:
  [
    "Jake",
    "Roggenbuck",
    "projects",
    "software",
    "github",
    "code",
    "product",
    "manager",
    "machine learning",
  ]
images:
  - /images/redos-research.avif
  - /images/redox-ql.avif
  - /images/kr.avif
  - /images/algoboard.avif
  - /images/acs.avif
  - /images/component.avif
  - /images/jai.avif
  - /images/t3.avif
  - /images/jake-and-team-and-garry-tan.jpg
  - /images/jake-and-team-and-james-tan.png
  - /images/jake-in-SF.avif
  - /images/jake-in-SF.jpg
---

<div style="text-align: left; max-width: 700px; margin: 0 auto; line-height: 1.6;">

## Quick Links:

Favorite languages: [C](https://github.com/JakeRoggenbuck?tab=repositories&q=&type=&language=c&sort=stargazers), [Rust](https://github.com/JakeRoggenbuck?tab=repositories&q=&type=&language=rust&sort=stargazers), [Go](https://github.com/JakeRoggenbuck?tab=repositories&q=&type=&language=go&sort=stargazers), [C++](https://github.com/JakeRoggenbuck?tab=repositories&q=&type=&language=c%2B%2B&sort=stargazers), [Python](https://github.com/JakeRoggenbuck?tab=repositories&q=&type=&language=python&sort=stargazers), [TypeScript](https://github.com/JakeRoggenbuck?tab=repositories&q=&type=&language=typescript&sort=stargazers)

Topics of interest: [Math](math), [Space](space), [Computer Science](projects), [Machine Learning](ml)

Projects: [Regolith](https://github.com/JakeRoggenbuck/regolith), [Kronicler](https://github.com/JakeRoggenbuck/kronicler), [RedoxQL](https://github.com/JakeRoggenbuck/RedoxQL), [AlgoBoard](https://github.com/JakeRoggenbuck/algoboard), [Auto Clock Speed](https://github.com/JakeRoggenbuck/auto-clock-speed).

Highlighted posts: [Optimizing Course Search by over 8x](https://jr0.org/posts/optimizing-course-api/), [Backend SQL Injection Research](https://jr0.org/posts/backend-sql-report/). 

## Overview

I'm currently conducting research in programming languages and security at [Prof. Stanford's Davis PL Lab](https://web.cs.ucdavis.edu/~cdstanford/group/), as well as research in database systems. Notable projects for both include [Regolith](https://github.com/JakeRoggenbuck/regolith), a secure Regex library for JavaScript, and [RedoxQL](https://github.com/JakeRoggenbuck/RedoxQL), a database that won first place in UC Davis' database competition. My research with Regex led me to present a [poster](https://jr0.org/#current-research) about linear-time regex engines. My Regex project [Regolith](https://github.com/JakeRoggenbuck/regolith) recently appeared on the front page of Hacker News, receiving attention from the community.

Notable hackathon wins include Hack Davis, UC Davis' annual hackathon, YC Agent Mail hackathon, receiving over $5k in awards, 1st place in climate pitch competition, Vibe Code by Transpose Platform receiving over $400 in awards, and placed 3rd for ProductCon 2025.

I also maintain a few libraries in Rust, Python, and JavaScript totaling over 170k downloads across the three languages. Those include auto-clock-speed, efcl, kronicler, regolith, and statistical-tests-rs. View these packages on my [crates.io](https://crates.io/users/JakeRoggenbuck), [pypi.org](https://pypi.org/user/jakeroggenbuck/), and [npmjs](https://www.npmjs.com/~jakeroggenbuck).

I'm passionate about building useful products which led me to found and scale a club search product to 10k students and a course recommendation product to 20k students. The latter handling over 1 million endpoint visits over tens of thousands of sessions from users.

The best way to view my work is on my [GitHub](https://github.com/JakeRoggenbuck) and this website.

## Current Research

I'm currently conducting programming language research. Broadly programming language research focuses on security and safety of how programming languages are designed and implemented, as well as theoretical ideas that can be applied to change what traits languages can guarantee.

Recently, my research involves testing and improving regular expression libraries. My initial investigation into RegEx runtime resulted in a poster submission to the Undergraduate Research Conference at UC Davis.

<img alt="Jake Roggenbuck Research at UC Davis Programming Language Lab on Preventing ReDoS Attacks and Analyzing eval times of Regex engines" title="Regex security research at UC Davis" loading="lazy" decoding="async" src="/images/redos-research.avif">

Later work includes [Regolith](https://github.com/JakeRoggenbuck/regolith), which protects JavaScript and TypeScript backend applications from catastrophic backtracking by wrapping Rust's linear time engine as a JavaScript package. This project landed on the front page of Y Combinator's Hacker News.

{{< github repo="jakeroggenbuck/regolith" showThumbnail=true >}}

## Database Systems

One of my many interests includes creating database systems. My prior fascination with optimization was ignited when I took [ECS 165A](https://expolab.org/ecs165a-winter2025.html) at UC Davis. My team's database called [RedoxQL](https://github.com/JakeRoggenbuck/RedoxQL) placed first for one of the milestones based on performance. The technical write-up in the [README](https://github.com/JakeRoggenbuck/RedoxQL) explains how we eked out every bit of performance we could using flamegraphs, benchmarks, compiler settings, and performant data structures (Like B-Trees).

<img alt="Jake Roggenbuck UC Davis Database Systems Competition Winner RedoxQL" title="RedoxQL database competition winner" loading="lazy" decoding="async" src="/images/redox-ql.avif">

{{< github repo="jakeroggenbuck/RedoxQL" showThumbnail=true >}}

Since then, I've created [Kronicler](https://github.com/JakeRoggenbuck/kronicler) which allows you to efficiently capture performance metrics for product systems. I created my own database to ensure it would be fast based on problem-specific constraints like logs being append only, making my database extremely fast for this specific use case. You can start using Kronicler at [usekronicler.com](https://usekronicler.com) for performance metrics, or you could use the fast database implementation for similar problems by importing the library and manually capturing data as explained in the [README](https://github.com/JakeRoggenbuck/kronicler).

<img alt="Jake Roggenbuck Software for Performance Monitoring in Python Called Kronicler" title="Kronicler performance monitoring software" loading="lazy" decoding="async" src="/images/kr.avif">

{{< github repo="jakeroggenbuck/kronicler" showThumbnail=true >}}

Recently, I started reading [Database Internals](https://www.oreilly.com/library/view/database-internals/9781492040330/) by Alex Petrov. I highly recommend this book for learning more about building databases.

## Hackathons

I frequently participant in hackathons both in Davis in San Francisco.

<img alt="Jake Roggenbuck winning the Vibe Code Hackathon" title="Vibe Code hackathon win" loading="lazy" decoding="async" src="/images/vibe-win.jpeg">

<img alt="Jake Roggenbuck and team with James Tan" title="Hackathon team with James Tan" loading="lazy" decoding="async" src="/images/jake-and-team-and-james-tan.png">

<img alt="Jake Roggenbuck and team with Garry Tan" title="Hackathon team with Garry Tan" loading="lazy" decoding="async" src="/images/jake-and-team-and-garry-tan.jpg">

## Notable Projects

### AlgoBoard.org

Algo Board is a website to promote friendly competition for solving algorithmic coding problems. Algo Board lets you host weekly / monthly competitions for your friends, clubs, and other organizations.

<img alt="Jake Roggenbuck Software AlgoBoard" title="AlgoBoard competitive coding platform" loading="lazy" decoding="async" src="/images/algoboard.avif">

{{< github repo="jakeroggenbuck/algoboard" showThumbnail=true >}}

AlgoBoard and the weekly competitions I ran, greatly helped me prepare for technical interviews.

### Auto Clock Speed

A utility to check stats about your CPU, and auto regulate clock speeds to help with either performance or battery life.

<img alt="Jake Roggenbuck Auto Clock Speed Software Written in Rust" title="Auto Clock Speed utility in Rust" loading="lazy" decoding="async" src="/images/acs.avif">

{{< github repo="jakeroggenbuck/auto-clock-speed" showThumbnail=true >}}

Auto Clock Speed now has over 13 thousand downloads on [crates.io](https://crates.io/crates/autoclockspeed).

### Component

A programming language that compiles to x86-64 assembly for math using postfix notation

<img alt="Component programming language project" title="Component language compiler project" loading="lazy" decoding="async" src="/images/component.avif">

{{< github repo="jakeroggenbuck/component" showThumbnail=true >}}

<!-- ### JAI -->

<!-- This was an entry to a "Lang Jam" where I had only a few days to make an entire interpreter. These were the types of programming languages that led me to programming language research. -->

<!-- <img alt="JAI language jam project" title="JAI interpreter project" loading="lazy" decoding="async" src="/images/jai.avif"> -->

<!-- {{< github repo="jakeroggenbuck/jai" showThumbnail=true >}} -->

## Previous Research

#### Math Research - T3

Before college, I was involved in two different research projects. This first was a math paper I wrote with my friends Adam and Henry.

Abstract: "We investigate some interesting properties of the sequence made up of every third term of the Thue-Morse sequence, and consider other similar sequences."

<img alt="Jake Roggenbuck Author of Observations on Every Third Digit of the Thue-Morse Sequence Math Research Paper" title="Thue-Morse sequence research paper" loading="lazy" decoding="async" src="/images/t3.avif">

The full paper and code example can be found on the GitHub project.

{{< github repo="jakeroggenbuck/T3-Paper-Code" showThumbnail=true >}}

#### Bio Research - TMBL

I was also involved with research in [Topological Molecular Biology](/tmbl) where I wrote logistic regression code.

## Open Source

### I also contribute to open source, most notably:

[**onlook-dev/onlook (YC W25)**](https://github.com/onlook-dev/onlook),
[**pretzelai/pretzelai (YC W24)**](https://github.com/pretzelai/pretzelai),
[**microsoft/RD-Agent**](https://github.com/microsoft/RD-Agent),
[**rocky-linux/rocky**](https://github.com/rocky-linux/rocky),
[**rust-lang/miri**](https://github.com/rust-lang/miri/commit/6fee850a46872b39a92df4a1deb0c5a60cd60dc1),
[**grafana/pyroscope**](https://github.com/grafana/pyroscope),
[**fastly/fastly-py**](https://github.com/fastly/fastly-py),
[**pathwaycom/pathway**](https://github.com/pathwaycom/pathway),
[**argosopentech/argos-translate**](https://github.com/argosopentech/argos-translate),
[**python-mechanize/mechanize**](https://github.com/python-mechanize/mechanize), and [**more**](https://github.com/JakeRoggenbuck?tab=repositories&q=&type=&language=&sort=stargazers)


<!--
<br>

{{< timeline >}}

{{< timelineItem icon="code" header="AggieWorks" badge="UC Davis" subheader="AggieWorks @ UC Davis" >}}
Currently working as Director of Engineering and helping build <a href="https://clubly.org?source=jr0.org">Clubly.org</a>. View all of our products at <a href="https://aggieworks.org">AggieWorks.org</a>
{{< /timelineItem >}}

{{< /timeline >}}
-->

## Hobbies

<img alt="Jake Roggenbuck photographing the Dropout Graduation at the Palace of Fine Arts in San Francisco" title="Photography at the Palace of Fine Arts" loading="lazy" decoding="async" src="/images/jake-in-SF.avif">

Here is me doing photography for the [Dropout Graduation](https://www.businessinsider.com/meet-the-silicon-valley-college-dropouts-throwing-their-own-graduation-2025-4?op=1) outside of the Palace of Fine Arts in SF.

## Other Socials

#### Luma - Hackathons

- [@jaker](https://luma.com/user/jaker) - participant in events
- [@roggenbuck](https://luma.com/user/roggenbuck) - hosting events
- [@jakeroggenbuck](https://luma.com/user/jakeroggenbuck) - participant in events

#### Leetcode - [@jakeroggenbuck](https://leetcode.com/u/jakeroggenbuck/)

#### Hacker News - [@roggenbuck](https://news.ycombinator.com/user?id=roggenbuck)

#### X - [@jakeroggenbuck](https://x.com/jakeroggenbuck)

#### Mastodon - [@jake](https://mstdn.social/@jake)

## Contact

Email: [me@jr0.org](mailto:me@jr0.org) - Bug Reports: [bug@jr0.org](mailto:bug@jr0.org) - Public GPG Key: [309BBC9](jakeroggenbuck.gpg)<br>

</div>
