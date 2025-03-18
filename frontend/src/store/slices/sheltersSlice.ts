import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Shelter {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  capacity: number;
  currentOccupancy: number;
  description: string;
  imageUrl: string;
}

export interface SheltersState {
  shelters: Shelter[];
  selectedShelter: Shelter | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: SheltersState = {
  shelters: [],
  selectedShelter: null,
  isLoading: false,
  error: null,
};

const sheltersSlice = createSlice({
  name: 'shelters',
  initialState,
  reducers: {
    setShelters: (state, action: PayloadAction<Shelter[]>) => {
      state.shelters = action.payload;
    },
    setSelectedShelter: (state, action: PayloadAction<Shelter | null>) => {
      state.selectedShelter = action.payload;
    },
    updateShelterCapacity: (state, action: PayloadAction<{ shelterId: string; currentOccupancy: number }>) => {
      const shelter = state.shelters.find(s => s.id === action.payload.shelterId);
      if (shelter) {
        shelter.currentOccupancy = action.payload.currentOccupancy;
      }
      if (state.selectedShelter?.id === action.payload.shelterId) {
        state.selectedShelter.currentOccupancy = action.payload.currentOccupancy;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setShelters, setSelectedShelter, updateShelterCapacity, setLoading, setError } = sheltersSlice.actions;
export default sheltersSlice.reducer; 