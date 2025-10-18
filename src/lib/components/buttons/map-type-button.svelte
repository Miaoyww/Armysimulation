<script>
	import { Button } from '../ui/button';
</script>

<Button
	class="cursor-pointer rounded-md border-0 border-(--border-color) bg-(--bg-tertiary) text-lg text-(--text-secondary) transition-all duration-200 hover:bg-(--accent-color) hover:text-white active:border-accent active:bg-accent active:text-white"
>
	<slot />
</Button>
