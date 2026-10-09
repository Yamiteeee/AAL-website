<script setup lang="ts">
import { ref } from "vue";

interface Founder {
  name: string;
  role: string;
  titleTag: string;
  quote: string;
  bio: string;
  // Place image files inside public/images/
  imageSrc: string;
}

const founders = ref<Founder[]>([
  {
    name: "Mr. Andrei Ang Lim",
    role: "President & Co-Founder",
    titleTag: "EXECUTIVE LEADERSHIP",
    quote: "“From startup sparks to growing empires, we move with you.”",
    bio: "Spearheads corporate strategy, sovereign trade corridors, and direct overseas factory sourcing partnerships, connecting Philippine enterprise with international manufacturing scale.",
    imageSrc: "/images/andrei-lim.jpg",
  },
  {
    name: "Mr. Andrew Ang Lim",
    role: "Vice President & Co-Founder",
    titleTag: "OPERATIONS & LOGISTICS",
    quote:
      "“Uncompromising quality is not an ambition—it is our operating baseline.”",
    bio: "Oversees ground supply chain logistics, port clearance compliance, warehouse operations, and technical machinery support across Central Luzon and nationwide networks.",
    imageSrc: "/images/andrew-lim.jpg",
  },
]);

// Graceful fallback to initial badge if local file hasn't been uploaded yet
const onImageError = (event: Event) => {
  const target = event.target as HTMLElement;
  target.style.display = "none";
};
</script>

<template>
  <section id="founders" :class="$style.foundersSection">
    <div :class="$style.sectionContent">
      <!-- Centered Header Block -->
      <div :class="$style.headerBlock">
        <span :class="$style.eyebrow">LEADERSHIP &amp; STEWARDSHIP</span>
        <h2 :class="$style.headline">
          Meet Our Founders. <br />
          <span :class="$style.headlineMuted"
            >The Vision Behind AAL Group.</span
          >
        </h2>
        <p :class="$style.leadText">
          Founded on May 1, 2020 by brothers Andrei Ang Lim and Andrew Ang Lim,
          united by a singular commitment: delivering direct factory access,
          authentic care, and sustainable growth.
        </p>
      </div>

      <!-- 2-Column Founder Profiles Grid -->
      <div :class="$style.foundersGrid">
        <article
          v-for="founder in founders"
          :key="founder.name"
          :class="$style.founderCard"
        >
          <!-- Photo Container / Dynamic Placeholder -->
          <div :class="$style.photoFrame">
            <!-- Fallback Monogram Badge (shows until photo is added) -->
            <div :class="$style.placeholderAvatar">
              <span :class="$style.avatarInitials">
                {{
                  founder.name
                    .split(" ")
                    .slice(1, 3)
                    .map((n) => n[0])
                    .join("")
                }}
              </span>
              <span :class="$style.placeholderHint"
                >Upload to {{ founder.imageSrc }}</span
              >
            </div>

            <!-- Active Photo (Renders automatically once file exists in public/) -->
            <img
              :src="founder.imageSrc"
              :alt="founder.name"
              :class="$style.founderPhoto"
              loading="lazy"
              @error="onImageError"
            />
          </div>

          <!-- Founder Info -->
          <div :class="$style.cardBody">
            <div :class="$style.badgeRow">
              <span :class="$style.roleBadge">{{ founder.titleTag }}</span>
              <span :class="$style.corpTenure">EST. 2020</span>
            </div>

            <h3 :class="$style.founderName">{{ founder.name }}</h3>
            <span :class="$style.founderRole">{{ founder.role }}</span>

            <p :class="$style.founderBio">{{ founder.bio }}</p>

            <blockquote :class="$style.founderQuote">
              <p>{{ founder.quote }}</p>
            </blockquote>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style module src="./FoundersSection.module.css"></style>
