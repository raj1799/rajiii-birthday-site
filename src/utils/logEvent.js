import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export async function logEvent(eventName, data = {}) {
  try {
    await addDoc(collection(db, "events"), {
      event: eventName,
      timestamp: Date.now(),
      ...data,
    });
  } catch (err) {
    console.log("Event log failed:", err);
  }
}
