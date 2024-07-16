<script setup>
import { computed, onMounted } from 'vue';
import { artworkService } from '../services/ArtworkService.js';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';

const artworks = computed(() => AppState.artworks)

onMounted(() =>{
  getArtwork()
})
  

async function getArtwork(){
  try {
    await artworkService.getArtwork();
  }
  catch (error){
    Pop.error(error);
  }
}
</script>

<template>
  <section class="container-fluid sticky-top">
    <div class="row">
      <div class="col-12 d-flex justify-content-between py-3">
        <button class="btn btn-warning">Previous</button>
        <button class="btn btn-warning">Next</button>
      </div>
    </div>
  </section>


  <section class="container-fluid">
    <div class="row align-items-center">
      <div v-for="artwork in artworks" :key="artwork.id" class="col-6 col-md-3">
        <div class="card">
          <img class="card-img img-fluid" :src="artwork.imgUrl">
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: clamp(500px, 50vw, 100%);

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
