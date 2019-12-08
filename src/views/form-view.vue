<template>
  <ds-container id="form-view">
    <div class="form">
      <img class="img" src="@/assets/logo.png" />

      <ds-text type="title" size="big">Faça sua denuncia</ds-text>
      <ds-text style="margin-top: 8px;">
        Reporte irregularidades, é anonimo e seguro! <br>
        Ajude a manter o porto um lugar seguro reportando irregularidades
        para que o possamos agir rápido e evitar acidentes.
      </ds-text>

      <ds-text type="label">Onde ocorreu o evento?</ds-text>
      <ds-textarea v-model="where" placeholder="Descreva o local onde acontece o evento/sinistro."/>

      <ds-text type="label">Descreva o evento!</ds-text>
      <ds-textarea v-model="description" placeholder="Descreva o sinistro. Em detalhes!"/>

      <ds-text type="label">Qual a gravidade do evento!</ds-text>
      <select
        v-model="severity"
        style="
          margin-top: 8px;
          padding: 12px;
          width: 100%;
          border-radius: 4px;
        "
      >
        <option value="Gravissimo">Gravissimo</option>
        <option value="Grave">Grave</option>
        <option value="Perigoso">Perigoso</option>
        <option value="Baixa gravidade">Baixa gravidade</option>
        <option value="Baixissima gravidade">Baixissima gravidade</option>
      </select>

      <ds-text type="label">Inclua fotos do evento!</ds-text>

      <div class="files-button">
        <input
          type="file"
          @change="handleFileDrop"
          style="height: 100%; width: 100%; position: absolute; top: 0; left: 0; opacity: 0;"
          multiple>
        <ds-text type="action"> Enviar arquivos! </ds-text>
      </div>

      <div class="files-dropped">
        <div v-for="file of files" class="file" :key="file.name"> {{ file.name }} </div>
      </div>

      <ds-button
        @click.native="handleSendButtonClick"
        :disabled="!where || !severity || !description"
        style="
          margin-top: 60px;
          width: 100%;
          justify-content: center;
          background-color: blue;
          border-color: blue;
        "> ENVIAR REPORTE </ds-button>
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
      files: [],
      where: '',
      severity: '',
      description: '',
    };
  },

  methods: {
    handleFileDrop({ target }) {
      this.files = [...this.files, ...Object.entries(target.files).map(arr => arr[1])];
    },

    async handleSendButtonClick() {
      const response = await axios.post('https://back-marealta.herokuapp.com/core/complaints/', {
        user_hash: Math.random(),
        desc: this.description,
        place: this.where,
      });

      console.log(response);
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

.files-button {
  position: relative;
  margin-top: 8px;
  padding: 16px;
  text-align: center;
  background: black;
  color: white;
  border-radius: 4px;
}

.files-dropped {
  display: flex;
  flex-wrap: wrap;
  margin-top: 4px;

  >.file {
    margin-left: 2px;
    margin-bottom: 2px;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    background: #f1f1f1;
    font-family: Arial, Helvetica, sans-serif;
  }
}

.img {
  display: block;
  width: 250px;
  // height: 200px;
  margin: 0 auto 40px;
}
</style>
