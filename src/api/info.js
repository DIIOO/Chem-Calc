import axios from "axios";

export default axios.create({
    baseURL: 'https://periodic-table-elements-info.herokuapp.com'
})