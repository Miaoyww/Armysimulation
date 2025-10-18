<script>
	import Map from '$lib/components/map/map.svelte';
	import { coords } from '$lib/stores/map-store';
</script>

<div class="app-container">
	<div class="relative flex-1 bg-[var(--bg-primary)]">
		<div id="battle-map">
			<Map />
		</div>

		<!-- 底部部工具栏 -->
		<div class="bottom-status">
			<!-- <div class="mode-indicator" id="mode-indicator">选择单位</div> -->
			<div class="coordinates" id="coordinates">坐标: {$coords.lat.toFixed(5)}, {$coords.lng.toFixed(5)}</div>
		</div>

		<div class="range-legend" id="range-legend" style="display: none;">
			<h4>攻击范围图例</h4>
			<div id="legend-content"></div>
		</div>
	</div>
</div>

<style>
	:root {
		--bg-primary: #0a1929;
		--bg-secondary: #132f4c;
		--bg-tertiary: #1e3a5c;
		--bg-card: #1a365d;
		--text-primary: #e2e8f0;
		--text-secondary: #a0aec0;
		--text-tertiary: #718096;
		--accent-color: #3182ce;
		--accent-hover: #2c5aa0;
		--danger-color: #e53e3e;
		--success-color: #38a169;
		--warning-color: #d69e2e;
		--border-color: #2d3748;
		--shadow: 0 4px 12px rgba(0, 0, 0, 0.5);

		--range-infantry: #4ade80;
		--range-armor: #f59e0b;
		--range-tank: #dc2626;
		--range-artillery: #7c3aed;
		--range-missile: #06b6d4;
		--range-naval-gun: #f59e0b;
		--range-anti-ship: #dc2626;
		--range-anti-air: #06b6d4;
		--range-torpedo: #7c3aed;
		--range-air-to-air: #dc2626;
		--range-air-to-ground: #f59e0b;
		--range-bomb: #7c3aed;
		--range-cannon: #4ade80;
		--range-ew: #06b6d4;
	}

	* {
		margin: 0;
		padding: 0;
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
		justify-content: space-between;
		z-index: 1000;
	}

	.coordinates {
		background: var(--bg-card);
		padding: 8px 15px;
		border-radius: 20px;
		border: 1px solid var(--border-color);
		box-shadow: var(--shadow);
		font-size: 0.9rem;
		color: var(--text-secondary);
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
