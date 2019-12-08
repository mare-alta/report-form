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
$layout-grid-mobile-columns: 6;
$layout-grid-mobile-gutter: 16px;
$layout-grid-mobile-min-width: 320px;
$layout-grid-mobile-max-width: 740px;

$layout-grid-tablet-columns: 8;
$layout-grid-tablet-gutter: 16px;
$layout-grid-tablet-min-width: $layout-grid-mobile-max-width;
$layout-grid-tablet-max-width: 980px;

$layout-grid-desktop-columns: 12;
$layout-grid-desktop-gutter: 16px;
$layout-grid-desktop-min-width: $layout-grid-tablet-max-width;
$layout-grid-desktop-max-width: 1240px + (2 * $layout-grid-desktop-gutter);

@mixin mobile () {
  @media screen and (max-width: $layout-grid-mobile-max-width) {
    @content
  }
};

@mixin tablet () {
  @media screen
    and (min-width: $layout-grid-mobile-max-width)
    and (max-width: $layout-grid-desktop-min-width) {
    @content
  }
};

@mixin desktop () {
  @media screen and (min-width: $layout-grid-desktop-min-width) {
    @content
  }
};


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
