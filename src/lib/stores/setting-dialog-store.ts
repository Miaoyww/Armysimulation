import { writable } from 'svelte/store';

export const settingOpen = writable<boolean>(false);
export const currentTab = writable<string>('general');
