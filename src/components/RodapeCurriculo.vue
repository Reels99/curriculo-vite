<script setup>
import { rodape } from '../data/curriculo'
</script>

<template>
  <footer class="rodape">
    <p>{{ rodape }}</p>
  </footer>
</template>

<style scoped>
.rodape {
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--cor-rodape);
}
</style>
