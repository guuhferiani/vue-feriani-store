<template>
  <div id="app">
    <header />
    <hero />
    <main id="main">
      <sobre />
      <conquistas />
      <skills />
      <resume />
      <portfolio />

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
import header from "../header.vue";
import hero from "../hero.vue";
import sobre from "../sobre.vue";
import conquistas from "../conquistas.vue";
import skills from "../skills.vue";
import resume from "../resume.vue";
import portfolio from "../portfolio.vue";

export default {
  components: {
    header,
    hero,
    sobre,
    conquistas,
    skills,
    resume,
    portfolio,
  },
};
</script>
  
  <style scoped>
/* Adicione qualquer estilo específico ao App.vue aqui */
</style>
  