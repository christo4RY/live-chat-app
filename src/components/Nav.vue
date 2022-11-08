<template>
  <nav
    class="bg-light d-flex justify-content-between w-100 p-3 rounded-top"
    v-if="user"
  >
    <ul class="navbar-nav">
      <li>Hi, {{ user.displayName }}</li>
      <li>Gmail - {{ user.email }}</li>
    </ul>
    <button class="btn btn-green" @click="logOut">LogOut</button>
  </nav>
</template>

<script>
import { auth } from "@/firebase/config";
import { useRouter } from "vue-router";
import getUser from "@/composables/getUser";
export default {
  setup() {
    let router = useRouter();
    let logOut = async () => {
      await auth.signOut();
    };

    let { user } = getUser();

    return { logOut, user };
  },
};
</script>

<style>
</style>
