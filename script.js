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
function mostrarInfo(nome, descricao, preco) {
    document.getElementById("info").innerText =
        nome + " - " + descricao + " | Preço: R$ " + preco;
}

function abrir(img, nome, desc, preco) {
    document.querySelector(".catalogo").style.display = "none";
    document.getElementById("detalhe").style.display = "block";

    document.getElementById("imgDetalhe").src = img;
    document.getElementById("nomeDetalhe").innerText = nome;
    document.getElementById("descDetalhe").innerText = desc;
    document.getElementById("precoDetalhe").innerText = "R$ " + preco;
}

function fechar() {
    document.querySelector(".catalogo").style.display = "flex";
    document.getElementById("detalhe").style.display = "none";
}