<template>
  <div>
    <h1>Advice #{{ quote.id }}</h1>
    <p v-if="quote">"{{ quote.advice }}"</p>
    <p v-else>wait the cite...</p>
    <small v-if="warning">{{ warningText }}</small>
    <img src="@/assets/imgs/pattern-divider-mobile.svg" alt="" />
    <button @click="getQuote">
      <img src="@/assets/imgs/icon-dice.svg" alt="roll the ice" />
    </button>
  </div>
</template>

<script>
import { ref, onMounted, watch } from "vue";

export default {
  name: "AdviceGenerator",
  setup() {
    const quote = ref("");
    const warningText = "Please wait a few seconds to do another request.";
    const warning = ref(false);

    function getQuote() {
      const button = document.querySelector("button");
      button.classList.add("isClicked");
      fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((response) => {
          quote.value = response.slip;
        })
        .catch(() => {});
      setTimeout(() => {
        button.classList.remove("isClicked");
      }, 1000);
    }

    watch(quote, (newQuote, oldQuote) => {
      if (newQuote.advice == oldQuote.advice) {
        warning.value = true;
      } else {
        warning.value = false;
      }
    });

    onMounted(() => {
      getQuote();
    });

    return { quote, getQuote, warning, warningText };
  },
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--Dark-Grayish-Blue);
  padding: 1.5625rem;
  margin: 0 0.625rem;
  width: calc(100vw - 20px);
  min-height: 300px;
  border-radius: 0.625rem;
  position: relative;
}

div > * {
  margin-bottom: 1.25rem;
}

h1 {
  color: var(--neon-green);
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1875rem;
}

p {
  font-size: var(--quote);
}

:is(p, small) {
  text-align: center;
  color: var(--light-cyan);
}

button {
  background-color: var(--neon-green);
  border-radius: 50%;
  border-color: transparent;
  width: 60px;
  height: 60px;
  transition: all 0.3s;
  position: absolute;
  top: 90%;
}

button:hover {
  filter: drop-shadow(0.0625rem -0.375rem 1rem var(--neon-green));
  cursor: pointer;
}

@media (min-width: 800px) {
  div {
    margin: 0;
    width: calc(500px);
    border-radius: 0.625rem;
    position: relative;
  }
}

.isClicked {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
