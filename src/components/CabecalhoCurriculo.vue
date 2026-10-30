<script setup>
import { perfil } from '../data/curriculo'
</script>

<template>
  <header class="cabecalho">
    <div class="logo" aria-hidden="true">{{ perfil.iniciais }}</div>
    <div>
      <h1 class="cabecalho__nome">{{ perfil.nome }}</h1>
      <p class="cabecalho__cargo">{{ perfil.titulo }}</p>
    </div>
  </header>
</template>

<style scoped>
.cabecalho {
  display: flex;
  align-items: center;
  gap: 33px;
}

.logo {
  flex: none;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--cor-destaque);
  font-weight: 700;
  font-size: 58.73px;
  line-height: 1;
}

.cabecalho__nome {
  font-family: var(--fonte-mono);
  font-weight: 600;
  font-size: 22px;
  line-height: 1;
}

.cabecalho__cargo {
  margin-top: 13px;
  font-family: var(--fonte-mono);
  font-size: 16px;
  line-height: 1;
}

@media (max-width: 520px) {
  .cabecalho {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
}
</style>
