
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let players = [];
let games = [];

// Player joins the game
app.post('/join', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }
  const newPlayer = { name, joinedAt: new Date().toISOString() };
  players.push(newPlayer);
  res.status(200).json({ message: `Player ${name} joined the game!` });
});

// Get all players
app.get('/players', (req, res) => {
  res.status(200).json(players);
});

// Start a game
app.post('/start-game', (req, res) => {
  if (players.length < 2) {
    return res.status(400).json({ error: 'Need at least 2 players to start' });
  }
  const game = { id: new Date().getTime(), players: [...players], startedAt: new Date().toISOString() };
  games.push(game);
  // Reset players for the new game
  players = [];
  res.status(200).json({ message: 'Game started successfully!', game });
});

// Get all games
app.get('/games', (req, res) => {
  res.status(200).json(games);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
