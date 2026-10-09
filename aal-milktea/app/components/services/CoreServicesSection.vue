<script setup lang="ts">
interface ServicePillar {
  index: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  scope: string;
}

const services: ServicePillar[] = [
  {
    index: "01",
    title: "Import & Export",
    subtitle: "Customs & Regulatory Clearance",
    description:
      "End-to-end management of cross-border trade compliances, full customs clearance, tariffs classification, and global manifest documentation[cite: 4].",
    highlights: [
      "Full Customs Documentation[cite: 4]",
      "Cross-Border Tax & Tariffs",
      "Compliance Port Clearance[cite: 4]",
    ],
    scope: "Global Trade Corridors",
  },
  {
    index: "02",
    title: "Freight Forwarding",
    subtitle: "Multi-Modal Cargo Logistics",
    description:
      "Flexible LCL (Less than Container Load) and FCL (Full Container Load) solutions spanning sea, air, and land routes with localized port consolidation[cite: 4].",
    highlights: [
      "LCL & FCL Ocean Freight[cite: 4]",
      "Expedited Air Cargo[cite: 4]",
      "Port Consolidation & Warehousing[cite: 4]",
    ],
    scope: "Sea · Air · Land[cite: 4]",
  },
  {
    index: "03",
    title: "Product Sourcing",
    subtitle: "Verified Factory Procurement",
    description:
      "Direct factory procurement across premier industrial hubs in Asia and Europe, matching brand specifications with rigorously audited facilities[cite: 4].",
    highlights: [
      "Asia: CN, KR, TH, VN[cite: 4]",
      "Europe: DE, FR, IT, PL[cite: 4]",
      "Rigorous Factory Audits[cite: 3]",
    ],
    scope: "11+ Global Hubs[cite: 4]",
  },
  {
    index: "04",
    title: "OEM/ODM Manufacturing",
    subtitle: "Turnkey Private Labeling",
    description:
      "Comprehensive formulation, private-label packaging, and factory-direct production for skincare, F&B ingredients, wellness, and specialty goods[cite: 4].",
    highlights: [
      "Skincare & Formulation[cite: 4]",
      "F&B Ingredients & Recipes[cite: 3, 4]",
      "Custom Packaging & Labeling[cite: 4]",
    ],
    scope: "Custom Formulation[cite: 4]",
  },
  {
    index: "05",
    title: "Business Model Creation",
    subtitle: "Enterprise Setup & Scaling",
    description:
      "Holistic commercial structuring designed to scale brands efficiently—from domestic retail supply chains to cross-border e-commerce distribution[cite: 4].",
    highlights: [
      "Retail Supply Chains[cite: 4]",
      "E-Commerce Fulfillment Setup[cite: 4]",
      "Regional Distribution Systems[cite: 4]",
    ],
    scope: "Startup to Enterprise",
  },
];
</script>

<template>
  <section id="services" :class="$style.servicesSection">
    <div :class="$style.sectionContent">
      <div :class="$style.headerRow">
        <div :class="$style.headerLeft">
          <div :class="$style.eyebrow">
            <span :class="$style.badge">CAPABILITIES</span>
            <span :class="$style.divider">/</span>
            <span :class="$style.tagline"
              >END-TO-END SUPPLY INFRASTRUCTURE</span
            >
          </div>
          <h2 :class="$style.headline">
            Structured for Reliability. <br />
            <span :class="$style.headlineMuted"
              >Engineered for Global Flow.</span
            >
          </h2>
        </div>

        <div :class="$style.headerRight">
          <p :class="$style.leadText">
            From single-pallet ingredient imports to multi-container factory
            production lines, we remove international trade friction with
            transparent logistics and strict quality controls.
          </p>
        </div>
      </div>

      <div :class="$style.servicesGrid">
        <article
          v-for="service in services"
          :key="service.index"
          :class="[
            $style.serviceCard,
            service.index === '01' || service.index === '02'
              ? $style.featuredCard
              : '',
          ]"
        >
          <div :class="$style.cardTop">
            <div :class="$style.indexMarker">{{ service.index }}</div>
            <span :class="$style.scopeTag">{{ service.scope }}</span>
          </div>

          <div :class="$style.cardBody">
            <span :class="$style.cardSubtitle">{{ service.subtitle }}</span>
            <h3 :class="$style.cardTitle">{{ service.title }}</h3>
            <p :class="$style.cardDescription">{{ service.description }}</p>
          </div>

          <div :class="$style.cardFooter">
            <div :class="$style.highlightTitle">Key Capabilities</div>
            <ul :class="$style.highlightList">
              <li
                v-for="item in service.highlights"
                :key="item"
                :class="$style.highlightItem"
              >
                <span :class="$style.bulletDot" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style module src="./CoreServicesSection.module.css"></style>
