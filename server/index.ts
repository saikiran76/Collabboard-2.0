import { createServer } from "http";
import express from "express";
import { Server } from "socket.io";
import { v4 } from "uuid";
import cors from "cors";

const port = parseInt(process.env.PORT || "3001", 10);
const app = express();
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true
  },
  transports: ["websocket", "polling"]
});

app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
  credentials: true
}));

app.get("/health", async (_, res) => {
  res.send("Healthy");
});

server.listen(port, () => {
  console.log(`> Server ready on port ${port}`);
});
