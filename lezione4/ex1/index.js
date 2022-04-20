const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

function callLogger(req, res, next) {
  console.log(`received ${req.method}`);
  next();
}

const baseUrl = "https://jsonplaceholder.typicode.com/todos";

// with promise

// function addMockTime(req, res, next) {
//   const { id } = req.query;
//   if (id === undefined) {
//     res.send("Missing ID!!!!");
//     return;
//   }
//   axios.get(`${baseUrl}/${id}`).then(axResp => {
//     console.log("got response");
//     console.log(axResp.data);
//     const { title } = axResp.data;
//     if (title !== undefined) {
//       req.nodeLab = {
//         title,
//       };
//     } else {
//       req.nodeLab = {
//         title: "title not found",
//       };
//     }

//     console.log("doing next");
//     next();
//   }).catch(err => {
//       res.send(err)
//   });
// }

// with async/await
async function addMockTime(req, res, next) {
  const { id } = req.query;
  if (id === undefined) {
    res.send("Missing ID!!!!");
    return;
  }
  try {
    const axResp = await axios.get(`${baseUrl}/${id}`);
    console.log("got response");
    console.log(axResp.data);
    const { title } = axResp.data;
    if (title !== undefined) {
      req.nodeLab = {
        title,
      };
    } else {
      req.nodeLab = {
        title: "title not found",
      };
    }

    console.log("doing next");
    next();
  } catch (e) {
    res.send(e);
  }
}

app.use(callLogger);
app.use(addMockTime);

// Creare un middleware che faccia console.log per ogni chiamata ricevuta

// nota middleware: funzione (req, res, next) => {...}

// nota2 chiamando next() un middleware passa al middleware successivo
// nota3 per usare un middleware basta fare app.use(...)

app.get("/", (req, res) => {
  const {
    nodeLab: { title },
  } = req;
  res.send(`Hello World ${title}!`);
});

app.get("/hello", (req, res) => {
  const {
    nodeLab: { title },
  } = req;
  res.send(`Node lab ${title}!`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
