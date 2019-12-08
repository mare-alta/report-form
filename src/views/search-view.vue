<template>
  <ds-container id="form-view">
    <div class="form">
      <ds-text
        type="title"
        style="display: flex; align-items: center; margin-bottom: 40px;" size="medium">
        <img class="img" src="@/assets/logo.png" />
        Maré Alta
      </ds-text>

      <ds-text
        type="title"
        size="big"
        style="
          width: fit-content;
          padding: 16px;
          background: #f1f1f1;
          border-radius: 4px;
        ">
          {{ this.$route.query.id }}
      </ds-text>
      <ds-text style="margin-top: 8px;">
        Aqui você encontra as informações a respeito do reporte <b>{{ this.$route.query.id }}</b>,
        todas as informações das ações de cada orgão estão aqui.
      </ds-text>

      <ds-text type="label">Onde ocorreu o evento?</ds-text>
      <ds-text class="disabled-field">
        Doca 18
      </ds-text>

      <ds-text type="label">Descrição do evento?</ds-text>
      <ds-text class="disabled-field">
        Vasamento de oleo de um navio atracado na doca 18, o vasamento
        aumenta a cada minuto, com o potencial catastrofico para a biodiversidade.
      </ds-text>

      <ds-text type="label">Histórico de ações</ds-text>
      <ds-text >esse histórico inclui o usuário e os orgãos responsaveis</ds-text>
      <ds-fetch :request="request">
        <template slot="sucess">
          <div class="response">
            <ds-text> Abertura do reporte </ds-text>
          </div>

          <div
            v-for="response of responses"
            :key="response.insert_date"
            class="response"
            style="margin-left: auto;"
          >
            <ds-text> {{ response.desc }} </ds-text>
            <div class="description"> {{ date(response.insert_date) }} </div>
          </div>

          <ds-text class="concluded" type="title" size="big">RESOLVIDO</ds-text>
        </template>
      </ds-fetch>
    </div>
    <ds-text
      style="
        margin: 8px;
        opacity: 0.2;
      "
    >
      João Scheuermann :D
    </ds-text>
  </ds-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'id',
  data() {
    return {
      responses: [],
    };
  },

  methods: {
    async request() {
      const { data } = await axios.get('https://back-marealta.herokuapp.com/core/answers/');
      this.responses = data.reverse();
    },

    date(dateString) {
      const date = new Date(dateString);
      return `${date.getDay()}/${date.getMonth()}/${date.getYear()}`;
    },
  },
};
</script>

<style lang="scss">
.form {
  margin-top: 40px;
  padding: 40px;
  background: white;
  border-radius: 8px;

  > .input {
    width: 100% !important;
  }
}

.text.-label {
  margin-top: 40px;
}

.disabled-field {
  margin-top: 8px;
  padding: 16px;
  background: #f1f1f1;
  border-radius: 4px;
}

.id {
  padding: 16px;
  margin-top: 16px;
  border: 3px dashed black;
  border-radius: 8px;
  width: fit-content;
}

.response {
  position: relative;
  margin-top: 8px;
  padding: 12px;
  width: fit-content;
  max-width: 320px;
  background: #f1f1f1;
  border-radius: 4px;
  font-family: Arial, Helvetica, sans-serif;

  .description {
    margin-top: 8px;
    font-size: 12px;
  }
}

.concluded {
  margin-top: 40px;
  padding: 24px;
  background: lawngreen;
  border-radius: 4px;
  justify-content: center;
  text-align: center;
}

.img {
  width: 80px;
  margin-right: 20px;
}
</style>
