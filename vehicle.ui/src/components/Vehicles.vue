export
<template>
  <div id="divVehicles">
    <h2>Vehicles</h2>
  </div>
</template>

<script lang="ts">
import VechicleApi from "../services/vehicleApi";
export default {
  data() {
    return {
      vehicles: [],
    };
  },
  methods: {
    async getAllVehicles() {
      await VechicleApi.getAllVehicles()
        .then((response) => {
          if (response.status == 200) {
            console.log(response.data);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style></style>
