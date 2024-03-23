import express from "express";
import cors from "cors";

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Habilita o CORS para todas as origens
app.use(cors());

app.get("/", (req, res) => {
    res.send("OK");
});

app.listen(3000, () => {
	console.log("Servidor está rodando na porta 3000");
});

