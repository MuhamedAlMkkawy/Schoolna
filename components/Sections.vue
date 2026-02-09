<template>
  <template v-if="props?.sections">
    <section
      v-for="section in props?.sections?.filter(
        (sec) => sec.visible,
      )"
      :key="section?.id"
      :class="section?.name.toLowerCase().replace(/\s+/g, '_')"
    >
      <div
        :class="[
          'container  ',
          // `schoolna_${section?.name?.toLowerCase()}_content`,
        ]"
      >
        <template
          v-for="component in section?.components"
          :key="component?._id"
        >
          <!-- ###### LOGO ###### -->
          <div
            v-if="component?.type == 'logo'"
            :class="['image ', component?.content?.customClasses]"
            :style="{
              maxWidth: component?.content?.width,
              maxHeight: component?.content?.height,
            }"
          >
            <img
              :src="component?.content?.image"
              :alt="component?.type"
              loading="lazy"
            />
          </div>
          <!-- ###### NAV MENU ###### -->
          <ul
            v-if="component.type === 'nav-menu'"
            :class="[
              `schoolna_${section?.name?.toLowerCase()}_links`,
              component?.content?.customClasses,
              {
                active:
                  section.name.toLowerCase() === 'header' && showMobileMenu,
              },
            ]"
          >
            <div
              class="image"
              v-if="section.name.toLowerCase() === 'header' && showMobileMenu"
            >
              <img
                src="@/assets/images/mobile_logo.svg"
                alt="image"
                loading="lazy"
              />
            </div>
            <button
              class="pi pi-times close_mobile_menu"
              @click="showMobileMenu = !showMobileMenu"
              v-if="section.name.toLowerCase() === 'header' && showMobileMenu"
            ></button>

            <li
              v-for="(item, index) in component?.content?.items"
              :id="index"
              :class="{
                active: $route.path == item?.link,
              }"
            >
              <NuxtLink :to="$localeRoute(item?.link)">
                {{ item?.title }}
              </NuxtLink>
            </li>
          </ul>
          <!-- ###### BUTTONS ###### -->
          <div
            v-if="component.type == 'buttons'"
            :class="['flex_buttons ', component?.content?.customClasses]"
          >
            <button
              v-for="button in component?.content?.items"
              @click="handleLinkTarget(button)"
              :class="['main-btn ', { reversed: button?.reversed }]"
            >
              {{ button?.title }}
              <i v-if="button?.icon" :class="button?.icon"></i>
            </button>
          </div>
          <!-- ###### CUSTOM HTML ###### -->
          <div
            :class="component?.content?.customClasses"
            v-if="component.type === 'custom-html'"
            v-html="parsedHtml(component?.content?.html)"
          />
          <!-- ###### CARD SLIDER ###### -->
          <div
            v-if="component.type === 'card-slider'"
            :class="['card_slider', component?.content?.customClasses]"
          >
            <Carousel
              :items-to-show="component?.content?.itemsToShow || 1"
              :wrap-around="true"
              :autoplay="component?.content?.autoplay ? 3000 : 0"
              :transition="800"
              :snap-align="'start'"
            >
              <Slide
                v-for="(item, index) in component?.content?.items"
                :key="index"
              >
                <NuxtLink class="card_item" :to="$localeRoute(item?.link)">
                  <div class="image">
                    <img :src="item?.file" :alt="item?.title" loading="lazy" />
                  </div>

                  <div class="card_content">
                    <h3 v-if="item?.title">
                      {{ item?.title }}
                    </h3>

                    <p v-if="item?.text">
                      {{ item?.text }}
                    </p>
                  </div>
                </NuxtLink>
              </Slide>
            </Carousel>
          </div>
          <!-- ###### TIME LINE ###### -->
          <!-- ###### TIMELINE ###### -->
          <Timeline
            v-if="component.type === 'timeline'"
            :value="component?.content?.items"
            :class="['timeline_items', component?.content?.customClasses]"
          >
            <!-- Opposite Content -->
            <template #opposite="slotProps">
              <div
                :class="[
                  'timeline_item',
                  slotProps.item?.classes,
                  {
                    last_board_timeline_item:
                      slotProps.index === component?.content?.items?.length - 1,
                  },
                ]"
                :data-aos="
                  slotProps.index % 2 === 0 ? 'fade-left' : 'fade-right'
                "
                :data-aos-delay="slotProps.index * 200"
              >
                <!-- Date -->
                <small v-if="slotProps.item?.date">
                  {{ new Date(slotProps.item.date).toLocaleDateString() }}
                </small>

                <!-- Title -->
                <h4 v-if="slotProps.item?.title">
                  {{ slotProps.item.title }}
                </h4>

                <!-- Description -->
                <p v-if="slotProps.item?.description">
                  {{ slotProps.item.description }}
                </p>
              </div>
            </template>

            <!-- Marker (icon support from backend) -->
            <template #marker="slotProps">
              <span class="timeline_marker">
                <i v-if="slotProps.item?.icon" :class="slotProps.item.icon"></i>
              </span>
            </template>
          </Timeline>

          <!-- ###### SOCIAL MEDIA ###### -->
          <div
            v-if="component.type === 'social-media'"
            :class="['social_media', component?.content?.customClasses]"
          >
            <a
              v-for="(item, index) in component?.content?.items"
              :key="index"
              :href="item?.link"
              target="_blank"
              rel="noopener noreferrer"
              class="social_item"
              :style="{ color: item?.color }"
            >
              <i v-if="item?.icon" :class="item?.icon"></i>
            </a>
          </div>
          <!-- ###### ACCORDION ###### -->
          <Accordion
            v-if="component.type === 'accordion'"
            :class="['cms_accordion', component?.content?.customClasses]"
          >
            <AccordionPanel
              v-for="(item, index) in component?.content?.items"
              :key="index"
              :value="index"
            >
              <AccordionHeader>
                {{ item?.title }}
              </AccordionHeader>

              <AccordionContent>
                <div class="accordion_content">
                  {{ item?.content }}
                </div>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>
          <!-- ###### TABS ###### -->
          <Tabs
            v-if="component.type === 'tabs'"
            :value="0"
            :class="['cms_tabs', component?.content?.customClasses]"
          >
            <!-- Tab Headers -->
            <TabList>
              <Tab
                v-for="(item, index) in component?.content?.items"
                :key="'tab-' + index"
                :value="index"
              >
                {{ item?.title }}
              </Tab>
            </TabList>

            <!-- Tab Panels -->
            <TabPanels>
              <TabPanel
                v-for="(item, index) in component?.content?.items"
                :key="'panel-' + index"
                :value="index"
              >
                <div class="tab_content">
                  {{ item?.description }}
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </template>
        <!-- FOR HEADER ONLY -->
        <!-- THE HEADER BUTTONS OF LANG , MOBILE MENU AND CONTACT BUTTON IN HEADER -->
        <div
          class="schoolna_header_buttons"
          v-if="section?.name?.toLowerCase() == 'header'"
        >
          <button
            class="mobile_menu_controller main-btn"
            @click="showMobileMenu = !showMobileMenu"
          >
            <i class="pi pi-bars"></i>
          </button>
          <NuxtLink :to="$localeRoute('/contact_us')" class="main-btn">{{
            $t("header.buttons.getStart")
          }}</NuxtLink>
          <LanguageSwitch />
        </div>
        <!-- FOR HEADER ONLY -->
      </div>
    </section>
  </template>
