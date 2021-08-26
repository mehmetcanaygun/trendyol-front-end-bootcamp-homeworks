<template>
  <li class="starship-item">
    <router-link :to="{ name: 'Detail', params: { id: starship.url.split('starships/')[1].slice(0, -1) }}">
      <img
        src="../assets/starship.svg"
        alt="Spaceship"
      >
      <h3>{{ starship.name }}</h3>
      <p class="model">
        <span>Model</span>: {{ starship.model }}
      </p>
      <p class="hyperdrive-rating"><span>Hyperdrive Rating</span>: {{ starship.hyperdrive_rating }}</p>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "StarshipItem",
  props: {
    starship: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
// Imports
@import "../style/variables";

.starship-item {
  padding: 8px;
  background-image: url("../assets/starship-item-bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  transition: padding 0.3s;
  position: relative;
  border-radius: 4px;

  a {
    width: 100%;
    height: 100%;
    padding: 8px;
    background-color: rgba(#000, 0.8);
    border-top: 4px solid $color-secondary;
    border-bottom: 4px solid $color-tertiary;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: padding 0.3s;
    border-radius: 4px;

    img {
      width: 100%;
      margin-bottom: 16px;
    }

    h3 {
      width: 100%;
      padding: 4px;
      text-align: center;
      background-color: rgba(#000, 0.7);
      color: $color-light;
      font-size: 18px;
      margin-bottom: 8px;
      border-radius: 4px;
    }

    p {
      width: 100%;
      margin-bottom: 8px;
      text-align: left;
      color: $color-light;

      span {
        color: $color-primary;
      }
    }
  }
}

.starship-item::before,
.starship-item::after {
  content: "";
  position: absolute;
  left: -4px;
  width: calc(100% + 8px);
  height: 0;
  z-index: -1;
  transition: height 0.3s 0.1s, box-shadow 0.8s;
}

.starship-item::before {
  top: 0;
  background-color: $color-secondary;
  transform-origin: top;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.starship-item::after {
  bottom: 0;
  background-color: $color-tertiary;
  transform-origin: bottom;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

.starship-item:hover {
  padding: 0;

  a {
    padding: 16px;
  }
}

.starship-item:hover::before,
.starship-item:hover::after {
  height: 50%;
}

.starship-item:hover::before {
  box-shadow: 0px -4px 30px rgba($color-secondary, 0.3);
}

.starship-item:hover::after {
  box-shadow: 0px 4px 30px rgba($color-tertiary, 0.3);
}
</style>