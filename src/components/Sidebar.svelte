<script lang="ts">
    type Item = string
    export let items: Item[] = [];
    export let className: string = "";
</script>
<div class="sidebar bg-doctor px-8 pt-8 w-max min-h-full h-full {className}">
    <ul>
        <li class="sidebar__title font-bold text-sm text-nero">Tüm hizmetler</li>
        <li class="sidebar__inline text-nero text-sm px-4 py-2 rounded cursor-pointer">Portal (Home)</li>
        <li class="sidebar__inline text-nero text-sm px-4 py-2 rounded cursor-pointer">Studio</li>
        <li class="sidebar__inline text-nero text-sm px-4 py-2 rounded cursor-pointer">Studio</li>
        <li class="sidebar__inline sidebar__inline--active rounded text-nero text-sm px-4 py-2 cursor-pointer">Flow Machine</li>
        <li class="sidebar__inline text-nero text-sm px-4 py-2 rounded cursor-pointer">Micro Functions</li>
        <li class="sidebar__inline text-nero text-sm px-4 py-2 rounded cursor-pointer">Gateway</li>
        <li class="sidebar__inline text-nero text-sm px-4 py-2 rounded cursor-pointer">File Storage</li>
    </ul>
    <ul class="mt-5">
        <li class="sidebar__title font-bold text-sm text-nero">Kategoriler</li>
        <li class="sidebar__inline text-nero text-sm px-4 py-2 rounded cursor-pointer">Application Manager</li>
        <li class="sidebar__inline text-nero text-sm px-4 py-2 rounded cursor-pointer">Monitoring</li>
        <li class="sidebar__inline text-nero text-sm px-4 py-2 rounded cursor-pointer">Console</li>
    </ul>
</div>

<style lang="scss">
  .sidebar {
    &__title {}
    &__inline {
      &:hover{
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