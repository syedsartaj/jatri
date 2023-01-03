 <template>
  <ul
    class="
      list-disc
      grid grid-cols-2
      lg:grid-cols-3
      gap-x-[70px] gap-y-[10px]
      mt-6
      font-normal
    "
  >
    <li v-for="(point, index) in pointArray" :key="index" class="ml-5">
      {{ point }}
    </li>
  </ul>
</template>

 <script>
export default {
  props: ["pointArray"],
};
</script>