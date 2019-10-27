<template>
  <ul class="pl-0 mt-0 -mx-2 flex flex-wrap">
    <li
      v-for="( location ) in podcastLocations"
      :key="location.name"
      class="list-reset p-2 w-full sm:w-1/2 lg:w-1/4"
    >
      <a
        :href="location.link"
        target="_blank"
        rel="noopener"
        :class="[btnColor]"
        class="w-full flex items-center text-sm shadow"
      >
        <img
          :src="location.image"
          :alt="`${location.name} Icon`"
          class="mr-2"
        >
        {{ location.name }}
      </a>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    variant: {
      type: String,
      default: 'dark',
      validator (value) {
        return ['light', 'dark'].includes(value)
      },
    },
  },

  computed: {
    ...mapState({
      podcastLocations: state => state.podcastLocations,
    }),

    btnColor () {
      return `btn btn-adaptive-${this.variant}`
    },
  },
}
</script>

<style>
</style>
