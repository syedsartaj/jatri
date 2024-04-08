<template>
    <div ref="howRef" class="fixed z-[999999999] h-[100vh] box-border left-0 top-0 w-full bg-blackPrimary bg-opacity-50 transition-opacity">
      <div
        class="flex flex-col w-full min-h-full justify-center lg:p-4 text-center sm:items-center sm:p-0"
      >
        <div
          class="absolute w-[100%] bottom-[0px] md:relative animate-animateZoom transform overflow-hidden lg:rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[800px]"
        >
          <div class="bg-white p-4 lg:p-6">
            <div class="flex justify-between flex-row">
              <p
                class="text-blackPrimary text-base lg:text-[28px] lg:leading-9 font-medium"
              >
                How to buy ticket
              </p>
              <button @click="close">
                <img src="@/assets/images/icons/closeIcon.svg" alt="" />
              </button>
            </div>
            <hr class="my-4" />
            <div
              class="w-[100%] lg:w-[752px] h-60 lg:h-[436px] overflow-hidden rounded-[10px] lg:rounded-[14px]"
            >
              <iframe
                style="height: 100%; width: 100%"
                src="https://www.youtube.com/embed/_Bt-n1eZDMc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              >
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ["close"],
  mounted(){
  document.body.style.overflow= "hidden";  
  document.body.style.position= "fixed";  
  document.body.style.width= "100vw"; 
  window.scrollTo(); 
  }, 
  beforeDestroy(){
    document.body.style.overflow= "";  
  document.body.style.position= "";  
  document.body.style.width= "";
  }
};
</script>

