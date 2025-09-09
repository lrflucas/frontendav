let nomeBib = "Biblioteca Rocha";
let bibAberta = true;

let livros = ["Harry Potter e o Enigma do Príncipe",
    "Jogos Vorazes",
    "Memórias Póstumas de Brás Cubas",
    "O Senhor dos Anéis",
    "A revolução dos bichos",
    "Dom Casmurro",
    "Vidas Secas"];

console.log(nomeBib);
console.log(livros.length);
console.log(bibAberta);

livros.push("Harry Potter e as Relíquias da Morte");
console.log(livros);
console.log(livros.length);

function buscarLivro() {
    const titulo = document.getElementById("inputBusca").value.trim();
    const resultado = document.getElementById("resultadoBusca");

    if (livros.includes(titulo)) {
        resultado.textContent = "Livro encontrado!";
    } else {
        resultado.textContent = "Livro não encontrado";
    }
}

if (bibAberta === true) {
  console.log("A biblioteca está aberta!");
} else {
  console.log("A biblioteca está fechada.");
}

const listaLivros = document.getElementById("listaLivros");
for (let i = 0; i < livros.length; i++) {
  let item = document.createElement("li");
  item.textContent = `${i + 1}. ${livros[i]}`;
  listaLivros.appendChild(item);
}

let bibliotecario = {
  nome: "Lucas Rocha",
  idade: 19,
  cargo: "Gerente"
};

console.log("Bibliotecário:", bibliotecario);