import { delay } from "redux-saga";

export default {
  async GetNotifications() {
    console.warn("Real notification service!");
    await delay(1000);
    return { count: 0 };
  }
}