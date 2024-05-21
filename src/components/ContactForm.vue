<template>
  <form @submit.prevent="handleSubmit">
    <MyInput id="email" labelText="Email" v-model="email" />
    <MyInput id="password" labelText="Password" v-model="password" />
    <button type="submit">Login</button>
  </form>

  <pre>
      email: {{ email }}
      password: {{ password }}
    </pre
  >
</template>

<script>
import Input from "./Input.vue";
import { ref } from "vue";

export default {
  components: {
    Input,
  },
  setup() {
    const email = ref("");
    const password = ref("");

    return {
      email,
      password,
      handleSubmit(e) {
        console.log("submit", email.value, password.value);
      },
    };
  },
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
}
</style>
