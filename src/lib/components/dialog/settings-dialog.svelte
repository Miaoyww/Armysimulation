<script lang="ts">
	import { settingOpen } from '$lib/stores/setting-dialog-store';
	import { onDestroy, onMount } from 'svelte';
	import { Button } from '../ui/button';
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import Venue from '$lib/components/dialog/settings/venue.svelte';
	import General from './settings/general.svelte';
	import About from './settings/about.svelte';
	import { crossfade, fade } from 'svelte/transition';
	import { cubicInOut, cubicOut } from 'svelte/easing';
	import { X } from '@lucide/svelte';
	import { ScrollArea } from '$lib/components/ui/scroll-area';

	let activeTab = $state('venue'); // 控制当前选中 tab

	function switchTab(tab: string) {
		activeTab = tab;
	}
</script>

{#if $settingOpen}
	<div
		class="setting-dialog absolute z-1000 flex items-center justify-center rounded-lg"
		transition:fade={{ duration: 100 }}
	>
		<!-- 左侧边栏 -->
		<Tabs.Tabs bind:value={activeTab} orientation="vertical" class="flex h-full">
			<Tabs.List class="mb-4">
				<Tabs.Trigger value="venue" onclick={() => switchTab('venue')}>会场</Tabs.Trigger>
				<Tabs.Trigger value="general" onclick={() => switchTab('general')}>常规</Tabs.Trigger>
				<Tabs.Trigger value="about" onclick={() => switchTab('about')}>关于</Tabs.Trigger>
			</Tabs.List>
		</Tabs.Tabs>

		<!-- 页面内容 -->
		<div class="blur-backdrop ml-6 flex h-200 w-240 flex-1 flex-col rounded-lg p-6">
			<Button
				variant="ghost"
				size="icon"
				class="absolute top-4 right-4"
				onclick={() => settingOpen.set(false)}
			>
				<X />
			</Button>

			<div>
				<ScrollArea class="mt-5 h-180 w-full" scrollbarYClasses="hidden">
					{#if activeTab === 'venue'}<Venue />{/if}
					{#if activeTab === 'general'}<General />{/if}
					{#if activeTab === 'about'}<About />{/if}
				</ScrollArea>
			</div>
		</div>
	</div>
{/if}

<style>
	.setting-dialog {
		position: absolute;
		min-width: 50rem;
		min-height: 50rem;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
