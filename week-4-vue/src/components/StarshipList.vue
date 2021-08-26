<template>
  <ul class="starship-list">
    <StarshipItem
      :key="starship.url.split('starships/')[1].slice(0, -1)"
      v-for="starship in starships"
      :starship="starship"
    />
  </ul>
</template>

<script>
import StarshipItem from "./StarshipItem.vue";

export default {
  name: "StarshipList",
  components: {
    StarshipItem,
  },
  props: {
    starships: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.starship-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 3vw;
  row-gap: 30px;
  margin-bottom: 30px;
}

// Media Queries
@media (max-width: 1024px) {
  .starship-list {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .starship-list {
    grid-template-columns: repeat(2, 1fr);
    gap: 5vw;
  }
}

@media (max-width: 425px) {
  .starship-list {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}
</style>