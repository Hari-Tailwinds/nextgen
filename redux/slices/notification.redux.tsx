import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AlertData {
  type: "default" | "destructive" | "warning" | "informational";
  description: string;
  title: string;
  isVisible: boolean;
}

const initialState: AlertData = {
  type: "destructive",
  description: "",
  title: "",
  isVisible: false,
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    handleShow: (state, action: PayloadAction<AlertData>) => {
      state.type = action.payload.type;
      state.description = action.payload.description;
      state.title = action.payload.title;
      state.isVisible = true;
    },
    handleCancel: (state) => {
      state.type = "default"; // Resetting type to default
      state.description = "";
      state.title = "";
      state.isVisible = false;
    },
  },
});

export const { handleShow, handleCancel } = notificationSlice.actions;

export default notificationSlice.reducer;
