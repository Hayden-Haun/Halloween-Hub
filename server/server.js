// const express = require("express");
// const { ApolloServer } = require("apollo-server-express");
// const path = require("path");
// const db = require("./config/connection");

// // Restful API
// // const routes = require('./routes');

// //  Implement the ApolloServer / GraphQL

// const { typeDefs, resolvers } = require("./schemas");

// const app = express();
// const PORT = process.env.PORT || 3001;

// // Apply ApolloServer to the Express server as middleware
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// server.applyMiddleware({ app });

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // if we're in production, serve client/build as static assets
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/build")));
// }

// // Restful API
// // app.use(routes);

// // Links to Front End
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

// db.once("open", () => {
//   app.listen(PORT, () => {
//     console.log(`🌍 Now listening on localhost:${PORT}`);
//     console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
//   });
// });

const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();

const { authMiddleware } = require("./utils/auth");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
