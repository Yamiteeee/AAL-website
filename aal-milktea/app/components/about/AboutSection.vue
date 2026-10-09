<template>
  <section id="about" :class="$style.aboutSection">
    <div :class="$style.sectionContent">
      <!-- Section Header -->
      <div :class="$style.headerBlock">
        <span :class="$style.eyebrow">ABOUT AAL GROUP</span>
        <h2 :class="$style.headline">
          Direct Importer. <br />
          <span :class="$style.headlineMuted"
            >Zero Middlemen. Built for Scale.</span
          >
        </h2>
        <p :class="$style.leadText">
          What began on May 1, 2020 as a specialized beverage supply operation
          has evolved into an international trading and manufacturing
          procurement house, moving full-container cargo from tier-one factories
          straight to Philippine enterprise floors.
        </p>
      </div>

      <!-- Narrative Grid: Story & Proof Points -->
      <div :class="$style.narrativeGrid">
        <!-- Story Card -->
        <div :class="$style.storyCard">
          <span :class="$style.cardTag">ORIGIN &amp; INFRASTRUCTURE</span>
          <h3 :class="$style.cardHeading">
            Ground-Level Supply Chain Reliability
          </h3>
          <p :class="$style.cardBody">
            Headquartered in Cabanatuan City with dedicated logistics channels
            across Luzon and Metro Manila, AAL Group operates as a primary
            direct importer. We remove multi-tier broker markups by maintaining
            dedicated overseas factory contracts, port clearing operations, and
            high-capacity warehousing.
          </p>
          <div :class="$style.storyFooter">
            <div :class="$style.facilityStat">
              <span :class="$style.statNumber">1,000s</span>
              <span :class="$style.statLabel"
                >Daily Pallets &amp; Cartons Dispatched</span
              >
            </div>
            <div :class="$style.facilityStat">
              <span :class="$style.statNumber">Direct</span>
              <span :class="$style.statLabel"
                >Factory-to-Warehouse Logistics</span
              >
            </div>
          </div>
        </div>

        <!-- Capability Blocks -->
        <div :class="$style.pillarsCol">
          <div :class="$style.pillarCard">
            <div :class="$style.pillarIndex">01</div>
            <div>
              <h4 :class="$style.pillarTitle">
                Wholesale Ingredients &amp; Packaging
              </h4>
              <p :class="$style.pillarBody">
                Direct procurement of tea leaves, specialty syrups, non-dairy
                powders, custom-molded U-cups, slim cups, and branded sealing
                films manufactured under strict food-grade compliance.
              </p>
            </div>
          </div>

          <div :class="$style.pillarCard">
            <div :class="$style.pillarIndex">02</div>
            <div>
              <h4 :class="$style.pillarTitle">Commercial Turnkey Equipment</h4>
              <p :class="$style.pillarBody">
                Automated cup sealers, commercial shakers, soft-serve ice cream
                machines, slush makers, and precision coffee grinders backed by
                local parts and technical replacement support.
              </p>
            </div>
          </div>

          <div :class="$style.pillarCard">
            <div :class="$style.pillarIndex">03</div>
            <div>
              <h4 :class="$style.pillarTitle">
                Custom OEM &amp; Business Scaling
              </h4>
              <p :class="$style.pillarBody">
                Private-label recipe formulation, custom-printed packaging runs,
                and multi-branch volume replenishment engineered for growing
                retail franchises and startup brands alike.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style module src="./AboutSection.module.css"></style>
