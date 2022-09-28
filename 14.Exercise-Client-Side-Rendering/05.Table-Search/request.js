import { API } from "./api.js";

const studentsURL = '/jsonstore/advanced/table ';

export const getStudents = API.get.bind(null, studentsURL);