<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Topmost from "./components/Topmost/Topmost.vue";
import Navbar from "./components/Navbar/Navbar.vue";
import Banner from "./components/Banner/Banner.vue";
import Subbanner from "./components/Subbanner/Subbanner.vue";
import Book from "./components/Book/Book.vue";
import Wrapper from "./components/Wrapper/Wrapper.vue";
import Welcome from "./components/Body/Welcome.vue";
import Service from "./components/Body/Service.vue";
import Special from "./components/Body/Special.vue";
import Doctor from "./components/Body/Doctor.vue";
import News from "./components/Body/News.vue";
import Contact from "./components/Body/Contact.vue";
import Footer from "./components/Footer/Footer.vue";
</script>

<template>
  <div class="Container bg-white">
    <Topmost></Topmost>
    <Navbar></Navbar>
    <Banner></Banner>
    <Subbanner></Subbanner>
    <Wrapper>
      <Welcome></Welcome>
      <Service></Service>
      <Special></Special>
    </Wrapper>
    <Book></Book>
    <Wrapper>
      <Doctor></Doctor>
      <News></News>
      <Contact></Contact>
    </Wrapper>
    <Footer></Footer>
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
