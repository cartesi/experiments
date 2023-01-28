# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

# Project Showcase Template

```
---
title: Example title
description: Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
logo: "https://picsum.photos/500/500?random=1"
thumbnail: "https://picsum.photos/1200/720?random=1"
gallery:
  - "https://picsum.photos/1200/720?random=2"
  - "https://picsum.photos/1200/720?random=3"
  - "https://picsum.photos/1200/720?random=4"
  - "https://picsum.photos/1200/720?random=5"
  - "https://picsum.photos/1200/720?random=12"
  - "https://picsum.photos/1200/720?random=13"
  - "https://picsum.photos/1200/720?random=14"
  - "https://picsum.photos/1200/720?random=55"
tags:
  hackathon: true
  winner: 1st Place
  event: ETH India
  projectStage: Hackathon Project
  technology:
    - Solidity
    - Python
    - Ethers.js
    - Hardhat
links:
  website:
    - "http://site.com"
  github:
    - "https://github.com/username"
  discord:
    - "http://discord.com/username"
  twitter:
    - "http://twitter.com/username"
  demo: "http://site.com/demo/"
team:
  - name: Member 1
    linkedin: "https://linkedin.com/username"
    discord: "username#1234"
    twitter: "http://twitter.com/username"
    image: "https://picsum.photos/500/500?random=1"
  - name: Member 2
    linkedin: "https://linkedin.com/username"
    discord: "username#1234"
    twitter: "http://twitter.com/username"
    image: "https://picsum.photos/500/500?random=2"
  - name: Member 3
    linkedin: "https://linkedin.com/username"
    discord: "username#1234"
    twitter: "http://twitter.com/username"
    image: "https://picsum.photos/500/500?random=3"
---

# Heading 1

Lorem Ipsum is **simply dummy** text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

## Heading 2

> Somewhere, something incredible is waiting to be known

## Heading 3

## Heading 4

## Heading 5

- List item 1
- List item 2
- List item 3

1. List item 1
2. List item 2
3. List item 3

```
