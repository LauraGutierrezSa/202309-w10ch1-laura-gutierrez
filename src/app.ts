import "dotenv/config";
import express from "express";
import chalk from "chalk";

const app = express();
const port = process.env.PORT ?? 4000;

app.listen(+port, () => {
  console.log(
    chalk.blue(
      `listening in port ${chalk.bgMagenta(`http://localhost:${port}/`)}`,
    ),
  );
});

app.use(express.json());

export default app;
