<script lang="ts">
    import Input from "@/components/core/Input.svelte";
    import Select from "@/components/core/Select.svelte";
    import Switch from "@/components/core/Switch.svelte";
    import Button from "@/components/core/Button.svelte";
    import {usePost} from "@/application/usePost.js";
    import {onMount} from "svelte";
    import type {User} from "@/domain/user";
    import Textarea from "@/components/core/Textarea.svelte";

    const post = usePost();
    let users: User[];
    let hasError: boolean = false;
    let isSent: boolean = false;
    let forms = {
        titles: [],
        userIds: [],
        bodies: [],
        visibleTextAreas: []
    };

    onMount(async () => {
        users = await post.getUsers();
    });

    async function onSubmit() {
        const isFullFilled = await post.bulkCreate(forms.titles, forms.userIds, forms.bodies);
        if (!isFullFilled) {
            hasError = true;
        } else {
            isSent = true
            forms.titles = [];
            forms.userIds = [];
            forms.bodies = [];
            forms.visibleTextAreas = []
        }
    }
</script>
{#if hasError}
    <div class="my-4 py-3 px-5 bg-whero-red rounded">
        <span class="font-bold">Error:</span> There was an error
        for some forms. Check and resubmit the ones with errors.
    </div>
{:else if !hasError && isSent}
    <div class="my-4 py-3 px-5 bg-liberty-green rounded text-white">
        <span class="font-bold">Success:</span> There was an error
        for some forms. Check and resubmit the ones with errors.
    </div>
{/if}
<div class="grid grid-cols-3 gap-2">
    {#each [0, 1, 2] as i}
        <Input label="Title" placeholder="Enter a title" bind:value={forms.titles[i]}/>
    {/each}
    {#each [0, 1, 2] as i}
        <Select label="User" placeholder="Select user" items="{users}" bind:value={forms.userIds[i]}/>
    {/each}
    {#each [0, 1, 2] as i}
        <div>
            <Switch className="mb-4" label="Active Switch" items="{users}" bind:value={forms.visibleTextAreas[i]}/>
            {#if forms.visibleTextAreas[i]}
                <Textarea bind:value={forms.bodies[i]}/>
            {/if}
        </div>
    {/each}
</div>
<div class="ml-auto flex">
    <Button variant="default" label="Accept" on:click={onSubmit}/>
    <Button variant="text" label="Cancel"/>
</div>
