<template>
  <ds-container id="form-view">
    <div class="form">

      <ds-text
        type="title"
        style="display: flex; align-items: center; margin-bottom: 40px;" size="medium">
        <img class="img" src="@/assets/logo.png" />
        Maré Alta

        <ds-button
          @click.native="() => $router.push('/criar-reporte')"
          style="margin-left: auto;"
        > CRIAR REPORTE </ds-button>
      </ds-text>

      <ds-text type="title" size="big">Reportes</ds-text>
      <ds-text style="margin-top: 8px;">
        Cheque todas os reportes: <br>
      </ds-text>

      <table>
        <thead>
          <ds-text tag="th"> Identificador </ds-text>
          <ds-text tag="th"> Descrição </ds-text>
          <ds-text tag="th"> Nível </ds-text>
          <ds-text tag="th"> Local </ds-text>
        </thead>
        <tbody>
          <tr
            :key="report.id"
            v-for="report of reports"
            @click="() => $router.push('/search?id=' + report.id)"
          >
            <ds-text tag="td"> {{ report.id }} </ds-text>
            <ds-text tag="td"> {{ report.desc }} </ds-text>
            <ds-text tag="td"> {{ report.level_ml_model }} </ds-text>
            <ds-text tag="td"> {{ report.place }} </ds-text>
          </tr>
        </tbody>
      </table>
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
  name: 'home',
  data() {
    return {
      reports: [],
    };
  },

  methods: {},

  async created() {
    const { data } = await axios.get('https://back-marealta.herokuapp.com/core/complaints/');
    this.reports = data;
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

table {
  margin-top: 16px;
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 8px;
  border: 1px solid grey;
}

tr {
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
}

.img {
  width: 80px;
  margin-right: 20px;
}
</style>
