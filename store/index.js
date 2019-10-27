export const state = () => ({
  episode: {
    audio_url: '',
  },
  playing: false,
  podcastLocations: [
    {
      name: 'Podcasts',
      link: 'https://geo.itunes.apple.com/ca/podcast/feed/id1048731980',
      image: require('~/assets/icons/apple-podcasts.svg'),
    },
    {
      name: 'Overcast',
      link: 'https://overcast.fm/itunes1048731980',
      image: require('~/assets/icons/overcast.svg'),
    },
    {
      name: 'Pocketcasts',
      link: 'http://pca.st/itunes/1048731980',
      image: require('~/assets/icons/pocketcasts.svg'),
    },
    {
      name: 'RSS Feed',
      link: 'http://simplecast.fm/podcasts/1386/rss',
      image: require('~/assets/icons/rss.svg'),
    },
  ],
  team: [
    {
      name: 'Sean Washington',
      role: 'Co-host',
      image: require('~/assets/images/team/host-sean.jpg'),
      twitter: '@seanwashbot',
      url: 'https://twitter.com/seanwashbot',
    },
    {
      name: 'Rockwell Schrock',
      role: 'Co-host',
      image: require('~/assets/images/team/host-rockwell.jpg'),
      twitter: '@Schrockwell',
      url: 'https://twitter.com/Schrockwell',
    },
    {
      name: 'Mikhail Delport',
      role: 'Editor',
      image: require('~/assets/images/team/editor-mikhail.jpg'),
      twitter: '@_mikhailbot',
      url: 'https://twitter.com/_mikhailbot',
    },
    {
      name: 'Bucky',
      role: 'Executive Pawducer',
      image: require('~/assets/images/team/cat-bucky.jpg'),
      url: 'https://twitter.com/RealGrumpyCat',
    },
  ],
})

export const mutations = {
  setEpisode (state, episode) {
    state.episode = episode
  },
  setPlaying (state, value) {
    state.playing = value
  },
}

export const actions = {
  nuxtServerInit ({ dispatch }) {
    // Always fill store server side since simplecast's API doesn't support CORS
    return dispatch('episodes/fetchAll')
  },

  play ({ commit }) {
    commit('setPlaying', true)
  },

  pause ({ commit }) {
    commit('setPlaying', false)
  },

  selectEpisode ({ commit, dispatch }, episode) {
    commit('setEpisode', episode)
    dispatch('play')
  },
}
