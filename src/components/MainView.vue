<template>
  <div class="main-container">
    <Header :headerDate="headDate" />
  </div>
</template>

<script>
import Header from "./Header";
export default {
  name: "Main",
  components: { Header },
  data() {
    return {
      headDate: {
        day: new Date().getDate(),
        month: new Date().getMonth(),
        year: new Date().getFullYear()
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
