import express from "express";
import fs from "fs";

const app = express();
const port = 3000;

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

const jsonData = fs.readFileSync("./src/flightHistory.json", "utf8");
const data: FlightHistory = JSON.parse(jsonData);

app.get("/flights", (req, res) => {
    try {
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/flights/:id", (req, res) => {
  const id = req.params.id;
  const flight = data.flights.find((flight: Flight) => flight.id === id);

  if (flight === undefined) {
    return res.status(404).send("Flight not found");
  } else {
    res.json(flight);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
