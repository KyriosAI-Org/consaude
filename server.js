const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'proposta-assistente-ia-consaude.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'proposta-assistente-ia-consaude.html'));
});

app.listen(port, () => {
  console.log(`Servidor Express rodando em http://localhost:${port}`);
});
