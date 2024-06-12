<script>
import Sidebar from "@/components/Sidebar.svelte";
import Navbar from "@/components/Navbar.svelte";
</script>
<Navbar />
<div class="min-h-full h-full flex">
    <Sidebar className="xl:basis-1/6 lg:basis-2/6 md:basis-2/6 sm:basis-2/6"/>
    <slot />
</div>

