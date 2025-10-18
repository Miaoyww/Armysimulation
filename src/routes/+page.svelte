<script>
	import Map from "$lib/components/map/map.svelte";

</script>
<div class="app-container">


	<div class="map-container">
		<div id="battle-map">
            <Map />
        </div>


		<div class="bottom-status">
			<div class="mode-indicator" id="mode-indicator">选择单位</div>
			<div class="coordinates" id="coordinates">坐标: 正在加载...</div>
		</div>

		<div class="range-legend" id="range-legend" style="display: none;">
			<h4>攻击范围图例</h4>
			<div id="legend-content"></div>
		</div>

		<!-- 右键菜单 -->
		<div class="context-menu" id="context-menu">
			<div class="context-menu-item" id="context-view-properties">查看属性</div>
			<div class="context-menu-item" id="context-delete-unit">删除单位</div>
			<div class="context-menu-divider"></div>
			<div class="context-menu-item" id="context-set-status">设置状态</div>
			<div class="context-menu-item" id="context-change-faction">变更阵营</div>
			<div class="context-menu-divider"></div>
			<div class="context-menu-item" id="context-copy-unit">复制单位</div>
			<div class="context-menu-item" id="context-move-to">移动至此</div>
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

	body {
		background-color: var(--bg-primary);
		color: var(--text-primary);
		min-height: 100vh;
		overflow: hidden;
	}

	.app-container {
		display: flex;
		height: 100vh;
	}

	.sidebar {
		width: 380px;
		background: var(--bg-secondary);
		border-right: 1px solid var(--border-color);
		display: flex;
		flex-direction: column;
		overflow-y: auto;
		transition: width 0.3s ease;
		z-index: 1000;
		box-shadow: var(--shadow);
	}

	.sidebar.collapsed {
		width: 60px;
	}

	.sidebar-header {
		padding: 20px;
		background: var(--bg-card);
		border-bottom: 1px solid var(--border-color);
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.sidebar-title {
		font-size: 1.2rem;
		font-weight: 600;
		color: var(--text-primary);
	}

	.toggle-sidebar {
		background: none;
		border: none;
		color: var(--text-secondary);
		font-size: 1.2rem;
		cursor: pointer;
		padding: 5px;
		border-radius: 4px;
		transition: all 0.2s;
	}

	.toggle-sidebar:hover {
		background: var(--bg-tertiary);
		color: var(--text-primary);
	}

	.sidebar-content {
		flex: 1;
		padding: 15px;
		overflow-y: auto;
	}

	.panel-section {
		background: var(--bg-card);
		border-radius: 8px;
		padding: 15px;
		margin-bottom: 15px;
		border: 1px solid var(--border-color);
	}

	.panel-title {
		font-size: 1rem;
		margin-bottom: 12px;
		padding-bottom: 8px;
		border-bottom: 1px solid var(--border-color);
		color: var(--text-primary);
		font-weight: 600;
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.panel-title .icon {
		width: 20px;
		text-align: center;
	}

	.controls {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	button {
		padding: 10px 15px;
		border: none;
		border-radius: 6px;
		background: var(--accent-color);
		color: white;
		font-weight: 500;
		cursor: pointer;
		transition: all 0.3s;
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 0.9rem;
	}

	button:hover {
		background: var(--accent-hover);
		transform: translateY(-1px);
	}

	button:active {
		transform: translateY(0);
	}

	button.danger {
		background: var(--danger-color);
	}

	button.danger:hover {
		background: #c53030;
	}

	button.warning {
		background: var(--warning-color);
	}

	button.warning:hover {
		background: #b7791f;
	}

	button.success {
		background: var(--success-color);
	}

	button.success:hover {
		background: #2f855a;
	}

	.unit-selector {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.branch-selector,
	.level-selector {
		display: flex;
		gap: 5px;
		margin-bottom: 10px;
	}

	.branch-btn,
	.level-btn {
		flex: 1;
		padding: 8px;
		border-radius: 6px;
		background: var(--bg-tertiary);
		border: 1px solid var(--border-color);
		color: var(--text-secondary);
		cursor: pointer;
		transition: all 0.2s;
		text-align: center;
	}

	.branch-btn {
		font-size: 0.8rem;
	}

	.level-btn {
		padding: 6px;
		font-size: 0.7rem;
	}

	.branch-btn:hover,
	.level-btn:hover {
		background: var(--accent-color);
		color: white;
	}

	.branch-btn.active,
	.level-btn.active {
		background: var(--accent-color);
		color: white;
		border-color: var(--accent-color);
	}

	.unit-list {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 8px;
	}

	.unit-item {
		background: var(--bg-tertiary);
		border-radius: 6px;
		padding: 8px;
		text-align: center;
		cursor: pointer;
		transition: all 0.3s;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 6px;
		border: 1px solid var(--border-color);
	}

	.unit-item:hover {
		background: var(--accent-color);
		transform: translateY(-2px);
	}

	.unit-item.active {
		border: 2px solid var(--accent-color);
		background: var(--accent-color);
	}

	.unit-icon {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1rem;
		color: white;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	}

	.unit-name {
		font-size: 0.7rem;
		color: var(--text-primary);
	}

	.map-container {
		flex: 1;
		position: relative;
		background: var(--bg-primary);
	}

	#battle-map {
		width: 100%;
		height: 100%;
	}

	.top-toolbar {
		position: absolute;
		top: 20px;
		left: 20px;
		right: 20px;
		display: flex;
		justify-content: space-between;
		z-index: 1000;
	}

	.map-controls {
		display: flex;
		gap: 10px;
		background: var(--bg-card);
		padding: 10px;
		border-radius: 8px;
		border: 1px solid var(--border-color);
		box-shadow: var(--shadow);
	}

	.map-type-controls {
		display: flex;
		gap: 5px;
	}

	.map-type-btn {
		padding: 8px 12px;
		border-radius: 6px;
		background: var(--bg-tertiary);
		border: 1px solid var(--border-color);
		color: var(--text-secondary);
		cursor: pointer;
		transition: all 0.2s;
		font-size: 0.8rem;
	}

	.map-type-btn:hover {
		background: var(--accent-color);
		color: white;
	}

	.map-type-btn.active {
		background: var(--accent-color);
		color: white;
		border-color: var(--accent-color);
	}

	.status-info {
		background: var(--bg-card);
		padding: 10px 15px;
		border-radius: 8px;
		border: 1px solid var(--border-color);
		box-shadow: var(--shadow);
		display: flex;
		gap: 15px;
		font-size: 0.9rem;
	}

	.status-item {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.status-label {
		font-size: 0.7rem;
		color: var(--text-tertiary);
	}

	.status-value {
		font-weight: 600;
		color: var(--text-primary);
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

	.mode-indicator,
	.coordinates {
		background: var(--bg-card);
		padding: 8px 15px;
		border-radius: 20px;
		border: 1px solid var(--border-color);
		box-shadow: var(--shadow);
		font-size: 0.9rem;
		color: var(--text-secondary);
	}

	.action-log {
		height: 200px;
		overflow-y: auto;
		font-size: 0.8rem;
		background: var(--bg-tertiary);
		border-radius: 6px;
		padding: 10px;
		border: 1px solid var(--border-color);
	}

	.action-log p {
		padding: 5px 0;
		border-bottom: 1px solid var(--border-color);
		color: var(--text-secondary);
	}

	.action-log p:last-child {
		border-bottom: none;
	}

	#unit-properties {
		color: var(--text-secondary);
		font-size: 0.9rem;
	}

	#unit-properties h4 {
		color: var(--text-primary);
		margin-bottom: 8px;
	}

	#unit-properties p {
		margin-bottom: 6px;
	}

	.range-details {
		margin-top: 10px;
		padding-top: 10px;
		border-top: 1px solid var(--border-color);
	}

	.range-item {
		display: flex;
		justify-content: space-between;
		margin-bottom: 4px;
		font-size: 0.8rem;
	}

	.range-type {
		color: var(--text-secondary);
	}

	.range-value {
		font-weight: 600;
	}

	.faction-selector {
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin-bottom: 15px;
	}

	.faction-option {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 8px;
		border-radius: 6px;
		border: 1px solid var(--border-color);
		cursor: pointer;
		transition: all 0.2s;
	}

	.faction-option:hover {
		background: var(--bg-tertiary);
	}

	.faction-option.active {
		border-color: var(--accent-color);
		background: var(--bg-tertiary);
	}

	.faction-color {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		border: 2px solid rgba(255, 255, 255, 0.3);
	}

	.faction-name {
		flex: 1;
		font-size: 0.9rem;
	}

	.custom-faction-panel {
		margin-top: 15px;
		padding-top: 15px;
		border-top: 1px solid var(--border-color);
	}

	.form-group {
		margin-bottom: 10px;
	}

	.form-group label {
		display: block;
		margin-bottom: 5px;
		font-size: 0.8rem;
		color: var(--text-secondary);
	}

	.form-group input,
	.form-group select {
		width: 100%;
		padding: 8px;
		border-radius: 4px;
		border: 1px solid var(--border-color);
		background: var(--bg-tertiary);
		color: var(--text-primary);
	}

	.color-input {
		display: flex;
		gap: 10px;
		align-items: center;
	}

	.color-input input {
		flex: 1;
	}

	.color-preview {
		width: 30px;
		height: 30px;
		border-radius: 4px;
		border: 1px solid var(--border-color);
	}

	.unit-marker {
		stroke: white;
		stroke-width: 2;
		stroke-opacity: 0.7;
	}

	.attack-line {
		stroke: #ff4444;
		stroke-width: 3;
		stroke-dasharray: 8, 4;
		fill: none;
		animation: pulse 1.5s infinite;
	}

	@keyframes pulse {
		0% {
			opacity: 0.6;
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0.6;
		}
	}

	.range-ellipse {
		stroke-width: 2;
		fill-opacity: 0.1;
	}

	.out-of-range {
		stroke: #888888;
		stroke-width: 2;
		stroke-dasharray: 5, 5;
		opacity: 0.5;
	}

	.range-warning {
		background: #ff4444;
		color: white;
		padding: 2px 6px;
		border-radius: 3px;
		font-size: 0.7rem;
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

	.range-legend-item {
		display: flex;
		align-items: center;
		margin-bottom: 5px;
		font-size: 0.8rem;
	}

	.range-color {
		width: 12px;
		height: 12px;
		border-radius: 2px;
		margin-right: 8px;
	}

	/* 右键菜单样式 */
	.context-menu {
		position: absolute;
		background: var(--bg-card);
		border: 1px solid var(--border-color);
		border-radius: 6px;
		padding: 5px 0;
		box-shadow: var(--shadow);
		z-index: 10000;
		min-width: 160px;
		display: none;
	}

	.context-menu-item {
		padding: 8px 15px;
		cursor: pointer;
		font-size: 0.9rem;
		color: var(--text-primary);
		transition: background 0.2s;
	}

	.context-menu-item:hover {
		background: var(--bg-tertiary);
	}

	.context-menu-divider {
		height: 1px;
		background: var(--border-color);
		margin: 5px 0;
	}

	/* 自定义编组面板样式 */
	.custom-unit-panel {
		margin-top: 15px;
		padding-top: 15px;
		border-top: 1px solid var(--border-color);
	}

	.component-group {
		margin-bottom: 15px;
		padding-bottom: 10px;
		border-bottom: 1px solid var(--border-color);
	}

	.component-title {
		font-size: 0.9rem;
		margin-bottom: 8px;
		color: var(--text-primary);
		font-weight: 600;
	}

	.component-controls {
		display: flex;
		gap: 10px;
		margin-bottom: 8px;
	}

	.component-controls select,
	.component-controls input {
		flex: 1;
	}

	.component-list {
		max-height: 150px;
		overflow-y: auto;
		background: var(--bg-tertiary);
		border-radius: 4px;
		padding: 5px;
	}

	.component-item {
		display: flex;
		justify-content: space-between;
		padding: 5px;
		font-size: 0.8rem;
		border-bottom: 1px solid var(--border-color);
	}

	.component-item:last-child {
		border-bottom: none;
	}

	.component-remove {
		color: var(--danger-color);
		cursor: pointer;
	}

	.sidebar.collapsed .sidebar-content,
	.sidebar.collapsed .sidebar-title,
	.sidebar.collapsed .panel-title span:not(.icon),
	.sidebar.collapsed button span:not(.icon),
	.sidebar.collapsed .unit-name {
		display: none;
	}

	.sidebar.collapsed .unit-list {
		grid-template-columns: 1fr;
	}

	.sidebar.collapsed .unit-item {
		padding: 8px;
	}

	/* 自定义编组面板切换 */
	.custom-panel {
		display: none;
	}

	.custom-panel.active {
		display: block;
	}

	@media (max-width: 768px) {
		.sidebar {
			width: 280px;
		}

		.top-toolbar {
			flex-direction: column;
			gap: 10px;
		}

		.status-info {
			flex-wrap: wrap;
		}

		.range-legend {
			bottom: 100px;
			max-width: 200px;
		}
	}
</style>
