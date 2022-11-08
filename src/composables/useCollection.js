import { ref } from "vue";
import { db } from "@/firebase/config";
let useCollection = (collection) => {
  let error = ref(null);
  let addDoc = async (messages) => {
    try {
      await db.collection(collection).add(messages);
    } catch (err) {
      error.value = err.message;
    }
  };
  return { error, addDoc };
};
export default useCollection;
