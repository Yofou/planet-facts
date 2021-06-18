<script>
    export let title = 'title'
    export let content = 'content'
</script>

<div class="
    grid
    grid-flow-col
    place-self-center
    md:block
    w-[90%]
    md:w-[164px]
    lg:w-[255px]
    h-12
    md:h-[88px]
    lg:h-32 
    text-white 
    border 
    border-grey-600 
    px-[15px]
    lg:px-[23px]
    py-[10px]
    lg:py-[20px]"
>
    <p class="self-center opacity-50 text-[8px] lg:text-[11px] leading-4 md:leading-[25px] tracking-[0.73px] md:tracking-normal font-spart font-bold uppercase">{title}</p>
    <p class="self-center justify-self-end font-ant font-medium text-[20px] md:text-2xl lg:text-[40px] -tracking-[0.9px] lg:-tracking-[1.5px] uppercase">{content}</p>
</div>