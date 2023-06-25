<template>
  <igt-feature container-class="bg-yellow-100 dark:bg-gray-700">
    <igt-tabs>
      <igt-tab :name="$filters.humanizeString(tab.label)" :selected="index === 0" :key="index + '-' +tab.label"
               v-for="(tab, index) in developerPanel.tabs">
        <div :key="index + '-' +field.propertyName" v-for="(field, index) in tab.children">
          <component :is="field.componentName" :field="field"></component>
        </div>
      </igt-tab>
    </igt-tabs>
  </igt-feature>
</template>

<script>
import IgtNumberField from "@/components/developer-panel/fields/igt-number-field.vue";
import IgtButtonField from "@/components/developer-panel/fields/igt-button-field.vue";
import IgtRangeField from "@/components/developer-panel/fields/igt-range-field.vue";
import IgtTabs from "@/components/util/igt-tabs.vue";
import IgtTab from "@/components/util/igt-tab.vue";
import IgtDisplayField from "@/components/developer-panel/fields/igt-display-field.vue";
import IgtChoiceField from "@/components/developer-panel/fields/igt-choice-field.vue";
import IgtFeature from "@/components/util/igt-feature.vue";
import {DeveloperPanel} from "incremental-game-template";

export default {
  name: "igt-developer-panel",
  components: {
    IgtFeature,
    IgtChoiceField,
    IgtDisplayField,
    IgtTab,
    IgtTabs,
    IgtRangeField,
    IgtButtonField,
    IgtNumberField,
  },
  props: {
    developerPanel: {
      type: DeveloperPanel,
      required: true,
    },
  },
}
</script>

<style scoped>

</style>
