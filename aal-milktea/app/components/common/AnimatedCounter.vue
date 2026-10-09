<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

interface Props {
  target: number;
  duration?: number; // duration in milliseconds (default: 2000ms)
  prefix?: string; // e.g. "$" or "+"
  suffix?: string; // e.g. "%" or "k+"
  decimals?: number; // number of decimal places (default: 0)
}

const props = withDefaults(defineProps<Props>(), {
  duration: 2000,
  prefix: "",
  suffix: "",
  decimals: 0,
});

const currentDisplay = ref(
  `${props.prefix}${Number(0).toFixed(props.decimals)}${props.suffix}`,
);
const counterRef = ref<HTMLElement | null>(null);
let observer: IntersectionObserver | null = null;
let hasAnimated = false;

const easeOutExpo = (t: number): number => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

const animateCount = () => {
  if (hasAnimated) return;
  hasAnimated = true;

  const startTime = performance.now();
  const endValue = props.target;

  const update = (now: number) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / props.duration, 1);
    const easedProgress = easeOutExpo(progress);

    const currentValue = easedProgress * endValue;

    currentDisplay.value = `${props.prefix}${currentValue.toLocaleString(
      undefined,
      {
        minimumFractionDigits: props.decimals,
        maximumFractionDigits: props.decimals,
      },
    )}${props.suffix}`;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      currentDisplay.value = `${props.prefix}${endValue.toLocaleString(
        undefined,
        {
          minimumFractionDigits: props.decimals,
          maximumFractionDigits: props.decimals,
        },
      )}${props.suffix}`;
    }
  };

  requestAnimationFrame(update);
};

onMounted(() => {
  if (!counterRef.value) return;

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount();
          if (observer && counterRef.value) {
            observer.unobserve(counterRef.value);
          }
        }
      });
    },
    { threshold: 0.3 },
  );

  observer.observe(counterRef.value);
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
    observer = null;
  }
});
</script>

<template>
  <span ref="counterRef">{{ currentDisplay }}</span>
</template>
