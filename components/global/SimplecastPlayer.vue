<template>
  <iframe
    frameborder="0"
    height="200px"
    scrolling="no"
    seamless
    :src="embedUrl"
    width="100%"
  />
</template>

<script>
export default {
  props: {
    episode: {
      type: Object,
      required: true,
    },
  },

  computed: {
    embedUrl () {
      // Simplecast doesn't expose the actual podcast ID anywhere that we can use directly for generating an embed link,
      // so we have to extract that ID ourselves from the `sharing_url` and manually build an embed URL.
      const url = this.episode.sharing_url
      const index = url.lastIndexOf('/')
      const embedId = url.substr(index)

      return `https://embed.simplecast.com/${embedId}?color=3d3d3d`
    },
  },
}
</script>

<style>
</style>
