<template>
  <div>

    <div class="relative pt-1">
      <div class="flex justify-between">
        <p>Lvl. {{ expLevel.getLevel() }} / {{ expLevel.maxLevel }}</p>
        <p>{{ $filters.numberFormat(progress.actual) }} / {{ $filters.numberFormat(progress.target) }}</p>

      </div>
      <igt-progress-bar :percentage="progressPercentage"></igt-progress-bar>

    </div>
  </div>
</template>

<script>
import IgtProgressBar from "@/components/util/igt-progress-bar.vue";
import {IgtExpLevel} from "incremental-game-template";

export default {
  name: "igt-exp-level",
  components: {IgtProgressBar},
  props: {
    expLevel: {
      type: IgtExpLevel,
      required: true,
    },
  },
  computed: {
    progress() {
      return this.expLevel.getLevelProgress();
    },
    progressPercentage() {
      return this.progress.getPercentage();
    }
  },

}
</script>

<style scoped>

</style>
