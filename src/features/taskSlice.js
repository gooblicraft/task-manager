import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      
      state.tasks.push({ text: action.payload, done: false });
    },
    removeTask: (state, action) => {
      
      state.tasks.splice(action.payload, 1);
    },
    toggleTask: (state, action) => {
      const idx = action.payload;
      if (state.tasks[idx]) state.tasks[idx].done = !state.tasks[idx].done;
    },
  },
});

export const { addTask, removeTask, toggleTask } = taskSlice.actions;
export default taskSlice.reducer;
