<script setup lang="ts">
import AppHeader from "@/components/header/AppHeader.vue";
import HeroSection from "@/components/hero/HeroSection.vue";
import AboutSection from "@/components/about/AboutSection.vue";
import GlobalNetworkSection from "@/components/network/GlobalNetworkSection.vue";
import CoreServicesSection from "@/components/services/CoreServicesSection.vue";
import FoundersValuesSection from "@/components/values/FoundersValuesSection.vue";
import FoundersSection from "@/components/founders/FoundersSection.vue";
import WhyChooseSection from "@/components/why-choose/WhyChooseSection.vue";
import ContactSection from "@/components/contact/ContactSection.vue";
import AppFooter from "@/components/footer/AppFooter.vue";
</script>

<template>
  <div>
    <AppHeader />
    <main>
      <HeroSection data-aos="fade-up" />
      <AboutSection data-aos="fade-up" />
      <GlobalNetworkSection />
      <CoreServicesSection data-aos="fade-up" />
      <FoundersValuesSection data-aos="fade-up" />
      <FoundersSection data-aos="fade-up" />
      <WhyChooseSection data-aos="fade-up" />
      <ContactSection data-aos="fade-up" />
      <AppFooter data-aos="fade-up" />
    </main>
  </div>
</template>
