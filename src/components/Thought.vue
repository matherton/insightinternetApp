<template lang="">
  <blockquote class="oval-thought-border">
    <p>"This is a blockquote that is styled to look like a thought bubble!"</p>
  </blockquote>
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
  border: 0.4rem solid #d3d3d3;
  text-align: center;
  border-radius: 240px / 140px;
}

.oval-thought-border:before {
  content: "";
  display: block;
  border: 0.35rem solid #d3d3d3;
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
  border: 0.25rem solid #d3d3d3;
  border-radius: 25px;
  width: 25px;
  height: 25px;
  position: absolute;
  bottom: -75px;
  right: 145px;
  display: block;
}
</style>
