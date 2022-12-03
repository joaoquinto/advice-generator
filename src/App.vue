<template>
  <div>
    <advice-generator />
  </div>
</template>

<script>
import AdviceGenerator from "./components/AdviceGenerator.vue";

export default {
  name: "App",
  components: { AdviceGenerator },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --light-cyan: hsl(193, 38%, 86%);
  --neon-green: hsl(150, 100%, 66%);
  --Grayish-Blue: hsl(217, 19%, 38%);
  --Dark-Grayish-Blue: hsl(217, 19%, 24%);
  --Dark-Blue: hsl(218, 23%, 16%);
  --quote: 1.75rem;
}

body {
  background-color: var(--Dark-Blue);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Manrope";
  overflow-x: hidden;
}

div {
  margin-top: 15vh;
}
</style>
