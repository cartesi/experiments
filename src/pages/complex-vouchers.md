---
title: Complex Vouchers
description:
  This project was to implement Complex Vouchers in Cartesi Rollups. Cartesi
  dApps interact with external parties, including smart contracts and other
  dApps, through the use of vouchers. Vouchers are designed to be highly
  generic, enabling a wide range of potential interactions and use cases. This
  level of flexibility opens up the possibility of expanding the behavior of
  vouchers to support more complex interactions by targeting smart contracts
  that extend their functionalities.
lastUpdated: Apr 10, 2024
logo: 'logo.png'
thumbnail: 'logo.png'
gallery:
  - image: 'screen1.jpeg'
tags:
  projectStage: Stable release
  projectTypes:
    - Dev-Tool
  languages:
    - Solidity
  stacks_and_libraries:
    - Linux
links:
  github:
    - 'https://github.com/fvbizzo/CartesiComplexVouchers'
team:
  - name: Felipe Viana Bizzo
    linkedin: 'https://www.linkedin.com/in/felipe-bizzo-81b709131/'
related:
  - bugless
  - deml
  - bidsquad
---

## About Complex Vouchers

The Complex Vouchers is a library extension for Cartesi that allows developers
to extend the functionality of their applications using Cartesi's vouchers. This
expansion involves adding new functionalities within Cartesi's existing system
and rules.

This project aimed to construct different types of functions for Cartesi
vouchers, introducing new regulations as time or address permits to execute a
voucher, or new ways to enhance a voucher's power, such as a voucher that
permits a second voucher execution or one that will only be executed at a future
time. All the new functionalities were built using an encapsulated Solidity
contract directly connected with the Cartesi project.

In this project, we built an atomic voucher defined as a voucher with 'n'
payloads. This voucher is pivotal to the project, serving as the foundation for
every other voucher. Each voucher is composed of a multitude of payloads,
considered an atomic voucher. With this methodology, it was possible to
establish all the different rules in a way that permits any other developer to
contribute and propose new rules and applications without changing or
compromising the structure of the Complex Vouchers library.

All these new functions were tested in conjunction with Cartesi voucher testing
scripts. We added Solidity tests to cover all the new functions, following the
ruleset already established for any voucher to work.

https://governance.cartesi.io/t/response-to-rfp-003-complex-vouchers/100

## What's next

The Complex Vouchers project expanded the vouchers functionality and permitted
any developer to create their own voucher rules through the atomic vouchers.
