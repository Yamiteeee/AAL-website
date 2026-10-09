<script setup lang="ts">
import { ref } from "vue";
import { useTradeMap } from "@/composables/useTradeMap";

const mapContainer = ref<HTMLElement | null>(null);
const { hubs, activeHub, projectedHubs, focusHub } = useTradeMap(mapContainer);
</script>

<template>
  <section :class="$style.heroSection">
    <div :class="$style.heroContent">
      <!-- Top Architectural Header -->
      <div :class="$style.headerBlock">
        <div :class="$style.eyebrow">
          <span :class="$style.corpMark">EST. MAY 2020</span>
          <span :class="$style.divider">/</span>
          <span :class="$style.motto">TOGETHER, WE GROW</span>
        </div>

        <div :class="$style.headlineGroup">
          <h1 :class="$style.headline">
            Global Sourcing &amp; <br />
            <span :class="$style.headlineMuted">Trade Infrastructure.</span>
          </h1>
          <p :class="$style.subheadline">
            Connecting verified manufacturers across Asia and Europe to provide
            end-to-end freight forwarding, customs clearance, and private-label
            OEM/ODM product development.
          </p>
        </div>
      </div>

      <!-- Center Executive Capability Ledger (Fills the center void) -->
      <div :class="$style.credentialLedger">
        <!-- 01 Core Pillars -->
        <div :class="$style.ledgerCol">
          <div :class="$style.colTag">01 / OPERATIONS</div>
          <h4 :class="$style.colHeading">End-to-End Solutions</h4>
          <p :class="$style.colBody">
            LCL/FCL ocean &amp; air freight, port consolidation, and customs
            documentation tailored for scale.
          </p>
        </div>

        <!-- 02 Manufacturing -->
        <div :class="$style.ledgerCol">
          <div :class="$style.colTag">02 / SOURCING</div>
          <h4 :class="$style.colHeading">Verified Factory Network</h4>
          <p :class="$style.colBody">
            Direct access to GMP, ISO, CE, and KFDA certified factories across
            11 key international corridors.
          </p>
        </div>

        <!-- 03 Leadership & Malasakit -->
        <div :class="$style.ledgerCol">
          <div :class="$style.colTag">03 / COMMITMENT</div>
          <div :class="$style.quoteBlock">
            <p :class="$style.quoteText">
              “From startup sparks to growing empires, we move with you.”
            </p>
            <span :class="$style.quoteAuthor">— Andrei Lim, President</span>
          </div>
        </div>
      </div>

      <!-- Live Vector Map Container -->
      <div :class="$style.mapWrapper">
        <div :class="$style.mapControls">
          <div :class="$style.mapStatus">
            <span :class="$style.statusIndicator" />
            <span>Active Global Trading &amp; Sourcing Network</span>
          </div>
          <span :class="$style.mapInstructions">
            Select a network pin or country pill to view trade focus
          </span>
        </div>

        <div :class="$style.mapArea">
          <!-- WebGL Map Canvas -->
          <div ref="mapContainer" :class="$style.mapContainer" />

          <!-- Dynamic SVG Brand Teardrop Pins Overlay -->
          <svg :class="$style.mapOverlay">
            <defs>
              <filter
                id="pin-drop-shadow"
                x="-30%"
                y="-30%"
                width="160%"
                height="160%"
              >
                <feDropShadow
                  dx="0"
                  dy="2.5"
                  stdDeviation="2"
                  flood-color="#000000"
                  flood-opacity="0.28"
                />
              </filter>
            </defs>

            <g>
              <g
                v-for="hub in projectedHubs"
                :key="'pin-' + hub.id"
                :transform="`translate(${hub.x}, ${hub.y})`"
                style="cursor: pointer"
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

                <!-- Pin Wrapper with scale effect on active -->
                <g
                  :transform="
                    activeHub.id === hub.id
                      ? 'scale(1.15) translate(0, -2)'
                      : 'scale(1)'
                  "
                  style="
                    transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
                  "
                >
                  <!-- 1. Solid Black Teardrop Pin Silhouette -->
                  <path
                    d="M0 0 C-4 -7 -17 -19 -17 -30 C-17 -40 -9 -47 0 -47 C9 -47 17 -40 17 -30 C17 -19 4 -7 0 0 Z"
                    fill="#111111"
                    stroke="#ffffff"
                    stroke-width="1.2"
                    filter="url(#pin-drop-shadow)"
                  />

                  <!-- 2. Solid White Inner Medallion -->
                  <circle
                    cx="0"
                    cy="-30"
                    r="13"
                    fill="#ffffff"
                    stroke="#111111"
                    stroke-width="0.8"
                  />

                  <!-- 3. PNG Logo centered inside the medallion -->
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

      <!-- Quick Corporate Metrics Strip -->
      <div :class="$style.metricsStrip">
        <div :class="$style.metricCard">
          <div :class="$style.metricValue">11+ Countries</div>
          <div :class="$style.metricDescription">Verified Sourcing Hubs</div>
        </div>
        <div :class="$style.metricCard">
          <div :class="$style.metricValue">GMP · ISO · CE · KFDA</div>
          <div :class="$style.metricDescription">
            Factory Compliance Standards
          </div>
        </div>
        <div :class="$style.metricCard">
          <div :class="$style.metricValue">End-to-End</div>
          <div :class="$style.metricDescription">
            Sourcing to Customs Clearance
          </div>
        </div>
        <div :class="$style.metricCard">
          <div :class="$style.metricValue">May 1, 2020</div>
          <div :class="$style.metricDescription">
            Founded by Andrei &amp; Andrew Lim
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style module src="./HeroSection.module.css"></style>
