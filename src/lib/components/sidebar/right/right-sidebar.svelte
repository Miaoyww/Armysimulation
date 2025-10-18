<script lang="ts">
	import RightSidebarMenubutton from '$lib/components/buttons/right-sidebar-menubutton.svelte';
	import { Button } from '$lib/components/ui/button';
	import {
		ChevronRight,
		FileUp,
		Grid3x3,
		Pin,
		PinOff,
		RotateCcw,
		Ruler,
		Save,

		Settings

	} from '@lucide/svelte';

	// 是否固定展开
	let pinned = $state(false);
	// 是否鼠标悬停
	let hover = $state(false);

	// 计算最终展开状态
	let expanded = $derived(pinned || hover);

	function togglePin() {
		pinned = !pinned;
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore event_directive_deprecated -->
<div
	class="sidebar flex flex-1 flex-col justify-between"
	 style:right={pinned ? '10px' : (hover ? '0px' : '-50px')}
	on:mouseenter={() => (hover = true)}
	on:mouseleave={() => (hover = false)}
>
	<div class="toggle-btn">
		<Button variant="ghost" size="icon" onclick={togglePin}>
			{#if pinned}
				<Pin size={20} />
			{:else}
				<PinOff size={20} />
			{/if}
		</Button>
	</div>

	<div class="panel-section">
		<div class="controls">
			<RightSidebarMenubutton content="切换网格显示">
				<Grid3x3 />
			</RightSidebarMenubutton>
			<RightSidebarMenubutton content="比例尺校准">
				<Ruler />
			</RightSidebarMenubutton>
		</div>
	</div>

	<div class="panel-section">
		<div class="controls">
			<RightSidebarMenubutton content="保存当前推演状态">
				<Save />
			</RightSidebarMenubutton>
			<RightSidebarMenubutton content="加载推演">
				<FileUp />
			</RightSidebarMenubutton>
			<RightSidebarMenubutton  content="重置推演">
				<RotateCcw />
			</RightSidebarMenubutton>
			<RightSidebarMenubutton  content="设置">
				<Settings />
			</RightSidebarMenubutton>
		</div>
	</div>
</div>

<style>
	.sidebar {
		position: absolute;
		top: 180px;
		bottom: 150px;
        width: 55px;
		right: 0px;
		background: rgba(255, 255, 255, 0.2);
		backdrop-filter: blur(10px);
		border-radius: 8px;
		box-shadow: var(--shadow);
		overflow: hidden;
		transition: right 0.3s;
		z-index: 1000;
	}

	.sidebar.expanded {
		width: 220px;
	}

	.toggle-btn {
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		height: 50px;
	}

	.panel-section {
		padding: 10px;
	}

	.panel-title {
		display: flex;
		align-items: center;
		gap: 8px;
		font-weight: bold;
		margin-bottom: 5px;
	}

	.controls {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.controls button {
		display: flex;
		align-items: center;
		gap: 6px;
		padding: 4px 8px;
		border: none;
		border-radius: 4px;
		background: rgba(255, 255, 255, 0.3);
		cursor: pointer;
		transition: background 0.2s;
	}

	.controls button:hover {
		background: rgba(255, 255, 255, 0.5);
	}

	/* 图标仅显示时隐藏文字 */
	.sidebar:not(.expanded) .panel-title span:nth-child(2),
	.sidebar:not(.expanded) .controls button span:nth-child(2) {
		display: none;
	}
</style>
