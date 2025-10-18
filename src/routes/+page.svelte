<script>
	import MapTypeButton from '$lib/components/buttons/map-type-button.svelte';
	import Map from '$lib/components/map/map.svelte';
	import RightSidebar from '$lib/components/sidebar/right/right-sidebar.svelte';
	import { coords } from '$lib/stores/map-store';
</script>

<div class="app-container">
	<div class="relative flex-1 bg-[var(--bg-primary)]">
		<div id="battle-map">
			<Map />
		</div>

		<!-- 单位属性面板 -->
		<div class="hidden blur-backdrop absolute top-25 left-10 z-1000 rounded-lg">
			<div class="flex items-center gap-3 rounded-lg p-3 text-sm w-60">
			单位属性
			</div>
		</div>
		<!-- 底部部工具栏 -->
		<div class="bottom-status">
			<div class="mode-indicator blur-backdrop">选择单位</div>
			<div class="coordinates blur-backdrop">
				坐标: {$coords.lat.toFixed(5)}, {$coords.lng.toFixed(5)}
			</div>
		</div>

		<div class="range-legend" id="range-legend" style="display: none;">
			<h4>攻击范围图例</h4>
			<div id="legend-content"></div>
		</div>

		<RightSidebar />
	</div>
</div>

<style>
	* {
		margin: 0;
		box-sizing: border-box;
		font-family: 'Segoe UI', 'Microsoft YaHei', sans-serif;
	}

	.app-container {
		display: flex;
		height: 100vh;
	}

	#battle-map {
		width: 100%;
		height: 100%;
	}

	.bottom-status {
		position: absolute;
		bottom: 20px;
		left: 20px;
		right: 20px;
		display: flex;
		z-index: 1000;
		justify-content: space-between;
	}

	.mode-indicator,
	.coordinates {
		padding: 8px 15px;
		border-radius: 20px;
		box-shadow: var(--shadow);
		font-size: 1rem;
		color: var(--foreground);
	}

	.range-legend {
		position: absolute;
		bottom: 70px;
		left: 20px;
		background: var(--bg-card);
		padding: 10px;
		border-radius: 8px;
		border: 1px solid var(--border-color);
		box-shadow: var(--shadow);
		z-index: 1000;
		max-width: 250px;
	}

	.range-legend h4 {
		font-size: 0.9rem;
		margin-bottom: 8px;
		color: var(--text-primary);
	}
</style>
