<script setup lang="ts">
import { ref, onMounted } from "vue";

const videoUrl = ref("/videos/aal-operations.mp4");
const videoRef = ref<HTMLVideoElement | null>(null);

onMounted(() => {
  if (videoRef.value) {
    videoRef.value.play().catch(() => {
      // Browser muted-autoplay policy fallback
    });
  }
});
</script>

<template>
  <section :class="$style.heroSection">
    <div :class="$style.heroContent">
      <!-- Left Column: Typography & Narrative -->
      <div :class="$style.heroLeft">
        <span :class="$style.eyebrow">AAL GROUP · TOGETHER, WE GROW</span>
        <h1 :class="$style.headline">
          Global Sourcing &amp; <br />
          <span :class="$style.headlineMuted">Direct Supply Chains.</span>
        </h1>
        <p :class="$style.subheadline">
          Wholesale beverage ingredients, food-grade packaging, and turnkey
          commercial machinery—sourced directly from verified manufacturing
          partners across Asia and Europe.
        </p>
      </div>

      <!-- Right Column: Clean 16:9 Video Showcase -->
      <div :class="$style.heroRight">
        <div :class="$style.videoFrame">
          <video
            ref="videoRef"
            :class="$style.videoPlayer"
            :src="videoUrl"
            autoplay
            muted
            loop
            playsinline
            preload="auto"
          />
        </div>
      </div>
    </div>

    <!-- Accessible Scroll Indicator -->
    <a
      href="#about"
      :class="$style.scrollIndicator"
      aria-label="Scroll to About section"
    >
      <span :class="$style.mouseShell">
        <span :class="$style.mouseWheel" />
      </span>
      <span :class="$style.scrollLabel">SCROLL</span>
    </a>
  </section>
</template>

<style module src="./HeroSection.module.css"></style>
