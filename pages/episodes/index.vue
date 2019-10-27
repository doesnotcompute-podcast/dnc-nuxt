<template>
  <div>
    <EpisodeHero
      :episode="latestEpisode"
    />

    <Container>
      <ul class="flex flex-wrap -mx-6 py-10">
        <li
          v-for="episode in episodes"
          :key="episode.id"
          class="flex w-full md:w-1/2 lg:w-1/3 p-2 list-reset"
        >
          <EpisodeSummary
            :key="episode.id"
            :episode="episode"
            class="p-4 rounded bg-gray-200"
          />
        </li>
      </ul>
    </Container>

    <div class="py-8 bg-black">
      <Container class="text-center">
        <h3 class="text-white text-3xl mb-4">
          New episodes every Tuesday.
        </h3>
        <PodcastPlayerCollection variant="light" />
      </Container>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import EpisodeHero from '~/components/episode/EpisodeHero'
import EpisodeSummary from '~/components/episode/EpisodeSummary'
import PodcastPlayerCollection from '~/components/PodcastPlayerCollection'

export default {
  components: {
    EpisodeHero,
    EpisodeSummary,
    PodcastPlayerCollection,
  },

  head () {
    return {
      title: 'Episodes',
    }
  },

  computed: {
    ...mapState({
      allEpisodes: state => state.episodes.all,
    }),

    latestEpisode () {
      return this.allEpisodes[0]
    },

    episodes () {
      return this.allEpisodes.slice(1)
    },
  },
}
</script>

<style>
</style>
