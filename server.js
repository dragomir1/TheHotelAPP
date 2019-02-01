// import express from "express";
// import expressGraphQL from "express-graphql";
// import mongoose from "mongoose";
// import bodyParser from "body-parser";
// import cors from "cors";

const express = require('express');
const expressGraphQL = require('express-graphql');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const schema = require('./graphql/');

const app = express();

const db = require('./config/keys').mongoURI

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

mongoose.connect(
    db,
    {
      useCreateIndex: true,
      useNewUrlParser: true
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

  app.use(
    "/graphql",
    cors(),
    bodyParser.json(),
    expressGraphQL({
      schema,
      graphiql: true
    })
  );

  const PORT = process.env.PORT || "4000";

  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
