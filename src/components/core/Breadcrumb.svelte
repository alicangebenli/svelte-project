<script lang="ts">
    type Item = string;
    export let items: Item[] = []
</script>
<div class="breadcrumb flex">
    {#each items as item, index}
        <div class="text-sm {index === items.length - 1 ? 'text-nero font-bold' : 'text-spanish-grey'}">
            {item}
            {#if index !== items.length - 1}
                <span class="ml-1 mr-1">/</span>
            {/if}
        </div>
    {/each}
</div>