<script lang="ts">
	import '../app.css';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import AppSidebar from '$lib/components/sidebar/app-sidebar.svelte';
	import SiteHeader from '$lib/components/sidebar/site-header.svelte';
	import { cn } from '$lib/utils';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	let { children } = $props();
</script>

<Sidebar.Provider
	style={cn(
		'--sidebar-width: calc(var(--spacing) * 92); --header-height: calc(var(--spacing) * 12);'
	)}
>
	<AppSidebar />
	<Sidebar.Inset>
		<div>
			<SiteHeader class="absolute top-10 right-10 left-10" />
			<div class="flex flex-1 flex-col">
				<div class="@container/main flex flex-1 flex-col gap-2">
					<div class="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
						<div class="px-4 lg:px-6">
							<main>
								{@render children?.()}
							</main>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Sidebar.Inset>
</Sidebar.Provider>

<!-- 右键菜单 -->
<div
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
</div>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
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
	
</style>
