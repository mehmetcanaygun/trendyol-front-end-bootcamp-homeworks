<template>
  <header class="navbar">
    <a
      href="/"
      class="logo"
    >
      <img
        class="star-wars-logo"
        src="../assets/logo.png"
        alt="StarWars"
      >
      <span>Starships</span>
    </a>
  </header>
</template>

<script>
export default {
  name: "TheNavbar",
};
</script>

<style lang="scss" scoped>
// Imports
@import "../style/variables";

.navbar {
  height: 100px;
  padding: 0 $px;
  border-bottom: 2px solid $color-primary;
  display: flex;
  align-items: center;

  .logo {
    display: flex;
    align-items: center;
    text-decoration: none;

    img {
      height: 80px;
      margin-right: 10px;
    }

    span {
      font-size: 24px;
      text-transform: uppercase;
      font-weight: bold;
      color: $color-light;
    }
  }
}

// Media Queries
@media (max-width: 768px) {
  .navbar {
    padding: 0 $px-sm;
  }
}
</style>