 // Aba de search
const livros = [
    { nome: "Hunger Games", url: "hungergames.html" }
];

const input = document.getElementById("inputLivro");
const lista = document.getElementById("listaSugestoes");

// mostrar as sugestões enquanto digita
input.addEventListener("input", () => {
    const valorBusca = input.value.toLowerCase();
    lista.innerHTML = ""; 

    if (valorBusca.length > 0) {
        // Acessa livro.nome para filtrar
        const filtrados = livros.filter(livro => 
            livro.nome.toLowerCase().includes(valorBusca)
        );

        if (filtrados.length > 0) {
            lista.style.display = "block";
            
            filtrados.forEach(livro => {
                const div = document.createElement("div");
                div.classList.add("sugestao-item");
                div.textContent = livro.nome;

                div.addEventListener("click", () => {
                    window.location.href = livro.url;
                });

                lista.appendChild(div);
            });
        } else {
            lista.style.display = "none";
        }
    } else {
        lista.style.display = "none";
    }
});

// Lógica para o ENTER 
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const encontrado = livros.find(l => 
            l.nome.toLowerCase() === input.value.toLowerCase()
        );
        if (encontrado) {
            window.location.href = encontrado.url;
        }
    }
});

// Fecha a lista ao clicar fora
document.addEventListener("click", (e) => {
    if (e.target !== input) {
        lista.style.display = "none";
    }
});