import express from "express";
import cors from "cors";
import config from "./config";
import userRoutes from "./routes/users.routes";

const app = express();

app.use(cors());

//Settings
app.set("port", config.port);

//Middlewares
app.use(express.json());

// Routes
app.use("/api", userRoutes);

app.get("/", (req, res) => {
    res.send("Api Crud Reto Canvia");
});

export default app;