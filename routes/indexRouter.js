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

async function getUsername(req,res) {
  console.log("cos")
  const usernames = await db.getAll();
  res.send("Username: " + usernames.map(user => user.username).join(", "));
}

export const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  getUsername(req, res);
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

indexRouter.post("/new", (req, res) =>{
    console.log(req)
    messages.push({text: req.body.message, user: req.body.author, added: new Date()})
    res.redirect('/')
  })