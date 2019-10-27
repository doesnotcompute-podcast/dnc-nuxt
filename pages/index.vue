<template>
  <div>
    <PodcastHeader :heading="meta.heading" />

    <div class="container mx-auto">
      <ul class="flex flex-wrap -mx-2 pl-0 pt-10">
        <li
          v-for="(episode) in episodes"
          :key="episode.id"
          class="flex w-full md:w-1/2 lg:w-1/3 p-2 list-reset"
        >
          <EpisodeSummary
            :episode="episode"
            class="p-4 rounded bg-gray-200"
          />
        </li>
      </ul>

      <div class="mt-6 mb-12">
        <nuxt-link
          class="btn btn-adaptive-dark block w-full text-center"
          to="/episodes/2"
        >
          View More Episodes
        </nuxt-link>
      </div>
    </div>

    <TeamHero />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PodcastHeader from '~/components/PodcastHeader'
import EpisodeSummary from '~/components/episode/EpisodeSummary'
import TeamHero from '~/components/TeamHero'

export default {
  components: {
    PodcastHeader,
    EpisodeSummary,
    TeamHero,
  },

  data () {
    return {
      meta: {
        heading:
          'A weekly podcast about the lives and workflows of modern web app developers. New episodes every Tuesday.',
      },
    }
  },

  computed: {
    ...mapState({
      episodes: state => state.episodes.latest,
    }),
  },

  head () {
    return {
      title: 'Home',
      meta: [
        {
          key: 'og:title',
          property: 'og:title',
          content: 'Does Not Compute Podcast',
        },
        { key: 'description', name: 'description', content: this.meta.heading },
        {
          key: 'og:description',
          property: 'og:description',
          content: this.meta.heading,
        },
      ],
    }
  },

  methods: {
    showEmbed (index) {
      return index === 0
    },
  },
}
</script>
