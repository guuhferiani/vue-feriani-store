<template>
  <div id="app">
    <Header></Header>
    <Hero></Hero>
    <main id="main">
      <!-- Aqui você deve usar tags explícitas para seus componentes -->
      <Sobre></Sobre>
      <Skills></Skills>
      <Resume></Resume>
      <Portfolio></Portfolio>
      <Service></Service>
    </main>
    <footer id="footer">
      <div class="container">
        <div class="copyright">
          &copy; Copyright. <strong><span> Portfolio Feriani Store </span></strong>
        </div>
        <div class="creditos">
          Desenvolvido por <i class="bi bi-github"></i><a href="https://github.com/guuhferiani" target="_blank"> Feriani </a>
        </div>
      </div>
    </footer>
    <a href="#" class="back-to-top d-flex align-items-center justify-content-center">
      <i class="bi bi-arrow-up-short"></i>
    </a>
  </div>
</template>

<script>
// Certifique-se de importar todos os componentes necessários
import Header from "./header.vue";
import Hero from "./hero.vue";
import Sobre from "./sobre.vue"; 
import Conquistas from "./conquistas.vue";
import Skills from "./skills.vue";
import Resume from "./resume.vue";
import Portfolio from "./portfolio.vue";
import Service from "./service.vue";

export default {
  components: {
    Header,
    Hero,
    Sobre,
    Conquistas,
    Skills,
    Resume,
    Portfolio,
    Service,
  },
};
</script>

<style scoped>
/* Adicione qualquer estilo específico ao App.vue aqui */
</style>
