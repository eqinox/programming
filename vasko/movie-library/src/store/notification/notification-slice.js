import { createSlice } from "@reduxjs/toolkit";

const initialNotificationState = {
  defaultNotification: {
    show: false,
    status: null,
    message: null,
  },
  shortNotification: false,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState: initialNotificationState,
  reducers: {
    showDefaultNotification(state, action) {
      const notification = action.payload;
      state.defaultNotification.show = true;
      state.defaultNotification.message = notification.message;
      state.defaultNotification.status = notification.status;
    },
    hideDefaultNotification(state) {
      state.defaultNotification.show = false;
      state.defaultNotification.message = null;
      state.defaultNotification.status = null;
    },
    showShortNotification(state) {
      state.shortNotification = true;
    },
    hideShortNotification(state) {
      state.shortNotification = false;
    },
  },
});

export const notificationActions = notificationSlice.actions;

export default notificationSlice;
