<script setup lang="ts">
interface AdvantageItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  iconType: "shield" | "globe" | "factory" | "logistics" | "handshake";
}

const advantages: AdvantageItem[] = [
  {
    id: "01",
    tag: "GLOBAL STANDARDS",
    iconType: "shield",
    title: "Verified GMP, ISO, CE & KFDA Factories",
    description:
      "Direct manufacturing agreements with rigorously audited tier-one industrial facilities ensuring international compliance and safety.",
  },
  {
    id: "02",
    tag: "ZERO BARRIERS",
    iconType: "globe",
    title: "Native Multilingual Trade Team",
    description:
      "Fluent communication across English, Tagalog, Thai, Mandarin, and Korean to negotiate factory floor terms without cultural friction.",
  },
  {
    id: "03",
    tag: "PROFITABILITY",
    iconType: "factory",
    title: "Factory-Direct Pricing with Low MOQs",
    description:
      "Eliminating multiple layers of middlemen to offer genuine bottom-line pricing and flexible initial batch sizes tailored for growth.",
  },
  {
    id: "04",
    tag: "COMPREHENSIVE",
    iconType: "logistics",
    title: "Turnkey End-to-End Fulfillment",
    description:
      "Single-point coordination covering factory sourcing, custom product development, ocean/air cargo, and complete customs clearance.",
  },
  {
    id: "05",
    tag: "PROVEN TRACK RECORD",
    iconType: "handshake",
    title: "Trusted by Startups to Global Buyers",
    description:
      "Powering supply chains across retail kiosks, growing franchises, regional resellers, and high-volume commercial enterprises.",
  },
];
</script>

<template>
  <section id="why-choose" :class="$style.whySection">
    <div :class="$style.sectionContent">
      <!-- Section Header -->
      <div :class="$style.headerBlock">
        <span :class="$style.eyebrow">THE AAL ADVANTAGE</span>
        <h2 :class="$style.headline">
          Why Choose AAL Group? <br />
          <span :class="$style.headlineMuted"
            >Global Reach. Absolute Peace of Mind.</span
          >
        </h2>
        <p :class="$style.leadText">
          We combine sovereign factory sourcing, multilingual negotiating
          strength, and seamless import infrastructure to give your brand a
          genuine market edge.
        </p>
      </div>

      <!-- Balanced 5-Pillar Advantage Matrix with Custom SVGs -->
      <div :class="$style.advantageGrid">
        <article
          v-for="(item, index) in advantages"
          :key="item.id"
          :class="[
            $style.advantageCard,
            index === 0 || index === 1 ? $style.wideCard : '',
          ]"
        >
          <div :class="$style.cardTop">
            <!-- Distinctive Icon Pill -->
            <div :class="$style.iconWrapper">
              <!-- 01: Shield Checkmark -->
              <svg
                v-if="item.iconType === 'shield'"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>

              <!-- 02: Globe with Chat Bubble -->
              <svg
                v-else-if="item.iconType === 'globe'"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M3.6 9h16.8" />
                <path d="M3.6 15h16.8" />
                <path d="M11.5 3a14 14 0 0 1 0 18" />
                <path d="M12.5 3a14 14 0 0 1 0 18" />
              </svg>

              <!-- 03: Factory with Currency -->
              <svg
                v-else-if="item.iconType === 'factory'"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M2 20h20" />
                <path d="M6 20V10l5 4V10l5 4V4h4v16" />
                <path d="M18 9h.01" />
                <path d="M18 13h.01" />
              </svg>

              <!-- 04: End-to-End Shipping & Gears -->
              <svg
                v-else-if="item.iconType === 'logistics'"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="1" y="3" width="15" height="13" rx="1" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>

              <!-- 05: Handshake Partnership -->
              <svg
                v-else-if="item.iconType === 'handshake'"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4l-2.4-2.4a1 1 0 0 0-1.4 0L13 13"
                />
                <path
                  d="m13 13-3.6-3.6a1 1 0 0 0-1.4 0L4.3 13.1a1 1 0 0 0 0 1.4l2.4 2.4a1 1 0 0 0 1.4 0L11 14.5"
                />
                <path d="m2 10 5-5a2 2 0 0 1 2.8 0l1.4 1.4" />
                <path d="m22 10-5-5a2 2 0 0 0-2.8 0L12.8 6.4" />
              </svg>
            </div>

            <span :class="$style.scopeTag">{{ item.tag }}</span>
          </div>

          <div :class="$style.cardBody">
            <h3 :class="$style.cardTitle">{{ item.title }}</h3>
            <p :class="$style.cardDescription">{{ item.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style module src="./WhyChooseSection.module.css"></style>
