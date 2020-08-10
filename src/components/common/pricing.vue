<template>
  <div>
    <div class="row justify-center q-gutter-sm q-pa-sm">
      <q-card v-for="(val, index) in data" :key="index" bordered :class="$q.screen.lt.sm ? 'col-xs-12': ''" :style="$q.screen.gt.sm ? 'max-width:320px': ''">
        <q-card-section class="text-center justify-center">
          <div class="text-subtitle2">{{ val.title }}</div>
          <div class="text-h4">{{ val.price }}<span class="text-caption">{{val.duration}}</span> </div>
          <q-btn rounded size="sm" no-caps color="secondary" label="Sign Up Now" class="q-px-sm q-my-sm" />
        </q-card-section>

        <q-separator inset color="orange" />
        <q-card-section>
          <div v-for="(item, index) in val.details" :key="index" class="text-h6 row q-pa-sm">
            <q-icon name="check" color="green" />
            <div class="text-caption text-weight-light col-11">{{ item }}</div>
           </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  props:['data'],
  data () {
    return {}
  }
}
</script>
