<template>
  <div>
    <q-card square flat class="bg-info text-primary row flex-center q-mb-none">
      <q-card-section :class="'col-md-4 col-xs-12 '+ resizing">
        <q-btn to="/" flat dense stack no-caps>
          <img src="statics/branchlessLogo.png" style="max-width: 200px">
          <!-- <div class="text-caption text-bold q-pb-md text-white bg-primary">
            © 2020 Branchless | All Rights Reserved
          </div> -->
        </q-btn>
        <!-- <div class="text-caption q-pt-sm text-white">
          No. 6A Embu Street off Aminu Kano, Wuse 2, Abuja.
        </div> -->

      <q-separator inset vertical color="secondary" class="gt-sm" style="min-width: unset" />

      </q-card-section>
       <!-- <q-separator inset vertical color="warning" class="gt-sm" style="min-width: unset" /> -->
      <q-card-section class="col-md-3 col-xs-12">
        <div class="flex justify-center column ">
          <q-btn dense flat  class="q-px-none gt-sm">
            <img src="statics/googlePlay.png" alt="" width="200px">
          </q-btn>
          <q-btn dense flat  class="q-px-sm gt-sm">
            <img v-if="theroute == 'main'" src="statics/apple.svg" alt="" width="180px">
          </q-btn>
          <div class="row flex-center text-white">

            <!-- <q-btn round flat icon="ion-logo-twitter"  type="a" href="https://twitter.com/branchlessHQ" target="_blank" /> -->
            <q-btn round flat icon="fab fa-facebook-f" type="a" href="https://facebook.com/branchlessHQ" target="__blank" />
            <q-btn round flat icon="fab fa-instagram" type="a" href="https://instagram.com/branchlessHQ" target="_blank" />
          </div>

        </div>
         <div class="text-center text-white">hello@branchless.io</div>
      </q-card-section>
      <!-- <q-separator inset vertical color="warning" class="gt-sm" /> -->
      <q-card-section class="col-md-4 col-xs-12 column text-left">
        <q-btn color="black" v-if="$q.screen.gt.sm" :to="{name : 'envoy'}" label="Envoy (Super Ageent)" no-caps flat />
        <q-btn color="black" v-if="$q.screen.gt.sm" :to="{name : 'microbanking'}" label="Micro Banking" no-caps flat />
        <q-btn color="black" v-if="$q.screen.gt.sm" :to="{name : 'contact'}" label="Contact Us" no-caps flat />
        <q-btn color="black" v-if="$q.screen.gt.sm" :to="{name : 'faq'}" label="FAQ" no-caps flat />
        <!-- <div class="text-caption text-bold q-pt-md text-center">
          © 2020 Branchless | All Rights Reserved
        </div> -->
      </q-card-section>
    </q-card>
    <div class="text-caption text-bold q-pt-sm text-center text-white bg-primary">
      © 2020 Branchless | All Rights Reserved
    </div>

  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      resizing: this.$q.screen.gt.sm ? '':'column flex-center text-center'
    }
  },
  computed: {
    theroute(){return this.$route.name }
  },
}
</script>
