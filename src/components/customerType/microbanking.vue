<template>
  <div>
    <theHeader :content="content" ></theHeader>
    <!-- <theAchievments /> -->
    <div class="text-center q-py-md" id="pricing">
      <div class="text-h4 text-secondary">Pricing</div>
      <div class="text-h6 text-weight-light">Access to MicroBanking Software</div>
    </div>
    <thePricing :data="theData" />
  </div>
</template>

<script lang="ts" >
import theHeader from 'components/common/header_carosel.vue'
import thePricing from 'components/common/pricing.vue'
// import theAchievments from '../common/achievments.vue'
import { Carosel_model, Price_model } from 'components/models';
export default {
  // name: 'ComponentName',
  components: {
    theHeader,
    thePricing
    // theAchievments
  },
  data () {
    const content: Carosel_model = {
      title: 'Digitizing Cash Transaction for Thrift Collectors, Association and Cooperatives',
      details: [
        'Manage Deposit and Investment',
        'Issue ATM Cards to Customers',
        'Process Micro-Loans',
      ],
      img: 'statics/LaptopLY.svg',
      android: false,
      ios: false,
      early: true,
      earlyLink:'https://bit.ly/BranchlessMicroBanking'
    }
    const theData: Price_model[] =[
        {
          title: 'Silver',
          price: 'N699',
          duration:'/week',
          details: [
            'Earn N80 for Every ATM card Issued',
            'Maximum of 150 Members',
            'Maximum of 5 Marketers ( Android)',
            'Issuance of ATM card  ( 50 Units/Month)',
            'No BVN Enrolment',
            'Limited Branding Materials',
            'Free POS ( Once you Issue 150 ATM cards)'
          ]
        },
        {
          title: 'Gold',
          price: 'N17,398',
          duration:'/Annually',
          details: [
            'Earn N150 for Every ATM card Issued',
            'Maximum of 5000 Members',
            'Maximum of 50 Marketers ( Android)',
            'Issuance of ATM card  ( Unlimited Units/Month)',
            'BVN Enrolment',
            'Ample  Branding Materials',
            'Free POS ( Once you Issue 50 ATM cards)',
            'Access to Loan to Boost Business Activities'
          ]
        },

      ]
    return { content, theData }
  }
}
</script>
