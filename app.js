'use strict';

import funcionarios from "./funcionarios.json" with { type: "json" };

function criarCard(funcionario) {
    let card = document.createElement('div');
    card.className = 'card';

    let foto = document.createElement('img');
    foto.src = `./img/${funcionario.imagem}`;
    foto.alt = `Foto de ${funcionario.nome}`;

    let nome = document.createElement('h3');
    nome.textContent = funcionario.nome;

    let cargo = document.createElement('span');
    cargo.textContent = funcionario.cargo;

    card.append(foto, nome, cargo);

    return card;
};

const cards = funcionarios.map(criarCard);

document.getElementById('container').replaceChildren(...cards);