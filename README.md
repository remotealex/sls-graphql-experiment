# Serverless graphql experiment

This is currently a simple graphql lambda endpoint which talks [jsonplaceholder](https://jsonplaceholder.typicode.com/) to fetch mock data.

## Getting started

Run `yarn` to install the dependencies.

Run `yarn dev` to spin up a local sls server.

Then you can open up the Graphiql UI at: [http://localhost:4000/dev/graphql](http://localhost:4000/dev/graphql) and test it out.

## Main concepts/technologies

Single lambda function which uses [apollo-server-lambda](https://www.npmjs.com/package/apollo-server-lambda) to set up a graphql server.

We pass a `gql` schema definition to the apollo-server along with the necessary resolvers and it wires them up for us.

The [serverless-offline](https://github.com/dherault/serverless-offline) plugin allows us to run this locally and the [serverless-webpack](https://github.com/serverless-heaven/serverless-webpack) plugin improves the DX by giving us modern webpack bundling.
