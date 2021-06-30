<template>
  <div class="canberra-js" @click="handleClick">
    <div class="logo">
      <span class="js">JS</span>
    </div>
    <span class="text">
      {{ text }}
    </span>
  </div>
</template>

<script>
export default {
  name: "CanberraJs",
  props: {
    /**
     * Pass text string to display at the bottom of the JS logo
     */
    text: {
      type: String,
      required: false,
      default: "Canberra",
    },
  },
  methods: {
    handleClick() {
      /**
       * Emits click event
       */
      this.$emit("click");
    },
  },
};
</script>

<style>
.canberra-js {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.logo {
  width: 120px;
  height: 120px;
  background: #f0db4f;
  color: black;
  position: relative;
}
.js {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-weight: bold;
  font-size: 48px;
}
.text {
  font-size: 48px;
}
</style>
