<script lang="ts">
    type Item = {
        value: string,
        title: string
    }
    export let placeholder = ""
    export let className = ""
    export let label = ""
    export let items: Item[] = [{
        title: "test",
        value: "test"
    }]
    export let value: string;
    function handleChange({target: t}) {
        value = t.value;
    }
</script>
<div class="{className}">
    {#if label}
        <span class="text-nero text-sm font-bold">{label}</span>
    {/if}
    <select
            class="bg-white-edgar rounded-md p-3 w-full"
            on:change={handleChange}
    >
        <option value="" disabled selected="{!value}" hidden>{placeholder}</option>
        {#each items as item}
            <option selected="{value===item.value}" value="{item.value}">{item.title}</option>
        {/each}
    </select>
</div>
<style lang="scss">
</style>