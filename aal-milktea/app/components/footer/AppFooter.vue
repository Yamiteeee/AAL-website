<script setup lang="ts">
interface SocialLink {
  name: string;
  href: string;
  icon: "facebook" | "instagram" | "linkedin" | "wechat";
}

const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: "facebook",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: "instagram",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: "linkedin",
  },
  {
    name: "WeChat / Official Channels",
    href: "mailto:global@aalgroup.asia",
    icon: "wechat",
  },
];
</script>

<template>
  <footer :class="$style.footerSection">
    <div :class="$style.sectionContent">
      <!-- Left: Brand Identity, Social Icons & Legal -->
      <div :class="$style.brandCol">
        <div :class="$style.brandIdentity">
          <img
            src="/images/aal-pin-white.png"
            alt="AAL Group"
            :class="$style.logoImg"
          />
          <div :class="$style.brandText">
            <span :class="$style.brandName">AAL Group</span>
            <span :class="$style.brandMotto">Together, we grow</span>
          </div>
        </div>

        <!-- Social Media Icons Row -->
        <div :class="$style.socialRow" aria-label="Official Social Channels">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.href"
            target="_blank"
            rel="noopener noreferrer"
            :class="$style.socialIconBtn"
            :aria-label="social.name"
            :title="social.name"
          >
            <!-- Facebook -->
            <svg
              v-if="social.icon === 'facebook'"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
              />
            </svg>

            <!-- Instagram -->
            <svg
              v-else-if="social.icon === 'instagram'"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>

            <!-- LinkedIn -->
            <svg
              v-else-if="social.icon === 'linkedin'"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
              />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>

            <!-- WeChat / Chat Communication -->
            <svg
              v-else-if="social.icon === 'wechat'"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
              />
            </svg>
          </a>
        </div>

        <p :class="$style.copyright">
          &copy; {{ new Date().getFullYear() }} AAL Group. All rights reserved.
        </p>
      </div>

      <!-- Right: Structured Link Columns -->
      <div :class="$style.linksGroup">
        <div :class="$style.linksCol">
          <span :class="$style.linksHeading">Navigation</span>
          <a href="#about" :class="$style.footerLink">About Us</a>
          <a href="#network" :class="$style.footerLink">Global Network</a>
          <a href="#services" :class="$style.footerLink">Capabilities</a>
        </div>

        <div :class="$style.linksCol">
          <span :class="$style.linksHeading">Company</span>
          <a href="#values" :class="$style.footerLink">Our Values</a>
          <a href="#founders" :class="$style.footerLink">Leadership</a>
          <a href="#why-choose" :class="$style.footerLink">Why Choose Us</a>
        </div>

        <div :class="$style.linksCol">
          <span :class="$style.linksHeading">Standards</span>
          <span :class="$style.complianceItem">GMP Certified</span>
          <span :class="$style.complianceItem">ISO Compliant</span>
          <span :class="$style.complianceItem">CE &amp; KFDA Audited</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style module src="./AppFooter.module.css"></style>
