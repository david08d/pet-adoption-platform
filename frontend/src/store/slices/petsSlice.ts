import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Pet {
  _id: string;
  name: string;
  type: string;
  breed: string;
  age: number;
  description: string;
  images: string[];
  isAdopted: boolean;
  adoptedBy?: string;
  adoptionDate?: Date;
  createdAt: Date;
}

export interface PetsState {
  pets: Pet[];
  selectedPet: Pet | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: PetsState = {
  pets: [],
  selectedPet: null,
  isLoading: false,
  error: null,
};

const petsSlice = createSlice({
  name: 'pets',
  initialState,
  reducers: {
    setPets: (state, action: PayloadAction<Pet[]>) => {
      state.pets = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setSelectedPet: (state, action: PayloadAction<Pet | null>) => {
      state.selectedPet = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setPets, setSelectedPet, setLoading, setError } = petsSlice.actions;
export default petsSlice.reducer; 