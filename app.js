const botao = document.getElementById("login__botao");

botao.addEventListener("click", (event) => {
    const email = document.getElementById('email-login').value;
    const senha = document.getElementById('senha-login').value;
    event.preventDefault();
    if (email == '') {
        alert("Inserir email");
    }
    if (senha == '') {
        alert("Inserir senha");
    }
    if (email != '' && senha != ''){
        location.href = "./produtos.html";
    }

})

// function replaceLocation() {
//     const email = document.getElementById('email-login').value;
//     const senha = document.getElementById('senha-login').value;
//     const newloc = "./produtos.html";

//     if (email == '') {
//         alert("Inserir email");
//     }
    
//     if (senha == '') {
//         alert("Inserir senha");
//     }

//     if (email != '' && senha != ''){
//         preventDeafout()
//         location.href = "./produtos.html";
//     }

    
// }

