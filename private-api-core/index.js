import express from "express";
const app = express();
export const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from PRIVATE API CORE endpoint!");
});

export default app;
