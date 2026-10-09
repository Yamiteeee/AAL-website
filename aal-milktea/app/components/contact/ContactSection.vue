<script setup lang="ts">
import { reactive, ref } from "vue";

const form = reactive({
  fullName: "",
  email: "",
  company: "",
  inquiryType: "sourcing",
  message: "",
});

const isSubmitted = ref(false);

const handleSubmit = () => {
  isSubmitted.value = true;
};
</script>

<template>
  <section id="contact" :class="$style.contactSection">
    <div :class="$style.sectionContent">
      <div :class="$style.contactGrid">
        <!-- Left: Corporate Contact Info & Channels -->
        <div :class="$style.infoColumn">
          <span :class="$style.eyebrow">GET IN TOUCH</span>
          <h2 :class="$style.headline">
            Start Your Direct <br />
            <span :class="$style.headlineMuted">Import Pipeline.</span>
          </h2>
          <p :class="$style.leadText">
            Whether you need single-pallet commercial supplies, custom OEM runs,
            or full-container factory sourcing across Asia and Europe, our trade
            team is ready to assist.
          </p>

          <div :class="$style.channelList">
            <div :class="$style.channelItem">
              <span :class="$style.channelLabel"
                >GLOBAL INQUIRIES &amp; ORDERS</span
              >
              <a
                href="mailto:global@aalgroup.asia"
                :class="$style.channelValue"
              >
                global@aalgroup.asia
              </a>
            </div>

            <div :class="$style.channelItem">
              <span :class="$style.channelLabel"
                >HEADQUARTERS &amp; CENTRAL HUB</span
              >
              <p :class="$style.channelAddress">
                Nara 1, Brgy. Bitas, Cabanatuan City, Nueva Ecija, Philippines
              </p>
            </div>

            <div :class="$style.channelItem">
              <span :class="$style.channelLabel">TRADING HOURS</span>
              <p :class="$style.channelAddress">
                Monday – Friday: 8:00 AM – 5:00 PM (PHT)
              </p>
            </div>
          </div>
        </div>

        <!-- Right: Inquiry Form Card -->
        <div :class="$style.formCard">
          <form
            v-if="!isSubmitted"
            @submit.prevent="handleSubmit"
            :class="$style.inquiryForm"
          >
            <h3 :class="$style.formTitle">Direct Trade Inquiry</h3>
            <p :class="$style.formSubtitle">
              Fill out the form below and our team will get back to you within
              24 hours.
            </p>

            <div :class="$style.inputGroup">
              <label for="fullName" :class="$style.label">Full Name *</label>
              <input
                id="fullName"
                v-model="form.fullName"
                type="text"
                required
                placeholder="Juan Dela Cruz"
                :class="$style.input"
              />
            </div>

            <div :class="$style.inputRow">
              <div :class="$style.inputGroup">
                <label for="email" :class="$style.label">Work Email *</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="juan@company.com"
                  :class="$style.input"
                />
              </div>

              <div :class="$style.inputGroup">
                <label for="company" :class="$style.label"
                  >Company / Brand Name</label
                >
                <input
                  id="company"
                  v-model="form.company"
                  type="text"
                  placeholder="Brand Corp"
                  :class="$style.input"
                />
              </div>
            </div>

            <div :class="$style.inputGroup">
              <label for="inquiryType" :class="$style.label"
                >Primary Interest *</label
              >
              <select
                id="inquiryType"
                v-model="form.inquiryType"
                :class="$style.select"
              >
                <option value="sourcing">
                  Global Product &amp; Factory Sourcing
                </option>
                <option value="oem">
                  Turnkey OEM / Private Label Formulation
                </option>
                <option value="freight">
                  Ocean &amp; Air Freight Forwarding
                </option>
                <option value="wholesale">
                  Bulk Food &amp; Beverage Packaging
                </option>
                <option value="equipment">
                  Commercial Machinery Procurement
                </option>
              </select>
            </div>

            <div :class="$style.inputGroup">
              <label for="message" :class="$style.label"
                >Requirements / Inquiries *</label
              >
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                required
                placeholder="Specify target products, expected volume, or destination port..."
                :class="$style.textarea"
              />
            </div>

            <button type="submit" :class="$style.submitBtn">
              Submit Trade Request
            </button>
          </form>

          <!-- Success State -->
          <div v-else :class="$style.successState">
            <div :class="$style.successBadge">✓</div>
            <h4 :class="$style.successTitle">Inquiry Received</h4>
            <p :class="$style.successText">
              Thank you, {{ form.fullName }}. Our cross-border trade
              representatives have received your message and will review your
              specifications shortly.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style module src="./ContactSection.module.css"></style>
