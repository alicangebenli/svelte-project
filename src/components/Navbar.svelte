<script lang="ts">
    import Input from "@/components/core/Input.svelte";

    type Link = {
        href: string,
        title: string
    }
    export let links: Link[] = [];
</script>
<div class="navbar bg-white flex p-8 relative items-center">
    <div class="lg:basis-2/12">
        <img src="/logo.svg" />
    </div>
    <Input className="lg:basis-7/12 md:basis-7/12 sm:basis- lg:ml-7 md:ml-14">
        <div slot="prepend-inner-icon">
            <img src="/icons/search.svg" width="30px" />
        </div>
    </Input>
    <div class="basis-1/6 md:hidden flex justify-end gap-4">
        <img src="/icons/list.svg" width="30px" />
        <img src="/icons/notification.svg" width="30px" />
        <img src="/icons/setting.svg" width="30px" />
        <img src="/icons/info.svg" width="30px" />
    </div>
    <div class="navbar__user lg:basis-2/12 md:basis-1/12 sm:basis-1/12 ml-auto flex">
        <div class="mr-4 text-sm flex flex-col items-end">
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