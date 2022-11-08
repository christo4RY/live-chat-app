<template>
  <div class="container">
    <div class="d-flex align-items-center justify-content-center mt-5">
      <Nav></Nav>
    </div>
    <ChatRoom></ChatRoom>
    <ChatBox></ChatBox>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../components/Footer";
import ChatRoom from "../components/ChatRoom";
import ChatBox from "../components/ChatBox";
import Nav from "@/components/Nav.vue";
import { watch } from "vue";
import { useRouter } from "vue-router";
import getUser from "@/composables/getUser";

export default {
  components: {
    Footer,
    ChatRoom,
    ChatBox,
    Nav,
  },
  setup() {
    let router = useRouter();
    let { user } = getUser();
    watch(user, () => {
      if (!user.value) {
        router.push("/");
      }
    });
  },
};
</script>

<style>
</style>
