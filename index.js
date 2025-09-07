import dotenv from 'dotenv';
import { connectDB } from './src/db.js';
import app from './src/app.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    console.log('✅ Conectado ao MongoDB!');
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  }).catch(err => {
    console.error('❌ Erro ao conectar ao MongoDB:', err);
  });
