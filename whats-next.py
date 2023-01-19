from dataclasses import dataclass
import subprocess
from enum import Enum


@dataclass
class Command:
    command: str
    description: str


class Mode(Enum):
    Easy = 0
    Hard = 1


INTRO = """Welcome to the new arch installer.
There are many ways to install arch.
I prefer something similar to this setup, just based on passed experience.
I usually change the specifics every time, but here is usually what I start with.

Version Notes:
- This version specifically forces you to type out the commands so that you
remember them the next time.
- This version also explains each command
"""


LINES = [
    Command(
        "ls /sys/firmware/efi/efivars",
        "Check if you are booted in EFI mode. You should see a lot of files.",
    ),
    Command("ping 8.8.8.8 -c 2", "Check for internet."),
    Command("ip link", "Get interface's name and IP if needed."),
    Command("timedatectl set-ntp true", ""),
    Command("date", "Check that the date is relativly correct."),
    Command("lsblk", "Check your drives."),
    Command(
        "cfdisk /dev/sda",
        "Partition the drive with cfdisk. Change sda to whatever your drive is called.\
I recommend a root + home partition setup vs just a root partition.\
I personally give about 40G or 50G to my root partition if I have a large hard drive.\
Most people recommend around 20G.",
    ),
    Command("lsblk", "After writing the new partition table, check that it's correct."),
    Command("mkfs.fat -F32 /dev/sda1", "Make the first partition (boot partition) a Fat32 format."),
    Command("mkfs.ext4 /dev/sda2", "Make your root partition a linux ext4 partition."),
    Command("mkfs.ext4 /dev/sda3", "Make your home partition a linux ext4 partition."),
    Command("mount /dev/sda2 /mnt", "Mount your root partition."),
    Command(
        "mkdir /mnt/home",
        "Make a new directory off of the one you just mounted.\
We will place our home there.",
    ),
    Command(
        "mount /dev/sda3 /mnt/home", "Mount our home drive to the home directory we just made."
    ),
    Command("lsblk", "Double check that everything mounted in the correct spot."),
    Command("pacstrap /mnt base linux linux-firmware", "Install the essential packages for arch."),
    Command(
        "genfstab -U /mnt >> /mnt/etc/fstab",
        "Generate a fstab file - needed to mount hard drives on boot.",
    ),
    Command("cat /mnt/etc/fstab", "Check that it did it correctly."),
    Command("arch-chroot /mnt /bin/bash", "Launch a bash shell as the new user in it's directory."),
]


def end_line():
    return "-" * 80


def color(c: int, msg: str) -> str:
    return f"\033[{c}m{msg}\033[0m"


def blue(msg: str) -> str:
    return color(34, msg)


def green(msg: str) -> str:
    return color(32, msg)


def print_info(msg):
    info = blue("INFO")
    print(f"{info}: {msg}")


def prompt() -> str:
    return input("\n> ")


class Runner:
    def __init__(self, mode):
        self.mode = mode
        self.index = 0
        self.length = len(LINES)
        self.going = True

    def run(self):
        while self.index < self.length:
            self.line = LINES[self.index]

            if self.going:
                self.index += 1
                print(self.line.description)
                print(green(self.line.command))

            if self.mode == Mode.Easy:
                self.easy_mode()
            elif self.mode == Mode.Hard:
                self.hard_mode()

    def easy_mode(self):
        self.command = input("(R)un or (E)dit: ")
        if not self.check_and_change_state():
            if self.command == "R":
                # Run the command verbatim
                self.run_command(self.line.command)
                print(end_line())
            elif self.command == "E":
                # Write the command to a temp file
                with open("/tmp/runline", "w") as file:
                    file.write(self.line.command)

                # Open the temp file in vim, letting the user edit it
                subprocess.run(["vim /tmp/runline"], shell=True)

                # Read the file and run the content
                with open("/tmp/runline", "r") as file:
                    self.run_command(file.read())

                print(end_line())
            else:
                self.run_command(self.command)
                print(end_line())

    def hard_mode(self):
        self.command = prompt()
        if not self.check_and_change_state():
            self.run_command(self.command)
            print(end_line())

    def run_command(self, command):
        try:
            subprocess.run([command], shell=True)
        except subprocess.CalledProcessError as e:
            print(e.output)

    def check_and_change_state(self):
        if self.command == "STOP":
            print_info("Stopped")
            self.going = False

        elif self.command == "START":
            self.going = True

        elif self.command == "EXIT":
            exit()

        elif self.command == "BACK":
            if self.index > 1:
                self.index -= 2
            else:
                print_info("At the first command.")
                self.index = 0

        elif self.command == "NEXT":
            if self.index < self.length - 1:
                self.index += 1
            else:
                print_info("At the last command.")
        else:
            # Nothing passed, return no change
            return False
        # There was a change
        return True


if __name__ == "__main__":
    print(blue(INTRO))

    runner = Runner(Mode.Easy)
    runner.run()
