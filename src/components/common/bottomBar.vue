<template>
  <div>
    <q-tabs
      indicator-color="transparent"
      class="text-primary bg-grey-3 q-py-sm"
      no-caps

    >
      <q-btn class="q-mx-xs" outline no-caps name="account" label="Open Bank Account" />
      <q-btn class="q-mx-xs" outline no-caps name="card" label="Issue ATM Debit Card" />
      <q-btn class="q-mx-xs" outline no-caps name="transfer" label="N10 Wallet to Bank Transfer" />
      <q-btn class="q-mx-xs" outline no-caps name="pos" label="POS Transfer" />
    </q-tabs>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      tab:'account'
    }
  }
}
</script>
