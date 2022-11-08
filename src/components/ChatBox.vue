<template>
  <div>
    <textarea
      cols="30"
      class="w-100 border-0 p-2"
      placeholder="Type enter messages"
      v-model="message"
      rows="2"
      @keypress.enter="sendMessage"
    ></textarea>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import getUser from "@/composables/getUser";
import { timestamp } from "@/firebase/config";
import useCollection from "@/composables/useCollection";
export default {
  setup() {
    let message = ref("");
    let { user } = getUser();
    let { error, addDoc } = useCollection("messages");

    let sendMessage = async () => {
      let chat = {
        name: user.value.displayName,
        messages: message.value,
        created_at: timestamp(),
      };
      await addDoc(chat);
      message.value = "";
    };

    return { message, sendMessage };
  },
};
</script>

<style>
</style>
