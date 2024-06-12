<script lang="ts">
    export let value;
    function handleInput({ target: t }) {
        value = t.value;
    }
</script>
<textarea class="bg-wash-me border-2 border-lilac-champagne rounded p-2 min-w-full w-full" on:input={handleInput}></textarea>