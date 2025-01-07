<template lang="">
  <blockquote class="oval-thought-border">
    <p>"This is a blockquote that is styled to look like a thought bubble!"</p>
  </blockquote>
  <div class="cloud">I wonder if the AI bubble will burst!!!</div>
</template>
<script>
export default {
  name: "Thought",
};
</script>
<style lang="css">
.oval-thought-border {
  margin: 0 2rem;
  position: relative;
  padding: 2rem 2rem;
  background: white;
  border: 0.3rem solid #d3d3d3;
  text-align: center;
  border-radius: 240px / 140px;
}

.oval-thought-border:before {
  content: "";
  display: block;
  border: 0.2rem solid #d3d3d3;
  position: absolute;
  /* z-index: 10; */
  border-radius: 50px;
  width: 40px;
  height: 40px;
  bottom: -55px;
  right: 105px;
  background: white;
}

.oval-thought-border:after {
  content: "";
  border: 0.1rem solid #d3d3d3;
  border-radius: 25px;
  width: 25px;
  height: 25px;
  position: absolute;
  bottom: -75px;
  right: 145px;
  display: block;
}
.cloud {
  display: grid;
  align-items: center;
  color: white;
  height: 180px; /* control the size */
  aspect-ratio: 1.8;
  --g: radial-gradient(50% 50%, #000 98%, #0000) no-repeat;
  mask: var(--g) 100% 100%/30% 60%, var(--g) 70% 0/50% 100%,
    var(--g) 0 100%/36% 68%, var(--g) 27% 18%/26% 40%,
    linear-gradient(#000 0 0) bottom/67% 58% no-repeat;
  background: #269af2;
}
</style>
