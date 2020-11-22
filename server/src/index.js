const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const Task = require("./resolvers/Task");
const Project = require("./resolvers/Project");
const Subscription = require('./resolvers/Subscription')

const { prisma } = require('./generated/prisma-client')
const { GraphQLServer } = require("graphql-yoga");
//const { PrismaClient } = require("@prisma/client");
const { PubSub } = require("graphql-yoga");

const pubsub = new PubSub();
//const prisma = new PrismaClient();


const resolvers = {
  Query,
  Mutation,
  Subscription,
  Task,
  Project,
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: {
    prisma,
    pubsub
  },
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
