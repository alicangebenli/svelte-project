<script lang="ts">
    export let label = ""
    export let className = ""
    export let value: boolean = false;
</script>
<div class="flex items-center {className}">
    <span class="mr-2 text-nero text-sm font-bold">{label}</span>
    <label class="switch">
        <input type="checkbox" bind:checked={value}>
        <span class="switch__toggle switch__toggle--round"></span>
    </label>
</div>

<style lang="scss">
  .switch {
    position: relative;
    display: inline-block;
    width: 48px;
    height: 24px;

    & input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    & input:checked + &__toggle {
      background-color: #2196F3;
    }

    & input:focus + &__toggle {
      box-shadow: 0 0 1px #2196F3;
    }

    & input:checked + &__toggle:before {
      -webkit-transform: translateX(24px);
      -ms-transform: translateX(24px);
      transform: translateX(24px);
    }

    &__toggle {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: .4s;
      transition: .4s;

      &:before {
        position: absolute;
        content: "";
        height: 16px;
        width: 16px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
      }

      &--round {
        border-radius: 12px;
      }

      &--round:before {
        border-radius: 12px;
      }
    }
  }
</style>