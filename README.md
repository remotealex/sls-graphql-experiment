# Serverless graphql experiment

This is currently a simple graphql lambda endpoint which talks [jsonplaceholder](https://jsonplaceholder.typicode.com/) to fetch mock data.

## Getting started

Run `yarn` to install the dependencies.

Run `yarn dev` to spin up a local sls server.

## Main concepts/technologies

Single lambda function which uses [apollo-server-lambda](https://www.npmjs.com/package/apollo-server-lambda) to set up a graphql server.

We pass a `gql` schema definition to the apollo-server along with the necessary resolvers and it wires them up for us.
