<template>
  <vue-plyr
    :options="plyrOptions"
    class="mt-2"
  >
    <audio>
      <source
        :src="audioUrl"
        type="audio/mp3"
      >
    </audio>
  </vue-plyr>
</template>

<script>
export default {
  props: {
    audioUrl: {
      type: String,
      required: true,
    },
    // https://github.com/sampotts/plyr/blob/master/controls.md
    plyrOptions: {
      type: Object,
      default: () => {
        return {
          controls: [
            'play',
            'progress',
            'current-time',
            'duration',
            'settings',
          ],
        }
      },
    },
  },
}
</script>
