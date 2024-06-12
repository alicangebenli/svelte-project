<script lang="ts">
    import Input from "@/components/core/Input.svelte";
</script>
<div class="navbar bg-white flex p-8 relative items-center">
    <div class="lg:basis-2/12 md:basis-2/12 sm:basis-2/12">
        <img src="/logo.svg" />
    </div>
    <Input
            placeholder="Kaynakları, hizmetleri ve belgeleri arayın"
            className="lg:basis-7/12 md:basis-7/12 sm:basis-7/12 lg:ml-14 md:ml-14">
        <div slot="prepend-inner-icon">
            <img src="/icons/search.svg" width="30px" />
        </div>
    </Input>
    <div class="lg:basis-1/6 justify-end sm:hidden md:flex lg:flex lg:gap-4 md:gap-2 sm:gap-2">
        <img src="/icons/list.svg" width="30px" />
        <img src="/icons/notification.svg" width="30px" />
        <img src="/icons/setting.svg" width="30px" />
        <img src="/icons/info.svg" width="30px" />
    </div>
    <div class="navbar__user lg:basis-2/12 md:basis-1/12 sm:basis-1/12 ml-auto flex justify-end">
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