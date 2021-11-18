<template>
  <div id="divSearchVehicles">
    <div><b>Search Vehicle</b></div>
    <div style="width: 350px;">
      Enter ID here for search : <v-text-field v-model="id" label="" outlined dense> </v-text-field>
    </div>    
    <v-btn color="#FFFFFF" @click="getVehicle()"> Get Vehicle (i.e. 10002) </v-btn>
    <div style="width: 250px;">
      Year: <v-text-field v-model="vehicle.year" label="" outlined dense> </v-text-field>
      Make: <v-text-field v-model="vehicle.make" label="" outlined dense> </v-text-field>
      Model: <v-text-field v-model="vehicle.model" label="" outlined dense> </v-text-field>
    </div> 
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VechicleApi from "../services/vehicleApi";
import Vechile from "../models/vehicle";
@Component
export default class SearchVehicle extends Vue {
  private id: number = 10001;
  private vehicle: Vechile = {
    id: 0,
    year: 0,
    make: "",
    model: "",
  };
  async getVehicle() {
    await VechicleApi.getVehiclById(this.id)
      .then((response) => {
        if (response.status == 200) {
          this.vehicle.year = response.data.year;
          this.vehicle.make = response.data.make;
          this.vehicle.model = response.data.model;
          console.log(this.vehicle);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
</script>
<style scoped></style>
