<template>
  <div class="home">
    <h4>Welcome to Vuejs components</h4>
    <div>
        <ExampleDataTableVC></ExampleDataTableVC>
    </div>
    <div>
      <ExampleDataTableWithPaginationVC></ExampleDataTableWithPaginationVC>
    </div>

  </div>
</template>

<script>

import ExampleDataTableVC from "@/components/ExampleDataTableVC"
import ExampleDataTableWithPaginationVC from "@/components/ExampleDataTableWithPaginationVC"
export default {
  name: "VueComponents",
  components: {
    ExampleDataTableWithPaginationVC,
    ExampleDataTableVC

  }
};
</script>
