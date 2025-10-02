import express from 'express';
import cors from 'cors';
import fs from 'fs';

const app = express();
const port = 5000;

app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin");
    
    next();
});

interface Flight {
  id: string;
  aircraft: string;
  route: string;
  balance: number;
  date: Date;
}

interface FlightHistory {
  flights: Flight[];
}

const jsonData = fs.readFileSync('./src/flightHistory.json', 'utf8');
const data: FlightHistory = JSON.parse(jsonData);

app.use(cors());

app.get('/flights', async (req, res) => {
    try {
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/flights/:id', async (req, res) => {
  const id = req.params.id;
  const flight = data.flights.find((flight: Flight) => flight.id === id);

  if (flight === undefined) {
    return res.status(404).send('Flight not found');
  } else {
    res.json(flight);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/flights`);
});
