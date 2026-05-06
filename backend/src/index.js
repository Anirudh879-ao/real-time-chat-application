import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import path from "path";

import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? true
        : "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/dist")));

  app.use((req, res) => {
    res.sendFile(
      path.resolve(__dirname, "frontend", "dist", "index.html")
    );
  });
}

server.listen(PORT, () => {
  console.log("Server is running on PORT " + PORT);
  connectDB();
});