import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IHookForms {
    name: string;
    email: string;
    username: string;
    password: string;
    accept: boolean;
}

interface FormState {
    formData: IHookForms;
}

const initialState: FormState = {
    formData: {
        name: '',
        email: '',
        username: '',
        password: '',
        accept: false,
    },
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setFormData: (state, action: PayloadAction<IHookForms>) => {
            state.formData = action.payload;
        },
    },
});

export const { setFormData } = formSlice.actions;

export default formSlice.reducer;
