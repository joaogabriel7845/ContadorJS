const btn = document.getElementById("sumCount");
const subBtn = document.getElementById("subCount");

let counter = 0;

document.getElementById("sumCount").addEventListener("click", increment)
document.getElementById("subCount").addEventListener("click", decrement)

// Função para executar uma animação
function animateNumber() {
    
    const number = document.getElementById("numberCount");
    
    number.classList.remove("animate");
    void number.offsetWidth;
    number.classList.add("animate")
}

// Atualizando cores conforme vai aumentando ou diminuindo
function updateColor() {
    const textCount = document.getElementById("numberCount");

    textCount.classList.remove("count-low", "count-mid", "count-high");

    if (counter >= 100 ) {
        textCount.classList.add("count-high");
    }
    else if(counter >= 50) {
        textCount.classList.add("count-mid");
    }
    else {
        textCount.classList.add("count-low");
    }
}

// Atualizando número e estados dos botões após o clique
function updateNumber() {
    document.getElementById("numberCount").textContent = counter;
    switch (true) {

        case counter <= 0:
            subBtn.disabled = true;
            btn.disabled = false;
            break;

        case counter >= 100:
            btn.disabled = true;
            subBtn.disabled = false;
            break;

        default:
            subBtn.disabled = false;
            btn.disabled = false;

    }
};

// Atualiza todo o meu contador
function render() {
    animateNumber();
    updateNumber();
    updateColor();
};

render();

// Adiciona ao contador
function increment() {
    counter++;
    render();
};

// Diminui o contador
function decrement() {
    counter --;
    render();
};

// Reseta o contador
function reset() {
    counter = 0;
    render();
};
