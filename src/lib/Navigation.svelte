<script>
    import PLANETDATA from '$lib/data.json'
    import { COLORS } from '$lib/colors'
    const planets = PLANETDATA.map( ({name}) => name )
    import { isDrawerOpen } from '$lib/stores.js'
</script>

<nav class="
        relative
        grid
        grid-flow-col
        md:grid-flow-row 
        lg:grid-flow-col 
        w-screen
        h-[85px]
        md:h-[159px] 
        lg:h-[85px] 
        border-b-[1px]
        border-grey-600 
        overflow-hidden
        text-white
        z-[2]
    "
>
    <a href="/" class="justify-self-start self-center md:place-self-center lg:justify-self-start transform translate-x-8 md:translate-x-0 lg:translate-x-8">
        <h1 class="font-ant text-[28px] tracking-[-1.05px] leading-[25px] uppercase">The Planets</h1>
    </a>
    <ul class="grid grid-flow-col place-self-center w-min h-full gap-8 justify-self-end md:justify-self-center lg:justify-self-end md:mr-0 lg:mr-10">
        {#each planets as planet}
            <li class={"hidden md:grid h-full place-content-center transition-all hover:border-t-4 " + `border-${COLORS[planet.toLowerCase()]}`}>
                <a href={`/${planet}`} class="uppercase font-spart font-bold hover:opacity-100 opacity-75 text-xs leading-[25px] transition-opacity">{planet}</a>
            </li>
        {/each}
        <li on:click={() => $isDrawerOpen = !$isDrawerOpen} class="grid md:hidden w-max self-center justify-self-end mr-10 cursor-pointer" class:opacity-50={$isDrawerOpen}>
            <img src="/assets/icon-hamburger.svg" alt="drawer button">
        </li>
    </ul>
</nav>