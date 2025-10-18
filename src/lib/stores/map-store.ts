import { writable } from 'svelte/store';

export interface LatLng {
	lat: number;
	lng: number;
}

export const zoom = writable<number>(13);

export const coords = writable<LatLng>({ lat: 0, lng: 0 });
