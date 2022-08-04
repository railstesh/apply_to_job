const express = require("express");
const cors = require("cors");
const faunadb = require("faunadb");


const {
  Collection,
  Create,
} = faunadb.query;

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 8080;
const FAUNA_SECRET = "fnAEtITQmxACScpf40LcpLa6ycSe9ceGAjRTmYzn";

const client = new faunadb.Client({
  secret: FAUNA_SECRET,
});

app.post("/applyJob", async (req, res) => {
  try {
    const { firstName, lastName, email, experience } = req.body;
    const { data } = await client.query(
      Create(Collection("users"), {
        data: { firstName, lastName, email, experience },
      })
    );

    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: error.description });
  }
});

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));
