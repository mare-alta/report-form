<template>
  <input :value="this.value" @input="$emit('input', $event.target.value)" class="input">
</template>

<script>
export default {
  props: ['value'],
};
</script>

<style lang="scss">
.input {
  position: relative;
  padding: 4rem;
  width: 320px;
  min-width: 320px;

  font-size: 5rem;
  color: black;

  border: 1px solid #A8A8A8;
  border-radius: 1rem;

  transition: all .2s ease-in-out;

  &:hover,
  &:focus {
    box-shadow:
      0px 0px 8px rgba(0, 0, 0, 0.16),
      0px 0px 4px rgba(0, 0, 0, 0.16);
  }

  &:focus {
    border-color: black;
    outline: none;
  }
}
</style>
