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
      <button class="btn btn-green float-end">
        <span
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
          v-show="loading"
        ></span>
        <span v-show="!loading">Sign Up</span>
      </button>
    </div>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import useSignUp from "@/composables/useSignUp";
import { useRouter } from "vue-router";
export default {
  setup() {
    let displayName = ref("");
    let email = ref("");
    let password = ref("");
    let router = useRouter();
    let loading = ref(false);

    let { error, createAccount } = useSignUp();

    let signUp = async () => {
      loading.value = true;
      let res = await createAccount(
        email.value,
        password.value,
        displayName.value
      );
      if (res) {
        router.push({ name: "chatRoom" });
      }
    };
    if (error) {
      loading.value = false;
    }

    return { displayName, email, password, signUp, error, loading };
  },
};
</script>

<style>
</style>
