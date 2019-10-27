<template>
  <article class="flex flex-col">
    <header>
      <time
        :datetime="episode.published_at"
      >{{ episode.published_at | localeDate }}</time>
      <h1 class="text-2xl leading-tight my-2">
        <nuxt-link
          class="no-underline text-black"
          :to="`/episodes/${episode.slug}`"
        >
          {{ episode.title }}
        </nuxt-link>
      </h1>
    </header>

    <p class="flex-grow">
      {{ episode.description }}
    </p>

    <div class="mt-4 flex justify-between items-center">
      <button
        title="Play Episode"
        class="flex items-center"
        @click="playEpisode"
      >
        <play-circle-icon class="custom-class" />
        <span class="inline-block ml-1">Play</span>
      </button>

      <nuxt-link
        class="no-underline text-black"
        :to="`/episodes/${episode.slug}`"
      >
        <strong>View Notes</strong>
      </nuxt-link>
    </div>
  </article>
</template>

<script>
import { mapActions } from 'vuex'
import { PlayCircleIcon } from 'vue-feather-icons'

export default {

  components: {
    PlayCircleIcon,
  },
  props: {
    episode: {
      type: Object,
      required: true,
    },
  },

  methods: {
    ...mapActions(['selectEpisode', 'play']),

    playEpisode () {
      this.selectEpisode(this.episode)
      this.play()
    },
  },
}
</script>

<style></style>
