import express from "express";
const app = express();
export const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello from PUBLIC API CORE endpoint!");
});

export default app;
