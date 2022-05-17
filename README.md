# Graasp Association

The Graasp Association's [website](https://graasp.org), built with GatsbyJS starting with the [gatsby-absurd](https://www.gatsbyjs.com/starters/ajayns/gatsby-absurd) template. The website contains:

- An overview of the Graasp Association's work
- Logos of a selection of the Association's partners/users
- Photos of the Association's team members
- FAQs

![Screenshot](https://user-images.githubusercontent.com/102170589/168659885-0d1c43e3-c57d-47a8-ac4d-7ff10c6e1a11.png)

## Getting Started

To edit and view the website in your local environment, follow the instructions below.

### Prerequisites

Make sure you have GatsbyJS installed. If you don't, click [here](https://www.gatsbyjs.org/docs/preparing-your-environment/) for installation instructions.

### Installation

1. After cloning the repository, run `yarn install`
2. Run `yarn start` to launch the project on a live local server; by default, the project will launch on [http://localhost:8000](#)
3. Edit the source code! The main sections of the site are placed in `src/sections`. When you finish editing, save your changes, and Gatsby will automatically reload [http://localhost:8000](#) to reflect them

### Deployment

When you are ready to show the site to the world:

1. Run `yarn build`
2. Deploy the website to the development environment by running `./scripts/deploy.sh -e .env.dev`; you can view this deployment on https://dev.graasp.org
3. Deploy the website to production by running `./scripts/deploy.sh -e .env.prod`
