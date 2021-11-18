<template>
  <div id="divVehicles">
    <!-- <h4>All Vechicles</h4> -->
    <hr/>
     <template>
 <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>         
          <th class="text-left">Year</th>
          <th class="text-left">Make</th>
          <th class="text-left">Model</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="veh in allVehicles" :key="veh.id">
          <td>{{ veh.year }}</td>
           <td>{{ veh.make }}</td>
           <td>{{ veh.model }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VechicleApi from "../services/vehicleApi";
import Vechile from "../models/vehicle";
@Component
export default class VehicleList extends Vue {
  
  private vehicle: Vechile = {
    id: 0,
    year: 0,
    make: "",
    model: "",
  };
  private allVehicles: any = [{}];
   async created() {    
    await this.getVehicles();
  }
   async getVehicles() {
     await VechicleApi.getAllVehicles()
      .then((response) => {
        if (response.status == 200) {
          this.allVehicles = response.data;
          console.log(this.allVehicles);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
</script>
<style scoped></style>
