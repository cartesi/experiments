---
title: CarteZcash
description:
  CarteZcash takes Zcash and turns it into a Cartesi RollApp. Created for the
  2024 Cartesi Hackathon.
lastUpdated: Mar 24, 2024
logo: 'logo.png'
thumbnail: 'logo.png'
gallery:
  - image: 'screen1.png'
tags:
  projectStage: Hackathon Project
  projectTypes:
    - DeFi
  languages:
    - Rust
  stacks_and_libraries:
    - Docker
    - RocksDB
links:
  github:
    - 'https://github.com/willemolding/CarteZcash'
team:
  - name: Willem Olding
    linkedin: 'https://www.linkedin.com/in/willem-olding/'
    discord: '.wollum'
related:
  - p2pix
  - hedgehog-protocol
  - nucleus
---

## About CarteZcash

The Zcash shielded pool is one of the most trusted private cryptocurrency
protocols that has stood the test of time. Actually obtaining and using Zcash
however is a poor user experience that generally requires the use of a
centralized exchange.

What if you could shield your Eth assets directly from Ethereum by depositing
them into a Zcash L2? That is what CarteZcash allows you to do!

CarteZcash takes parts of the Zebra Zcash client and uses them to build a mini
version of the protocol called we call TinyCash. This runs inside the Cartesi
Machine which handles deposits and withdrawals via Portals. The result is a
fully functioning ZCash that allows privately sending wrapped Eth

## How It Works

### Architecture

CarteZcash takes parts of the [Zebra](https://github.com/ZcashFoundation/zebra)
Zcash client and uses them to build a mini version of the protocol called we
call. This is similar to how Optimism uses
[minigeth](https://github.com/ethereum-optimism/minigeth) for the Ethereum state
transition.

TinyCash is Zcash but with the following changes:

- All network upgrades up to NU5 are applied in the first block
- Each block contains only a single coinbase transaction and up to one user
  transaction
- No checking of proof-of-work
- No miner rewards
- Transaction fees not enforced

TinyCash then runs inside the Cartesi machine to produce a fully functional
rollup.

All interactions with the L2 are done via the Cartesi contracts. Deposits,
transactions and withdrawals are all supported.

### Deposits

Using Portals it is possible to deposit Eth into the rollup and have it minted
as CarteZcash Coins into a transparent Zcash address.

This works by using the coinbase transaction functionality that was previously
used for issuing mining rewards. Upon receiving an `AdvanceState` message that
matches an Eth deposit action, CarteZcash instructs TinyCash to mine a new block
with a coinbase that mints coins to the wallet address decoded from the
`execLayerData` field. These new minted coins are transparent (not shielded) but
can be made anonymous by making another transaction into the shielded pool.

### Transfers

CarteZcash is able to process regular Zcash transactions produced and signed by
any Zcash wallet. This includes private shielded transactions!

The prepared transactions just need to be serialized and then sent to CarteZcash
via the InputBox contract.

### Withdrawals

To withdraw from the CarteZcash L2 and get your coins back on L1 you simply cast
your coins into the fires of Mt Doom!

What this means is you make a transparent transaction sending your coins to the
Mt Doom address `t1Hsc1LR8yKnbbe3twRp88p6vFfC5t7DLbs`. This address has no
private key so the coins can never be spent again.

CarteZcash watches for transaction to this address and when it observes one will
issue a voucher to release the corresponding number of coins on L1.

### Wallet Interface

CarteZcash integrates with existing Zcash wallets via the cartezcash-proxy
component. The proxy exposes a GRPC interface that matches the
[lightwalletd](https://zcash.readthedocs.io/en/latest/rtd_pages/lightclient_support.html)
specification. This allows any complaint wallet to read the blockchain state and
request the require info to update the wallet balances.

The proxy is essentially an indexer that runs the same program as the Cartesi
machine but with additional data storage and interfaces. Having the proxy allows
the program running in the Cartesi machine to aggressively prune old block data
which is no longer needed for verification but wallets might need for updating
their balance. It also avoids having to use the `inspect` HTTP API to retrieve
state and allows for using GRPC instead.

## What's next

Looking for contributors to take this from a hackathon project to a PoC
