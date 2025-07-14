
---
title: hackdavis-2024
type: page
date: 2024-04-27T00:00:00
tags: ["Jupyter Notebook"]
description: " Make three different OpenCV models for lane detection, human obstacle detection, and driver alertness detection"
---


# HackDavis 2024

Our [Github](https://github.com/JakeRoggenbuck/hackdavis-2024)

Mission: Reduce car related injuries and deaths

Our project for [https://hackdavis.io/event](https://hackdavis.io/event) 2024.

- [x] Use Intel Developer Cloud to train AI 🚀
- [x] Performance gains (reduce PyTorch train time by 4 minutes) with bfloat16 and ipex ⚡
- [x] Tensorflow performance gains (train time going from 2:23s to 1:14s) Almost twice as fast with ipex!
- [x] Use ipex with PyTorch in IDC
- [x] Make three different OpenCV models for lane detection, human obstacle detection, and driver alertness detection  

## Parts of the whole system

### Lane Detection
Use a forward facing camera and OpenCV to recognize lanes and alert the driver if they do not stay within their lane.

### Driver Alertness Detection
Use a driver facing camera and OpenCV to detect if the driver is awake and paying attention to the road

### Blind Spot Detection
Use PyTorch and Intel Developer Cloud Notebook to detect pedestrians walking infront and next to the car and alert the driver if they get too close. We were able to use **Intel's ipex, PyTorch plugin, and bfloat16 to reduce the training time by 4 entire minutes.** We used ipex from Intel AI and the Intel PyTorch plugin to leverage Intel AMX.

#### ipex example usage
```py
import torch
import intel_extension_for_pytorch as ipex
from engine import train_one_epoch, evaluate
import datetime

# ...

params = [p for p in model.parameters() if p.requires_grad]
optimizer = torch.optim.SGD(
    params,
    lr=0.005,
    momentum=0.9,
    weight_decay=0.0005
)

lr_scheduler = torch.optim.lr_scheduler.StepLR(
    optimizer,
    step_size=3,
    gamma=0.1
)

model = get_model_instance_segmentation(num_classes)

model, optimizer = ipex.optimize(model, optimizer=optimizer, dtype=torch.float32)
model = model.to(device)
```

Optimization Experiment:

```
Start time: 2024-04-27 16:27:36.983459
End time: 2024-04-27 16:47:38.238154

datetime.timedelta(seconds=1201, microseconds=254695)
```

```
Start time: 2024-04-27 17:46:16.191538
End time: 2024-04-27 18:02:06.233684

datetime.timedelta(seconds=950, microseconds=42146)
```

```
Start time: 2024-04-27 17:02:22.302090
End time: 2024-04-27 17:18:17.402227

datetime.timedelta(seconds=955, microseconds=100137)
```

As you can see, intel ipex and bfloat16 saved us 4 entire minutes for this model. Imagine a much larger model and the type of time and compute cost savings that could be achived.

## Intel LeaderBoard

We submitted a custom bfloat16 model to the intel leaderboard. [Here](https://huggingface.co/spaces/roggenbuck/gemma-bfloat16) is the model fine tuned from Gemma

![image](https://github.com/JakeRoggenbuck/hackdavis-2024/assets/35516367/2f8b1d4f-b13f-4bc0-98a3-aae2095e7456)

![2024-04-28_09-50](https://github.com/JakeRoggenbuck/hackdavis-2024/assets/35516367/a5d263d5-cd12-490c-ac5f-725db129ec5c)

## Use of LLMs and implications of hallucinations

We used LLMs to generate and extend data that we used to fine tune our text directions Gemma model. Hallucinations for directions in this case could cause people to go to places that do not exist. This could be fixed by using existing databases of locations (Like a mapping API) to insure that the LLM is always directing someone to a real place.

### Proximity Alert
Use an Arduino and an ultrasonic distance sensor to alert the driver if they are too close to anything, including another car 

## Using Intel Developer Cloud for our PyTorch Model for Blind Stop Detection

![2024-04-27_14-38](https://github.com/JakeRoggenbuck/hackdavis-2024/assets/35516367/04ad8614-f082-4455-9859-1f5221e16931)

![2024-04-27_15-19](https://github.com/JakeRoggenbuck/hackdavis-2024/assets/35516367/185f2b9e-9423-44be-8b31-d537f304a16d)

![2024-04-27_15-23](https://github.com/JakeRoggenbuck/hackdavis-2024/assets/35516367/a878533e-4dcf-426a-9683-86fece80e0d9)

![image](https://github.com/JakeRoggenbuck/hackdavis-2024/assets/35516367/8d26845a-87a4-490c-8c3b-339f4e3b70de)

## OpenCV Person Detection

![IMG_0192](https://github.com/JakeRoggenbuck/hackdavis-2024/assets/35516367/a249b115-1d7c-48b7-8c2f-f87c04769fcb)

## OpenCV Lane Detection

![Safe Drive AI](https://github.com/JakeRoggenbuck/hackdavis-2024/assets/35516367/68b01c54-52b2-4234-98f1-31a8e8732aa8)

### Original Image
![lane-image](https://github.com/JakeRoggenbuck/hackdavis-2024/assets/35516367/3457eaf7-1a5d-4db4-ac5f-d8cf5790430c)

### Black and White
![lane-image2](https://github.com/JakeRoggenbuck/hackdavis-2024/assets/35516367/c0649056-c728-4da0-8a30-7acca806ef22)

### Canny Processing
![lane-image3](https://github.com/JakeRoggenbuck/hackdavis-2024/assets/35516367/21a086e3-e459-4e64-8d68-96e1b0ea7f42)

### Applying a crop to area of interest
![lane-image4](https://github.com/JakeRoggenbuck/hackdavis-2024/assets/35516367/02485c8c-fe6a-4ef2-b82b-07bb57c6df0f)

### Final by averaging out differences
![lane-image5](https://github.com/JakeRoggenbuck/hackdavis-2024/assets/35516367/cd855467-ebd7-48e9-b189-9b789f33adca)

## Driver Alertness Detection

### The driver is not looking at the road
![IMG_0173](https://github.com/JakeRoggenbuck/hackdavis-2024/assets/35516367/6c6a9ec3-7acf-4f2d-b395-8ed7be9c4fff)

### The driver is looking at the road
![IMG_0174](https://github.com/JakeRoggenbuck/hackdavis-2024/assets/35516367/ed782c16-c5d3-40ae-8754-36687b489a17)

## Our Team
![IMG_0354](https://github.com/JakeRoggenbuck/hackdavis-2024/assets/35516367/e2886bc6-d88b-48b7-94e2-0a1a1440eb3d)

![IMG_0362](https://github.com/JakeRoggenbuck/hackdavis-2024/assets/35516367/75113c67-df4b-4ca6-8342-6b0bed205387)


