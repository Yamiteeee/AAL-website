<template>
  <section :class="$style.heroSection">
    <div :class="$style.heroContent">
      <!-- Top Architectural Header -->
      <div :class="$style.headerBlock">
        <div :class="$style.eyebrow">
          <span :class="$style.corpMark">EST. MAY 2020</span>[cite: 3]
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
            OEM/ODM product development[cite: 4].
          </p>
        </div>
      </div>

      <!-- Center Executive Capability Ledger -->
      <div :class="$style.credentialLedger">
        <!-- 01 Operations -->
        <div :class="$style.ledgerCol">
          <div :class="$style.colTag">01 / OPERATIONS</div>
          <h4 :class="$style.colHeading">End-to-End Solutions</h4>
          <p :class="$style.colBody">
            LCL/FCL ocean &amp; air freight, port consolidation, and customs
            documentation tailored for scale[cite: 4].
          </p>
        </div>

        <!-- 02 Sourcing -->
        <div :class="$style.ledgerCol">
          <div :class="$style.colTag">02 / SOURCING</div>
          <h4 :class="$style.colHeading">Verified Factory Network</h4>
          <p :class="$style.colBody">
            Direct access to GMP, ISO, CE, and KFDA certified factories across
            11 key international corridors[cite: 3, 4].
          </p>
        </div>

        <!-- 03 Leadership -->
        <div :class="$style.ledgerCol">
          <div :class="$style.colTag">03 / COMMITMENT</div>
          <div :class="$style.quoteBlock">
            <p :class="$style.quoteText">
              “From startup sparks to growing empires, we move with you.”[cite:
              4]
            </p>
            <span :class="$style.quoteAuthor"
              >— Andrei Lim, President[cite: 3, 4]</span
            >
          </div>
        </div>
      </div>

      <!-- Corporate Showcase Stage -->
      <div :class="$style.showcaseShell">
        <div :class="$style.showcaseFrame">
          <div :class="$style.ambientBackdrop">
            <div :class="$style.gridPattern" />
            <div :class="$style.glowSpot" />
          </div>

          <div :class="$style.showcaseOverlay">
            <div :class="$style.badgePill">
              <span :class="$style.livePulse" />
              <span>AAL GLOBAL TRADE OPERATIONS</span>
            </div>

            <div :class="$style.overlayBottom">
              <div>
                <h3 :class="$style.stageTitle">
                  Cross-Border Logistics &amp; Manufacturing
                </h3>
                <p :class="$style.stageSubtitle">
                  Operating continuous freight corridors from Asia to
                  Europe[cite: 4]
                </p>
              </div>

              <a href="#network" :class="$style.exploreAction">
                <span>Explore Network Map</span>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Corporate Metrics Strip -->
      <div :class="$style.metricsStrip">
        <div :class="$style.metricCard">
          <div :class="$style.metricValue">11+ Countries</div>
          <div :class="$style.metricDescription">
            Verified Sourcing Hubs[cite: 4]
          </div>
        </div>
        <div :class="$style.metricCard">
          <div :class="$style.metricValue">GMP · ISO · CE · KFDA</div>
          <div :class="$style.metricDescription">
            Factory Compliance Standards[cite: 3]
          </div>
        </div>
        <div :class="$style.metricCard">
          <div :class="$style.metricValue">End-to-End</div>
          <div :class="$style.metricDescription">
            Sourcing to Customs Clearance[cite: 4]
          </div>
        </div>
        <div :class="$style.metricCard">
          <div :class="$style.metricValue">May 1, 2020</div>
          <div :class="$style.metricDescription">
            Founded by Andrei &amp; Andrew Lim[cite: 3]
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style module src="./HeroSection.module.css"></style>
