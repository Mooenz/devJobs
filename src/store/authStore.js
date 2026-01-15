import { create } from 'zustand';

export const useAuthStore = create((set) => ({
	// Este es el estado
	isLoggedIn: false,

	// Estas son las acciones
	login: () => set({ isLoggedIn: true }),
	logout: () => set({ isLoggedIn: false }),
}));
