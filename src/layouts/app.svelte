<script>
import Sidebar from "@/components/Sidebar.svelte";
import Navbar from "@/components/Navbar.svelte";
</script>
<Navbar />
<div class="min-h-full h-full flex">
    <Sidebar className="basis-1/6"/>
    <slot />
</div>

