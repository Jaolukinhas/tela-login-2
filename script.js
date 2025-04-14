document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); //impede o recarregamento da página
    console.log("Formulário foi enviado!");
    
    //pega os valores dos campos
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('remember').checked;
    console.log("Manter conectado:", rememberMe);


    //exemplo de validação
    const validEmail = "teste@email.com";
    const validPassword = "12345678";

    if (email === validEmail && password === validPassword) {
        document.getElementById('message').style.color = "green";
        document.getElementById('message').textContent = "Login bem sucedido!";

        if (rememberMe) {
            localStorage.setItem("userLoggedIn", "true");
        }

    } else {
        document.getElementById ('message').style.color = "red";
        document.getElementById ('message').textContent = "E-mail ou senha incorretos.";
    }
});

// Abrir o modal ao clicar no link
document.querySelector('.forgot-password a').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('resetModal').style.display = 'flex';
  });
  
  // Fechar modal ao clicar no "x"
  document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('resetModal').style.display = 'none';
  });
  
  // Simular envio do link
  document.getElementById('sendReset').addEventListener('click', function() {
    const email = document.getElementById('resetEmail').value;
    const msg = document.getElementById('resetMessage');
  
    if (email.trim() === "") {
      msg.style.color = "red";
      msg.textContent = "Por favor, insira seu e-mail.";
    } else {
      msg.style.color = "green";
      msg.textContent = "Link de recuperação enviado!";
      setTimeout(() => {
        document.getElementById('resetModal').style.display = 'none';
        msg.textContent = "";
        document.getElementById('resetEmail').value = "";
      }, 2000);
    }
  });


  window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    
    setTimeout(() => {
      preloader.style.opacity = 0;
      preloader.style.pointerEvents = 'none';
      preloader.style.transition = 'opacity 0.6s ease';
  
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 600);
    }, 1500); // tempo de carregamento em ms
  });
  

  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o recarregamento da página
    console.log("Formulário foi enviado!");
  
    // Pega os valores dos campos
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Exemplo de validação
    const validEmail = "teste@email.com";
    const validPassword = "12345678";
  
    if (email === validEmail && password === validPassword) {
      document.getElementById('message').style.color = "green";
      document.getElementById('message').textContent = "Login bem sucedido!";
      
      // Aplica a animação de fade-out antes de redirecionar
      document.querySelector('.login-container').classList.add('fade-out');
  
      // Redireciona para a página de músicas após 1 segundo
      setTimeout(function() {
        window.location.href = 'musicas.html';
      }, 1000); // Atraso para a animação de fade-out
    } else {
      document.getElementById('message').style.color = "red";
      document.getElementById('message').textContent = "E-mail ou senha incorretos.";
    }
  });
  
  