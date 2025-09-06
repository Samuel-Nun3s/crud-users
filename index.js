import express from 'express';
import dotenv from 'dotenv';
import routes from './src/routes.js';
import { connectDB } from './src/db.js';

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use('/', routes);

connectDB().then(() => {  
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});
