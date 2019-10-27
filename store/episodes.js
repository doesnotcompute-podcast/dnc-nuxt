const PODCAST_ID = process.env.PODCAST_ID
const API_KEY = process.env.API_KEY
const API_URL = process.env.API_URL

export const state = () => ({
  latest: [],
  all: [],
})

export const getters = {
  getById: state => (id) => {
    return state.all.find(episode => `${episode.id}` === id)
  },

  getBySlug: state => (slug) => {
    return state.all.find(episode => `${episode.slug}` === slug)
  },
}

export const mutations = {
  add (state, episode) {
    state.all.push(episode)
  },

  replace (state, { collection, episodes }) {
    state[collection] = episodes
  },
}

export const actions = {
  fetchAll ({ commit }) {
    return new Promise((resolve, reject) => {
      const url = `${API_URL}/podcasts/${PODCAST_ID}/episodes.json?api_key=${API_KEY}`

      this.$axios.get(url)
        .then((res) => {
          const episodes = processEpisodes(res.data)

          commit('replace', { collection: 'all', episodes })
          commit('replace', { collection: 'latest', episodes: episodes.slice(0, 12) })
          resolve(res.data)
        })
        .catch((err) => {
          reject(err.response)
        })
    })
  },
}

/**
 * Filter/augment list of Episodes received from Simplecast.
 * @param {[Object]} episodes
 * @return {[Object]}
 */
function processEpisodes (episodes) {
  return episodes.filter((episode) => {
    return episode.published && !episode.is_hidden
  })
    .map((episode) => {
      const slug = episode.title
        .toLowerCase()
        .replace(/[\W_]+/g, '-')

      const path = `/episodes/${slug}`

      return { ...episode, slug, path }
    })
}
