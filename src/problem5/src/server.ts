import express from "express";
import resourcesRouter from "./routes/resources";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api/resources", resourcesRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
