<script lang="ts">
    type InputType = "text"
    export let placeholder = ""
    export let className = ""
    export let label = ""
    export let type: InputType = "text"
    const classes = {
        "text": "bg-wash-me border-2 border-lilac-champagne rounded p-2 min-w-full w-full",
    }
    export let value: string = "";
    $: currentValue = value ? value : ""
    function handleInput({target: t}) {
        value = t.value;
    }
</script>
<div class="{className}">
    {#if label}
        <span class="text-nero text-sm font-bold">{label}</span>
    {/if}
    <input
            value="{currentValue}"
            class="{classes[type]}"
            placeholder="{placeholder}"
            type="{type}"
            on:input={handleInput}
    />
</div>
<style lang="scss">
</style>