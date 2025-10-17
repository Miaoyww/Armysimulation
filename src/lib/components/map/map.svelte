<script>
	import { Map, TileLayer, Marker, Popup } from 'sveaflet';
</script>

<div class="w-full h-full">
	<Map
		options={{
			center: [51.505, -0.09],
			zoom: 13
		}}
	>
		<TileLayer url={'https://tile.openstreetmap.org/{z}/{x}/{y}.png'} />
	</Map>
</div>
