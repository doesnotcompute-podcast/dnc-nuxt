<template>
  <div>
    <header class="p-4 bg-black flex">
      <nuxt-link
        class="inline-block no-underline text-white"
        to="/"
      >
        Does Not Compute
      </nuxt-link>

      <nav class="ml-4 flex flex-grow justify-end">
        <!--
        <div>
          <nuxt-link
            class="text-white inline-block"
            to="/episodes"
          >Episodes</nuxt-link>
          <nuxt-link
            class="text-white inline-block ml-2"
            to="/blog"r
          >Blog</nuxt-link>
        </div>
        -->

        <div>
          <a
            class="text-sm text-white no-underline inline-block"
            href="mailto:hello@seanwash.com"
          >Contact</a>
          <a
            class="text-sm text-white no-underline inline-block ml-3"
            href="https://spec.fm/sponsors"
          >Sponsor</a>
        </div>
      </nav>
    </header>

    <nuxt />

    <footer class="py-12">
      <Container
        class="flex flex-col lg:flex-row text-center lg:text-left justify-between items-center"
      >
        <p>
          &copy; {{ new Date().getFullYear() }} Does Not Compute. Produced by
          <a
            class="text-black"
            href="https://spec.fm"
          >SpecFm</a>.
        </p>

        <div class="mt-6 lg:mt-0">
          <a
            class="text-black inline-block"
            href="https://github.com/seanwash/does-not-compute-gridsome"
          >
            <github-icon aria-hidden="true" />
            <span class="visually-hidden">GitHub</span>
          </a>

          <a
            class="text-black ml-6 lg:ml-3 inline-block"
            href="https://twitter.com/dnccast"
          >
            <twitter-icon aria-hidden="true" />
            <span class="visually-hidden">Twitter</span>
          </a>

          <a
            class="text-black ml-6 lg:ml-3 inline-block"
            href="https://spectrum.chat/specfm"
          >
            <message-square-icon aria-hidden="true" />
            <span class="visually-hidden">Spectrum.chat Community</span>
          </a>
        </div>
      </Container>
    </footer>

    <omni-plyr />
  </div>
</template>

<script>
import { TwitterIcon, GithubIcon, MessageSquareIcon } from 'vue-feather-icons'
import OmniPlyr from '~/components/global/OmniPlyr'

export default {
  components: { TwitterIcon, GithubIcon, MessageSquareIcon, OmniPlyr },
}
</script>

<style>
  body {
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.5;
    /* https://tailwindcss.com/docs/colors/#app */
    background: #ffffff;
  }
</style>
