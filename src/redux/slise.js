import { createSlice } from '@reduxjs/toolkit';
import {
  addFavorite,
  emptyArray,
  getCampers,
  newFilterArray,
  removeFavoriteItem,
  totalCampers,
} from './operation';

const initialState = {
  campersArray: [],
  favoriteArray: [],
  totalCampers: [],
  newFilterArray: [],
  isLoading: false,
  error: null,
  isLoadingTotal: false,
  errorTotal: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handlePendingTotal = state => {
  state.isLoadingTotal = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const handleRejectedTotal = (state, action) => {
  state.isLoadingTotal = false;
  state.errorTotal = action.payload;
};

const handleGetInformationFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;

  state.campersArray.push(...action.payload);
};
const removeArray = (state, action) => {
  state.campersArray = [];
};
const handleTotalCampers = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.totalCampers = action.payload;
};
const newFilterArrayCreate = (state, action) => {
  state.newFilterArray = action.payload;
};
const addFavoriteArrayFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.favoriteArray.push(action.payload);
};
const removeFavoriteArrayFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;

  state.favoriteArray = state.favoriteArray.filter(
    auto => auto._id !== action.payload
  );
};

const autoSlice = createSlice({
  name: 'autos',
  initialState: initialState,
  extraReducers: builder =>
    builder
      .addCase(getCampers.pending, handlePending)
      .addCase(getCampers.fulfilled, handleGetInformationFulfilled)
      .addCase(getCampers.rejected, handleRejected)
      .addCase(totalCampers.pending, handlePendingTotal)
      .addCase(totalCampers.fulfilled, handleTotalCampers)
      .addCase(totalCampers.rejected, handleRejectedTotal)
      .addCase(addFavorite.pending, handlePending)
      .addCase(addFavorite.fulfilled, addFavoriteArrayFulfilled)
      .addCase(addFavorite.rejected, handleRejected)
      .addCase(removeFavoriteItem().type, removeFavoriteArrayFulfilled)
      .addCase(emptyArray().type, removeArray)
      .addCase(newFilterArray().type, newFilterArrayCreate),
});

export const autoReducer = autoSlice.reducer;
