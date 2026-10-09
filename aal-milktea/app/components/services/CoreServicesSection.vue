<script setup lang="ts">
interface PipelineStep {
  step: string;
  title: string;
  category: string;
  description: string;
}

const workflow: PipelineStep[] = [
  {
    step: "01",
    title: "Global Sourcing",
    category: "Verified Factories",
    description:
      "Direct factory procurement across premier industrial hubs in Asia and Europe with zero intermediary markups.",
  },
  {
    step: "02",
    title: "Custom Formulation & OEM",
    category: "Turnkey Production",
    description:
      "Private-label branding, custom ingredients, recipes, and food-grade packaging built to your specifications.",
  },
  {
    step: "03",
    title: "Freight & Port Logistics",
    category: "Sea, Air & Land",
    description:
      "Flexible full container and consolidation routes connecting sovereign ports directly to local warehouses.",
  },
  {
    step: "04",
    title: "Customs & Last-Mile Delivery",
    category: "End-to-End Fulfillment",
    description:
      "Complete import clearance, duty processing, and direct door-to-door cargo fulfillment ready for commercial sale.",
  },
];
</script>

<template>
  <section id="services" :class="$style.servicesSection">
    <div :class="$style.sectionContent">
      <!-- Centered Editorial Header -->
      <div :class="$style.headerBlock">
        <span :class="$style.eyebrow">OUR CAPABILITIES</span>
        <h2 :class="$style.headline">
          How We Move Cargo. <br />
          <span :class="$style.headlineMuted">From Origin to Your Door.</span>
        </h2>
        <p :class="$style.leadText">
          A streamlined 4-step supply chain that eliminates middlemen, ensures
          verified quality, and accelerates cross-border trade.
        </p>
      </div>

      <!-- Linear Step-by-Step Pipeline Flow -->
      <div :class="$style.pipelineGrid">
        <template v-for="(item, index) in workflow" :key="item.step">
          <!-- Step Card -->
          <div :class="$style.stepCard">
            <div :class="$style.cardHeader">
              <span :class="$style.stepNumber">{{ item.step }}</span>
              <span :class="$style.categoryTag">{{ item.category }}</span>
            </div>

            <h3 :class="$style.cardTitle">{{ item.title }}</h3>
            <p :class="$style.cardDescription">{{ item.description }}</p>
          </div>

          <!-- Connecting Flow Arrow (Between Steps) -->
          <div
            v-if="index < workflow.length - 1"
            :class="$style.flowConnector"
            aria-hidden="true"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<style module src="./CoreServicesSection.module.css"></style>
