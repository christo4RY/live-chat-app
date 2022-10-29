<template>
  <h3 class="text-green mb-3">Sign Up</h3>
  <form @submit.prevent="signUp">
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Full Name"
        v-model="displayName"
      />
    </div>
    <div class="mb-3">
      <input
        type="email"
        class="form-control"
        placeholder="Email"
        v-model="email"
      />
    </div>
    <div class="mb-3">
      <input
        type="password"
        class="form-control"
        placeholder="Password"
        v-model="password"
      />
    </div>
    <div v-if="error" class="text-danger mt-2">{{ error }}</div>
    <div class="mt-3">
      <button class="btn btn-green float-end">Sign Up</button>
    </div>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import useSignUp from "@/composables/useSignUp";
export default {
  setup() {
    let displayName = ref("");
    let email = ref("");
    let password = ref("");

    let { error, createAccount } = useSignUp();

    let signUp = async () => {
      let res = await createAccount(
        email.value,
        password.value,
        displayName.value
      );
      if (res) {
        console.log(res);
      }
    };

    return { displayName, email, password, signUp, error };
  },
};
</script>

<style>
</style>
