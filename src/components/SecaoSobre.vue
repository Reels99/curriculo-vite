<script setup>
import { perfil } from '../data/curriculo'
</script>

<template>
  <section class="sobre" aria-labelledby="titulo-sobre">
    <h2 id="titulo-sobre" class="sr-only">Sobre mim</h2>
    <p>{{ perfil.bio }}</p>
  </section>
</template>

<style scoped>
.sobre {
  margin-bottom: 40px;
}
</style>
