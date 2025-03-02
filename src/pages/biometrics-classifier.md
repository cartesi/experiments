---
title: Biometrics classifier
description:
  This DApp uses machine learning, computer vision, and feature extraction to
  perform a decentralized biometrics spoof detection on-chain. Beyond verifying
  who’s fingerprints were used, this program checks for spoofing.
foundedOn: 2023-10-20
logo: 'H0yho92.png'
thumbnail: 'H0yho92.png'
tags:
  projectStage: Proof of concept
  projectTypes:
    - AI/ML
    - Social Identity
  languages:
    - C++
  stacks_and_libraries:
    - OpenCV
links:
  website: 'https://locus.software/'
  github:
    - 'https://github.com/souzavinny/rollups-examples/tree/dev/biometrics'
    - 'https://github.com/souzavinny/rollups-examples/tree/dev/frontend-biometrics'
  twitter:
    - 'https://twitter.com/LocusSoftware'
  demo: 'https://biometricsclassifier.surge.sh/'
team:
  - name: Marcus Souza
    linkedin: 'https://www.linkedin.com/in/marcus-vini-souza/'
    discord: 'Marcus Vinícius#0350'
  - name: Osman Rodrigues
    linkedin: 'https://www.linkedin.com/in/osman-rodrigues/'
    discord: 'osmanrodrigues'
related:
  - chaingpt
  - techai
  - iris-classifier
---

## About Biometrics Classifier

The "Biometrics Classifier" is a decentralized application (DApp) resulting from
a collaboration between [Locus Software](https://locus.software/) and
[Cartesi](https://cartesi.io/). This project is part of a broader initiative to
bring Web2 concepts into the Web3 space using
[Cartesi Rollups technology](https://docs.cartesi.io/cartesi-rollups/overview/).
The main objective of this DApp is to provide a decentralized biometrics spoof
detection system on the blockchain.

This innovative application combines machine learning, computer vision, and
feature extraction techniques to perform biometric spoof detection. By
processing all computations within the blockchain through the
[Cartesi API](https://docs.cartesi.io/cartesi-rollups/http-api/), the DApp
offers a decentralized solution to authenticate and verify fingerprint data
while simultaneously checking for spoofing attempts.

As a member of the series of DApps developed by Locus Custom Software and
Cartesi, this application showcases the potential of merging traditional Web2
technologies with the emerging Web3 landscape. By leveraging the power of
Cartesi Rollups, these DApps highlight the capabilities and benefits of
implementing advanced computational concepts on the blockchain.

## Technical Details

To accomplish its core functionality, the project utilizes C++ with OpenCV for
extracting fingerprint features. Once the relevant features have been extracted,
a Python program analyzes the data to determine the fingerprint's authenticity.
This multi-faceted approach ensures that the system can accurately assess the
legitimacy of a given fingerprint, going beyond simple verification of the
fingerprint's owner.

The application generates a
[support vector machine (SVM)](https://en.wikipedia.org/wiki/Support_vector_machine)
model using popular machine learning libraries such as
[scikit-learn](https://scikit-learn.org/stable/about.html), NumPy, and
[pandas](https://pandas.pydata.org/about/). Following the model's creation, it
is transpiled into native Python code using m2cgen (Model to Code Generator),
effectively removing any dependencies. This method streamlines the development
process and simplifies the final back-end code's execution. Additionally, it
eliminates the need to port various machine learning libraries to the
[Cartesi Machine's RISC-V architecture](https://docs.cartesi.io/machine/intro/),
making the overall implementation more efficient and accessible.

One practical application is the categorization of fingerprint images as "Live"
or "Fake." This binary classification process is achieved through a supervised
learning approach. By providing the classifier with labeled inputs, the
generated algorithm can predict the classification of new, unlabeled inputs.

The relevance of using Cartesi Rollups for biometrics verification lies in the
need for a trustless, verifiable computation environment. Biometrics are used in
various aspects of daily life, including smartphone authentication, access
control systems, and identity verification for banking or government services.
Ensuring the integrity and security of biometric data is essential, and Cartesi
Rollups provide a scalable, decentralized solution that maintains trust and
transparency.

The workflow of this DApp is designed to provide a clear, step-by-step process
for classifying fingerprints using cutting-edge technology. By combining C++
OpenCV and Python, along with the Cartesi API, the application offers a powerful
and versatile solution for biometric classification. Furthermore, the project
serves as an example of how advanced computational concepts can be integrated
into blockchain-based applications.

In conclusion, the Biometrics Classifier represents a significant advancement in
the field of decentralized biometrics verification. By incorporating machine
learning, computer vision, and feature extraction techniques, it can accurately
classify fingerprints as genuine or spoofed. The partnership between Locus
Software and Cartesi demonstrates the potential of combining traditional Web2
concepts with emerging Web3 technology, paving the way for a new era of
blockchain-based applications with advanced computational capabilities.
