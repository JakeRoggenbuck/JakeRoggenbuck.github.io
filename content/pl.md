---
title: Programming Languages
type: page
date: 2026-03-02T00:00:00
---

<!-- ### What is PL

I notice that PG often doesn't have heading titles. I realized this after I
accidentally made my essay worse by removing something important because it
didn't fit under the title. Maybe each sentence flows from one to the next
and shouldn't be defined as pertaining to one topic. The essay should be read
from top to bottom anyway. It also makes it harder to write, because I feel
like if I title a section, I am trapped inside a box to explain that topic.
-->

"Programming languages" sometimes refers to languages used to program but it also can refer to the study of programming languages as a research interest, usually abbreviated as PL. I'll use PL when I'm talking about the research topic and "programming languages" when referring to the languages themselves.

I'm currently working with [Caleb Stanford](https://web.cs.ucdavis.edu/~cdstanford/) at the [Davis PL lab](https://github.com/DavisPL/). I presented [my poster about ReDoS](https://jr0.org/images/redos-research.avif) at [UC Davis' URC](https://urc.ucdavis.edu/) last Spring. I also maintain a linear-time regex engine called [Regolith](https://github.com/JakeRoggenbuck/regolith) related to this research.

<!-- ### Why PL -->

I often get asked "Why study programming languages?" and the insinuation sometimes is that the field of PL is to learn about languages that have already been made, and although this is true, the aim of PL research is to improve the future of programming languages.

An example from Rust's borrow checker; Rust used Stacked Borrows to check if all the borrowing rules were followed. This was the original borrowing model for Rust and was defined in the paper [Stacked Borrows: An Aliasing Model for Rust](https://plv.mpi-sws.org/rustbelt/stacked-borrows/paper.pdf). Later, a paper called [Tree Borrows](https://iris-project.org/pdfs/2025-pldi-treeborrows.pdf) came out that improved upon the borrowing model and soon implemented into Rust. I'm breezing over tons of interesting history, but the point remains; programming language research is, in my opinion, the main driver of improvement for languages.

The usual progression is PL researchers have a novel insight about a language, they define an extension to a language or a mini "toy" language that shows off this new feature or concept. Later, this feature is implemented when a group is building a new language. I don't want to take away from non-academic contribution to programming languages (not the field) because curious individuals and corporate groups have had tons of positive influence as well.

Often I explain that if you improve the usefulness of the language, it becomes easier to write software. If you improve the security of the language, it becomes easier to write safer code. Python removed the ability to cause a null pointer exception by not having pointers, removed memory management both to make it easier and to prevent memory issues. This however doesn't mean it's an objectively better language, it just has different trade-offs.

I enjoy making and trying many programming languages. I maintain a [list](https://github.com/JakeRoggenbuck/programming-languages) of languages that I have written. It's fun and educational to make your own language. My friend Adam and I would frequently have an idea for a language and we'd go off and try to build it.

The languages that I've tried include: Common Lisp ([CLISP](https://www.gnu.org/software/clisp/), [SBCL](https://www.sbcl.org/)), Arc ([Arc](http://www.arclanguage.org/), [Anarki](https://github.com/arclanguage/anarki)), Prolog ([SWI](https://www.swi-prolog.org/)), [Crystal](https://crystal-lang.org/), [OCaml](https://ocaml.org/), [Elixir](https://elixir-lang.org/), [Nim](https://nim-lang.org/), [Racket](https://racket-lang.org/), [Clojure](https://clojure.org/), [Hy](https://hylang.org/), [Al](https://github.com/alii/al), [V](https://vlang.io/), [Zig](https://ziglang.org/), [Pony](https://www.ponylang.io/), [Julia](https://julialang.org/), and [Haskell](https://www.haskell.org/). There is value in learning new languages, especially if you only know one or two, because it lets you generalize programming as problem solving, instead of specific syntax or methods. I feel like I write better Python now that I've used functional languages, because I am now more aware of mutable data.

I've kept a log of what I have worked on in my lab through the years. We stopped doing "update meetings" roughly when I started Regex research, so these slides include everything before. The majority of the content for these was spoken and aren't included anywhere.

(This slide show is about 130 slides long; sorry it might take a while to load.)

<embed src="../cdn/weekly-pl-updates.pdf" type="application/pdf" width="100%" height="600px" />

I also presented about literature I was reading. Most of the content here was also spoken. Even though these presentations are only a dozen or so slides, they both took around an hour to get through.

<embed src="../cdn/Paper_review_of_RULF__rust_library_fuzzing_via_API_dependency_graph_traversal.pdf" type="application/pdf" width="100%" height="600px" />

<embed src="../cdn/RustBelt__Securing_the_Foundations_of_the_Rust_Programming_Language.pdf" type="application/pdf" width="100%" height="600px" />
