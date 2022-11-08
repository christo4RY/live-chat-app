<template >
  <div class="container">
    <div
      style="height: 500px"
      class="
        d-flex
        align-items-center
        justify-content-center
        align-items-center
      "
    >
      <div class="card card-shadow">
        <div class="card-body">
          <div v-if="showLogin">
            <Login @loginSuccess="loginSuccess"></Login>
            <span
              class="text-link badge bg-primary"
              @click="showLogin = !showLogin"
            >
              Create New Account
            </span>
          </div>
          <div v-else>
            <SignUp></SignUp>
            <span
              class="text-link badge bg-primary"
              @click="showLogin = !showLogin"
            >
              Have you Account?
            </span>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import SignUp from "@/components/Auth/SignUp.vue";
import Login from "@/components/Auth/Login.vue";
import Footer from "@/components/Footer.vue";
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
export default {
  components: {
    SignUp,
    Login,
    Footer,
  },
  setup() {
    let showLogin = ref(true);
    let router = useRouter();

    let loginSuccess = () => {
      router.push({ name: "chatRoom" });
    };
    return { showLogin, loginSuccess };
  },
};
</script>
<style>
.text-link {
  text-decoration: none;
}
</style>
