<template>
  <a :class="['button', ...variations.map((key) => key.length ? '-' + key : '')]">
    <ds-text tag="span" type="action">
      <slot/>
    </ds-text>
  </a>
</template>

<script>
export default {
  props: {
    variations: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
.button {
  display: flex;
  padding: 4rem;

  width: fit-content;

  text-decoration: none;
  user-select: none;
  color: white;

  border-radius: 1rem;
  border: 1px solid black;

  background: #000;

  cursor: pointer;

  transition: all .2s ease-in-out;

  // Variations
  &.-outlined {
    background: white;
    color: black;
  }

  &.-small {
    padding: 12px;
  }

  &:hover {
    box-shadow:
      0px 0px 8px rgba(0, 0, 0, 0.16),
      0px 0px 4px rgba(0, 0, 0, 0.16);
  }

  &:active {}

  &[disabled="disabled"] {
    opacity: 0.25;
    cursor: default;
    pointer-events: none;
  }
}
</style>
