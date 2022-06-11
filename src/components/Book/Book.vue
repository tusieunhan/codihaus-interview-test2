<script >
import { ref } from 'vue'

  export default {
      setup(){
         const infoBooking = ref({
            name : "",
            email :"",
            gender : "",
            phone : "",
            date : "2022-02-22",
            time : "11:22",
            doctor : "",
            department: "",
            message : ""
      })
      const handleSubmit = ()=>{
        console.log(infoBooking)
      }
      return { infoBooking ,handleSubmit }
    }
  }
</script>

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
        <form @submit.prevent="handleSubmit" class="sub-content__input flex">
          <div class="sub-content__input-list">
            <input type="text" placeholder="Name" v-model="infoBooking.name" />
            <select v-model="infoBooking.gender">
              <option disabled value>Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input type="text" placeholder="Email" v-model="infoBooking.email"/>
            <input type="text" placeholder="Phone" v-model="infoBooking.phone"/>
            <input type="date" placeholder="Date" v-model="infoBooking.date" />
            <input type="time" placeholder="Time"  v-model="infoBooking.time" />
            <select v-model="infoBooking.doctor">
              <option value disabled >Doctor</option>
              <option value="Male">Tu Le</option>
              <option value="Female">Van Tu</option>
            </select>
            <select  v-model="infoBooking.department" >
              <option value disabled >Department</option>
              <option value="Department">Haha hihi</option>
              <option value="Department">Hihi haha</option>
            </select>
          </div>
          <textarea
           v-model="infoBooking.message" 
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button
            type="submit"
            class="sub-content__input-btn bg-acceny color-primary w-full w-900"
          >
            Submit
          </button>
        </form >
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
