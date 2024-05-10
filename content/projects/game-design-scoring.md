
---
title: game-design-scoring
type: page
date: 2021-02-06T00:00:00
tags: ["Python"]
description: "None"
---


<br>

#  Game Design Scoring Regression Model


### Data
The data that this model used to train is the csv `./point-weighting-combined-new.csv` and was made in a spreedsheet

### Building the model
Run the script `./generate_model.py` to build the model

### Usage
To run the model that you built, this is all the code needed

```py
from tensorflow import keras                                                   
import numpy as np                                                             
import csv                                                                     
                                                                               
from generate_model import get_data_Y, get_data_X                              
                                                                               
                                                                               
# Import the model made by ./generate_model.py                                 
model = keras.models.load_model('neural_network.model')                        
                                                                               
# Gets the data from the model generator file "./generate_model.py"            
X = get_data_X()                                                               
Y = get_data_Y()                                                               
                                                                               
                                                                               
def test_each_match():                                                         
    # Get the result actual win value, and the one predicted by the model      
    for x, y in zip(X, Y):                                                     
        # Predicts the Y value from a given X                                  
        result = model.predict(np.array([x]))                                  
        # Prints the values in the (actual, predict) format                    
        print(y[0], result[0][0])                                              
```
