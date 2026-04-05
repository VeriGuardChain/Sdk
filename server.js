import express from "express";
import routes from "./src/api/routes.js";

const app = express();
app.use(express.json());

app.use("/api", routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`VeriGuard running on port ${PORT}`);
});
