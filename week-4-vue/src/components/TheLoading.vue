<template>
  <div class="loading-container">
    <div class="lightsaber">
      <img
        src="../assets/lightsaber.svg"
        alt="Loading"
      >
    </div>
    <div class="light"></div>
  </div>
</template>

<script>
export default {
  name: "TheLoading",
};
</script>

<style lang="scss" scoped>
// Imports
@import "../style/variables";

.loading-container {
  width: 600px;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .lightsaber {
    height: 30px;

    img {
      max-height: 100%;
    }
  }

  .light {
    flex: grow;
    height: 16px;
    background: lighten($color-tertiary, 40);
    border-radius: 0 6px 6px 0;
    box-shadow: 4px 0px 40px 8px rgba($color-tertiary, 0.9);
    animation: loading 0.4s ease-in-out infinite;
  }
}

@keyframes loading {
  0%,
  100% {
    width: 0;
  }
  50% {
    width: 100%;
  }
}

// Media Queries
@media (max-width: 768px) {
  .loading-container {
    width: 100%;

    .lightsaber {
      height: 16px;
    }

    .light {
      height: 8px;
    }
  }
}
</style>