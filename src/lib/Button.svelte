<script>
    export let index = "num"
    export let content = "title"
    export let color = 'blue-600'
    export let active = false
</script>

<button class={ "grid grid-cols-1 place-self-center md:grid-cols-[1fr,4fr] w-max md:w-[281px] lg:w-[350px] h-full md:h-10 lg:h-12 text-[9px] lg:text-xs md:border font-spart text-white transition-all trakcing-[1.93px] md:tracking-[2.25px] font-normal md:font-bold focus:outline-[none] " + (active ? `border-b-4 md:bg-${color} border-${color}` : 'border-grey-600 hover:bg-grey-600')}
    on:click
>
    <p class="hidden md:block opacity-50 place-self-center">{index}</p>
    <p class="self-center justify-self-start uppercase">{content}</p>
</button>