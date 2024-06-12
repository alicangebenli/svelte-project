<script lang="ts">
    type Item = string
    export let items: Item[] = [];
    export let className: string = "";
</script>
<div class="sidebar bg-doctor px-8 pt-8 w-max min-h-full h-full {className}">
    <ul>
        <li class="sidebar__title font-bold text-sm text-nero">Tüm hizmetler</li>
        <li class="sidebar__inline text-nero text-sm px-4 py-2 flex items-center w-full">
            <img src="/icons/portal.svg" width="32px" />
            <div class="w-full rounded cursor-pointer flex items-center pl-2">Portal (Home)</div>
        </li>
        <li class="sidebar__inline text-nero text-sm px-4 py-2 flex items-center w-full">
            <img src="/icons/studio.svg" width="32px" />
            <div class="w-full rounded cursor-pointer flex items-center pl-2">Studio</div>
        </li>
        <li class="sidebar__inline text-nero text-sm px-4 py-2 flex items-center w-full">
            <img src="/icons/datasources.svg" width="32px" />
            <div class="w-full rounded cursor-pointer flex items-center pl-2">Datasources</div>
        </li>
        <li class="sidebar__inline text-nero text-sm px-4 py-2 flex items-center w-fullpx-4 py-2 cursor-pointer">
            <img src="/icons/flow-machine.svg" width="32px" />
            <div class="w-full rounded cursor-pointer flex items-center pl-2">Flow Machine</div>
        </li>
        <li class="sidebar__inline text-nero text-sm px-4 py-2 flex items-center w-full">
            <img src="/icons/micro-functions.svg" width="32px" />
            <div class="w-full rounded cursor-pointer flex items-center pl-2">Micro Functions</div>
        </li>
        <li class="sidebar__inline text-nero text-sm px-4 py-2 flex items-center w-full">
            <img src="/icons/gateway.svg" width="32px" />
            <div class="w-full rounded cursor-pointer flex items-center pl-2">Gateway</div>
        </li>
        <li class="sidebar__inline text-nero text-sm px-4 py-2 flex items-center w-full">
            <img src="/icons/file-storage.svg" width="32px" />
            <div class="w-full rounded cursor-pointer flex items-center pl-2">File Storage</div>
        </li>
    </ul>
    <ul class="mt-5">
        <li class="sidebar__title font-bold text-sm text-nero">Kategoriler</li>
        <li class="sidebar__inline text-nero text-sm px-4 py-2 flex items-center w-full">
            <img src="/icons/application-manager.svg" width="32px" />
            <div class="w-full rounded cursor-pointer flex items-center pl-2">Application Manager</div>
        </li>
        <li class="sidebar__inline text-nero text-sm px-4 py-2 flex items-center w-full">
            <img src="/icons/monitoring.svg" width="32px" />
            <div class="w-full rounded cursor-pointer flex items-center pl-2">Monitoring</div>
        </li>
        <li class="sidebar__inline text-nero text-sm px-4 py-2 flex items-center w-full">
            <img src="/icons/console.svg" width="32px" />
            <div class="w-full rounded cursor-pointer flex items-center pl-2">Console</div>
        </li>
    </ul>
</div>

<style lang="scss">
  .sidebar {
    &__title {
    }

    &__inline {
      & div {
        height: 30px;
      }
      & div:hover {
        color: white;
        background: #262626;
      }

      &--active {
        color: white;
        background: #262626;
      }
    }
  }
</style>