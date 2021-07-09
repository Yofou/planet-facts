<script>
    import { goto } from '$app/navigation'
    import { isDrawerOpen } from '$lib/stores.js'
    import { cubicOut } from 'svelte/easing'
    import PLANETDATA from '$lib/data.json'
    import { COLORS } from '$lib/colors'
    const planets = PLANETDATA.map( ({name}) => name )

    const onRedirect = (planet) => () => {
        $isDrawerOpen = false
        goto(`/${planet}`)
    }

    // slighlty altered opacity speed on fly
    function fly(node, { delay = 0, duration = 400, easing = cubicOut, x = 0, y = 0, opacity = 0} = {}) {
        const style = getComputedStyle(node);
        const target_opacity = +style.opacity;
        const transform = style.transform === 'none' ? '' : style.transform;
        const od = target_opacity * (1 - opacity) * 2;
        return {
            delay,
            duration,
            easing,
            css: (t, u) => `
                transform: ${transform} translate(${(1 - t) * x}px, ${(1 - t) * y}px);
                opacity: ${target_opacity - (od * u)}`
        };
    }
</script>

<section class="relative grid w-full h-full bg-blue-900 py-[3rem] z-[1]" transition:fly={{y: -200}}>
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