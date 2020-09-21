<template>
  <div>
    <h4>Example of creating a <i style="color:blue">data table</i> using the vuejs-components form library (min-gb)</h4>
    <p>
      <br />
      <SimpleTable v-bind:data="adata" v-bind:columns="columns"></SimpleTable>
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
  name: "ExampleDataTableVC",
  comments: {
    ...Components4vc
  },
  data() {
    return {
      adata: [],
      columns: [{name: 'test'},
        {name: 'test1'},
        {name: 'test2'}],
      code: `<template>
                <div>
                                                                           <SimpleTable v-bind:data="adata" v-bind:columns="columns"></SimpleTable>
                </div>
     </template>
                 <script>
            import Components4vc from "@min-gb/vuejs-components";
            export default {
                name: "ExampleDataTableVC",
                comments: {
                    ...Components4vc
                },
                data() {
                    return {
                        adata: [],
                        columns: [{name: 'test'}, {name: 'test1'}, {name: 'test2'}],
                        loadData() {
                            let ldata = [];
                            for (let i=0;i<5; i++) {
                                ldata.push( {"test": "vtrc1r"+i, "test1": "vtc2r"+i, "test2": "vtc3r"+i, "level": "5"})
                            }
                            return ldata;
                        }
                    }
                },
                created() {
                    this.adata = this.loadData()
                }
             };
            `,
      loadData() {
        let ldata = [];
        for (let i=0;i<5; i++) {
          ldata.push( {"test": `vtrc1r${i}`, "test1": `vtc2r${i}`, "test2": `vtc3r${i}`, "level": "5"})
          //ldata.push( {"test": "vtrc1r"+i, "test1": "vtc2r"+i, "test2": "vtc3r"+i, "level": "5"})
        }
        return ldata;
      }
    }
  },
  created() {
    this.adata = this.loadData()
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

