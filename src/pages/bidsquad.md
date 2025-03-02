---
title: Bidsquad
description:
  BidSquad is a groundbreaking carbon credit auction platform that leverages the
  power of blockchain technology and AI to conduct reverse auctions for carbon
  credit certification.
foundedOn: 2023-10-20
logo: 'bidsquad.png'
thumbnail: 'bidsquad.png'
gallery:
  - image: 'Presentation_page-0001.jpg'
  - image: 'Presentation_page-0002.jpg'
  - image: 'Presentation_page-0003.jpg'
  - image: 'Presentation_page-0004.jpg'
  - image: 'Presentation_page-0005.jpg'
  - image: 'Presentation_page-0006.jpg'
  - image: 'Presentation_page-0007.jpg'
  - image: 'Presentation_page-0008.jpg'
  - image: 'Presentation_page-0009.jpg'
tags:
  projectStage: Hackathon Project
  projectTypes:
    - DeFi
    - AI/ML
    - Autonomous World
  languages:
    - Python
  stacks_and_libraries:
    - Jupyter Notebook
    - Sci-kit learn
links:
  github:
    - 'https://github.com/Bidsquad-Inteli/bidsquad'
  demo:
    - 'https://bidsquad.vercel.app/'
team:
  - name: Pedro Hagge Baptista
    discord: 'TrioDZN#3997'
  - name: Lyorrei Shono Quintão
    discord: 'lyorrei'
  - name: Marcelo Gomes Feitoza
    discord: 'marcelofeitoza'
  - name: Paulo Evangelista
    discord: 'pauleradixz'
  - name: Henrique Lemos
    discord: 'Lemos.#2278'
related:
  - bima-coin
  - dca-monster
  - nucleus
---

## About Bidsquad

### Bidsquad: Revolutionizing Carbon Credit Auctions with Advanced Tech

Welcome to Bidsquad, where environmental conservation meets cutting-edge
blockchain technology and AI. Bidsquad is a trailblazing carbon credit auction
platform designed to streamline the connection between landowners and carbon
credit certifiers. Through its unique integration with Cartesi, Bidsquad
introduces a new era of efficiency and transparency to environmental
preservation.

### Why Bidsquad?

Bidsquad empowers individuals and entities who safeguard green areas within
their land to find certifiers for carbon credit assessments through reverse
auctions. Landowners initiate auctions, specifying details like area size,
duration, and auction end date. Certifiers then competitively bid for
certification services, fostering fair competition where the lowest bid wins.

### Technical Marvels

Bidsquad's innovations don't stop there. We leverage image recognition and
geolocation technology to precisely determine the extent of preserved green
areas, ensuring accurate carbon credit token calculation.

Our transparent payment process ensures secure fund handling, guaranteeing that
certifiers are paid for their services while returning unallocated funds to
auction creators. With blockchain recording every transaction, Bidsquad
guarantees security, tamper-proofing, and complete transparency. The platform
simplifies complex processes, streamlines transactions, and fosters mutual trust
among participants.

Join Bidsquad and contribute to a more sustainable future through dynamic,
transparent, and accessible carbon credit auctions.

### How it's Made: Architecture Overview

![Cartesi Machine](/projects/bidsquad/image2.png)

User (Certificator/Landowner)

- Interacts with the system as Certificator or Landowner

Frontend

- Serves as the user interface
- Allows users to:
  - View all auctions
  - Get bids from an auction
  - Make bids in an auction
  - End auctions (if creator)
  - Create auctions

Cartesi Machine (Smart Contract)

- Handles auction-related actions:
  - Auction creation
  - Bid submission
  - Auction ending
  - Auction retrieval
  - Bid retrieval
- Communicates with AI module for auction creation

AI Module

- Analyzes auction information, including area coordinates
- Provides insights for auction creation
- Enhances the creation process within Cartesi Machine

Blockchain

- Records all transactions and actions
- Ensures security, tamper-proofing, and transparency

Frontend Updates

- Receives updated auction and bid data
- Keeps users informed with the latest information

User Feedback

- Presents outcomes and feedback through the frontend
