<template>
  <GatewaysTable />
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import GatewaysTable from "./components/GatewaysTable.vue";

export default defineComponent({
  name: "App",
  components: {
    GatewaysTable,
  },
});
</script>

<style lang="scss">
</style>
