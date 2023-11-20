import axios from "axios";

const URL = "http://localhost:4000/api/courses";

//use fetchCourses function to get the data from the server instead of from database on the client side
export const findAllCourses = async () => {
  const response = await axios.get(URL);
  return response.data;
};

export const fetchCourseById = async (id) => {
  const response = await axios.get(`${URL}/${id}`);
  return response.data;
};

export const deleteCourse = async (id) => {
  const response = await axios.delete(`${URL}/${id}`);
  return response.data;
};

export const updateCourse = async (course) => {
  const response = await axios.put(
    `${URL}/${course._id}`,
    course
  );
  return response.data;
}
export const addCourse = async (course) => {
  console.log("clicked on the addCourse");
  // use "post" to add a new course to the server, see inside (URL, course), we're sending course to the server
  const response = await axios.post(
    "http://localhost:4000/api/courses",
    course
  ); //By adding console.log(req.body);, whenever a POST request is made to /api/courses, the server will print the body of the request to the console. This is very useful for debugging, as you can see exactly   
  return response.data;
};

