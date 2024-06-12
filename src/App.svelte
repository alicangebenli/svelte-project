<script lang="ts">
    import AppLayout from "@/layouts/app.svelte";
    import Breadcrumb from "@/components/core/Breadcrumb.svelte";
    import FormPost from "@/components/forms/FormPost.svelte";

    const breadcrumbs = [
        "Home",
        "...",
        "Workflow",
        "Visual workflow",
        "Current page"
    ]
</script>

<div>
    <AppLayout>
        <div class="ml-12 mt-8 p-8 flex flex-col">
            <Breadcrumb items="{breadcrumbs}"/>
            <div class="mt-4 text-squant text-sm font-mono">NG Apps Workflow</div>
            <div class="text-nero text-xl font-bold mt-4">Visual workflow automation.Now with code.</div>
            <div class="text-sm text-nero mt-4">This is commonly used in the expressive type theme layouts for long
                paragraphs with more than four
                lines. The looser line height and larger size makes for comfortable, long-form reading, in mediums that
                allow for more space. This size type is rarely used for body copy in components. We always left-align
                type; we never center it.
            </div>
            <FormPost />
        </div>
    </AppLayout>
</div>

<style lang="scss">
  :global(html), :global(body), :global(#app), :global(#app > div) {
    height: 100%;
    min-height: 100%;
  }
</style>
