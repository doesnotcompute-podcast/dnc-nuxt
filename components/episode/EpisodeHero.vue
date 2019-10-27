<template>
  <article class="py-12 bg-gray-200">
    <Container>
      <header>
        <time :datetime="episode.published_at">{{ episode.published_at | localeDate }}</time>

        <h1 class="text-3xl lg:text-5xl leading-tight my-2">
          <nuxt-link
            class="no-underline text-black"
            :to="episode.path"
          >
            {{ episode.title }}
          </nuxt-link>
        </h1>
      </header>

      <p class="text-xl lg:text-2xl leading-tight mt-4 mb-6 max-w-lg">
        {{ episode.description }}
      </p>

      <div class="bg-white rounded shadow p-4">
        <button
          type="button"
          class="bg-adaptive-dark flex items-center w-full text-white rounded p-4"
          @click.prevent="playEpisode"
        >
          <PlayIcon /> <span class="inline-block ml-2 font-bold">Play Episode</span>
        </button>

        <div class="mt-4 flex flex-col md:flex-row items-center">
          <nuxt-link
            v-if="!isPermalink"
            class="btn btn-adaptive-dark inline-block w-full md:w-auto flex justify-center items-center flex-grow text-center mb-2 md:mb-0"
            :to="episode.path"
          >
            <file-text-icon class="mr-3" />
            View&nbsp;show&nbsp;notes
          </nuxt-link>

          <span
            v-if="!isPermalink"
            class="hidden md:block mx-4"
          >or</span>

          <SocialButtonCollection />
        </div>
      </div>
    </Container>
  </article>
</template>

<script>
import { mapActions } from 'vuex'

import { FileTextIcon, PlayIcon } from 'vue-feather-icons'
import SocialButtonCollection from '~/components/SocialButtonCollection'

export default {
  components: {
    SocialButtonCollection,
    FileTextIcon,
    PlayIcon,
  },

  props: {
    episode: {
      type: Object,
      required: true,
    },
    isPermalink: {
      type: Boolean,
      default: false,
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
