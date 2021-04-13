<template>
  <div class="container">
    <c-progress :width="50" /><br />
    <c-progress :width="75" color="red" /><br />
    <c-progress :width="25" :showStripes="false" /><br />
  </div>
</template>

<script>
import CProgress from "../components/CProgress.vue";
export default {
  components: {
    CProgress,
  },
};
</script>

<style>
</style>