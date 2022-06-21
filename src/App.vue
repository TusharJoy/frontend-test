<template>
  <component :is="layout">
    <div class="col-6">
      <div
        v-if="showAlert"
        class="alert alert-info alert-dismissible fade show"
        :class="`alert-${alert.type}`"
        role="alert"
      >
        {{ alert.message }}
      </div>
    </div>

    <router-view />
  </component>
</template>

<script>
import "@/scss/app.scss";

export default {
  computed: {
    layout() {
      return `layout-${this.$route.meta.layout || "default"}`;
    },
    alert() {
      return this.$store.state.alert;
    },
    showAlert: {
      get() {
        return !!this.$store.state.alert.message;
      },
      set() {
        this.$store.dispatch("alert/clear");
      },
    },
  },
};
</script>
