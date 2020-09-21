<template>
  <div class="home">
    <h4>Welcome to Vuejs components</h4>
    <div>
        <ExampleDataTableVC></ExampleDataTableVC>
    </div>

  </div>
</template>

<script>

import ExampleDataTableVC from "@/components/ExampleDataTableVC"
export default {
  name: "VueComponents",
  components: {
    ExampleDataTableVC

  }
};
</script>
