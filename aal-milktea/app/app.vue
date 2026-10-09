<script setup lang="ts">
import AppHeader from "@/components/header/AppHeader.vue";
import HeroSection from "@/components/hero/HeroSection.vue";
import GlobalNetworkSection from "@/components/network/GlobalNetworkSection.vue";
import CoreServicesSection from "@/components/services/CoreServicesSection.vue";
import FoundersValuesSection from "@/components/values/FoundersValuesSection.vue";
import AboutSection from "@/components/about/AboutSection.vue";
import FoundersSection from "@/components/founders/FoundersSection.vue";
import WhyChooseSection from "@/components/why-choose/WhyChooseSection.vue";
import AppFooter from "@/components/footer/AppFooter.vue";
import ContactSection from "@/components/contact/ContactSection.vue";
</script>

<template>
  <main>
    <AppHeader />
    <HeroSection />
    <AboutSection />
    <GlobalNetworkSection />
    <CoreServicesSection />
    <FoundersValuesSection />
    <FoundersSection />
    <WhyChooseSection />
    <ContactSection />
    <AppFooter />
  </main>
</template>
