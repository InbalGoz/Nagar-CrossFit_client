import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CustomerToLesson } from "../../models/customerToLesson";

interface CustomerToLessonSliceState {
  all_customerToLesson: CustomerToLesson[];
  customerToLesson: CustomerToLesson;
}

const initialState: CustomerToLessonSliceState = {
  all_customerToLesson: [],
  customerToLesson: {
    lessonId: 0,
    customerId: 0,
  },
};

export const customerToLessonSlice = createSlice({
  name: "customerToLesson",
  initialState,
  reducers: {
    getAllCustomerToLesson(state, action: PayloadAction<CustomerToLesson[]>) {
      state.all_customerToLesson = action.payload;
    },
    getCustomerToLesson(state, action: PayloadAction<CustomerToLesson>) {
      state.customerToLesson = action.payload;
    },
    createCustomerToLesson(state, action) {
      state.all_customerToLesson = [
        ...state.all_customerToLesson,
        action.payload,
      ];
    },
    deleteCustomerToLesson(state, action) {
      /* const newcustomerToLessonArr = state.all_customerToLesson.filter(
        (ctl) => ctl.id !== action.payload
      );
      state.all_customerToLesson = newcustomerToLessonArr;*/
    },
  },
});
