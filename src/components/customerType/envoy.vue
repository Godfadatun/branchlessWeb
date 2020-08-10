<template>
  <div>
    <theHeader :content="content" ></theHeader>
    <!-- <bottomBar></bottomBar> -->
  </div>
</template>

<script lang="ts" >
import theHeader from '../common/header_carosel.vue'
import bottomBar from '../common/bottomBar.vue'
import { Carosel_model } from 'components/models';
export default {
  // name: 'ComponentName',
  components: {
    theHeader, bottomBar
  },
  data () {
    const content: Carosel_model = {
        title: 'The Freedom to Earn using your Smart Phone',
        sub_title: 'Being a Branchless Envoy is a simple and cost effective way of providing secured light banking services to banked and unbanked customers.',
        // sub_title_2: 'Your Earn Daily from ',
        details: [
          'Bank Account Opening',
          'ATM Card Issuance',
          'Prepaid VISA Card Issuance',
          'N10 transfer to all banks',
          'POS Services',
          ],
        // extra: 'Weekly Access fee of N250',
        img: 'statics/envoyO2.png',
        android: false,
        ios: false,
        early: true,
        earlyLink:'https://bit.ly/BranchlessEnvoy'
      }
    return { content }
  }
}
</script>
