<script setup>
import ItemCurriculo from './ItemCurriculo.vue'
import { educacao } from '../data/curriculo'
</script>

<template>
  <section aria-labelledby="titulo-educacao">
    <h2 id="titulo-educacao" class="secao__titulo">Educação</h2>

    <ItemCurriculo
      v-for="curso in educacao"
      :key="curso.id"
      class="item"
      :inicio="curso.inicio"
      :periodo="curso.periodo"
      :separador="curso.separador"
      :local="curso.local"
      :subtitulo="curso.tipo"
      :descricao="curso.descricao"
    />
  </section>
</template>

<style scoped>
.secao__titulo {
  margin-bottom: 29px;
}

.item + .item {
  margin-top: 44px;
}
</style>
