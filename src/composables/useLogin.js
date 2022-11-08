import { auth } from "@/firebase/config";
import { ref } from "vue";

let error = ref("");
let loginAccount = async (email, password) => {
  try {
    let res = await auth.signInWithEmailAndPassword(email, password);
    if (!res) {
      throw new Error("Couldn't Login account");
    }
    return res;
  } catch (err) {
    error.value = err.message;
  }
};
let useLogin = () => {
  return { error, loginAccount };
};

export default useLogin;
