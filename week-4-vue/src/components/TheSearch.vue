<template>
  <div class="search-container">
    <form
      className="search-form"
      @submit.prevent="onSubmit"
    >
      <div className="input-group search">
        <input
          v-model="searchTerm"
          type="text"
          placeholder="Enter a starship name or a model"
        >
        <button
          type="button"
          :class="showClearBtn ? 'clear-btn toggled'  : 'clear-btn'"
          @click="clearSearch"
        >
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div className="input-group btn">
        <button>
          Search
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "TheSearch",
  data() {
    return {
      searchTerm: "",
      showClearBtn: false,
    };
  },
  props: {
    notFound: {
      type: Boolean,
    },
  },
  methods: {
    onSubmit() {
      this.$emit("search-starship", this.searchTerm);
      this.showClearBtn = true;
    },
    clearSearch(e) {
      e.preventDefault();

      // Hide clear btn
      this.showClearBtn = false;

      // Emit with empty search term
      this.$emit("search-starship", "");

      // Clear input
      this.searchTerm = "";
    },
  },
};
</script>

<style lang="scss" scoped>
// Imports
@import "../style/variables";

.search-container {
  margin-bottom: 30px;

  .search-form {
    display: flex;
    justify-content: space-between;
    height: 80px;

    .input-group {
      flex: 4;
      display: flex;
      flex-direction: column;
      height: 100%;

      label {
        margin-bottom: 8px;
        font-size: 13px;
        display: none;
      }

      input {
        height: 100%;
        padding: 0 60px 0 16px;
        font-size: 24px;
        border: none;
        outline: none;
        background-color: lighten($color-dark-gray, 5);
        border: 1px solid lighten($color-dark-gray, 5);
        color: $color-light;
        border-radius: 6px 0 0 6px;
      }

      input:focus {
        border: 1px solid $color-primary;
      }
    }

    .input-group.search {
      position: relative;

      .clear-btn {
        position: absolute;
        top: calc(50% - 20px);
        right: 10px;
        width: 40px;
        height: 40px;
        font-size: 24px;
        font-weight: bold;
        background: none;
        color: $color-secondary;
        border-radius: 6px;
        border: none;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transform: translateX(16px);
        transition: opacity 0.4s, visibility 0.4s, transform 0.4s;
      }

      .clear-btn.toggled {
        opacity: 1;
        visibility: visible;
        transform: translateX(0);
      }
    }

    .input-group.btn {
      flex: 1;

      button {
        height: 100%;
        border: none;
        font-size: 16px;
        background-image: linear-gradient(
          $color-primary,
          darken($color-primary, 10)
        );
        color: $color-dark-gray;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
        border-radius: 0 6px 6px 0;
      }

      button:hover {
        background-image: linear-gradient(
          darken($color-primary, 10),
          $color-primary
        );
      }
    }
  }
}

// Media Queries
@media (max-width: 768px) {
  .search-container .search-form {
    flex-direction: column;
    gap: 10px;

    .input-group {
      flex: 1;

      input {
        border-radius: 6px;
        font-size: 16px;
      }
    }

    .input-group.btn {
      flex: 1;

      button {
        border-radius: 6px;
      }
    }
  }
}
</style>