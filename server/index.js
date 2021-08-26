import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

dotenv.config();

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API running...');
});

const PORT = process.env.PORT || 5100;
app.listen(
  PORT,
  console.log(`Listening in ${process.env.NODE_ENV} mode, on port ${PORT}`)
);
