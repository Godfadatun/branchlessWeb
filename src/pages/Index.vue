<template>
  <q-page class="column items-center justify-evenly">
    <userType class="full-width"/>
    <!-- <theFooter /> -->
    <!-- <examples
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    /> -->
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue';
import examples from 'components/CompositionComponent.vue';
import userType from 'components/customerType/index.vue';
import theFooter from 'components/common/footer.vue'
import { Todo, Meta } from 'components/models';

export default Vue.extend({
  name: 'PageIndex',
  components: { examples, userType, theFooter },
  data() {
    const todos: Todo[] = [
      {
        id: 1,
        content: 'ct1'
      },
      {
        id: 2,
        content: 'ct2'
      },
      {
        id: 3,
        content: 'ct3'
      },
      {
        id: 4,
        content: 'ct4'
      },
      {
        id: 5,
        content: 'ct5'
      }
    ];
    const meta: Meta = {
      totalCount: 1200
    };
    return { todos, meta };
  }
});
</script>
