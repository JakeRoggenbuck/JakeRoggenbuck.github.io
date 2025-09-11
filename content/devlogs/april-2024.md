---
title: April 2024
date: 2024-04-30T00:00:00
type: post
---

## HackDavis - Hackathon

[HackDavis](https://hackdavis.io/) is hosts a yearly hackathon at UC Davis.

### What my team built

Safe Drive AI - Make three different OpenCV models for lane detection, human obstacle detection, and driver alertness detection.

[Github](https://github.com/JakeRoggenbuck/hackdavis-2024)

Here is our [DevPost](https://devpost.com/software/safe-drive-ai) too.

## Clubly Speed Improvements

I reduced the amount of data sent on each search and this resulted in a statistically significant speed improvement of 0.02 seconds, so 20 milliseconds on production which is 120% improvement for free.

```
https://api.clubly.org/api/v1/clubs
100%|██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████| 50/50 [00:16<00:00,  3.06it/s]
100%|██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████| 50/50 [00:14<00:00,  3.53it/s]
current.std()=0.0757401695006395
reduced.std()=0.009859827712916693
current.mean()=0.24328888000000004
reduced.mean()=0.20660545999999996
t_stat=3.361959534140494 p_value=0.001104776517782507
```

Here is the code to test this.

```py
# ...

def current_prod_test():
	data = {
		"keywords": "",
		"limit": 100,
	}

	times = []

	for x in tqdm(range(50)):
		res = requests.post(URL, data=data)

		time = res.elapsed.total_seconds()
		times.append(time)

	return times


def reduced_prod_test():
	data = {
		"keywords": "",
		"limit": 100,
		"reduced": True
	}

	times = []

	for x in tqdm(range(50)):
		res = requests.post(URL, data=data)

		time = res.elapsed.total_seconds()
		times.append(time)

	return times

# ...


def prod_experiment():
	print(URL)
	current_data = current_prod_test()
	reduced_data = reduced_prod_test()

	current = np.array(current_data)
	reduced = np.array(reduced_data)

	print(f"{current.std()=}")
	print(f"{reduced.std()=}")

	print(f"{current.mean()=}")
	print(f"{reduced.mean()=}")

	t_stat, p_value = stats.ttest_ind(current, reduced)

	print(f"{t_stat=} {p_value=}")


if __name__ == "__main__":
	prod_experiment()
```

## all-the-NaN-floats

Write all of the NaN floats from IEEE 754 32 bit floats to disk.

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *fp;

    fp = fopen("all-the-nan-floats", "wb");

    // This is first number where all the exponent bits are set, but nothing
    // else is set except the first bit, otherwise it would be infinity or zero
    unsigned int start = (0b011111111 << 23) + 1;

    // This is number where all the bits have been set except the sign bit
    unsigned int end = (1 << 31) - 1u;

    int counter = 0;

    do {
        // Write the positive value
        fwrite(&start, sizeof(unsigned int), 1, fp);
        start = -start;

        // Write the negative value
        fwrite(&start, sizeof(unsigned int), 1, fp);
        start = -start;

        start++;

        // Count twice for the two writes
        counter++;
        counter++;
    } while (start < end);

    printf("Wrote %d NaN floats\n", counter);
}
```

This was for fun and to learn more about IEEE floating point numbers.

## Lots of leetcode!

I got to 400 problems solved!

![Leetcode Stats](https://leetcard.jacoblin.cool/jakeroggenbuck?ext=heatmap)

## Vector C

Vector math in C

[Github](https://github.com/JakeRoggenbuck/vector-c)
