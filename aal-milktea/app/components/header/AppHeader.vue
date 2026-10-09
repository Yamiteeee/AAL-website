<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);
const isMobileOpen = ref(false);

const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Core Services", href: "#services" },
  { label: "Global Network", href: "#network" },
  { label: "Founders & Values", href: "#values" },
  { label: "Contact", href: "#contact" },
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
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
      <NuxtLink to="/" :class="$style.brandLogo">
        <div :class="$style.logoMonogram">AAL</div>
        <div :class="$style.brandText">
          <span :class="$style.brandTitle">AAL Group</span>
          <span :class="$style.brandMotto">Together, we grow</span>
        </div>
      </NuxtLink>

      <nav aria-label="Main Navigation">
        <ul :class="$style.navLinks">
          <li v-for="link in navLinks" :key="link.label">
            <a :href="link.href" :class="$style.navLink">{{ link.label }}</a>
          </li>
        </ul>
      </nav>

      <div :class="$style.headerAction">
        <a href="#contact" :class="$style.contactBtn">Get In Touch</a>
        <button
          type="button"
          :class="$style.mobileToggle"
          aria-label="Toggle Navigation"
          @click="isMobileOpen = !isMobileOpen"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
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
        </button>
      </div>
    </div>

    <div v-show="isMobileOpen" :class="$style.mobileMenu">
      <a
        v-for="link in navLinks"
        :key="link.label"
        :href="link.href"
        @click="isMobileOpen = false"
      >
        {{ link.label }}
      </a>
      <a
        href="#contact"
        style="color: #666; font-size: 0.85rem"
        @click="isMobileOpen = false"
        >global@aalgroup.asia</a
      >
    </div>
  </header>
</template>

<style module src="./AppHeader.module.css"></style>
