<script setup lang="ts">
interface CompanyValue {
  num: string;
  title: string;
  tag: string;
  description: string;
}

const values: CompanyValue[] = [
  {
    num: "01",
    title: "Commitment to Responsibility and Growth",
    tag: "SUSTAINABILITY & SCALING",
    description:
      "We take pride in managing resources with rigorous care and diligence, driving continuous development to deliver innovative, sustainable solutions that benefit customers, partners, and the broader community[cite: 3].",
  },
  {
    num: "02",
    title: "Malasakit: The Core of Our Commitment",
    tag: "STAKEHOLDER CARE",
    description:
      "Our guiding cultural principle is Malasakit—the deepest form of care and stewardship[cite: 3]. It challenges us to go above and beyond expectations, ensuring empathetic service that honors the trust of our clients, suppliers, and partners[cite: 3].",
  },
  {
    num: "03",
    title: "Delivering Uncompromising Quality",
    tag: "STANDARDS & RELIABILITY",
    description:
      "From certified ingredient procurement to global cargo handling, every interaction reflects an uncompromising standard of execution, product safety, and verified compliance[cite: 3].",
  },
  {
    num: "04",
    title: "Empowering Communities",
    tag: "MEANINGFUL IMPACT",
    description:
      "Through responsible business practices, equitable trade opportunities, and purposeful engagement, we contribute directly to the economic growth and long-term well-being of the communities we touch[cite: 3].",
  },
];
</script>

<template>
  <section id="values" :class="$style.valuesSection">
    <div :class="$style.sectionContent">
      <!-- Section Header -->
      <div :class="$style.headerRow">
        <div :class="$style.headerLeft">
          <div :class="$style.eyebrow">
            <span :class="$style.badge">PEDIGREE &amp; ETHOS</span>
            <span :class="$style.divider">/</span>
            <span :class="$style.tagline">FOUNDATIONAL INTEGRITY</span>
          </div>
          <h2 :class="$style.headline">
            Guided by Purpose. <br />
            <span :class="$style.headlineMuted"
              >Built on Malasakit[cite: 3].</span
            >
          </h2>
        </div>

        <div :class="$style.headerRight">
          <p :class="$style.leadText">
            Founded on May 1, 2020 by brothers Andrei Ang Lim and Andrew Ang
            Lim, AAL Group was built on the premise that global enterprise and
            genuine stewardship must move together[cite: 3].
          </p>
        </div>
      </div>

      <!-- Founders & Leadership Ledger -->
      <div :class="$style.foundersGrid">
        <!-- Andrei Ang Lim Profile Card -->
        <article :class="$style.founderCard">
          <div :class="$style.founderHeader">
            <div :class="$style.founderBadge">EXECUTIVE LEADERSHIP</div>
            <span :class="$style.founderTenure">CO-FOUNDER[cite: 3]</span>
          </div>

          <div :class="$style.founderIdentity">
            <h3 :class="$style.founderName">Mr. Andrei Ang Lim[cite: 3]</h3>
            <span :class="$style.founderRole">President[cite: 3]</span>
          </div>

          <p :class="$style.founderBio">
            Spearheads corporate strategy, cross-border business development,
            and sovereign trade corridors. Driven by a vision to connect
            Filipino enterprise to tier-one global manufacturing hubs[cite: 3,
            4].
          </p>

          <div :class="$style.founderQuote">
            <p>
              “From startup sparks to growing empires, we move with you.”[cite:
              4]
            </p>
          </div>
        </article>

        <!-- Andrew Ang Lim Profile Card -->
        <article :class="$style.founderCard">
          <div :class="$style.founderHeader">
            <div :class="$style.founderBadge">OPERATIONAL LEADERSHIP</div>
            <span :class="$style.founderTenure">CO-FOUNDER[cite: 3]</span>
          </div>

          <div :class="$style.founderIdentity">
            <h3 :class="$style.founderName">Mr. Andrew Ang Lim[cite: 3]</h3>
            <span :class="$style.founderRole">Vice President[cite: 3]</span>
          </div>

          <p :class="$style.founderBio">
            Oversees operational integrity, manufacturing quality audits, and
            end-to-end supply chain logistics. Ensures high standards of
            compliance and fulfillment across all corridors[cite: 3].
          </p>

          <div :class="$style.founderQuote">
            <p>
              “Uncompromising quality is not an ambition—it is our operating
              baseline.”[cite: 3]
            </p>
          </div>
        </article>
      </div>

      <!-- Mission & Vision Architectural Block -->
      <div :class="$style.missionVisionBlock">
        <div :class="$style.mvColumn">
          <div :class="$style.mvTag">CORPORATE VISION</div>
          <h4 :class="$style.mvTitle">
            Shaping Industry with Unwavering Integrity[cite: 3]
          </h4>
          <p :class="$style.mvDescription">
            To be a globally recognized leader in cross-border trading and
            supply chains, shaping the future with groundbreaking ideas,
            uplifting lives, and creating opportunities that help communities
            thrive[cite: 3, 4].
          </p>
        </div>

        <div :class="$style.mvDivider" />

        <div :class="$style.mvColumn">
          <div :class="$style.mvTag">CORPORATE MISSION</div>
          <h4 :class="$style.mvTitle">
            Paving the Way to a Better Life for Everyone We Serve[cite: 3]
          </h4>
          <p :class="$style.mvDescription">
            Delivering products and services that embody integrity, excellence,
            and innovation[cite: 3]. We empower communities, facilitate
            sustainable growth, and provide end-to-end solutions that elevate
            every client[cite: 3, 4].
          </p>
        </div>
      </div>

      <!-- Core Values 4-Pillar Grid -->
      <div :class="$style.valuesContainer">
        <div :class="$style.valuesHeader">
          <h3 :class="$style.valuesTitle">
            The Four Pillars of Operation[cite: 3]
          </h3>
          <span :class="$style.valuesSubtitle"
            >Guiding principles across all global touchpoints[cite: 3]</span
          >
        </div>

        <div :class="$style.valuesGrid">
          <div v-for="val in values" :key="val.num" :class="$style.valueCard">
            <div :class="$style.valTop">
              <span :class="$style.valNum">{{ val.num }}</span>
              <span :class="$style.valTag">{{ val.tag }}</span>
            </div>
            <h4 :class="$style.valTitle">{{ val.title }}[cite: 3]</h4>
            <p :class="$style.valDescription">{{ val.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style module src="./FoundersValuesSection.module.css"></style>
