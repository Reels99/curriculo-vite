<script setup>
import ItemCurriculo from './ItemCurriculo.vue'
import { experiencias } from '../data/curriculo'
</script>

<template>
  <section aria-labelledby="titulo-experiencias">
    <h2 id="titulo-experiencias" class="secao__titulo">Experiências Profissionais</h2>

    <ItemCurriculo
      v-for="exp in experiencias"
      :key="exp.id"
      class="item"
      :inicio="exp.inicio"
      :periodo="exp.periodo"
      :separador="exp.separador"
      :local="exp.local"
      :subtitulo="exp.cargo"
      :descricao="exp.descricao"
    />
  </section>
</template>

<style scoped>
.secao__titulo {
  margin-bottom: 26px;
}

.item + .item {
  margin-top: 53px;
}
</style>
