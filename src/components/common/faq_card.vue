<template>
  <div  class="">
    <q-list  style="max-width:800px">
      <q-separator />
      <q-expansion-item :default-opened="theIndex == '0'" expand-separator class="text-h6" icon="ion-ios-arrow-forward" :label="data.header" >

        <q-card class="text-body1">
          <q-card-section v-if="data.content" v-html="data.content"/>
          <q-card-section v-if="data.contentA" >
            <ul>
              <li v-for="(item, index) in data.contentA" :key="index" > {{item}} </li>
            </ul>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>


  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  props:['data', 'theIndex'],
  data () {
    return {}
  }
}
</script>
