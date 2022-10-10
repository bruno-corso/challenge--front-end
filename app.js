// const botao = document.querySelectorAll("#login__botao");

// botao.addEventListener("click", replaceLocation());

function replaceLocation() {
    const email = document.getElementById('email-login').value;
    const senha = document.getElementById('senha-login').value;
    const newloc = "./produtos.html";

    if (email == '') {
        alert("Inserir email");
    }
    
    if (senha == '') {
        alert("Inserir senha");
    }

    if (email != '' && senha != ''){
        // Replace the current location
        // with new location
        location.href = "./produtos.html";
    }

    //teste
    location.href = "./produtos.html";
    
}

