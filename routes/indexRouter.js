import { Router } from "express";
import db from "../db/queries.js";

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World",
    user: "Charles",
    added: new Date(),
  },
];

async function getUsernames(req, res) {
  const usernames = await db.getAllUsernames();
  res.send("Username: " + usernames.map((user) => user.username).join(", "));
}

async function getMessages(req, res) {
const messages = await db.getAllMessages();
res.send("Message: " + messages.map(msg => msg.message).join(", "))
}

export const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  getUsernames(req, res);
  getMessages(req, res);
  // res.render("index", { messages: messages });
});

indexRouter.get("/user/:userName", (req, res) => {
  const { userName } = req.params;
  const message = messages.find((message) => message.user === userName);
  if (!message) {
    res.send("User not found");
    return;
  }
  res.render("message", { message: message });
});

indexRouter.post("/new", (req, res) => {
  console.log(req);
  messages.push({
    text: req.body.message,
    user: req.body.author,
    added: new Date(),
  });
  res.redirect("/");
});
