<template>
  <div class="border-b-2 py-12">
    <div class="max-w-7xl mx-auto mt-5 py-10 px-6 items-center space-y-8">
      <h1 class="text-3xl sm:text-4xl md:text-5xl text-right">
        ¿Por qué <span class="font-medium">Moover</span>?
      </h1>
      <h2 class="sm:text-lg text-right">
        Somos una empresa dedicada a sus clientes. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
        est laborum.
      </h2>
      <div
        class="flex flex-col md:flex-row justify-evenly space-y-4 md:space-y-0 md:space-x-4"
      >
        <WhyCard
          title="Seguridad"
          imgPath="/guard.png"
          description="Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua."
        />
        <WhyCard
          title="Higiene"
          imgPath="/hygiene.png"
          description="Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <WhyCard
          title="Puntualidad"
          imgPath="/timer.png"
          description="Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>
    </div>
  </div>
</template>

<script>
import WhyCard from './WhyCard.vue'
export default {
  name: 'WhyUs',
  components: { WhyCard },
}
</script>

<style></style>
