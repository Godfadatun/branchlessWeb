<template>
  <div>
    <mainPg v-if="theroute == 'main'" />
    <envoy v-if="theroute == 'envoy'"/>
    <microbanking v-if="theroute == 'microbanking'"/>
    <theFooter />
  </div>
</template>

<script>
import mainPg from './mainPg'
import envoy from './envoy'
import microbanking from './microbanking'
import theFooter from 'components/common/footer.vue'
export default {
  // name: 'ComponentName',
  components: { mainPg, envoy, microbanking, theFooter },
  data () {
    return {}
  },
  computed: {
    theroute(){return this.$route.name}
  },
}
</script>
