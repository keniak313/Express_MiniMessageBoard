import { Router } from "express";

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

export const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  console.log(req);
  res.render("index", { messages: messages });
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