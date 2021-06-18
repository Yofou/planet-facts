<script>
    import { goto } from '$app/navigation'
    import { isDrawerOpen } from '$lib/stores.js'
    import {  fly } from 'svelte/transition'
    import PLANETDATA from '$lib/data.json'
    import { COLORS } from '$lib/colors'
    const planets = PLANETDATA.map( ({name}) => name )

    const onRedirect = (planet) => () => {
        $isDrawerOpen = false
        goto(`/${planet}`)
    }
</script>

<section class="grid w-full h-full bg-blue-900 py-[3rem]" transition:fly={{y: -200}}>
    <ul class="grid justify-self-center grid-flow-row w-[85%] max-h-8 gap-[20px]">
        {#each planets as planet}
            <li on:click={onRedirect(planet)} class="w-full h-16 grid grid-cols-[1fr,5fr,1fr] grid-rows-1 border-b-[1px] border-white border-opacity-25 cursor-pointer">
                <div class="place-self-center w-[20px] h-[20px] rounded-full bg-{COLORS[planet.toLowerCase()]}"></div>
                <p class="self-center text-white font-spart text-[15px] leading-[25px] font-bold">{planet.toUpperCase()}</p>
                <img class="place-self-center" src="/assets/icon-chevron.svg" alt="">
            </li>
        {/each}
    </ul>
</section>