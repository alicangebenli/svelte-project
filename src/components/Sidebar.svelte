<script lang="ts">
    import Icon from "@/components/core/Icon.svelte";
    import type {SidebarMenuItem} from "@/core/types/SidebarList";

    export let className: string = "";
    const serviceMenuItems: SidebarMenuItem = [
        {
            title: "Portal (Home)",
            active: false,
            icon: "VueSolid"
        },
        {
            title: "Studio",
            active: false,
            icon: "TableColumnOutline"
        },
        {
            title: "Datasources",
            active: true,
            icon: "RectangleListOutline"
        },
        {
            title: "Flow Machine",
            active: false,
            icon: "ShareNodesOutline"
        },
        {
            title: "Micro Functions",
            active: false,
            icon: "ShareNodesOutline"
        },
        {
            title: "Gateway",
            active: false,
            icon: "DrawSquareOutline"
        },
        {
            title: "File Storage",
            active: false,
            icon: "FileOutline"
        },
    ];
    const categoryMenuItems: SidebarMenuItem = [
        {
            title: "Application Manager",
            active: false,
            icon: "QrCodeOutline"
        },
        {
            title: "Monitoring",
            active: false,
            icon: "DesktopPcOutline"
        },
        {
            title: "Console",
            active: false,
            icon: "CodeOutline"
        },
    ]
</script>
<div class="sidebar bg-doctor px-8 pt-8 w-max min-h-full h-full {className}">
    <ul>
        <li class="sidebar__title font-bold text-sm text-nero">Tüm hizmetler</li>
        {#each serviceMenuItems as item}
            <li class="sidebar__inline {item.active ? 'sidebar__inline--active' : ''} rounded cursor-pointer text-nero text-sm px-4 mb-1 py-2 flex items-center w-full">
                <Icon name="{item.icon}" size="sm"/>
                <div class="w-full flex items-center pl-2">{item.title}</div>
            </li>
        {/each}

    </ul>
    <ul class="mt-5">
        <li class="sidebar__title font-bold text-sm text-nero">Kategoriler</li>
        {#each categoryMenuItems as item}
            <li class="sidebar__inline text-nero text-sm px-4 py-2 flex items-center w-full">
                <Icon name="{item.icon}" size="sm"/>
                <div class="w-full rounded cursor-pointer flex items-center pl-2">{item.title}</div>
            </li>
        {/each}
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

      &:hover {
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