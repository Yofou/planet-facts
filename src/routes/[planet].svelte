<script context="module">
    import PLANETDATA from '$lib/data.json'
    import { tweened } from 'svelte/motion'
    import { cubicOut } from 'svelte/easing'

    let tweenedInfo = tweened({
        rotation: 0,
        revolution: 0,
        radius: 0,
        temperature: 0,
    },{ duration: 600, easing: cubicOut, })

    export function load({ page }) {
        const planet = page.params.planet
        const response = PLANETDATA.find( ({ name }) => name.toLowerCase() == planet.toLowerCase() )

        if (response != null || response != undefined) {         
            return {
                props: {
                    planet, response, tweenedInfo
                }
            }
        } else {
            return {
                status: '301',
                redirect: '/404'
            }
        }

    }
</script>

<script>
    import { onMount } from 'svelte';
    import { COLORS } from '$lib/colors.js'
    import Button from '$lib/Button.svelte'
    import Information from '$lib/Information.svelte'
    import InfoCard from '$lib/InfoCard.svelte'

    export let planet;
    export let response;
    export let tweenedInfo;

    const stripChars = (char) => !isNaN( new Number(char) )
    const stripToInt = (value) => parseInt( value.split('').filter(stripChars).join('') )
    $: tweenedInfo.set({
        rotation: stripToInt(response["rotation"]),
        revolution: stripToInt(response["revolution"]),
        radius: stripToInt(response["radius"]),
        temperature: stripToInt(response["temperature"]),
    })

    const zipInfo = (key, foo) => `${Math.round(foo[key])} ${response[key].split(' ')[1]}`

    let isMD = false
    onMount( () => {
        isMD = window.innerWidth > 700
        window.onresize = () => isMD = window.innerWidth > 700
    } )

    $: primeColor = COLORS[ planet.toLowerCase() ]

    let stage = 0
    const setStage = (num) => () => stage = num
    $: stageTypes = ["overview", "structure", "geology"].map( type => response[type] )

    $: images = Object.entries(response.images).map( ([_, value]) => value )
</script>

<svelte:head>
    <title>THE PLANETS | {planet.toUpperCase()}</title>
</svelte:head>

<main class="grid w-full h-full text-white font-spart">
    <div class="
        grid
        place-self-center
        w-full
        md:w-max
        md:max-w-[1100px]
        min-h-full
        md:min-h-[auto]
        lg:min-h-[75%]
        grid-cols-[1fr,1fr]
        lg:grid-cols-[3fr,2fr]
        lg:gap-[20px]
    ">

        <div class="
            grid
            relative
            col-start-1 col-end-3
            row-start-2 row-end-3
            md:row-start-1 md:row-end-2 
            lg:col-start-1 lg:col-end-2 
            lg:row-start-1 lg:row-end-3
            min-w-full
            h-[300px]
            md:h-[500px]
            place-content-center
        ">
            <img src={stage != 2 ? images[stage]: images[0]} class="place-self-center transition-transform transform scale-[calc(224/582)] md:scale-[calc(369/582)] lg:scale-100" alt="">
            {#if stage == 2}
                <img class="absolute top-[40%] md:top-[60%] lg:top-2/3 left-1/2 w-[163px] h-[199px] transform -translate-x-1/2 scale-[0.60] md:scale-[0.8] lg:scale-100" src={images[2]} alt="">
            {/if}
        </div>
    
    
        <Information {planet} content={stageTypes[stage].content} source={stageTypes[stage].source} />
    
        <div class="
            w-full
            md:w-min
            h-[52px]
            md:h-auto
            border-b-[1px]
            md:border-b-0
            border-grey-600
            grid
            grid-flow-col
            md:grid-flow-row
            gap-4
            col-start-1
            md:col-start-2 
            col-end-3
            row-start-1
            md:row-start-2 
            row-end-2
            justify-self-start
            md:justify-self-end
            self-start
            md:self-center
            transform
            md:translate-y-5
        ">
            <Button active={stage == 0} on:click={setStage(0)} color={primeColor} index="01" content="overview"/>
            <Button active={stage == 1} on:click={setStage(1)} color={primeColor} index="02" content={isMD ? "internal structure" : "structure"}/>
            <Button active={stage == 2} on:click={setStage(2)} color={primeColor} index="03" content={isMD ? "surface geology" : "surface"}/>
        </div>
    
        <div class="
            grid
            grid-flow-row
            md:grid-flow-col 
            w-full md:w-min gap-[11px] 
            lg:gap-[30px] 
            mt-5 
            col-start-1 col-end-3
            row-start-4 row-end-5
            md:row-start-3 md:row-end-4 
            place-self-center 
            transform 
            lg:translate-y-5
            mb-10
            md:mb-5
            lg:mb-0
        ">
            <InfoCard title="rotation time" content={zipInfo("rotation", $tweenedInfo)}/>
            <InfoCard title="revolution time" content={zipInfo("revolution", $tweenedInfo)}/>
            <InfoCard title="radius" content={zipInfo("radius", $tweenedInfo)}/>
            <InfoCard title="average temp." content={`${Math.round($tweenedInfo["temperature"])}°c`}/>
        </div>
    </div>
</main>