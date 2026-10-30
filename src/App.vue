<script setup>
import CabecalhoCurriculo from './components/CabecalhoCurriculo.vue'
import SecaoSobre from './components/SecaoSobre.vue'
import SecaoExperiencias from './components/SecaoExperiencias.vue'
import SecaoEducacao from './components/SecaoEducacao.vue'
import SecaoContato from './components/SecaoContato.vue'
import RodapeCurriculo from './components/RodapeCurriculo.vue'
</script>

<template>
  <div class="curriculo">
    <CabecalhoCurriculo class="curriculo__cabecalho" />

    <main class="principal">
      <SecaoSobre />
      <SecaoExperiencias />
    </main>

    <aside class="lateral">
      <SecaoEducacao />
      <SecaoContato />
    </aside>

    <RodapeCurriculo class="curriculo__rodape" />
  </div>
</template>

<style scoped>
/* App.vue cuida apenas do layout (grid) da página */
.curriculo {
  display: grid;
  /* 907 = coluna principal (876) + respiro até o divisor (31) | 425 = divisor + lateral (383) + respiro (41) */
  grid-template-columns: minmax(0, 907fr) minmax(0, 425fr);
  grid-template-rows: auto 1fr auto;
  max-width: 1440px;
  margin: 0 auto;
  padding: 88px 48px 61px;
}

.curriculo__cabecalho {
  grid-column: 1;
  grid-row: 1;
  padding-right: 31px;
}

.principal {
  grid-column: 1;
  grid-row: 2;
  padding: 40px 31px 69px 0;
}

.lateral {
  grid-column: 2;
  grid-row: 2 / span 2;
  padding: 30px 0 0 41px;
  border-left: 1px solid var(--cor-texto);
}

.curriculo__rodape {
  grid-column: 1;
  grid-row: 3;
  padding: 63px 31px 15px 0;
  border-top: 1px solid var(--cor-texto);
}

@media (max-width: 960px) {
  .curriculo {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto;
    padding: 32px 24px;
  }

  .curriculo__cabecalho,
  .principal,
  .lateral,
  .curriculo__rodape {
    grid-column: 1;
    grid-row: auto;
    padding-right: 0;
  }

  .curriculo__cabecalho { margin-bottom: 8px; }
  .principal { padding-bottom: 40px; }
  .lateral { padding: 40px 0 0; border-left: 0; border-top: 1px solid var(--cor-texto); }
  .curriculo__rodape { padding: 32px 0 0; margin-top: 40px; }
}
</style>
