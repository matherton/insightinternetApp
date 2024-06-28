<template>
  <footer class="bg-gray-700">
    <div
      class="mx-auto max-w-screen-xl space-y-8 px-4 py-8 sm:px-6 lg:space-y-16 lg:px-8"
    >
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3 mb-4">
        <div>
          <ul class="flex gap-6">
            <li>
              <a
                href="https://twitter.com/insightinternet"
                rel="noreferrer"
                target="_blank"
                class="text-white transition hover:opacity-75 dark:text-gray-200"
              >
                <span class="sr-only">Twitter</span>

                <svg
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="10 10 25 25"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.3,21.1l6.9-7.9h-1.6l-6,6.8l-4.8-6.8h-5.5l7.3,10.3l-7.3,8.2h1.6l6.4-7.2l5,7.2h5.5 M15.4,14.4H18l11.6,16.2H27"
                  ></path>
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://github.com/matherton"
                rel="noreferrer"
                target="_blank"
                class="text-white transition hover:opacity-75 dark:text-gray-200"
              >
                <span class="sr-only">GitHub</span>

                <svg
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>

            <svg
              class="h-8 w-8"
              fill="currentColor"
              viewBox="0 0 45 45"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24.3,21.1l6.9-7.9h-1.6l-6,6.8l-4.8-6.8h-5.5l7.3,10.3l-7.3,8.2h1.6l6.4-7.2l5,7.2h5.5 M15.4,14.4H18l11.6,16.2H27"
              ></path>
            </svg>
          </ul>
        </div>

        <div
          class="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-2 lg:grid-cols-4"
        >
          <div>
            <router-link
              to="/insightinternetApp/services"
              class="font-medium text-gray-700 transition hover:opacity-75 text-white"
              @click="scrollToTop"
              >Services</router-link
            >
          </div>
          <div>
            <router-link
              to="/insightinternetApp/about"
              class="font-medium text-gray-700 transition hover:opacity-75 text-white"
              @click="scrollToTop"
              >Why us</router-link
            >
          </div>
          <div>
            <router-link
              to="/insightinternetApp/work"
              class="font-medium text-gray-700 transition hover:opacity-75 text-white"
              @click="scrollToTop"
            >
              Work
            </router-link>
          </div>
          <div>
            <router-link
              to="/insightinternetApp/contact"
              class="font-medium text-gray-700 transition hover:opacity-75 text-white"
              @click="scrollToTop"
              >Contact
            </router-link>
          </div>
        </div>
      </div>

      <span class="text-xs text-white mt-8">
        &copy; 2024. InsightInternet. All rights reserved.
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>
