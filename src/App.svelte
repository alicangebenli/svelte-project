<script lang="ts">
    import AppLayout from "@/layouts/app.svelte";
    import Breadcrumb from "@/components/core/Breadcrumb.svelte";
    import FormPost from "@/components/forms/FormPost.svelte";
    import Icon from "@/components/core/Icon.svelte";

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
        <div class="lg:basis-5/6 md:basis-4/6 sm:basis-3/4 mt-8 lg:px-12 md:px-2 sm:px-2 flex flex-col">
            <Breadcrumb items="{breadcrumbs}"/>
            <div class="mb-4"></div>
            <div class="bg-ma-white py-3 px-5 rounded text-navy-seal border-dodger-blue border-2 flex">
                <Icon size="sm" name="InfoCircleOutline" className="mr-2"/>
                <span
                        class="font-bold">New updates</span>: Restart to get the latest updates.
                <div class="ml-auto flex">
                    Learn more
                    <Icon size="sm" name="CloseOutline" className="ml-2"/>
                </div>
            </div>
            <div class="mb-4"></div>
            <div class="mt-4 text-squant text-sm font-mono">NG Apps Workflow</div>
            <div class="text-nero text-xl font-bold mt-4">Visual workflow automation.Now with code.</div>
            <div class="mb-4"></div>
            <div class="text-sm text-nero">This is commonly used in the expressive type theme layouts for long
                paragraphs with more than four
                lines. The looser line height and larger size makes for comfortable, long-form reading, in mediums that
                allow for more space. This size type is rarely used for body copy in components. We always left-align
                type; we never center it.
            </div>
            <div class="mb-4"></div>
            <div class="w-5/6">
                <FormPost/>
            </div>
        </div>
    </AppLayout>
</div>

<style lang="scss">
  :global(html), :global(body), :global(#app), :global(#app > div) {
    height: 100%;
    min-height: 100%;
    font-family: "Inter", sans-serif;
  }

</style>
