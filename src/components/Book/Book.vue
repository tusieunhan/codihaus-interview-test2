<script setup></script>

<template>
  <div class="book">
    <div class="book__sub__white"></div>
    <div class="book__sub flex-center">
      <div class="book__sub-content content flex-between">
        <div class="sub-content__desc">
          <p class="sub-content__desc-title color-second font-yeseva">
            Book an Appointment
          </p>
          <p class="sub-content__desc-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            placerat scelerisque tortor ornare ornare. Convallis felis vitae
            tortor augue. Velit nascetur proin massa in. Consequat faucibus
            porttitor enim et.
          </p>
        </div>
        <div class="sub-content__input flex">
          <div class="sub-content__input-list">
            <input type="text" placeholder="Name" />
            <select>
              <option value="Gender">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Phone" />
            <input type="date" placeholder="Date" value="2000-10-29" />
            <input type="time" placeholder="Time" value="22:22" />
            <select>
              <option value="Gender">Doctor</option>
              <option value="Male">Tu Le</option>
              <option value="Female">Van Tu</option>
            </select>
            <select>
              <option value="Gender">Department</option>
              <option value="Male">Department</option>
              <option value="Female">Department</option>
            </select>
          </div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button
            class="sub-content__input-btn bg-acceny color-primary w-full w-900"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
