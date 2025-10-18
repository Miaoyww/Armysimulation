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
	class="sidebar absolute blur-backdrop top-30 bottom-30 z-1000 flex w-15 flex-1 flex-col justify-between overflow-hidden rounded-lg"
	style:right={pinned ? '20px' : hover ? '0px' : '-50px'}
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
			<RightSidebarMenubutton content="重置推演">
				<RotateCcw />
			</RightSidebarMenubutton>
			<RightSidebarMenubutton content="设置">
				<Settings />
			</RightSidebarMenubutton>
		</div>
	</div>
</div>

<style>
	.sidebar {
		transition: right 0.3s;
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

	.controls {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}
</style>
