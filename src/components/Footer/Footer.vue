<script setup></script>

<template>
  <div class="footer active">
    <div class="content">
      <div class="footer-list">
        <div class="footer-item">
          <p
            class="footer-item__title footer-item__logo color-acceny font-yeseva"
          >
            Meddical
          </p>
          <ul class="footer-item__desc w-400">
            <li>Leading the Way in Medical Execellence, Trusted Care.</li>
          </ul>
        </div>
        <div class="footer-item">
          <p
            class="footer-item__title w-600 font-poppins color-acceny font-yeseva"
          >
            Important Links
          </p>
          <ul class="footer-item__desc w-400">
            <li>Appointment</li>
            <li>Doctors</li>
            <li>Services</li>
            <li>About Us</li>
          </ul>
        </div>
        <div class="footer-item">
          <p
            class="footer-item__title w-600 font-poppins color-acceny font-yeseva"
          >
            Contact Us
          </p>
          <ul class="footer-item__desc w-400">
            <li>Call: (237) 681-812-255</li>
            <li>Email: fildineesoe@gmail.com</li>
            <li>Address: 0123 Some place</li>
            <li>Some country</li>
          </ul>
        </div>
        <div class="footer-item">
          <p
            class="footer-item__title w-600 font-poppins color-acceny font-yeseva"
          >
            Newsletter
          </p>
          <ul class="footer-item__desc w-400">
            <div
              class="footer-item__desc-email flex bg-acceny color-primary flex-center"
            >
              <input type="text" placeholder="Enter your email address" />
              <img class="btn" src="src/assets/icon/Vector (1).svg" alt="" />
            </div>
          </ul>
        </div>
      </div>
      <div class="footer-copyright flex-between">
        <div class="footer-copyright-desc">
          <p>© 2021 Hospital’s name All Rights Reserved by PNTEC-LTD</p>
        </div>
        <div class="footer-copyright-social flex gap-20">
          <a href="#">
            <img src="src/assets/icon/Vector (5).png" alt="" />
          </a>
          <a href="#">
            <img src="src/assets/icon/Vector (6).png" alt="" />
          </a>
          <a href="#">
            <img src="src/assets/icon/Vector (7).png" alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
li:hover {
  opacity: 0.8;
}
 textarea::placeholder,
 input::placeholder {
  color: var(--primary-color);
}
input {
  color: var(--primary-color);
  font-family: "Poppins";
}
</style>
