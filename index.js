import express from "express";
import { getQuote } from "node-quotegen";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

var todolist=[];
var listitem="";


app.get("/", (req, res) => {
    res.render("index.ejs", { activeOption: 'home' });
});
app.post("/", (req, res) => {
  const quote = getQuote();
    res.render("index.ejs",{randomquote:quote, activeOption: 'home'});
});

app.get("/todoactivity", (req, res) => {
  res.render("todo.ejs", { todolist,activeOption: 'todoactivity' });
});

app.post("/todoactivity", (req, res) => {
  listitem=req.body["task"]
  todolist.push(listitem)
  res.render("todo.ejs", { todolist, activeOption: 'todoactivity' });
});

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });


  