<script setup lang="ts">
interface CompanyValue {
  num: string;
  name: string;
  description: string;
}

const values: CompanyValue[] = [
  {
    num: "01",
    name: "Malasakit: The Core of Our Commitment",
    description:
      "At AAL, we take pride in managing our resources with care and responsibility. We believe in continuous growth and development to provide innovative and sustainable products and services that benefit our customers, partners, and the broader community.",
  },
  {
    num: "02",
    name: "Commitment to Responsibility and Growth",
    description:
      "We believe in developing our people by providing opportunities for growth that fuel our collective success, managing resources with care and building a foundation for transparent, long-term expansion.",
  },
  {
    num: "03",
    name: "Delivering Uncompromising Quality",
    description:
      "We are committed to offering products and services of the highest quality, ensuring reliability, value, and satisfaction for our customers. Every interaction with AAL GROUP reflects our dedication to meeting the highest standards in all that we do.",
  },
  {
    num: "04",
    name: "Empowering Communities",
    description:
      "We believe in making a positive impact by empowering the communities where we operate. Through responsible business practices, innovative solutions, and meaningful engagements, we contribute to the growth and well-being of the people and environments we serve.",
  },
];
</script>

<template>
  <section id="values" :class="$style.valuesSection">
    <div :class="$style.sectionContent">
      <!-- Left Column on Desktop: Official Corporate Commitment -->
      <div :class="$style.narrativeSide">
        <div :class="$style.headerBlock">
          <span :class="$style.eyebrow">COMPANY VALUES</span>
          <h2 :class="$style.headline">
            Our Commitment. <br />
            <span :class="$style.headlineMuted">“Together, We Grow”</span>
          </h2>
          <p :class="$style.leadText">
            At AAL GROUP, we conduct business each day with absolute integrity,
            honesty, and passion, working closely as a team to meet our
            customers' needs. We lead by offering exceptional products and
            services that help customers achieve their goals, while setting an
            example through our commitment to giving back to the communities
            where we operate.
          </p>
        </div>

        <!-- Transparency & Operational Foundations Callout -->
        <div :class="$style.commitmentCard">
          <h3 :class="$style.commitmentCardTitle">
            The Principles Guiding Every Step
          </h3>
          <p :class="$style.commitmentCardText">
            As we continue to grow and expand our reach, we believe it is
            essential to be transparent about the principles that guide us in
            every aspect of our business. These core values form the foundation
            of our operations, reflecting our dedication to delivering
            outstanding products and services to our customers and partners.
          </p>
        </div>
      </div>

      <!-- Right Column on Desktop: 2x2 Official Core Values Matrix -->
      <div :class="$style.matrixSide">
        <div v-for="val in values" :key="val.num" :class="$style.valueCard">
          <div :class="$style.cardHeader">
            <span :class="$style.valNumber">{{ val.num }}</span>
          </div>
          <h3 :class="$style.valTitle">{{ val.name }}</h3>
          <p :class="$style.valDescription">{{ val.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style module src="./FoundersValuesSection.module.css"></style>
