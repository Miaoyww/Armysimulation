<script lang="ts">
	import '../app.css';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import AppSidebar from '$lib/components/sidebar/left-sidebar.svelte';
	import Header from '$lib/components/header.svelte';
	import { cn } from '$lib/utils';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import RightSidebar from '$lib/components/sidebar/right-sidebar.svelte';
	import { coords } from '$lib/stores/map-store';
	import Bottom from '$lib/components/bottom.svelte';
	import UnitPro from '$lib/components/unit-pro.svelte';
	import LeftSidebar from '$lib/components/sidebar/left-sidebar.svelte';
	import SettingsDialog from '$lib/components/dialog/settings-dialog.svelte';
	let { children } = $props();
</script>

<div>
	<div>
		<main>
			{@render children?.()}
		</main>
	</div>
</div>

<!-- <div class="range-legend" id="range-legend" style="display: none;">
	<h4>攻击范围图例</h4>
	<div id="legend-content"></div>
</div> -->

<LeftSidebar />
<UnitPro />
<Header />
<Bottom />
<RightSidebar />
<SettingsDialog />

<!-- 右键菜单 -->
<!-- <div
	class="absolute z-[10000] hidden min-w-[160px] rounded-md border border-(--border-color) bg-(--bg-card) py-[5px] shadow"
	id="context-menu"
>
	<div class="context-menu-item" id="context-view-properties">查看属性</div>
	<div class="context-menu-item" id="context-delete-unit">删除单位</div>
	<Separator />
	<div class="context-menu-item" id="context-set-status">设置状态</div>
	<div class="context-menu-item" id="context-change-faction">变更阵营</div>
	<Separator />
	<div class="context-menu-item" id="context-copy-unit">复制单位</div>
	<div class="context-menu-item" id="context-move-to">移动至此</div>
</div> -->

<style>
	* {
		margin: 0;
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
