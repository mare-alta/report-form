<template>
  <component :is="tag || 'div'">
    <slot :name="slotName"/>
  </component>
</template>

<script>
export default {
  props: {
    request: {
      type: Function,
    },
    delay: {
      type: Number,
      default: 0,
    },
    tag: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      // initial, loading, sucess, fail,
      state: 'initial',
      status: '',
      message: '',
    };
  },

  provide() {
    return {
      // State
      state: this.state,
      status: this.status,
      message: this.message,

      // Functions
      fetchData: this.fetchData,
      refetchData: this.refetchData,
    };
  },

  computed: {
    slotName() {
      return Object.keys(this.$slots).find(key => key.split(',').some(name => this.state === name || this.status === name || this.message === name));
    },
  },

  methods: {
    async fetchData(promise) {
      this.state = 'loading';

      const handlePromiseResolve = ({ status, message } = {}, sucess) => {
        this.state = sucess ? 'sucess' : 'fail';
        this.status = status;
        this.message = message;

        if (this.delay) setTimeout(() => { this.state = 'initial'; }, this.delay);
      };

      try {
        const response = await promise();
        handlePromiseResolve(response, true);
        return response;
      } catch (error) {
        handlePromiseResolve(error, false);
        throw error;
      }
    },

    refetchData() {
      return this.fetchData(this.request);
    },
  },

  mounted() {
    if (this.request) this.fetchData(this.request);
  },
};
</script>
