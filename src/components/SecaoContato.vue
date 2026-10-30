<script setup>
import { contato } from '../data/curriculo'
</script>

<template>
  <section class="contato" aria-labelledby="titulo-contato">
    <h2 id="titulo-contato" class="secao__titulo">Contato</h2>

    <address class="contato__lista">
      <p>
        <strong class="contato__rotulo">Endereço:</strong>
        {{ contato.endereco }}
      </p>
      <p>
        <strong class="contato__rotulo">E-mail:</strong>
        <a :href="'mailto:' + contato.email">{{ contato.email }}</a>
      </p>
      <p>
        <strong class="contato__rotulo">Telefone:</strong>
        <a :href="'tel:' + contato.telefoneLink">{{ contato.telefone }}</a>
      </p>
    </address>
  </section>
</template>

<style scoped>
.contato {
  margin-top: 39px;
  padding-top: 32px;
  border-top: 1px solid var(--cor-texto);
}

.secao__titulo {
  margin-bottom: 18px;
}

.contato__lista {
  font-style: normal;
  font-size: 14px;
}

.contato__rotulo {
  font-weight: 700;
  text-transform: uppercase;
}

.contato__lista a {
  color: inherit;
  text-decoration: none;
}

.contato__lista a:hover,
.contato__lista a:focus-visible {
  text-decoration: underline;
}
</style>
