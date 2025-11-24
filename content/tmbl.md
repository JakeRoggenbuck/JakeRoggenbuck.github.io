---
title: Topological Molecular Biology lab at UC Davis
type: page
date: 2025-09-10T00:00:00
---

Before college when I was in high school, I emailed a few professors and PIs at UC Davis to see if I could help do machine learning in their labs. Sure enough, the TMB lab let me help them with research to predict the human infection of viruses using Logistic Regression.

Here is a [presentation](RBD-Transmissibility-Research.pdf) that I created after creating the regression model to predict if a spike protein was likely to be infectious to humans based on its DNA sequence.

<embed src="../cdn/RBD-Transmissibility-Research.pdf" type="application/pdf" width="100%" height="600px" />

Here is what I wrote about it in Nov of 2021:

<i>This fall, I started an internship with the Arsuaga-Vazquez lab, the Topological Molecular Biology lab at UC Davis. I'm working with professors and UCD students to construct machine learning models and other tools to predict the transmissibility of new COVID-19 variants by looking at their genetic sequence and the proteins it encodes. With my expertise in Python, I am a super valuable asset to this project. I am developing tools for the isolation and extraction of the region that encodes the spike protein, as it is in a slightly different location for each sequence and variant - and may look different from one variant to another. Next fall, I hope to continue this type of meaningful work at a UC campus.</i>

A lot of work was done in Python scripts, notebooks, and Google Sheets. Seen here is a test dataset I used for part of my regression model experimentation.

<img src="../../images/sars-dataset.avif">

The main process for this research involved finding existing sequences of sars-cov-2 and sars-1 using the NCBI website. You'd then find a research paper describing the sequence and find the start and end "residues" (index used to locate genes in DNA). I would look for where the spike protein started and ended and write up a script that looked similar to this:

<img src="../../images/urbani-notebook.avif">

Lots of work went into dealing with thousands of sequences and fitting a regression model. It also took a lot of work to understand why the model worked for certain sequences and not others. During the course of a year, I learned the thoroughness needed for research.

<img src="../../images/tmbl-1.avif">
<img src="../../images/tmbl-2.avif">
<img src="../../images/tmbl-3.avif">

Above are all files that I wrote for different tasks like checking why certain false positives were present or why certain gene translations didn't work as expected.

This research experiment went on to inform the lab's next experiments, which led to their paper [Using machine learning to detect coronaviruses potentially infectious to humans](https://www.nature.com/articles/s41598-023-35861-7) published in Nature.

I'm so thankful to have had this experience to learn about research, regression, and machine learning more generally. As a high schooler at the time, being a part of a lab, a machine learning literature circle, and a project doing cutting-edge research, this experience could not have been any better.
