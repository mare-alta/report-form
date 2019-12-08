<template>
  <ds-container id="form-view">
    <div class="form">
      <ds-text
        type="title"
        style="display: flex; align-items: center; margin-bottom: 40px;" size="medium">
        <img class="img" src="@/assets/logo.png" />
        Maré Alta
      </ds-text>

      <ds-text type="title" size="big">ID</ds-text>
      <ds-text style="margin-top: 8px;">
        Utilize o <b>ID</b> a baixo para rastrear seu reporte. <br>
        É importante o acompanhamento do processo para entender o
        que as autoridades estão fazendo a respeito do seu reporte.
      </ds-text>

      <div class="id">
        <ds-text type="title" size="big"> {{ id }} </ds-text>
      </div>

      <ds-text
        tag="a"
        style="display: block; margin-top: 16px;"
        :href="'/search?id=' + id"> Acompanhar meu reporte </ds-text>
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

export default {
  name: 'id',
  data() {
    return {
      id: '12AVD-XLY',
    };
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

.id {
  padding: 16px;
  margin-top: 16px;
  border: 3px dashed black;
  border-radius: 8px;
  width: fit-content;
}

.img {
  width: 80px;
  margin-right: 20px;
}
</style>
