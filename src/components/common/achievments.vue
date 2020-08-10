<template>
  <div>
    <q-card flat>
      <div class="row">
        <div class="col-md-4" v-if="$q.screen.gt.sm">
          <img src="statics/achievments.svg" alt="" width="100%">
        </div>
        <div class="col-md-8 col-xs-12 col-sm-12 row q-gutter-lg flex-center text-center">
          <q-card  class="col-xs-12" style="max-width:320px">
            <q-card-section>
              <div class="text-h2 text-secondary">20K+</div>
              <div class="text-h6 text-weight-light">Downloads</div>
            </q-card-section>
          </q-card>
           <q-card  class="col-xs-12" style="max-width:320px">
            <q-card-section>
              <div class="text-h2 text-secondary">5K+</div>
              <div class="text-h6 text-weight-light">Merchants</div>
            </q-card-section>
          </q-card>
           <q-card  class="col-xs-12" style="max-width:320px">
            <q-card-section>
              <div class="text-h2 text-secondary">4.5+</div>
              <div class="text-h6 text-weight-light">Rating</div>
            </q-card-section>
          </q-card>

        </div>
      </div>
    </q-card>

  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {}
  }
}
</script>
