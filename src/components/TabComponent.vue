<template>
  <div class="container">
    <b-tabs card>
      <router-link to="/breadcrumb">
        <b-tab title="BreadCrumb" active @click="redirectTo('breadcrumb')">
          <b-card-text>BreadCrumb</b-card-text>
        </b-tab>
      </router-link>
      <router-link to="/calender">
        <b-tab title="Calender">
          <b-card-text>Calender</b-card-text>
        </b-tab>
      </router-link>
      <router-link to="/dropdown">
        <b-tab title="Drop down">
          <b-card-text>Drop down</b-card-text>
        </b-tab>
      </router-link>
      <router-link to="/dropdown">
        <b-tab title="Drop down">
          <b-card-text>Drop down</b-card-text>
        </b-tab>
      </router-link>
      <router-link to="/progress">
        <b-tab title="Progress">
          <b-card-text>Progress</b-card-text>
        </b-tab>
      </router-link>
      <router-link to="/skeleton">
        <b-tab title="Skeleton">
          <b-card-text>Skeleton</b-card-text>
        </b-tab>
      </router-link>
    </b-tabs>
  </div>
</template>

<script>
export default {
  methods: {
    redirectTo(path) {
      debugger;
      this.$router.push(`/${path}`);
    },
  },
};
</script>

<style>
</style>