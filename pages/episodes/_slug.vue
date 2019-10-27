<template>
  <div>
    <EpisodeHero
      :episode="episode"
      :is-permalink="true"
    />

    <div class="container mx-auto py-6">
      <vue-markdown class="rich-text">
        {{ episode.long_description }}
      </vue-markdown>
    </div>

    <TeamHero />
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import EpisodeHero from '~/components/episode/EpisodeHero'
import TeamHero from '~/components/TeamHero'

export default {
  components: {
    VueMarkdown,
    EpisodeHero,
    TeamHero,
  },

  data () {
    return {
      episode: {
        slug: '',
      },
    }
  },

  head () {
    return {
      title: this.episode.title,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.episode.description,
        },
        {
          key: 'og:description',
          property: 'og:description',
          content: this.episode.description,
        },
        {
          key: 'og:audio',
          property: 'og:audio',
          content: this.episode.audio_url,
        },
      ],
    }
  },

  asyncData ({ params, store, error }) {
    const slug = params.slug
    const episode = store.getters['episodes/getBySlug'](slug)

    if (episode) {
      return {
        episode,
      }
    } else {
      error({ statusCode: 404, message: 'Episode not found' })
    }
  },
}
</script>
