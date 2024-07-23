<template>
  <section id="conquistas" class="conquistas">
    <div class="container">
      <div class="section-title">
        <h2>Conquistas</h2>
        <p>Loja com a maior venda de Consoles da atualidade.</p>
      </div>

      <div class="row">
        <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
          <div class="count-box">
            <i class="bi bi-joystick"></i>

            <span
              class="purecounter"
              data-purecounter-start="0"
              data-purecounter-end="4735"
              data-purecounter-duration="2"
            >
            </span>

            <p>
              <strong> Consoles Vendidos </strong>
              Temos todas as Marcas e modelos.
            </p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
          <div class="count-box" id="nintendo">
            <i class="bi bi-nintendo-switch"></i>

            <span
              class="purecounter" data-purecounter-start="0"          data-purecounter-end="875" data-purecounter-duration="2"
            >
            </span>

            <p>
              <strong> Nintendo Switch </strong>
              O Portátil mais vendido.
            </p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
          <div class="count-box">
            <i class="bi bi-playstation"></i>

            <span
              class="purecounter" data-purecounter-start="0"            data-purecounter-end="2642" data-purecounter-duration="2"
            >
            </span>

            <p>
              <strong> Playstation 5 </strong>
              Nosso produto mais vendido.
            </p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
          <div class="count-box">
            <i class="bi bi-xbox"></i>

            <span
              class="purecounter" data-purecounter-start="0" data-purecounter-end="5205"         data-purecounter-duration="2"
            >
            </span>

            <p>
              <strong> XBOX Series S / X </strong>
              Maior variedade em nosso catálogo.
            </p>
          </div>
        </div>
      </div>
      <!-- fim ROW -->
    </div>
  </section>
</template>

<script>
export default {
    name: 'Conquistas',
};
</script>

<style scoped>
/* Adicione qualquer estilo específico ao Header.vue aqui */
</style>