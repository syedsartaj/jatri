<template>
     <div class="bg-[#f7f7f7]">
          <Header/>
          <SomethingWentWrong/>
          <Footer/>
     </div>
</template>
   
<script>
import SomethingWentWrong from "../components/Alerts/SomethingWentWrong.vue";
export default {
  components: {SomethingWentWrong}
}
</script>