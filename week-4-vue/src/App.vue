<template>
  <TheNavbar />
  <router-view />
</template>

<script>
import TheNavbar from "./components/TheNavbar";

export default {
  name: "App",
  components: {
    TheNavbar,
  },
};
</script>

<style lang="scss">
// Imports
@import "./style/variables";

// Reset
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
}

/* Custom Scrollbar */
/* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: $color-dark-gray;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: $color-primary;
  border-radius: 4px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: darken($color-primary, 20);
}

body {
  background-color: #000;
  color: $color-light;
}
</style>
