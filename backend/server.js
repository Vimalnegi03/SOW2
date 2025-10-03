// server.js
import express, { urlencoded } from "express";
import sowSchoolVisitsRoutes from "./routes/sowSchoolVisitsRoutes.js";
import cors from 'cors';
const app = express();
app.use(cors({
  origin: "https://sow2.onrender.com"
}));
app.use(express.json());
app.use(urlencoded({ extended: true }));

// routes
app.use("/api/visits", sowSchoolVisitsRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
