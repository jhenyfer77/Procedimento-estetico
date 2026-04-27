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