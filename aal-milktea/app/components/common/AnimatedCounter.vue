<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

interface Props {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

const props = withDefaults(defineProps<Props>(), {
  duration: 1800,
  prefix: "",
  suffix: "",
  decimals: 0,
});

const counterRef = ref<HTMLElement | null>(null);

// 1. Cache the formatter ONCE upfront instead of re-instantiating on every tick
const formatter = new Intl.NumberFormat(undefined, {
  minimumFractionDigits: props.decimals,
  maximumFractionDigits: props.decimals,
});

const format = (val: number): string => {
  return `${props.prefix}${formatter.format(val)}${props.suffix}`;
};

// Initial SSR / hydration content
const initialDisplay = format(0);

let observer: IntersectionObserver | null = null;
let rafId: number | null = null;
let hasAnimated = false;

// Exponential ease-out
const easeOutExpo = (t: number): number => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

const animateCount = () => {
  if (hasAnimated || !counterRef.value) return;
  hasAnimated = true;

  const targetEl = counterRef.value;
  const startTime = performance.now();
  const endValue = props.target;
  let lastFormattedValue = -1;

  const update = (now: number) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / props.duration, 1);
    const easedProgress = easeOutExpo(progress);
    const currentValue = easedProgress * endValue;

    // Only touch the DOM when the rounded display number actually changes
    const roundedComparison =
      props.decimals > 0
        ? Math.round(currentValue * Math.pow(10, props.decimals))
        : Math.floor(currentValue);

    if (roundedComparison !== lastFormattedValue) {
      lastFormattedValue = roundedComparison;
      // Direct DOM update bypasses Vue's virtual DOM diffing engine entirely
      targetEl.textContent = format(currentValue);
    }

    if (progress < 1) {
      rafId = requestAnimationFrame(update);
    } else {
      targetEl.textContent = format(endValue);
      rafId = null;
    }
  };

  rafId = requestAnimationFrame(update);
};

onMounted(() => {
  if (!counterRef.value) return;

  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting) {
        animateCount();
        observer?.disconnect();
        observer = null;
      }
    },
    { threshold: 0.2 },
  );

  observer.observe(counterRef.value);
});

onUnmounted(() => {
  if (rafId !== null) {
    cancelAnimationFrame(rafId);
  }
  if (observer) {
    observer.disconnect();
    observer = null;
  }
});
</script>

<template>
  <span ref="counterRef">{{ initialDisplay }}</span>
</template>
