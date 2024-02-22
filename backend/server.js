import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js"
import connectToMongoDB from "./db/connectToMongoDb.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

// middlewares
app.use(express.json()) // to parse the incoming request with JSON payloads (from req.body)

app.use("/api/auth", authRoutes); // app.use([path] , middlewareFunction)
app.use("/api/message", messageRoutes);


// app.get("/", (req, res) => {
//   // root route http://localhost:5000/
//   res.send("Helloooo World!");
// });






app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running on Port ${PORT}`);
});
