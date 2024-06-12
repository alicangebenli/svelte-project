<script lang="ts">
    import {SearchOutline} from "flowbite-svelte-icons";
    //@ts-ignore
    import {ComponentType} from 'svelte';

    let name: string = "SearchOutline";
    const components: { [key: string]: ComponentType } = {
        SearchOutline
    };
    let componentToRender: ComponentType | null = null;
    if (name in components) {
        componentToRender = components[name];
    }
</script>
{#if componentToRender}
    <svelte:component this="{componentToRender}"/>
{:else}
    <p>Bileşen bulunamadı</p>
{/if}