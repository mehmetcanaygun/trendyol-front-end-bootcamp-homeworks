<template>
  <div class="not-found-container">
    <div class="code">
      <div class="number">4</div>
      <div class="vader">
        <img
          src="../assets/vader.svg"
          alt="Vader"
        >
        <div class="breath"></div>
      </div>
      <div class="number">4</div>
    </div>
    <p class="info">Starships with that name or model could not be found...</p>
    <button
      class="back-btn"
      @click="$emit('back-to-home')"
    >Go Back</button>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style lang="scss" scoped>
// Imports
@import "../style/variables";

.not-found-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .code {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    height: 300px;
    margin-bottom: 30px;

    .number,
    .vader {
      height: 100%;
    }

    .number {
      font-size: 220px;
      color: $color-dark-gray;
      text-shadow: 0 2px 4px $color-secondary;
    }

    .vader {
      position: relative;

      img {
        max-height: 100%;
        filter: drop-shadow(0 2px 4px $color-secondary);
      }

      .breath {
        position: absolute;
        bottom: 60px;
        left: 50%;
        width: 0;
        height: 0;
        border-radius: 50%;
        background-color: rgba(gray, 0.4);
        box-shadow: 0px 0px 30px 20px gray;
        animation: breath 4s infinite;
      }
    }
  }

  .info {
    margin-bottom: 30px;
    color: $color-light;
    text-align: center;
  }

  .back-btn {
    font-size: 16px;
    padding: 6px 20px;
    background: none;
    border: none;
    color: $color-light;
    border-bottom: 2px solid $color-dark-gray;
    cursor: pointer;
    position: relative;
  }

  .back-btn::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: $color-secondary;
    transition: width 0.5s;
  }

  .back-btn:hover::after {
    width: 100%;
  }
}

// Animations
@keyframes breath {
  0% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(20px) scale(1.8);
    box-shadow: 0px 0px 50px 20px gray;
  }
  50%,
  99% {
    opacity: 0;
  }
}

// Media Queries
@media (max-width: 768px) {
  .not-found-container {
    .code {
      height: 120px;

      .number {
        font-size: 90px;
        text-shadow: 0 2px 2px $color-secondary;
      }

      .vader {
        img {
          filter: drop-shadow(0 2px 2px $color-secondary);
        }

        .breath {
          bottom: 20px;
        }
      }
    }
  }
}
</style>