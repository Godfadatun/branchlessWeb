<template>
  <q-page class="column flex-center">
    <!-- content -->
    <q-card flat class="bg-orange-1 q-my-sm full-width">
      <q-card-section class="q-py-xl">
        <div class="text-h3 text-center">How can we help you?</div>
        <div class="text-bold text-center q-py-sm">You can also browse the topics below to find what you are looking for.</div>
      </q-card-section>

    </q-card>
    <div class="q-my-xl ">
      <FaqCard v-for="(item, index) in faq_content" :key="index" :data="item" :theIndex="index"></FaqCard>
    </div>
    <theFooter class="full-width" />
  </q-page>
</template>

<script lang="ts">
import FaqCard from 'components/common/faq_card.vue'
import { Faq } from 'components/models';
import theFooter from 'components/common/footer.vue'
export default {
  // name: 'PageName',
  components:{
   FaqCard, theFooter
  },
  data() {
    const faq_content : Faq[] = [
      {
        header: 'Branchless?',
        content: 'Branchless is a simple app that enables you save money easily and conveniently'
      },
      {
        header: 'How do I begin to Save on Branchless',
        contentA: [
          'Create an account on our Website or Download the app from the PlayStore or AppStore',
          'Provide your Details and Login',
          'Activate your account by tokenizing your Debit Card ( MasterCard,VISA, Verve)',
          'Create your savings plan and start saving money.'
        ]
      },
      {
        header: 'How much can I start with',
        content: 'You can start wit as little as N100 and you can choose to save Daily, Weekly or Monthly'
      },
      {
        header: 'How Safe is my money with Branchless',
        content: 'All Transaction on Branchless is handled by PCIDSS-compliant payment processors(PayStack and Flutterwave) licenced by Central Bank of Nigeria. This makes your card details safe and are warehoused where they can never be compromised. <br/><br/><br/> All Funds are transmitted to our Commercial Banking Partner on our site is via an encrypted 256-bit HTTPS SSL connection. Funds are safeguarded. <br/><br/> In summary, your money is 100% Safe'
      },
      {
        header: 'Can I save my money manually?',
        content: 'Yes. We have the quick save Option on the app dashboard that allows you to manually save funds, you can withdraw this funds at anytime.'
      },
      {
        header: 'Can I terminate my Savings Plan at anytime?',
        content: 'Yes, You can terminate your Savings Plan at anytime, and the funds will be accessible to you within 48hrs'
      },
      {
        header: 'Do I get charged penalty fees for early termination of my Savings Plan?',
        content: 'NO. We do not Charge your any penalty fee. You can terminate your plans FREE OF CHARGE.'
      },
      {
        header: 'Do you have Referral Programs?',
        content: 'Yes, we do have referral program, that enables you earn when you invite your friends to Branchless'
      },
      {
        header: 'How do I earn earn with your referral program?',
        content: 'When someone signs up to Branchless using your referral link, you earn 50% of activation fee, which is paid Instantly into your Branchless Wallet.'
      },
      {
        header: 'Is there any limit earning via the referral program?',
        content: 'There is absolutely no limit, you can invite as many people as you can.'
      },
      {
        header: 'Can I receive payment using my Branchless Wallet?',
        content: 'Yes, you can use a customized payment link to accept money from anyone, even if they dont have a Branchless Wallet. Its a simple way to accept payment from friends, family, business associates.'
      },
    ]
    return {
      faq_content
    }
  },

}
</script>
