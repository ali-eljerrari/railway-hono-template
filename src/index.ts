import { serve } from "@hono/node-server";
import { Hono } from "hono";

const laLigaTeams2024_25 = [
  { name: "Deportivo Alavés", city: "Vitoria-Gasteiz", stadium: "Estadio Mendizorrotza", capacity: 19840 },
  { name: "Athletic Club", city: "Bilbao", stadium: "Estadio San Mamés", capacity: 53000 },
  { name: "Atlético Madrid", city: "Madrid", stadium: "Riyadh Air Metropolitano", capacity: 70460 },
  { name: "FC Barcelona", city: "Barcelona", stadium: "Olímpico Lluís Companys", capacity: 49472 },
  { name: "RC Celta de Vigo", city: "Vigo", stadium: "Abanca-Balaídos", capacity: 24870 },
  { name: "RCD Espanyol", city: "Cornellà de Llobregat", stadium: "RCDE Stadium", capacity: 40500 },
  { name: "Getafe CF", city: "Getafe", stadium: "Coliseum", capacity: 16500 },
  { name: "Girona FC", city: "Girona", stadium: "Estadi Municipal de Montilivi", capacity: 14624 },
  { name: "UD Las Palmas", city: "Las Palmas de Gran Canaria", stadium: "Estadio de Gran Canaria", capacity: 32400 },
  { name: "CD Leganés", city: "Leganés", stadium: "Estadio Municipal de Butarque", capacity: 13089 },
  { name: "RCD Mallorca", city: "Palma de Mallorca", stadium: "Estadi Mallorca Son Moix", capacity: 23142 },
  { name: "CA Osasuna", city: "Pamplona", stadium: "Estadio El Sadar", capacity: 23576 },
  { name: "Rayo Vallecano", city: "Madrid", stadium: "Estadio de Vallecas", capacity: 14708 },
  { name: "Real Betis", city: "Sevilla", stadium: "Estadio Benito Villamarín", capacity: 60721 },
  { name: "Real Madrid", city: "Madrid", stadium: "Estadio Santiago Bernabéu", capacity: 81044 },
  { name: "Real Sociedad", city: "San Sebastián", stadium: "Reale Arena", capacity: 39313 },
  { name: "Sevilla FC", city: "Sevilla", stadium: "Estadio Ramón Sánchez Pizjuán", capacity: 43883 },
  { name: "Valencia CF", city: "Valencia", stadium: "Estadio Mestalla", capacity: 49430 },
  { name: "Real Valladolid", city: "Valladolid", stadium: "Nuevo Estadio Municipal José Zorrilla", capacity: 27618 },
  { name: "Villarreal CF", city: "Villarreal", stadium: "Estadio de la Cerámica", capacity: 23500 }
];

const app = new Hono();

app.get("/", (c) => {
  return c.json(laLigaTeams2024_25);
});

const port = process.env.PORT ? Number(process.env.PORT) : 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
