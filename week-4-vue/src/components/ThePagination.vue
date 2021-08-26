<template>
  <div
    v-if="pagination"
    class="pagination"
  >
    <button
      v-if="pagination.previous"
      @click="$emit('get-page', pagination.previous)"
    ><i class="fas fa-chevron-left"></i> Previous</button>
    <button
      v-if="pagination.next"
      @click="$emit('get-page', pagination.next)"
    >Next <i class="fas fa-chevron-right"></i></button>
  </div>
</template>

<script>
export default {
  name: "ThePagination",
  props: {
    pagination: Object,
  },
};
</script>

<style lang="scss" scoped>
// Import
@import "../style/variables";

.pagination {
  width: 100%;
  height: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;

  button {
    height: 100%;
    width: 100px;
    font-size: 16px;
    border: none;
    background-color: $color-dark-gray;
    color: $color-light;
    border-top: 2px solid $color-secondary;
    border-bottom: 2px solid $color-tertiary;
    border-right: 2px solid transparent;
    border-left: 2px solid transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 4px;
    transition: border 0.3s;

    .fa-chevron-left,
    .fa-chevron-right {
      transform: translateY(1px);
    }

    .fa-chevron-left {
      margin-right: 10px;
    }

    .fa-chevron-right {
      margin-left: 10px;
    }
  }

  button:hover {
    border-right: 2px solid $color-secondary;
    border-left: 2px solid $color-tertiary;
  }
}
</style>