<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { Plus, Settings, SquareArrowOutUpRight, RefreshCcw } from '@lucide/svelte';
	import SidebarTrigger from '$lib/components/ui/sidebar/sidebar-trigger.svelte';
	import type { HTMLInputAttributes, HTMLInputTypeAttribute } from 'svelte/elements';
	import { cn, type WithElementRef } from '$lib/utils.js';
	import MapTypeButton from '../buttons/map-type-button.svelte';
	let isBillNow: boolean = $state(false);
	let isSharing = $state(false);

	type InputType = Exclude<HTMLInputTypeAttribute, 'file'>;

	type Props = WithElementRef<
		Omit<HTMLInputAttributes, 'type'> &
			({ type: 'file'; files?: FileList } | { type?: InputType; files?: undefined })
	>;
	let { class: className, ...restProps }: Props = $props();
</script>

<div class={cn('z-1000 flex justify-between', className)}>
	<div class="flex items-center gap-5 rounded-lg bg-(--bg-card) p-4">
		<SidebarTrigger class="-ml-1 text-white text-lg"/>
		<div class="flex gap-2">
			<MapTypeButton>标准</MapTypeButton>
			<MapTypeButton>地形</MapTypeButton>
			<MapTypeButton>卫星</MapTypeButton>
		</div>
	</div>

	<div
		class="border-border-color flex gap-4 rounded-lg border bg-(--bg-card) px-[15px] py-[10px] text-sm text-white shadow"
	>
		<div class="flex flex-col gap-1">
			<div class="status-label">缩放级别</div>
			<div class="status-value" id="zoom-level">5</div>
		</div>
		<div class="flex flex-col gap-1">
			<div class="status-label">单位数量</div>
			<div class="status-value" id="unit-count">0</div>
		</div>
		<div class="flex flex-col gap-1">
			<div class="status-label">选中单位</div>
			<div class="status-value" id="selected-unit">无</div>
		</div>
		<div class="flex flex-col gap-1">
			<div class="status-label">当前阵营</div>
			<div class="status-value" id="current-faction">未选择</div>
		</div>
	</div>
</div>