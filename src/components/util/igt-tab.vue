<template>
  <div v-show="isActive">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "igt-tab",
  props: {
    name: {required: true},
    selected: {default: false}
  },

  data() {
    return {
      canSelect: true,
      isActive: false
    };
  },

  computed: {
    href() {
      return '#' + this.name.toLowerCase().replace(/ /g, '-');
    }
  },
  
  created() {
    this.$parent.tabs.push(this); 
  },

  mounted() {
    this.isActive = this.selected;
  }
}
</script>

<style scoped>

</style>
