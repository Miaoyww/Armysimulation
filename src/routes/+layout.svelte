<script lang="ts">
	import '../app.css';

	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import AppSidebar from '$lib/components/sidebar/app-sidebar.svelte';
	import SiteHeader from '$lib/components/sidebar/site-header.svelte';
	import MyAlertDialog from '$lib/components/dialog/my-alert-dialog.svelte';
	import { onMount } from 'svelte';
	import { onNavigate } from '$app/navigation';
	import { Toaster } from '$lib/components/ui/sonner/index.js';
	import { cn } from '$lib/utils';
	let { children } = $props();
</script>

<Sidebar.Provider
	style={cn(
		'--sidebar-width: calc(var(--spacing) * 72); --header-height: calc(var(--spacing) * 12);'
	)}
>
	<AppSidebar />
	<Sidebar.Inset>
		<div>
			<SiteHeader class="absolute top-10 left-10 right-10"/>
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
	}
</style>
