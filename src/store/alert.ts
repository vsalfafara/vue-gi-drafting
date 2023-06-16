import { defineStore } from "pinia";

type AlertState = {
  alert: boolean;
  notification: boolean;
};

export const useAlertsStore = defineStore("alerts", {
  state: (): AlertState => ({
    alert: false,
    notification: false,
  }),
  getters: {
    alert: (state) => state.alert,
    notification: (state) => state.notification,
  },
  actions: {
    toggleAlert() {
      this.alert = !this.alert;
    },
    toggleNotification() {
      this.notification = !this.notification;
    },
  },
});
