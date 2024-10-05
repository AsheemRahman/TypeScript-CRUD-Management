import express from "express";
import Router  from "./routes/route";

const app = express();

const port = process.env.PORT || 8080

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/',Router)

app.listen(port, () => {
    console.log(`server running in localhost:${port}`);
});
