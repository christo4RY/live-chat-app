<template >
  <div class="container">
    <div class="d-flex align-items-center justify-content-center vh-100">
      <div class="card card-shadow">
        <div class="card-body">
          <div v-if="showLogin">
            <Login></Login>
            <span class="text-link" @click="showLogin = !showLogin">
              Have you account?
            </span>
          </div>
          <div v-else>
            <SignUp></SignUp>
            <span class="text-link" @click="showLogin = !showLogin">
              Are you create account?
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignUp from "@/components/Auth/SignUp.vue";
import Login from "@/components/Auth/Login.vue";
import { ref } from "@vue/reactivity";
export default {
  components: {
    SignUp,
    Login,
  },
  setup() {
    let showLogin = ref(true);

    return { showLogin };
  },
};
</script>
