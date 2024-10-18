import express, { Application } from 'express';
import waterJugRoutes from './routes/water-jug.route';

const app: Application = express();

app.use(express.json());
app.use('/api/water-jug', waterJugRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

