<template>
  <h3 class="text-green mb-3">Login</h3>
  <form @submit.prevent="login">
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
      <button class="btn btn-green float-end">Login</button>
    </div>
  </form>
</template>

  <script>
import { ref } from "@vue/reactivity";
import useLogin from "@/composables/useLogin";
export default {
  setup(props, context) {
    let email = ref("");
    let password = ref("");

    let { error, loginAccount } = useLogin();

    let login = async () => {
      let res = await loginAccount(email.value, password.value);
      if (res) {
        context.emit("loginSuccess");
      }
    };

    return { login, email, password, error };
  },
};
</script>

  <style>
</style>
