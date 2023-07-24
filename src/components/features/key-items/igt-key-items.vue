<template>
  <igt-feature>
    <div class="flex flex-row flex-wrap">
      <igt-key-item :key="item.id" v-for="item in items" :item="item"></igt-key-item>
    </div>
  </igt-feature>
</template>

<script>
import IgtFeature from "@/components/util/igt-feature.vue";
import IgtKeyItem from "@/components/features/key-items/igt-key-item.vue";
import { IgtKeyItemStore as IgtKeyItems } from "@/stores/key-items/igt-k-i-s-extended";
import { useKeyItemStore } from "@/stores/key-items/key-items-store";

export default {
  name: "igt-key-items",
  components: {IgtKeyItem, IgtFeature},
  props: {
    keyItemsFeature: {
      type: IgtKeyItems,
      required: true
    },
  },
  computed: {
    items() {
      return this.keyItemsFeature.list;
    }
  },
  mounted() {
    const store = useKeyItemStore();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    store.$onAction(({ name, store, args, after, onError }) => {
            after((keyItem) => {
                  this.$notify(
                  {
                    title: `Key Item get: ${keyItem.name}`,
                    text: keyItem.description,
                    type: "success",
                    group: "top-left",
                  },
                  4000
                );
            })
            onError((error) => {
                console.error(error);
                throw(error);
            })
        })
    // this.keyItemsFeature.onKeyItemGain.subscribe((keyItem) => {
    //   this.$notify(
    //       {
    //         title: `Key Item get: ${keyItem.name}`,
    //         text: keyItem.description,
    //         type: "success",
    //         group: "top-left",
    //       },
    //       4000
    //   );
    // })
  }
}
</script>

<style scoped>
</style>
