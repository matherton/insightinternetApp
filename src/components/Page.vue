<template>
  <main
    :class="`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${gridColMD} lg:grid-cols-${gridColLG} gap-4 pt-4`"
  >
    <div>{{ copy1 }}</div>
    <div>
      <img :src="`/src/assets/${imgName}.png`" class="w-1/4 mx-auto" alt="" />
    </div>
    <div>{{ copy2 }}</div>
    <div>04</div>
    <div>05</div>
    <div>{{ gridColLG }}</div>
    <div>07</div>
    <div>08</div>
  </main>
</template>

<script>
export default {
  props: {
    copy1: String,
    copy2: String,
    imgName: String,
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
