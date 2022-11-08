<template>
  <div class="chat-window">
    <div class="messages" ref="msgbox">
      <div class="single" v-for="message in formatted" :key="message.id">
        <span class="created-at">{{ message.created_at }}</span
        ><br />
        <span class="name">{{ message.name }}</span>
        <span class="message">{{ message.messages }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase/config";
import { ref } from "@vue/reactivity";
import { computed, onUpdated } from "vue";
import { formatDistanceToNow } from "date-fns";
export default {
  setup() {
    let messages = ref([]);
    let msgbox = ref("");

    db.collection("messages")
      .orderBy("created_at")
      .onSnapshot((snap) => {
        let result = [];
        snap.docs.forEach((doc) => {
          let document = { ...doc.data(), id: doc.id };
          if (doc.data().created_at) {
            result.push(document);
          }
        });
        messages.value = result;
      });
    let formatted = computed(() => {
      return messages.value.map((msg) => {
        let format = formatDistanceToNow(msg.created_at.toDate());
        return { ...msg, created_at: format };
      });
    });
    onUpdated(() => {
      msgbox.value.scrollTop = msgbox.value.scrollHeight;
    });

    return { messages, formatted, msgbox };
  },
};
</script>

<style>
.chat-winddow {
  background-color: #fafafa;
  padding: 30px 20px;
}
.single {
  margin: 18px 15px;
}
.created-at {
  display: block;
  color: #999;
  font-size: 12px;
}
.name {
  font-weight: bold;
  margin-right: 6px;
}
.messages {
  max-height: 300px;
  background-color: #fafafa;
  overflow: auto;
}
</style>
