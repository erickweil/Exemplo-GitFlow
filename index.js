import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Carrega variáveis de ambiente
dotenv.config();

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Habilita o CORS para todas as origens
app.use(cors());

app.get("/", (req, res) => {
    res.send(process.env.MENSAGEM);
});

app.get("/ping", (req, res) => {
    res.send("PONG");
});

app.listen(process.env.PORT, () => {
	console.log("Servidor está rodando na porta", process.env.PORT);
});

