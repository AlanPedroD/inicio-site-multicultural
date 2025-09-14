// Lista de imagens do hero
const imagensHero = [
  "assets/imagens/cultura-01.jpg",
  "assets/imagens/cultura-02.jpg",
  "assets/imagens/cultura-03.jpg",
  "assets/imagens/cultura-04.jpg",
  "assets/imagens/cultura-05.jpg",
  "assets/imagens/cultura-06.jpg",
  "assets/imagens/cultura-07.jpg"
];

let indice = 0;
const hero = document.getElementById("hero");

function trocarImagem() {
  hero.style.backgroundImage = 
    `linear-gradient(rgba(90,44,160,0.5), rgba(90,44,160,0.5)), url('${imagensHero[indice]}')`;
  
  indice = (indice + 1) % imagensHero.length;
}

// Inicializa e troca a cada 5 segundos
trocarImagem();
setInterval(trocarImagem, 5000);
