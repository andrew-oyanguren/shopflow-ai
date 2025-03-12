import { createSlice } from '@reduxjs/toolkit';

type User = {
  id: string;
  email: string;
  displayName: string;
  photoURL: string;
};

type SessionState = {
  user: User | null;
  isAuthentcated: boolean;
  isLoading: boolean;
  error: string | null;
};

const initialState: SessionState = {
  user: null,
  isAuthentcated: false,
  isLoading: false,
  error: null,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    signIn: () => {},
  },
});

export default sessionSlice.reducer;

// TODO: Add actions to sessionSlice
export const { signIn } = sessionSlice.actions;
