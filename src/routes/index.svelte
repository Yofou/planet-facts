<script>
    import { fly } from 'svelte/transition'
    import PLANETDATA from '$lib/data.json'
    import { onDestroy } from 'svelte';
    
    const planets = PLANETDATA.map( ({name}) => name )
    const images = PLANETDATA.reduce( (acc, curr) => {
        acc[curr.name] = curr["images"]["planet"]
        return acc
    }, {})

    let index = 0
    const interval = setInterval(() => {
        index += 1
    }, 5 * 1000);

    onDestroy( () => clearInterval(interval) )
    $: currentPlanet = planets[index % planets.length]
</script>

<svelte:head>
    <title>THE PLANETS | HOME</title>
</svelte:head>

<main class="grid grid-cols-1 grid-rows-[200px,min-content,1fr] md:grid-rows-[300px,min-content,2fr] w-full h-full text-white overflow-hidden">
    <h1 class="font-ant text-[6rem] md:text-[9rem] lg:text-[10rem] tracking-[-1.05px] uppercase justify-self-center self-end z-10">the planets</h1>
    <p class="font-spart text-[0.9rem] md:text-[1.5rem] text-center opacity-60 tracking-wider z-10">Adventure the depths of our solar system with every click</p>
    {#key currentPlanet}
        <img in:fly={{ x:-500, y: -100, delay: 500, duration: 1500 }} out:fly|local={{ x: 750, y: -100, duration: 1500 }} class="
        col-start-1
        col-end-[-1]
        row-start-3
        row-end-4
        justify-self-center
        md:mt-[4rem]
        transform 
        scale-[0.6]
        md:scale-75 
        z-0
        " src={ images[currentPlanet] } alt="">
    {/key}
</main>