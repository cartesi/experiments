---
title: DeML
description:
  Blockchain marketplace where people get paid for helping train ML models and
  don’t need to share their data with anyone.
lastUpdated: Oct 20, 2023
thumbnail: 'H0y6JCx.png'
logo: 'H0Da4Np.png'
gallery:
  - image: 'deML-one.png'
  - image: 'deML-two.png'
  - image: 'deML-three.png'
tags:
  projectStage: Hackathon Project
  projectTypes:
    - AI/ML
  languages:
    - Python
  stacks_and_libraries:
    - IPFS
    - web3.py
links:
  website:
    - 'https://deml.xyz/'
  github:
    - 'https://github.com/ethglobal23nyc/blockchain-federated-machine-learning'
  demo: 'https://deml.xyz/'
team:
  - name: Kun Qiu
  - name: Bill Bai
    twitter: 'https://twitter.com/b3wyt'
    discord: 'g05x5#0'
  - name: Ulysses Kee
    twitter: 'https://twitter.com/ukcw_'
    discord: 'ukcw#0'
  - name: Jason Sun
    twitter: 'https://twitter.com/sunapi386'
    discord: 'sunapi386#0'
related:
  - techai
  - biometrics-classifier
  - chaingpt
---

## About

Data is the new oil. Powerful machine learning models are trained using people’s
data. In the current world, people usually share their private data with a
centralized entity in exchange for some freemium service. Users are not paid for
sharing private data that powers the applications, and they rely on the central
authority to protect their data privacy.

Imagine a world where people don’t need to share their local data with a central
entity but still contribute to training a global machine learning model using
their data locally and even better, get paid for doing so. In this project, we
use blockchain to achieve that.

## How it's Made

In this project, we created a blockchain model marketplace where model sponsors,
who want to train some ML models using people’s data (for example, health data
to predict health conditions), can post their jobs. The posting basically says I
need this type of data to train a specific model and in exchange, I will pay X
tokens. The model sponsor would provide in the listing the initial model to be
trained, a model trainer executable (for clients to run on their local node to
update the model using their local data) and the reward for the job.

Clients (nodes) can see the listings in the marketplace and decide if they want
to participate or not. If a client decides to participate, they accept the job
from the marketplace. After that, the client loads the initial model and the
trainer executable from IPFS (Filecoin), and runs the trainer executable on
their local node with their local data. Once the job is completed, a new model
will be written to IPFS. We use Cartesi to run a Python service for model
training and validation, given `{model_cid, data_cid}` where cid is a unique
IPFS file reference string. The Cartesi Machine will listen to the network, and
upon the message (in the form of creating a blockchain transaction), the
corresponding reward is issued to the client’s wallet. We also tried Filecoin’s
Lilypad for the distributed execution of the ML compute but were stuck at
creating a smart contract part using Lilypad. But we think Lilypad would work
great as well. Note that the model training happens on the client side and the
client data never leaves the client node. Only the new model weights are
delivered to the model sponsor in exchange for the reward. Thus, this protects
the user data privacy and simultaneously the client gets rewarded for their
effort in training the model using their data.

For wallet connection and authentication, we used WalletConnect (super easy to
use and integrate). After completing the task, the client can see their reward
in their wallet. We also integrated web3inbox so that the model sponsors can
easily communicate with potential clients for any questions or discussions.
