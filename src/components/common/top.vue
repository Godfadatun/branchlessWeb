<template>
  <div>
    <q-toolbar class="bg-transparent">
      <!-- div
      <q-btn v-if="theroute != 'dashboard'" size="sm" no-caps outline label="Dashboard" :to="{name: 'dashboard'}" class="q-mr-xs" /> -->
      <q-space />
      <div v-if="theroute == 'dashboard'">
        <q-btn size="sm" no-caps outline label="Refer and Earn" class="q-mr-xs" />
        <q-btn size="sm" no-caps outline label="Become an Agent" />
      </div>

    </q-toolbar>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {}
  },
  computed: {
    theroute(){return this.$route.name },
  },
}
</script>
