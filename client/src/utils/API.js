import axios from "axios";

export default {
  getTimes: function(routeid) {
    return axios.get("/api/trains/" + routeid); //Need to pass routeid and dir
  }
};
