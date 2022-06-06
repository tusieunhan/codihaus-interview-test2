<script setup></script>

<template>
  <div class="navbar bg-primary">
    <div class="content flex-between navbar">
      <ul class="navbar-list flex-between gap-20">
        <li class="navbar-list__item color-white">Home</li>
        <li class="navbar-list__item color-white">About us</li>
        <li class="navbar-list__item color-white">Services</li>
        <li class="navbar-list__item color-white">Doctors</li>
        <li class="navbar-list__item color-white">News</li>
        <li class="navbar-list__item color-white">Contact</li>
      </ul>
      <div
        class="mobile__navbar-logo color-accent font-yeseva"
        style="display: none"
      >
        MEDDICAL
      </div>
      <div class="navbar-group flex gap-20">
        <img
          src="../assets/icon/Group 175.png"
          alt=""
          class="navbar-group_search"
        />
        <div class="navbar-group_menu" style="display: none">
          <img src="../assets/icon/menu.png" alt="" />
        </div>
        <div class="group_btn btn color-primary bg-acceny">Appointment</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
