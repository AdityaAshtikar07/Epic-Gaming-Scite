const grid = document.getElementById("gameGrid");

games.forEach(game => {
  const card = document.createElement("div");
  card.className = "game-card";

  card.innerHTML = `
    <img src="${game.image}">
    <h3>${game.name}</h3>
  `;

  card.onclick = () => {
    window.location.href = `game.html?id=${game.id}`;
  };

  grid.appendChild(card);
});
