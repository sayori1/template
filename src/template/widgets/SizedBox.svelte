<script lang="ts">
    export let height:Size = "0px";
    export let width:Size = "0px";
</script>

<div style="height:{height}; width:{width}">
    <slot></slot>
</div>