</template>

<script setup>
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import Accordion from "primevue/accordion";
import AccordionPanel from "primevue/accordionpanel";
import AccordionHeader from "primevue/accordionheader";
import AccordionContent from "primevue/accordioncontent";
import Tabs from "primevue/tabs";
import TabList from "primevue/tablist";
import Tab from "primevue/tab";
import TabPanels from "primevue/tabpanels";
import TabPanel from "primevue/tabpanel";


const router = useRouter();
const localeRoute = useLocaleRoute();


// define props
const props = defineProps({
  sections : Array
})

// handle link target
const handleLinkTarget = (item) => {
  if (item?.target === "_blank") {
    window.open(item?.link, "_blank");
  } else {
    router.push(localeRoute(item?.link));
  }
};

// handle the custom html
const parsedHtml = (html = "") => {
  if (!html) return "";

  // Convert escaped HTML to real HTML
  const doc = new DOMParser().parseFromString(html, "text/html");

  let content = doc.body.textContent || "";

  // Remove <pre> wrappers if they exist
  content = content.replace(/^\s+|\s+$/g, "");

  return content;
};

// HANDLE TOGGLE MOBILE MENU FOR HEADER
const showMobileMenu = ref(false);

watchEffect(() => {
  if (useRoute().path) {
    showMobileMenu.value = false;
  }
});


</script>

<style lang="scss" scoped></style>
