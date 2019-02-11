import axios from "axios";

export default {
  getTimes: function(routeid, dir) {
    return axios.get("/api/trains/" + routeid + "/" + dir); //Need to pass routeid and dir
  }
};
