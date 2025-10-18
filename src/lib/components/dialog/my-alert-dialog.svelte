<script lang="ts">
  import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction } from "$lib/components/ui/alert-dialog";
  import { alertDialogStore, hideAlert } from "$lib/stores/alert-dialog-store";
  import { get } from "svelte/store";

  let state = get(alertDialogStore);
  alertDialogStore.subscribe((value) => (state = value));
</script>

<AlertDialog bind:open={state.open}>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>{state.title}</AlertDialogTitle>
      <AlertDialogDescription>{state.description}</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogAction onclick={hideAlert}>确定</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>