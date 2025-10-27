<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const thoughtArray = [
  {
    thought:
      "No hidden costs: Expert guidance, development, photography & hosting included.",
  },
  {
    thought:
      "Complete digital package: Photography, development, training & hosting",
  },
  {
    thought:
      "Your all-in-one partner: From product shots to deployment - all included",
  },
  {
    thought:
      "Complete digital package: Photography, development, training & hosting",
  },
  { thought: "We grow together: Training, consulting & hosting" },
  { thought: "Full service solution: Expert guidance + deployment" },
  {
    thought:
      "Your partner in growth: Training, solutions, deployment & hosting",
  },
];

const currentThought = ref(thoughtArray[0].thought);

function updateThought() {
  let idx;
  do {
    idx = Math.floor(Math.random() * thoughtArray.length);
  } while (thoughtArray[idx].thought === currentThought.value);
  currentThought.value = thoughtArray[idx].thought;
}

let intervalId;

onMounted(() => {
  intervalId = setInterval(updateThought, 5000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>
<template lang="">
  <div class="cloud">
    <transition
      enter-active-class="transition-opacity duration-700"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
      mode="out-in"
    >
      <span :key="currentThought" class="block w-full">
        {{ currentThought }}
      </span>
    </transition>
  </div>
  <div class="thought-bubble"></div>
</template>
<script>
export default {
  name: "Thought",
};
</script>
<style lang="css">
.cloud {
  display: grid;
  place-items: center; /* replaced align-items with place-items for brevity */
  color: white;
  height: 150px;
  aspect-ratio: 1.8;
  --gradient: radial-gradient(50% 50%, #000 98%, #0000) no-repeat;
  mask: var(--gradient) 100% 100%/30% 60%, var(--gradient) 70% 0/50% 100%,
    var(--gradient) 0 100%/36% 68%, var(--gradient) 27% 18%/26% 40%,
    linear-gradient(#000 0 0) bottom/67% 58% no-repeat;
  background-color: var(--primary-navy); /* added -color suffix for clarity */
  padding: 3rem 2.75rem;
  text-align: center;
}

.thought-bubble {
  position: relative;
  left: 4rem;
  top: 1rem;
  width: 50px;
  height: 50px;
  background: #66ccff;
  border-radius: 50%;
  border: 0.25rem solid var(--primary-navy);
}

.thought-bubble::before {
  content: "";
  display: block;
  width: 25px;
  height: 25px;
  background: #66ccff;
  border-radius: 50%;
  border: 0.25rem solid var(--primary-navy);
  position: relative;
  top: 3.5rem;
  left: 2rem;
  z-index: 0;
}

.thought-bubble::after {
  content: "";
  display: block;
  width: 12.5px;
  height: 12.5px;
  background: #66ccff;
  border-radius: 50%;
  border: 0.15rem solid var(--primary-navy);
  position: relative;
  top: 4rem;
  left: 3.5rem;
  z-index: 0;
}
</style>
