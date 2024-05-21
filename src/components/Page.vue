<template>
  <main
    :class="`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${gridColMD} lg:grid-cols-${gridColLG} gap-4`"
  >
    <div>{{ myName }}</div>
    <div>{{ gridColLG }}</div>
    <div>03</div>
    <div>04</div>
    <div>{{ myName }}</div>
    <div>{{ gridColLG }}</div>
    <div>07</div>
    <div>08</div>
  </main>
</template>

<script>
export default {
  props: {
    myName: String,
    gridColMD: {
      type: Number,
      default: 2,
    },
    gridColLG: {
      type: Number,
      default: 2,
    },
  },
};
</script>
