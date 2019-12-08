<template>
  <component
    :is="tag"
    :class="['text', ...[type, size, ...variations].map((key) => key.length ? '-' + key : '')]">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'p',
    },
    type: {
      type: String,
      default: 'body',
    },
    size: {
      type: String,
      default: '',
    },
    variations: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
.text {
  font-family: arial, sans-serif;
  font-size: 4rem;
  font-weight: 400;
  letter-spacing: 0.01em;

  @include desktop {
    font-size: 5rem;
  }

  &.-title {
    font-weight: bold;
    font-size: 5rem;

    @include desktop {
      font-size: 6rem;
    }

    &.-medium {
      font-size: 7rem;

      @include desktop {
        font-size: 8rem;
      }
    }

    &.-big {
      font-size: 8rem;

      @include desktop {
        font-size: 9rem;
      }
    }
  }

  &.-label {
    font-weight: bold;
  }

  &.-action {
    font-size: 5rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  &.-input {
    font-size: 5rem;
  }
}
</style>
