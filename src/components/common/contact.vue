<template>
  <div>
    <q-card flat :style="'min-height:' + ($q.screen.height - 80)+ 'px'" class="column flex-center">
      <q-card-section class="row flex-center">

        <div :class="'col-xs-12 col-sm-6 col-md-6 ' + theorder">
          <img src="statics/contact.svg" alt="" width="100%">
        </div>

        <div class="col-xs-12 col-sm-6 col-md-6">
          <div class="text-h2 q-py-md">Contact Us </div>
          <div class="q-py-md">
            <div class="text-h5 text-weight-light">Got a question?</div>
            <div class="text-weight-bold">You can contact us through our app</div>
          </div>

          <div class="q-py-md">
            <div class="text-h5 text-weight-light">Write us at,</div>
            <div class="row ">
              <div class="col-md-6 col-xs-12">
                <q-item>
                  <q-item-section top avatar>
                    <q-avatar color="primary" text-color="secondary" icon="ion-ios-mail" />
                  </q-item-section>
                  <q-item-section side top>
                    <q-item-label caption>Email Us at</q-item-label>
                    <q-item-label class="text-bold">hello@branchless.io</q-item-label>
                  </q-item-section>
                </q-item>

              </div>
              <!-- <div class="col-md-6 col-xs-12">
                <q-item>
                  <q-item-section top avatar>
                    <q-avatar color="primary" text-color="secondary" icon="ion-call" />
                  </q-item-section>
                  <q-item-section side top>
                    <q-item-label caption>Contact Us at</q-item-label>
                    <q-item-label class="text-bold">+234 813 756 3342</q-item-label>
                  </q-item-section>
                </q-item>
              </div> -->
            </div>
          </div>


          <!-- <div class="text-weight-bold q-py-md">Working Hours: 9 AM - 11 PM</div> -->

          <div class="q-py-md">
            <div class="text-h5 text-weight-light">Find us at,</div>
            <div class="text-weight-bold" style="max-width: 300px">No. 6A Embu Street off Aminu Kano, Wuse 2, Abuja.</div>
          </div>

        </div>
      </q-card-section>
    </q-card>
    <theFooter />

  </div>
</template>

<script>
import theFooter from 'components/common/footer.vue'
export default {
  // name: 'ComponentName',
  props:['content'],
  components: { theFooter },
  data () {
    return {
      slide: 'style',
      theorder: this.$q.screen.lt.sm ? 'order-first': '',
      resizing: this.$q.screen.gt.sm ? '':'column flex-center text-center'
    }
  }
}
</script>
