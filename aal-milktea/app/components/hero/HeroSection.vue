<script setup lang="ts">
import { ref } from "vue";
import { useTradeMap } from "@/composables/useTradeMap";

const mapContainer = ref<HTMLElement | null>(null);
const { hubs, activeHub, projectedHubs, projectedRoutes, focusHub } =
  useTradeMap(mapContainer);
</script>

<template>
  <section :class="$style.heroSection">
    <div :class="$style.heroContent">
      <div :class="$style.topHeader">
        <span :class="$style.taglineBadge">AAL GROUP · Together, we grow</span>
        <h1 :class="$style.headline">Global Trading, Sourcing & Logistics.</h1>
        <p :class="$style.subheadline">
          Connecting verified factories across Asia and Europe to help build,
          scale, and launch product brands efficiently.
        </p>
      </div>

      <!-- Live Vector Map Container -->
      <div :class="$style.mapWrapper">
        <div :class="$style.mapControls">
          <div :class="$style.mapStatus">
            <span :class="$style.statusIndicator" />
            <span>Interactive Logistics Corridors</span>
          </div>
          <span :class="$style.mapInstructions">
            Click a country pill or marker to focus trade corridor
          </span>
        </div>

        <div :class="$style.mapArea">
          <!-- WebGL Map Base -->
          <div ref="mapContainer" :class="$style.mapContainer" />

          <!-- Dynamic SVG Route & Marker Overlay -->
          <svg :class="$style.mapOverlay">
            <!-- Route Lines -->
            <g>
              <!-- Contrast White Casing -->
              <path
                v-for="route in projectedRoutes"
                :key="'bg-' + route.id"
                :d="route.path"
                stroke="#ffffff"
                stroke-width="3.5"
                fill="none"
                opacity="0.9"
              />
              <!-- Animated Flowing Dark Dash Line -->
              <path
                v-for="route in projectedRoutes"
                :key="'fg-' + route.id"
                :d="route.path"
                :class="$style.flowLine"
                stroke="#18181b"
                stroke-width="1.8"
                fill="none"
                :opacity="activeHub.id === route.id ? 1 : 0.65"
              />
            </g>

            <!-- Pins -->
            <g>
              <g
                v-for="hub in projectedHubs"
                :key="'pin-' + hub.id"
                :transform="`translate(${hub.x}, ${hub.y})`"
                style="cursor: pointer"
                @click="focusHub(hub)"
              >
                <!-- Active Selected State Pulse -->
                <circle
                  v-if="activeHub.id === hub.id"
                  r="14"
                  fill="rgba(24, 24, 27, 0.15)"
                  stroke="#18181b"
                  stroke-width="1.5"
                />

                <!-- Manila HQ Halo -->
                <circle
                  v-if="hub.id === 'ph'"
                  r="10"
                  fill="rgba(0, 0, 0, 0.12)"
                />

                <!-- Main Pin Dot -->
                <circle
                  :r="hub.id === 'ph' ? 7.5 : 5.5"
                  :fill="hub.id === 'ph' ? '#000000' : '#18181b'"
                  stroke="#ffffff"
                  stroke-width="2"
                />
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

          <!-- Quick Navigation Buttons -->
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

      <!-- Quick Metrics Strip -->
      <div :class="$style.metricsStrip">
        <div :class="$style.metricCard">
          <div :class="$style.metricValue">11+ Countries</div>
          <div :class="$style.metricDescription">Verified Sourcing Hubs</div>
        </div>
        <div :class="$style.metricCard">
          <div :class="$style.metricValue">GMP · ISO · CE</div>
          <div :class="$style.metricDescription">
            Factory Compliance Standards
          </div>
        </div>
        <div :class="$style.metricCard">
          <div :class="$style.metricValue">End-to-End</div>
          <div :class="$style.metricDescription">
            Sourcing to Custom Clearance
          </div>
        </div>
        <div :class="$style.metricCard">
          <div :class="$style.metricValue">May 1, 2020</div>
          <div :class="$style.metricDescription">
            Founded by Andrei & Andrew Lim
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style module src="./HeroSection.module.css"></style>
