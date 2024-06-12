<script lang="ts">
    import Input from "@/components/core/Input.svelte";

    type Link = {
        href: string,
        title: string
    }
    export let links: Link[] = [];
</script>
<div class="navbar bg-white flex p-8 relative">
    <div class="basis-1/6">
        Logo
    </div>
    <Input className="basis-2/4"/>
    <div class="navbar__user basis-1/8 ml-auto flex">
        <div class="mr-4 text-sm">
            <div class="text-nero font-bold">MURAT TUFAN</div>
            <div class="text-dodger-blue">murat.tufan@glomil.com</div>
        </div>
        <div class="navbar__user__short bg-hailey-blue flex items-center justify-center text-white rounded-3xl">
            MT
        </div>
    </div>
</div>
<style lang="scss">
  .navbar {
    box-shadow: 0px 3px 6px #0000001A;
    z-index: 999;
    &__user {
      &__short {
        height: 38px;
        width: 38px;
      }
    }
  }
</style>