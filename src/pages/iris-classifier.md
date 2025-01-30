---
title: Iris Classifier
description: On-Chain KNN Flower Prediction
lastUpdated: Nov 2, 2023
logo: 'H0yho92.png'
thumbnail: 'H0yho92.png'
tags:
  projectStage: Proof of concept
  projectTypes:
    - AI/ML
  languages:
    - Python
    - CSS
    - TypeScript
  stacks_and_libraries:
    - KNN
    - Ethers.js
    - ReactJS
links:
  website: 'https://locus.software/'
  github:
    - 'https://github.com/MarcusSouzaLocus/rollups-examples/tree/feat/update-knn-1.0/knn'
    - 'https://github.com/MarcusSouzaLocus/rollups-examples/tree/feat/update-knn-1.0/frontend-knn'
  twitter:
    - 'https://twitter.com/LocusSoftware'
  demo: 'https://irisclassifier.surge.sh/'
team:
  - name: Marcus Souza
    linkedin: 'https://www.linkedin.com/in/marcus-vini-souza/'
    discord: 'marcusvinicius90'
related:
  - biometrics-classifier
  - techai
  - chaingpt
---

## About Iris Classifier

The Iris Classifier is a proof-of-concept DApp developed by
[Locus Software](http://locus.software) in collaboration with
[Cartesi](https://cartesi.io/). The goal is to bring common Web2 concepts to
Web3 using
[Cartesi Rollups technology](https://docs.cartesi.io/cartesi-rollups/). The Iris
Classifier employs the
[KNN (k-nearest neighbors)](https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm)
supervised learning algorithm to predict the species of a flower based on user
input.

## Technical Details

Initially, the project involved classifying the Iris flower dataset using the
KNN algorithm and implementing the classification with Python. The Cartesi API
is employed for on-chain prediction and computation.

The classic Iris flower dataset is used, consisting of three classes with 50
instances each. Each class represents a species of the Iris flower. While one
class is linearly separable from the other two, the latter two are not linearly
separable from each other. The data used in this example can be found
[here](https://github.com/yourgithubusername/iris-dataset-link).

During the application's launch, the k-NN classification algorithm is evaluated
on the dataset using cross-validation to demonstrate the classifier's expected
accuracy.

Once initiated, the DApp receives input samples and predicts their
classification. Inputs should include the following Iris flower attributes:

1. Sepal length in cm
2. Sepal width in cm
3. Petal length in cm
4. Petal width in cm

Each input should be submitted as a JSON string, such as the following example:

```
{
  "sl": 4.9,
  "sw": 3.0,
  "pl": 1.4,
  "pw": 0.3
}
```

Where **sl** represents the sepal length, **sw** is the sepal width, **pl** is
the petal length, and **pw** is the petal width.

### Frontend:

The project's frontend demonstrates how to implement a web application UI that
interacts with the Iris Classifier DApp, running locally and deployed on remote
testnet networks. The UI is mainly implemented in TypeScript and uses the
React.js library to build the user interface and the Ethers library to
communicate with the rollups smart contracts.

## Describe what could be next for your project?

This project is a foundation to creating similar pure python machine learning
dapps.
