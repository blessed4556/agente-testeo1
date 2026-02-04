const express = require("express");
const app = express();

app.use(express.json());

app.post("/webhooks", (req, res) => {
  console.log("Evento recibido:", req.body);
  res.status(200).json({ ok: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Agente activo en puerto", PORT);
});
