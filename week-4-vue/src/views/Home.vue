<template>
  <main class="home">
    <TheSearch
      @search-starship="searchStarship"
      :notFound="notFound"
    />
    <div
      class="loading"
      v-if="loading"
    >
      <TheLoading />
    </div>
    <div
      class="home-container"
      v-else
    >
      <div
        class="not-found"
        v-if="notFound"
      >
        <NotFound @back-to-home="backToHome" />
      </div>
      <StarshipList :starships="starships" />
      <ThePagination
        :pagination="pagination"
        @get-page="getPage"
      />
    </div>
  </main>
</template>

<script>
import StarshipList from "../components/StarshipList";
import ThePagination from "../components/ThePagination";
import TheSearch from "../components/TheSearch";
import TheLoading from "../components/TheLoading";
import NotFound from "../components/NotFound";

import ApiService from "../services/ApiService";

const apiService = new ApiService();

export default {
  name: "Home",
  components: {
    StarshipList,
    ThePagination,
    TheSearch,
    TheLoading,
    NotFound,
  },
  data() {
    return {
      starships: [],
      pagination: null,
      loading: false,
      notFound: false,
    };
  },
  methods: {
    async getStarships() {
      this.loading = true;

      [this.starships, this.pagination] = await apiService.getStarships();

      this.checkNotFound();

      this.loading = false;
    },
    async getPage(url) {
      this.loading = true;

      [this.starships, this.pagination] = await apiService.getPage(url);

      this.checkNotFound();

      this.loading = false;
    },
    async searchStarship(term) {
      this.loading = true;

      [this.starships, this.pagination] = await apiService.searchStarship(term);

      this.checkNotFound();

      this.loading = false;
    },
    checkNotFound() {
      this.notFound = this.starships.length === 0 ? true : false;
    },
    async backToHome() {
      await this.getStarships();
    },
  },
  // Call function to get all starships when the Home view is created
  async created() {
    await this.getStarships();
  },
};
</script>

<style lang="scss" scoped>
// Imports
@import "../style/variables";

.home {
  padding: $py $px;
}
</style>
