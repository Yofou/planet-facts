<script>
    export let planet = 'planet';
    export let content = 'content';
    export let source = 'source';
</script>

<div class="
    justify-self-center
    md:justify-self-end
    md:self-end
    col-start-1
    lg:col-start-2 
    col-end-3
    md:col-end-2
    lg:col-end-3
    row-start-3
    md:row-start-2 
    lg:row-start-1
    row-end-4
    md:row-end-2 
    text-center md:text-left
">
    <h1 class="font-ant text-[40px] md:text-5xl lg:text-[80px] font-medium uppercase mb-4 md:mb-3 lg:mb-[24px]">{planet}</h1>
    <p class="text-xs lg:text-sm leading-[25px] w-[350px] h-[150px] mb-1 lg:mb-3">{content}</p>
    <p class="inline leading-[25px] text-sm opacity-50 mb-8 md:mb-0">
        Source: 
        <a class="font-bold underline" href={source}>Wikipedia</a>
    </p>
    <img class="inline w-3 h-3" src="/assets/icon-source.svg" alt="">
</div>