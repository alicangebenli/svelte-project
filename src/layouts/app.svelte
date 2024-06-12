<script>
import Sidebar from "@/components/Sidebar.svelte";
import Navbar from "@/components/Navbar.svelte";
</script>
<Navbar />
<div class="min-h-full h-full flex">
    <Sidebar className="lg:basis-1/6 md:basis-2/6 sm:basis-2/5"/>
    <slot />
</div>

