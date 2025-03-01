import { Router } from "express";
import db from "../db/queries.js";

const messages = [
  {
    text: "Hi there!",
    user: "Amandosa",
    added: new Date(),
  },
  {
    text: "Hello World",
    user: "Charles",
    added: new Date(),
  },
];

async function getData(req, res) {
  const dbContent = await db.getAllInfo();
  res.render("index", { messages: dbContent });
  //res.send(dbContent)
}

async function createPost(req, res) {
  console.log(req.body);
  const username = req.body.author;
  const message = req.body.message;
  const date = new Date();
  await db.insertData(username, message, date);
  res.redirect("/");
}

async function findData(req, res) {
  const userId = Number(req.params.id);
  const userData = await db.findUserDataById(userId);
  console.log(userData);
  if (userData.length === 0 || !userData) {
    res.send("User not found");
    return;
  }
  res.render("message", { message: userData[0] });
}

async function clear(req, res) {
  await db.removeAllData();
  res.redirect("/");
}

///////

export const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  getData(req, res);
  // res.render("index", { messages: messages });
});

indexRouter.post("/new", (req, res) => {
  createPost(req, res);
  // messages.push({
  //   text: req.body.message,
  //   user: req.body.author,
  //   added: new Date(),
  // });
});

indexRouter.get("/user/:id", (req, res) => {
  // console.log(req.params)
  findData(req, res);
  // const { userName } = req.params;
  // const message = messages.find((message) => message.user === userName);
  // if (!message) {
  //   res.send("User not found");
  //   return;
  // }
  // res.render("message", { message: message });
});

indexRouter.get("/delete", (req, res) => {
  clear(req, res);
});
