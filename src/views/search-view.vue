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
        {{ report.place ? report.place : "loading..." }}
      </ds-text>

      <ds-text type="label">Descrição do evento?</ds-text>
      <ds-text class="disabled-field">
        {{ report.desc ? report.desc : "loading..." }}
      </ds-text>

      <ds-text type="label">Histórico de ações</ds-text>
      <ds-text >esse histórico inclui o usuário e os orgãos responsaveis</ds-text>

      <div class="log-wrapper">
        <div class="response" style="background: #c0ffba; margin-top: 0px; margin-bottom: 20px;">
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

        <div
          v-if="!flag"
          style="
            text-align: center;
            font-size: 16px;
            font-family: Arial;
            margin-top: 16px;
            margin-bottom: 8px;
          "
        >
          Aguadrando respostas, <a href=""> atualizar página </a>
        </div>
      </div>

      <ds-text type="label">Status</ds-text>
      <ds-text v-if="report.flag" class="concluded" type="title" size="big">RESOLVIDO</ds-text>
      <ds-text else class="opened" type="title" size="big">EM ANDAMENTO</ds-text>

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
      report: {
        id: null,
        user_hash: null,
        desc: null,
        place: null,
        level_ml_model: null,
        insert_date: null,
        level: null,
        flag: false,
      },
      responses: [],
    };
  },

  methods: {
    date(dateString) {
      const date = new Date(dateString);
      return `${date.getDay()}/${date.getMonth()}/${date.getYear()}`;
    },
  },

  async created() {
    const report = await axios.get('https://back-marealta.herokuapp.com/core/complaint/', { params: { id: this.$route.query.id } });
    this.report = report.data;
    const answers = await axios.get('https://back-marealta.herokuapp.com/core/answers/');
    this.responses = answers.data.filter(answer => answer.complaint === report.data.id);
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
  background: #e0e0e0;
  border-radius: 4px;
  font-family: Arial, Helvetica, sans-serif;

  .description {
    margin-top: 8px;
    font-size: 12px;
  }
}

.log-wrapper {
  margin-top: 4px;
  padding: 8px;
  border-radius: 4px;
  background-color: #f7f7f7;
}

.concluded {
  margin-top: 8px;
  padding: 24px;
  background: #c0ffba;
  border-radius: 4px;
  justify-content: center;
  text-align: center;
}

.opened {
  margin-top: 8px;
  padding: 24px;
  background: #f7f7f7;
  border-radius: 4px;
  justify-content: center;
  text-align: center;
}

.img {
  width: 80px;
  margin-right: 20px;
}
</style>
