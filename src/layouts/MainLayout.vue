<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered v-if="theroute != 'otp'">
      <div v-if="theroute != 'register'">
       <div v-if="theroute != 'forgot'">
        <q-toolbar class="bg-white text-black" v-if="theroute != 'login'" >
          <q-btn flat dense round v-if="$q.screen.lt.md" icon="menu" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen" />
          <q-toolbar-title>
            <q-btn to="/" flat dense stack no-caps>
              <img src="statics/branchlessLogo.jpg" style="max-width: 150px">
              <div class="absolute-bottom text-weight-light q-mb-sm text-caption">
                ...simply save
              </div>
            </q-btn>
          </q-toolbar-title>

          <!-- <q-btn v-if="$q.screen.gt.sm" label="Login" no-caps flat type="a" href="https://app.branchless.io/" target="__blank" />
          <q-btn v-if="$q.screen.gt.sm" size="12px" label="Sign Up" no-caps outline type="a" href="https://app.branchless.io/register" target="__blank" class="q-mr-xl" /> -->
          <!-- <q-btn v-if="$q.screen.gt.sm" round flat icon="ion-logo-twitter" type="a" href="https://twitter.com/branchlessHQ" target="_blank" /> -->
          <q-btn v-if="$q.screen.gt.sm" round flat icon="fab fa-facebook-f" type="a" href="https://facebook.com/branchlessHQ" target="__blank" />
          <q-btn v-if="$q.screen.gt.sm" round flat icon="fab fa-instagram" type="a" href="https://instagram.com/branchlessHQ" target="_blank" class="q-mr-xs"/>

          <q-btn dense v-if="$q.screen.gt.sm" label="FAQ" :to="{name : 'faq'}" no-caps flat class="q-mr-xl" />

          <q-btn
            flat
            dense
            round
            v-if="$q.screen.gt.sm"
            icon="menu"
            aria-label="Menu"
          >
            <q-menu>
              <q-list style="min-width: 100px">
                <EssentialLink
                  v-for="link in essentialLinks"
                  :key="link.title"
                  v-bind="link"
                />
              </q-list>
            </q-menu>
          </q-btn>
        </q-toolbar>
        <!-- <div v-if="$q.screen.lt.md">
          <q-toolbar v-if="theroute != 'login'" class="flex flex-center q-gutter-xs">
            <q-btn size="sm" rounded label="Login" no-caps :to="{name : 'login'}" style="border: solid orange 1px" />
            <q-btn size="sm" rounded label="SignUp" no-caps :to="{name : 'register'}" style="border: solid orange 1px" />
          </q-toolbar>
        </div> -->

        </div>
      </div>

    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Home',
          icon: 'ion-md-home',
          link: 'main',
          ifCond: true
        },
        {
          title: 'Envoy',
          icon: 'ion-ios-card',
          link: 'envoy',
          ifCond: true
        },
        {
          title: 'Micro Banking',
          icon: 'ion-ios-cash',
          link: 'microbanking',
          ifCond: true
        },
        // {
        //   title: 'Pricing',
        //   icon: 'ion-logo-usd',
        //   link: '/microbanking#pricing',
        //   ifCond: this.$route.name == 'microbanking'
        // },
        {
          title: 'Contact Us',
          icon: 'phone',
          link: 'contact',
          ifCond: this.$q.screen.lt.md
        },
        {
          title: 'FAQ',
          icon: 'ion-md-help',
          link: 'faq',
          ifCond: this.$q.screen.lt.md
        },
      ],

    }
  },
  computed: {
    theroute(){return this.$route.name },
  },
}
</script>
