import { writable } from "svelte/store";

export const alertDialogStore = writable({
  open: false,
  title: "",
  description: "",
});

export function showAlert(title: string, description: string) {
  alertDialogStore.set({ open: true, title, description });
}

export function hideAlert() {
  alertDialogStore.update((state) => ({ ...state, open: false }));
}
