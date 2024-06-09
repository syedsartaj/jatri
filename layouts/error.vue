<template>
  <div>
    <component :is="errorComponent" />
  </div>
</template>

<script>
import NotFoundPage from '../components/Error/NotFoundPage.vue';
import WrongError from '../components/Error/WrongError.vue';

export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  computed: {
    errorComponent() {
      switch (this.error.statusCode) {
        case 404:
          return NotFoundPage;
        case 500:
          return WrongError;
        default:
          return WrongError; // Default fallback
      }
    },
  },
};
</script>
