<script>
    import { fade } from 'svelte/transition'
    import Navigation from '$lib/Navigation.svelte'
    import NavigationDrawer from '$lib/NavigationDrawer.svelte'
    import { isDrawerOpen } from '$lib/stores.js'
</script>

<div class="
        absolute
        top-0
        left-0 
        overflow-hidden 
        overflow-y-scroll
        w-screen 
        h-screen
        bg-blue-900
    "
    style="background-image: url('/assets/background-stars.svg');"
>

    <Navigation/>
    {#if $isDrawerOpen}
        <NavigationDrawer/>
    {:else}
        <div in:fade={{delay: 250}} class="grid w-full h-full">
            <slot></slot>
        </div>
    {/if}
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Antonio:wght@500&family=Spartan:wght@400;700&display=swap');

    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>