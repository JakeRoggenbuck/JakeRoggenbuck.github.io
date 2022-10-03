
---
title: qme-releases
type: page
---

[See on GitHub](https://github.com/jakeroggenbuck/qme-releases/)

## QME Releases

### How to install QME unsing the QME Installer (Recommended)

Download the QME launcher from the releases section in [this github repository](https://www.github.com/qmegame/qme-launcher) and run the executable file. If you are having issues follow the instructions below.

If you are not using the latest version of Java runtime (15) then QME Installer will not work. Please install it [here](https://developers.redhat.com/products/openjdk/download), or use the JRE 11-14 compatible release without the launcher.

JRE versions lower than 11 are not supported.

### How to install QME from a release

If your operating system is not supported or you just want to make things hard then you can manually install QME. To do this follow these steps:

1. Download your prefered release from the releases section of this repository.
2. Create a directory and move the jar file into it.
3. Create a directory named `qdata` inside of the directory you just created.
4. Launch the game by running `java -jar qme.jar`.

There are two versions of QME release, the offical version is compatible with JRE 15, but there is also an alternative version compatible with JRE 11-14.

Please note that older JRE compatibility may come with performance, stability, and other issues.
