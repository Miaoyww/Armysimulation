<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { Map, TileLayer, Marker, Popup } from 'sveaflet';
	import * as L from 'leaflet';
	import { coords,zoom } from '$lib/stores/map-store';

	let map: L.Map;

	onMount(async () => {
		const readyMap = await waitForMapReady();
		console.log('✅ map 已准备好:', readyMap);

		readyMap.on('mousemove', (e) => {
			coords.set(e.latlng);
		});
		readyMap.on('zoomend', () => {
			zoom.set(readyMap.getZoom());
		});
	});

	async function waitForMapReady() {
		while (!map) {
			await new Promise((resolve) => setTimeout(resolve, 100)); 
		}
		return map;
	}
</script>

<div class="h-full w-full">
	<Map
		bind:instance={map}
		options={{
			center: [51.505, -0.09],
			zoom: $zoom,
			zoomControl: false
		}}
	>
		<TileLayer url={'https://tile.openstreetmap.org/{z}/{x}/{y}.png'} />
	</Map>
</div>
