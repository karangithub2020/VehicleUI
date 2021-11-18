import http from "../services/http-common";
import Vehicle from "../models/vehicle";
class VehicleAPI {
  //get all vehicles
  getAllVehicles() {
    return http.get("/vehicles"); //https://localhost:44303/api/vehicles
  }
  createVehicle(vehicle: Vehicle) {
    return http.post("/vehicles", vehicle);
  }
  getVehiclById(id : number)
  {
    return http.get("/vehicles/" + id);
  }

   //Post VERB
   create(vehicle: Vehicle) {
    return http.post("/vehicles", vehicle);
  }

  //PUT verb
  update(id: number, vehicle: Vehicle) {
    return http.put(`/vehicles/?Id=${id}`, vehicle);
  }
  //delete VERB
  delete(id: number) {
    return http.delete("vehicles/" + id);
  }
}

export default new VehicleAPI();
