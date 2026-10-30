<script setup>
// Item reutilizável: usado tanto em Experiências quanto em Educação
defineProps({
  inicio: { type: String, required: true },   // valor do atributo datetime (ex.: "1985")
  periodo: { type: String, required: true },  // texto exibido (ex.: "1985 – Presente")
  separador: { type: String, default: '|' },
  local: { type: String, required: true },
  subtitulo: { type: String, required: true },
  descricao: { type: String, required: true }
})
</script>

<template>
  <article>
    <h3 class="item__titulo">
      <time :datetime="inicio">{{ periodo }}</time>
      {{ separador }} {{ local }}
    </h3>
    <p class="item__subtitulo">{{ subtitulo }}</p>
    <p class="item__descricao">{{ descricao }}</p>
  </article>
</template>

<style scoped>
.item__titulo {
  font-weight: 700;
}

.item__titulo time {
  font: inherit;
}

.item__subtitulo {
  margin-top: 7px;
  font-family: var(--fonte-mono);
  font-weight: 700;
  color: var(--cor-secundaria);
}

.item__descricao {
  margin-top: 7px;
}
</style>
