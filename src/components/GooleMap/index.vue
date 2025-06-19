<script setup lang="ts">

// 初始化goole地图
import { Loader } from '@googlemaps/js-api-loader'
import { onMounted, ref } from 'vue'

// declare global {
//   interface Window {
//     initMap: () => void;
//   }
// }

onMounted(() => {
  initMap()

})

const loader = new Loader({
  apiKey: "AIzaSyACNod58yeUtWjyBmxZzUF6TLbyj0L3ASQ",
  version: "weekly",
  libraries: ["places"]
})


function initMap(): void {
  loader.load().then((google) => {
    let map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center: { lat: 1.30277, lng: 103.86542 },
      zoom: 12,
    });
    const marker = new google.maps.Marker({
      position: { lat: 1.30277, lng: 103.86542 },
      map: map,
    });
  })

}




</script>

<template>
  <div id="map"></div>
</template>


<style scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>