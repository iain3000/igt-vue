<template>
  <div v-show="isActive">
  </div>
</template>

<script>

export default {
  name: "igt-sidebar-category",
  props: {
    name: {required: true},
    selected: {default: false}
  },

  data() {
    return {
      isCategory: true,
      isActive: false
    };
  },
  
  created() {
    this.$parent.tabs.push(this); 
  },
}
</script>

<style scoped>

</style>
