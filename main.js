const players = [
  { name: "Lionel Messi", position: "Forward", team: "Inter Miami", age: 36 },
  { name: "Cristiano Ronaldo", position: "Forward", team: "Al-Nassr", age: 38 },
  { name: "Kylian Mbappé", position: "Forward", team: "PSG", age: 24 },
  {
    name: "Kevin De Bruyne",
    position: "Midfielder",
    team: "Man City",
    age: 32,
  },
  { name: "Erling Haaland", position: "Forward", team: "Man City", age: 23 },
  { name: "Virgil van Dijk", position: "Defender", team: "Liverpool", age: 32 },
  {
    name: "Alisson Becker",
    position: "Goalkeeper",
    team: "Liverpool",
    age: 31,
  },
];

let count = 0;

document.getElementById("addRow").addEventListener("click", () => {
  const table = document.getElementById("playerTable");
  const randomPlayer = players[Math.floor(Math.random() * players.length)];
  count++;
  const row = document.createElement("tr");

  row.innerHTML = `
      <td>${count}</td>
      <td>${randomPlayer.name}</td>
      <td>${randomPlayer.position}</td>
      <td>${randomPlayer.team}</td>
      <td>${randomPlayer.age}</td>
    `;

  table.appendChild(row);
});
