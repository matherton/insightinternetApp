<template>
  <t-card header="Title of the card">
    Content of the card.

    <template v-slot:footer>
      <div class="flex justify-between">
        <t-button type="button"> Cancel </t-button>
        <t-button type="button"> Ok </t-button>
      </div>
    </template>
  </t-card>
</template>
