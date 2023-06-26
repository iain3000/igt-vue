<template>
  <span class="flex flex-row">
    <img v-if="item.image"
         class="w-8 h-8 mr-1"
         :src="getImageUrl(item.image)" :alt="item.image">
    {{ item.name }}
  </span>

</template>

<script>
import {KeyItem} from "incremental-game-template";

import { getImageUrl } from "@/utils";

export default {
  name: "igt-key-item-small",
  props: {
    item: {
      type: KeyItem,
      required: true,
    },
  },
  methods: {
    getImageUrl
  }
}
</script>

<style scoped>
</style>
