<script lang="ts">
    import {
        SearchOutline,
        CloseOutline,
        InfoCircleOutline,
        FlowbiteSolid,
        VueSolid,
        TableColumnOutline,
        RectangleListOutline,
        ShareNodesOutline,
        CodeMergeOutline,
        DrawSquareOutline,
        FileOutline,
        QrCodeOutline,
        DesktopPcOutline,
        CodeOutline,
    } from "flowbite-svelte-icons";

    type IconName = "SearchOutline"
        | "InfoCircleOutline"
        | "CloseOutline"
        | "FlowbiteSolid"
        | "VueSolid"
        | "TableColumnOutline"
        | "RectangleListOutline"
        | "ShareNodesOutline"
        | "CodeMergeOutline"
        | "DrawSquareOutline"
        | "FileOutline"
        | "CodeOutline"
        | "DesktopPcOutline"

    export let name: IconName = "SearchOutline";
    export let size: "xs" | "sm" = "xs";
    export let className: string = "";
    const components: { [key: string]: any } = {
        SearchOutline,
        CloseOutline,
        InfoCircleOutline,
        FlowbiteSolid,
        VueSolid,
        TableColumnOutline,
        RectangleListOutline,
        ShareNodesOutline,
        CodeMergeOutline,
        DrawSquareOutline,
        FileOutline,
        QrCodeOutline,
        DesktopPcOutline,
        CodeOutline
    };
    let customStyle = {
        size: {
            xs: "width:24px;height:24px;",
            sm: "width:24px;height:24px;",
        }
    }
</script>
{#if components[name]}
    <div style="{customStyle.size[size]}" class="{className}">
        <svelte:component this="{components[name]}" bind:size/>
    </div>
{:else}
    <p>Bileşen bulunamadı</p>
{/if}