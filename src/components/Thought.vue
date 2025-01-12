<script setup>
const thoughtArray = [
  {
    thought:
      "No hidden costs: Expert guidance, development, photography & hosting included.",
  },
  {
    thought:
      "Complete digital package: Photography, development, training & free hosting",
  },
  {
    thought:
      "Your all-in-one partner: From product shots to deployment - all included",
  },
  {
    thought:
      "Complete digital package: Photography, development, training & free hosting",
  },
  { thought: "We grow together: Training, consulting & free hosting" },
  { thought: "Full service solution: Expert guidance + free deployment" },
  { thought: "Your partner in growth: Training, solutions & free hosting" },
];
</script>
<template lang="">
  <div class="cloud">
    {{ thoughtArray[Math.floor(Math.random() * thoughtArray.length)].thought }}
  </div>
  <div class="thought-bubble"></div>
  <div class="thought-bubble two"></div>
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
  padding: 2rem 1rem 0rem;
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

.thought-bubble.two {
  left: 8rem;
  top: 3rem;
  height: 25px;
  width: 25px;
}

.thought-bubble.two::before {
  top: 1rem;
}
</style>
