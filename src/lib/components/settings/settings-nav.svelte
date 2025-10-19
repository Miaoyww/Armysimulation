<script lang="ts">
	import { cubicInOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';
	import { Button } from '$lib/components/ui/button/index.js';
	import { cn } from '$lib/utils.js';

	let className: string | undefined | null = '';
	export { className as class };
</script>

<div class={cn('flex w-16 flex-col gap-3 rounded-lg p-3 text-sm blur-backdrop', className)}>
	<div>
		<Button class="p-2" variant="ghost">会场</Button>
	</div>
	<div>
		<Button class="p-2" variant="ghost">常规</Button>
	</div>
	<div>
		<Button class="p-2" variant="ghost">关于</Button>
	</div>
</div>
