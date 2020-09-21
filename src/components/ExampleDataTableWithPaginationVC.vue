<template>
  <div>
    <h4>Example of creating a <i>data table</i> <i style="color: blue">with pagination</i> using the vuejs-components from library (min-gb)</h4>
    <p>
      <br />
      <SimpleTable v-bind:data="adata" v-bind:columns="columns"></SimpleTable>
      <SimplePanel>

        <SimplePagination class="min-gb-pagination"
                          :current-page="currentPage"
                          :page-count="pageCount"
                          :visible-pages-count="8"
                          @nextPage="pageChangeHandle('next')"
                          @previousPage="pageChangeHandle('pref')"
                          @loadPage="pageChangeHandle"
        ></SimplePagination>

      </SimplePanel>
    </p>
    <h4>Code</h4>
    <pre>
      {{code}}
    </pre>
  </div>
</template>
<script>
import Components4vc from "@min-gb/vuejs-components";

export default {
  name: "ExampleDataTableWithPaginationVC",
  comments: {
    ...Components4vc
  },
  data() {
    return {
      adata: [],
      currentPage: 1,
      pageCount: 5,
      columns: [{name: 'test'},
        {name: 'test1'},
        {name: 'test2'}],
      code: `
      <template>
  <div>
      <SimpleTable v-bind:data="adata" v-bind:columns="columns"></SimpleTable>
      <SimplePanel>

        <SimplePagination class="min-gb-pagination"
                          :current-page="currentPage"
                          :page-count="pageCount"
                          :visible-pages-count="8"
                          @nextPage="pageChangeHandle('next')"
                          @previousPage="pageChangeHandle('pref')"
                          @loadPage="pageChangeHandle"
        ></SimplePagination>

      </SimplePanel>
  </div>
</template>
<script>
import Components4vc from "@min-gb/vuejs-components";

export default {
  name: "ExampleDataTableWithPaginationVC",
  comments: {
    ...Components4vc
  },
  data() {
    return {
      adata: [],
      currentPage: 1,
      pageCount: 5,
      columns: [{name: 'test'},
        {name: 'test1'},
        {name: 'test2'}],
      loadData(page) {
        let ldata = [];
        for (let i=0;i<this.pageCount; i++) {
          ldata.push( {"test": "vtrc1r"+(i*page), "test1": "vtc2r"+(i*page), "test2": "vtc3r"+(i*page), "level": "5"})
        }
        return ldata;
      }
    }
  },
  created() {
    this.adata = this.loadData(this.currentPage)
  },
  methods: {
    pageChangeHandle(pr) {
      if (pr==='next') {
        console.log('pageChangeHandle next')
        return
      } else if (pr==='pref') {
        console.log('pageChangeHandle pref')
        return
      }
      this.currentPage = Number(pr)
      this.adata = this.loadData(this.currentPage);
    },
  }

};
            `,
      loadData(page) {
        let ldata = [];
        for (let i=0;i<this.pageCount; i++) {
          ldata.push( {"test": `vtrc1r${(i*page)}`, "test1": `vtc2r${(i*page)}`, "test2": `vtc3r${(i*page)}`, "level": "5"})
          //ldata.push( {"test": "vtrc1r"+(i*page), "test1": "vtc2r"+(i*page), "test2": "vtc3r"+(i*page), "level": "5"})
        }
        return ldata;
      }
    }
  },
  created() {
    this.adata = this.loadData(this.currentPage)
  },
  methods: {
    pageChangeHandle(pr) {
      if (pr==='next') {
        console.log('pageChangeHandle next')
        return
      } else if (pr==='pref') {
        console.log('pageChangeHandle pref')
        return
      }
      this.currentPage = Number(pr)
      this.adata = this.loadData(this.currentPage);
    },
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h4 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
pre {
  margin: 0;
}
</style>

