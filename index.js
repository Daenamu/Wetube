import express from "express";
import morgan from "morgan";
import helmet from "helmet";

const app = express();

const PORT = 4000;
 
const handleListening = () => {
  console.log(`Listening on: http://localhost:${PORT}`);
}

const handleProfile = (req, res) => {
  res.send("You are on my profile");
}

const handleHome = (req, res) => {
  res.send('Hello from home');
}

app.use(morgan("dev"));
app.use(helmet());

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);