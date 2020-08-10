<template>
  <div>
    <q-card flat :style="'min-height:' + ($q.screen.height - 80)+ 'px'" class="column flex-center">
    <!-- {{$q.screen.height}} -->
      <q-card-section class="row flex-center " :style="$q.screen.gt.sm ? {
        'background-image': 'url(statics/watermark2d.jpg)',
        'background-repeat': 'no-repeat',
        'background-position': 'left'
      }: ''">
         <div class="col-xs-12 col-sm-6 col-md-6" >
          <div class="text-h4">{{content.title}}</div>
          <div v-if="content.sub_title" class="text-subtitle2 text-weight-light">{{content.sub_title}}</div>
          <div v-if="content.sub_title_2" class="text-subtitle1 text-weight-bold">{{content.sub_title_2}}</div>
          <div class=" ">
            <ul v-if="content.details.length <= 5" class="text-h6 text-weight-light">
              <li  v-for="(item, index) in content.details" :key="index">
                {{item}}
              </li>
            </ul>
            <div v-else class="row q-py-md text-weight-light text-subtitle1">
              <div v-for="(item, index) in content.details" :key="index" class="col-6">
                 <li>{{item}}</li>
              </div>
            </div>
          </div>
          <div v-if="content.extra" class="text-h5 text-weight-light">{{content.extra}}</div>
          <div :class="'row justify-start items-start '+ resizing">
            <div>
              <q-btn dense flat  class="q-px-none">
                <img v-if="content.android" src="statics/googlePlay.png" alt="" width="200px">
              </q-btn>
            </div>
            <div v-if="content.ios">
              <q-btn stack  dense flat no-caps="" class="q-px-sm q-pt-sm q-mt-xs">
                <img  src="statics/apple.svg" alt="" width="180px" clas>
              </q-btn>
              <div class="text-caption text-secondary text-center">Coming Soon</div>
            </div>
            <div v-if="content.early" class="q-gutter-sm">
              <q-btn color="secondary" text-color="primary" no-caps="" label="Request For Early Access" type="a" :href="content.earlyLink" target="__blank" />
              <q-btn v-if="theroute == 'microbanking'" color="primary" text-color="secondary" no-caps="" type="a" href="/microbanking#pricing" label="Learn More"/>
            </div>

          </div>
        </div>
        <div :class="'col-xs-12 col-sm-6 col-md-6 ' + theorder">
          <img :src="content.img" alt="" width="100%">
        </div>
      </q-card-section>
    </q-card>




  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  props:['content'],
  data () {
    return {
      slide: 'style',
      theorder: this.$q.screen.lt.sm ? 'order-first': '',
      resizing: this.$q.screen.gt.sm ? '':'column flex-center text-center'
    }
  },
  computed:{
    theroute(){return this.$route.name}
  }
}
</script>
