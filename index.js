const express = require("express");
const app = express();
const { connection } = require("./ds");
const { router } = require("./routes/user.router");
const { noteroute } = require("./routes/note.route");
const { auth } = require("./middleware/auth.middleware");
const cors = require("cors")
app.use(express.json());
app.use(cors())


app.use("/user", router);
app.use(auth);
app.use("/notes", noteroute);



app.listen(8080, async () => {
  try {
    await connection;
    console.log("MONGO");
  } catch (error) {
    console.log(error);
  }

  console.log("running");
});
