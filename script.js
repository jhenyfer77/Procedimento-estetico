function salvar() {
    alert("Dados salvo com sucesso!");
}

function mostrarPreco() {
    let select = document.getElementById("procedimento");
    let preco = select.value;

    if (preco === "") {
        document.getElementById("preco").innerText = "Preço: R$ 0";
    } else {
        document.getElementById("preco").innerText = "Preço: R$ " + preco;
    }
}

function abrir(img, nome, desc, preco) {
    // esconder tudo
    document.getElementById("conteudo").style.display = "none";
    document.getElementById("titulo").style.display = "none";
    document.getElementById("menu").style.display = "none";

    // mostrar detalhe centralizado
    let detalhe = document.getElementById("detalhe");
    detalhe.style.display = "flex";

    document.getElementById("imgDetalhe").src = img;
    document.getElementById("nomeDetalhe").innerText = nome;
    document.getElementById("descDetalhe").innerText = desc;
    document.getElementById("precoDetalhe").innerText = "R$ " + preco;
}

function fechar() {
    document.getElementById("conteudo").style.display = "block";
    document.getElementById("titulo").style.display = "block";
    document.getElementById("menu").style.display = "block";

    document.getElementById("detalhe").style.display = "none";
}