const express = require("express");
// initialize app
const app = express();
const db = require("./config/connection"); // connect to database

const PORT = process.env.PORT || 3001; // default port

// apollo server
const { ApolloServer } = require("apollo-server-express");
// import GraphQL schemas
const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// middleware to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve up build as static assets if in production
if (process.env.NODE.ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// send the index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// new instance of Apollo server with GraphQl schemas
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  // integrate Express with Apollo. Enables app to use GraphQL
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

// Call async Fn to start the server
startApolloServer(typeDefs, resolvers);
