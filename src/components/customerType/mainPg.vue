<template>
  <div>
    <theHeader :content="content" />
    <!-- <theAchievments /> -->
  </div>
</template>

<script lang="ts" >
import theHeader from '../common/header_carosel.vue'
// import theAchievments from '../common/achievments.vue'
import { Carosel_model } from 'components/models';
export default {
  // name: 'ComponentName',
  components: {
      theHeader,
      // theAchievments
    },
  data () {
    const content: Carosel_model = {
      title: 'A Simple and Smart way to Save Money.',
      details: [
        'Easy and Convenient',
        'Safe and Secure',
        'Achieve set goals'
        ],
      img: 'statics/new1.png',
      android: true,
      ios: true
    }
    return { content }
  }
}
</script>
