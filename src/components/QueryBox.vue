<template>
  <div>
    <form novalidate @submit.stop.prevent="submit">
      <md-input-container>
        <md-icon class="md-accent">verified_user</md-icon>

        <label>Enter the url of a news article</label>
        <md-input :disabled="disabled" v-model="url"></md-input>
      </md-input-container>
    </form>
  </div>
</template>

<script>
  const defaultUrl = 'https://en.wikipedia.org/wiki/cat'
  export default {
    name: 'query-box',
    props: ['value', 'submitOnMount', 'disabled'],
    data() {
      return {
        url: defaultUrl,
      }
    },
    methods: {
      submit(event) {
        this.$emit('input', this.url || defaultUrl)
      },
    },
    mounted() {
      if (this.submitOnMount) {
        this.submit()
      }
    },
  }
</script>

<style scoped>
  .md-input-container.md-theme-default.md-has-value {
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
