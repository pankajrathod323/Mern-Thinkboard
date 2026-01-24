import express from "express";
const app = express();


app.get("/api/notes", (req, res) => {
  res.send("here are you 5 notes");
});

app.listen(5001, () => {
   console.log("server is listening on port 5001");
})