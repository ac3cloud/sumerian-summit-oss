# SageMaker

## Resources

Some useful reading I found along the way

* https://towardsdatascience.com/a-bunch-of-tips-and-tricks-for-training-deep-neural-networks-3ca24c31ddc8
* https://free3d.com/3d-model/rock-86533.html
* https://www.turbosquid.com/3d-models/free-3ds-model-scissor/758210
* https://www.turbosquid.com/3d-models/toilet-paper-model-1287128
* https://www.modelplusmodel.com/accessories/bath-accessories/f01-tolet-paper.html
* https://medium.com/in-the-pocket-insights/building-a-body-part-recognizer-with-transfer-learning-3a9928adac8a
* https://www.learnopencv.com/keras-tutorial-fine-tuning-using-pre-trained-models/
* https://machinelearningmastery.com/difference-between-a-batch-and-an-epoch/
* https://elitedatascience.com/overfitting-in-machine-learning
* https://hackernoon.com/memorizing-is-not-learning-6-tricks-to-prevent-overfitting-in-machine-learning-820b091dc42
* https://www.andreasjakl.com/download-export-or-backup-amazon-sumerian-scenes-part-6/

## Training

We found a pre-existing data set and example on creating the model at https://www.kaggle.com/alishmanandhar/rock-scissor-paper
You need to login to Kaggle (you can create a free account) download the
final.zip data set and place it in the S3 bucket **ac3-sumerian-rps-sagemaker**

``` bash
aws s3 cp final.zip s3://ac3-sumerian-rps-sagemaker
```

Create a new model using AWS Sagemaker Notebook
``` bash
bin/notebook
```
