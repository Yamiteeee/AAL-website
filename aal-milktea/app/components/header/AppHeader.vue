<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);
const isMobileOpen = ref(false);

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Global Network", href: "#network" },
  { label: "Capabilities", href: "#services" },
  { label: "Values", href: "#values" },
  { label: "Founders", href: "#founders" },
  { label: "Why Us", href: "#why-choose" },
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

const closeMobile = () => {
  isMobileOpen.value = false;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header :class="[$style.headerWrapper, isScrolled ? $style.isScrolled : '']">
    <div :class="$style.navContainer">
      <!-- Brand Logo -->
      <NuxtLink to="/" :class="$style.brandLogo" @click="closeMobile">
        <img
          src="/images/aal-pin.png"
          alt="AAL Group Logo"
          :class="$style.logoImage"
        />
        <div :class="$style.brandText">
          <span :class="$style.brandTitle">AAL Group</span>
          <span :class="$style.brandMotto">Together, we grow</span>
        </div>
      </NuxtLink>

      <!-- Desktop Nav Ordered by Page Flow -->
      <nav aria-label="Main Navigation" :class="$style.desktopNav">
        <ul :class="$style.navLinks">
          <li v-for="link in navLinks" :key="link.label">
            <a :href="link.href" :class="$style.navLink">{{ link.label }}</a>
          </li>
        </ul>
      </nav>

      <!-- Right Actions -->
      <div :class="$style.headerAction">
        <a href="#contact" :class="$style.contactBtn">Get In Touch</a>

        <button
          type="button"
          :class="$style.mobileToggle"
          :aria-expanded="isMobileOpen"
          aria-label="Toggle Navigation"
          @click="isMobileOpen = !isMobileOpen"
        >
          <svg
            v-if="!isMobileOpen"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
          >
            <line x1="3" y1="7" x2="21" y2="7" />
            <line x1="3" y1="17" x2="21" y2="17" />
          </svg>
          <svg
            v-else
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Drawer -->
    <Transition name="fade">
      <div v-if="isMobileOpen" :class="$style.mobileMenu">
        <div :class="$style.mobileLinks">
          <a
            v-for="link in navLinks"
            :key="link.label"
            :href="link.href"
            :class="$style.mobileLink"
            @click="closeMobile"
          >
            {{ link.label }}
          </a>
        </div>
        <div :class="$style.mobileFooter">
          <a
            href="#contact"
            :class="$style.mobileContactBtn"
            @click="closeMobile"
          >
            Get In Touch
          </a>
          <span :class="$style.mobileEmail">global@aalgroup.asia</span>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style module src="./AppHeader.module.css"></style>
