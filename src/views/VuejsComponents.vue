<template>
  <div class="home">
    <h4>Welcome to Vuejs components</h4>
    <ul>
      <li>
        <ExampleDataTableVC></ExampleDataTableVC>
      </li>
      <li></li>
    </ul>
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
