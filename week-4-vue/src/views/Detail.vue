<template>
  <main class="detail">
    <router-link
      to="/"
      class="back-link"
    >Go Back</router-link>
    <div
      class="loading"
      v-if="loading"
    >
      <TheLoading />
    </div>
    <div
      class="starship-container"
      v-else
    >
      <div
        class="info"
        v-if="starship"
      >
        <h1>{{ starship.name }}</h1>
        <p><span><i class="far fa-star"></i> Model:</span> {{ starship.model }}</p>
        <p><span><i class="fas fa-bolt"></i> Hyperdrive Rating:</span> {{ starship.hyperdrive_rating }}</p>
        <p><span><i class="fas fa-users"></i> Passengers:</span> {{ starship.passengers }}</p>
        <p><span><i class="fas fa-tachometer-alt"></i> Max Atmosphering Speed:</span> {{ starship.max_atmosphering_speed }}</p>
        <p><span><i class="fas fa-industry"></i> Manufacturer:</span> {{ starship.manufacturer }}</p>
        <p><span><i class="fas fa-tools"></i> Crew:</span> {{ starship.crew }}</p>
        <p><span><i class="fas fa-boxes"></i> Cargo Capacity:</span> {{ starship.cargo_capacity }}</p>
      </div>
      <div
        class="img"
        v-if="starship"
      >
        <img
          src="../assets/starship.svg"
          alt="Starship"
        >
      </div>
    </div>
  </main>
</template>

<script>
import TheLoading from "../components/TheLoading";

import ApiService from "../services/ApiService";

const apiService = new ApiService();

export default {
  name: "Detail",
  components: {
    TheLoading,
  },
  data() {
    return {
      starship: null,
      loading: false,
    };
  },
  methods: {
    async getStarship(id) {
      this.loading = true;

      this.starship = await apiService.getStarship(id);

      this.loading = false;
    },
  },
  async created() {
    await this.getStarship(this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped>
// Imports
@import "../style/variables";

.detail {
  padding: $py $px;
}

.back-link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
  margin-bottom: 30px;
  font-weight: bold;
  background-color: $color-dark-gray;
  color: $color-light;
  border-radius: 4px;
  border-top: 2px solid $color-secondary;
  border-bottom: 2px solid $color-tertiary;
  border-right: 2px solid transparent;
  border-left: 2px solid transparent;
  transition: border 0.3s;
}

.back-link:hover {
  border-right: 2px solid $color-secondary;
  border-left: 2px solid $color-tertiary;
}

.starship-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  .info {
    align-self: start;

    h1 {
      color: $color-primary;
      position: relative;
      margin-bottom: 50px;
    }

    h1::after {
      content: "";
      position: absolute;
      bottom: -14px;
      left: 0;
      width: 120px;
      height: 4px;
      border-radius: 2px;
      background-color: $color-light;
    }

    p {
      height: 60px;
      font-size: 18px;
      display: flex;
      align-items: center;

      span {
        color: $color-primary;
        margin-right: 10px;
        display: flex;
        align-items: center;

        i {
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          margin-right: 10px;
          background-color: $color-dark-gray;
        }
      }
    }
  }

  .img {
    align-self: start;

    img {
      max-width: 100%;
      animation: fly 3s ease-in-out infinite;
    }
  }
}

// Animations
@keyframes fly {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}

// Media Queries
@media (max-width: 768px) {
  .detail {
    padding: $py-sm $px-sm;
  }

  .starship-container {
    grid-template-columns: 1fr;
    gap: 30px;

    .info {
      order: 2;

      h1 {
        margin-bottom: 40px;
        font-size: 24px;
      }

      p {
        height: 40px;
        font-size: 14px;

        span {
          i {
            width: 30px;
            height: 30px;
          }
        }
      }
    }

    .img {
      order: 1;
      justify-self: center;
    }
  }
}
</style>
