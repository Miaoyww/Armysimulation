<script>
	import { Button } from '../ui/button';
</script>

<Button
	class="cursor-pointer rounded-md bg-gray-100 text-sm text-gray-800 transition-all duration-200 hover:bg-(--accent-color) hover:text-white active:border-accent active:bg-accent active:text-white"
>
	<slot />
</Button>
