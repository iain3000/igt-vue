<template>
  <div v-show="isActive">
  </div>
</template>

<script>

export default {
  name: "igt-sidebar-external-link",
  props: {
    name: {required: true},
    link: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: '',
    }
  },

  data() {
    return {
      isExternalLink: true,
      isActive: true
    };
  },

  created() {
    this.$parent.tabs.push(this); 
  },
}
</script>

<style scoped>

</style>
