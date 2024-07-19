<template>
    <header id="header">
      <div class="d-flex flex-column">
        <div class="perfil">
          <img class="img-fluid rounded-circle" src="img/logo-joystick.jpeg" alt="">
          <h1 class="text-light"> Feriani Store 🎮 </h1>
          <div class="social-links mt-3 text-center">
            <a href="#" class="twitter" target="_blank">
              <i class="bx bxl-twitter"> </i>
            </a>
            <a href="#" class="instagram" target="_blank">
              <i class="bx bxl-instagram"> </i>
            </a>
            <a href="#" class="facebook" target="_blank">
              <i class="bx bxl-facebook"> </i>
            </a>
            <a href="#" class="linkedin" target="_blank">
              <i class="bx bxl-github"> </i>
            </a>
          </div>
        </div>
        <nav id="navbar" class="nav-menu navbar">
          <ul>
            <li>
              <a href="#hero" class="nav-link scrollto active">
                <i class="bi bi-house"> </i>
                <span> Home </span>
              </a>
            </li>
            <li>
              <a href="#sobre" class="nav-link scrollto">
                <i class="bx bx-user"> </i>
                <span> Sobre </span>
              </a>
            </li>
            <li>
              <a href="#resume" class="nav-link scrollto">
                <i class="bi bi-file-earmark-text"> </i>
                <span> Resumo </span>
              </a>
            </li>
            <li>
              <a href="#portfolio" class="nav-link scrollto">
                <i class="bi bi-images"> </i>
                <span> Portfolio </span>
              </a>
            </li>
            <li>
              <a href="#services" class="nav-link scrollto">
                <i class="bi bi-hdd-stack navicon"> </i>
                <span> Serviços </span>
              </a>
            </li>
            <li>
              <a href="#contato" class="nav-link scrollto">
                <i class="bi bi-envelope navicon"> </i>
                <span> Contato </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'header',
  };
  </script>
  
  <style scoped>
  /* Adicione qualquer estilo específico ao Header.vue aqui */
  </style>
  