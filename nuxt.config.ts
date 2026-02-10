// nuxt.config.ts
import Aura from "@primevue/themes/aura";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  components: [
    // Automatically import components from the default components directory
    { path: "~/components/", pathPrefix: false },

    // Automatically import components from the 'popup' directory with .vue extension
    // { path: "~/components/popup/", pathPrefix: false, extensions: ["vue"] },

    // Automatically import components from the 'popup' directory with .vue extension
    // { path: '~/components/layouts/', pathPrefix: false, extensions: ['vue'] },
  ],

  runtimeConfig: {
    public: {
      // apiBase: "http://127.0.0.1:3000/api/",
      apiBase: "https://cms.roqay.dev/api/",
    },
  },

  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
    head: {
      title: "Schoolna",
      htmlAttrs: { lang: "ar" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "Schoolna" },
        { name: "google", content: "notranslate" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "./favicon.png" }],
    },
  },

  // i18n module setup
  modules: [
    "@nuxtjs/i18n",
    "@primevue/nuxt-module",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@vee-validate/nuxt",
    "nuxt-aos",
  ],

  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: "VeeForm",
      Field: "VeeField",
      ErrorMessage: "VeeErrorMessage",
    },
  },

  imports: {
    dirs: ["stores", "composables", "helper", "schemas"], // Automatically import Pinia stores from the `stores` directory
    presets: [
      {
        from: "vee-validate",
        imports: ["Field", "Form", "ErrorMessage", "useField", "useForm"],
      },
    ],
  },

  primevue: {
    autoImport: true,
    options: {
      // unstyled: true,
      zIndex: {
        modal: 3000,
      },
      ripple: true,
      theme: {
        preset: Aura,
        options: {
          prefix: "p",
          darkModeSelector: ".dark",
          cssLayer: false,
        },
      },
    },
  },
  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // recommended
    },

    locales: [
      {
        code: "en",
        iso: "en-US",
        file: "en.json",
        name: "English",
        dir: "ltr",
      },
      {
        code: "ar",
        iso: "ar-SA",
        file: "ar.json",
        name: "العربية",
        dir: "rtl",
      },
    ],
    langDir: "../locales/",
    lazy: true,
    strategy: "prefix_except_default",
    defaultLocale: "en",
    vueI18n: "./i18n.config.ts",
  },
  css: [
    "@/assets/css/tailwind.css",
    "@/assets/scss/abstract/_generic.scss",
    "@/assets/scss/abstract/_form.scss",

    // COMPONENTS
    "@/assets/scss/components/_main-btn.scss",
    "@/assets/scss/components/_flex-buttons.scss",
    "@/assets/scss/components/_header.scss",
    "@/assets/scss/components/_popup.scss",
    "@/assets/scss/components/_schoolna_info_list.scss",
    "@/assets/scss/components/_hero.scss",
    "@/assets/scss/components/_sectionHeader.scss",
    "@/assets/scss/components/_features.scss",

    // CUSTOM
    "@/assets/scss/custom.scss",

    // PRIMEVUE
    "primeicons/primeicons.css",
    // "primevue/resources/themes/aura-light-green/theme.css",
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Enable universal mode for SPA fallback
  ssr: false,

  aos: {
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 100, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/scss/abstract/_variables.scss" as *;
            @use "~/assets/scss/abstract/_mixins.scss" as *;
          `,
        },
      },
    },
  },
});
