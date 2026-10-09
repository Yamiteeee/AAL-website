<script setup lang="ts">
import { ref } from "vue";
import { useTradeMap } from "@/composables/useTradeMap";

const mapContainer = ref<HTMLElement | null>(null);
const { hubs, activeHub, projectedHubs, focusHub } = useTradeMap(mapContainer);
</script>

<template>
  <section id="network" :class="$style.networkSection">
    <div :class="$style.sectionContent">
      <!-- Centered Header Block -->
      <div :class="$style.headerBlock">
        <span :class="$style.eyebrow">GLOBAL NETWORK</span>
        <h2 :class="$style.headline">
          Cross-Border Reach. <br />
          <span :class="$style.headlineMuted">Local Execution.</span>
        </h2>
        <p :class="$style.leadText">
          Operating across 11 international trading corridors spanning Asia,
          Europe, and Oceania, anchored by our Central Distribution Hub in the
          Philippines.
        </p>
      </div>

      <!-- Live Vector Map Container -->
      <div :class="$style.mapWrapper">
        <div :class="$style.mapControls">
          <div :class="$style.mapStatus">
            <span :class="$style.statusIndicator" />
            <span>Active Trading &amp; Sourcing Network</span>
          </div>
          <span :class="$style.mapInstructions">
            Select a pin or country to view trade focus
          </span>
        </div>

        <!-- data-lenis-prevent intercepts mouse wheel events so the page does not scroll while zooming -->
        <div :class="$style.mapArea" data-lenis-prevent>
          <div
            ref="mapContainer"
            :class="$style.mapContainer"
            data-lenis-prevent
          />

          <!-- Dynamic SVG Brand Teardrop Pins Overlay -->
          <svg :class="$style.mapOverlay" data-lenis-prevent>
            <g>
              <g
                v-for="hub in projectedHubs"
                :key="'pin-' + hub.id"
                :transform="`translate(${hub.x}, ${hub.y})`"
                :class="$style.pinGroup"
                @click="focusHub(hub)"
              >
                <!-- Active Target Pulse Ring -->
                <ellipse
                  v-if="activeHub.id === hub.id"
                  cx="0"
                  cy="0"
                  rx="14"
                  ry="5"
                  fill="rgba(17, 17, 17, 0.16)"
                  stroke="#111111"
                  stroke-width="1.2"
                  stroke-dasharray="2, 2"
                />

                <!-- Pin Wrapper (uses GPU CSS drop-shadow instead of CPU feDropShadow) -->
                <g
                  :transform="
                    activeHub.id === hub.id
                      ? 'scale(1.15) translate(0, -2)'
                      : 'scale(1)'
                  "
                  :class="$style.pinShape"
                >
                  <path
                    d="M0 0 C-4 -7 -17 -19 -17 -30 C-17 -40 -9 -47 0 -47 C9 -47 17 -40 17 -30 C17 -19 4 -7 0 0 Z"
                    fill="#111111"
                    stroke="#ffffff"
                    stroke-width="1.2"
                  />

                  <circle
                    cx="0"
                    cy="-30"
                    r="13"
                    fill="#ffffff"
                    stroke="#111111"
                    stroke-width="0.8"
                  />

                  <image
                    href="/images/aal-pin.png"
                    x="-9"
                    y="-39"
                    width="18"
                    height="18"
                    preserveAspectRatio="xMidYMid meet"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>

        <!-- Hub Inspector Bar -->
        <div :class="$style.inspectorBar">
          <div :class="$style.activeInfo">
            <div :class="$style.activeCountry">
              <span>{{ activeHub.name }}</span>
              <span :class="$style.activeCity">— {{ activeHub.city }}</span>
              <span :class="$style.badgePill">{{ activeHub.badge }}</span>
            </div>
            <div :class="$style.activeRole">
              {{ activeHub.specialty }}
            </div>
          </div>

          <!-- Horizontal Pill Scroller -->
          <div :class="$style.hubPillsWrapper">
            <div :class="$style.hubPills">
              <button
                v-for="hub in hubs"
                :key="'btn-' + hub.id"
                type="button"
                :class="[
                  $style.hubPill,
                  activeHub.id === hub.id ? $style.activePill : '',
                ]"
                @click="focusHub(hub)"
              >
                {{ hub.name }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style module src="./GlobalNetworkSection.module.css"></style>
