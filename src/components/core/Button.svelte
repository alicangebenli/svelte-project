<script lang="ts">
    type Variant = "default" | "text"
    export let variant: Variant = "default";
    export let label: string = "Button";
    const classes = {
        default: "bg-hailey-blue text-white",
        text: "text-nero"
    }
</script>
<button class="py-3 px-4 cursor-pointer rounded w-max {classes[variant]}" on:click>
    <span class="font-bold text-sm">{label}</span>
</button>
