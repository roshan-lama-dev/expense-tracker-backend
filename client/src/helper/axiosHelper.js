import axios from "axios";
const baseURL = " http://localhost:8000/api/v1";

const userURL = baseURL + "/user";
const tranURL = baseURL + "/transaction";
// ============ user api section
// to cath the rum time error
export const postUser = async (obj) => {
  try {
    const { data } = await axios.post(userURL, obj);

    return data;
  } catch (error) {
    return {
      status: "success",
      message: error.message,
    };
  }
};

export const loginUser = async (obj) => {
  try {
    const { data } = await axios.post(userURL + "/login", obj);

    return data;
  } catch (error) {
    return {
      status: "success",
      message: error.message,
    };
  }
};

// reutrn user id

const getUserId = () => {
  const userStr = sessionStorage.getItem("user");
  const userObj = userStr ? JSON.parse(userStr) : null;
  return userObj?._id ?? null;
};
// ============ transcation api section

export const fetchTransaction = async (obj) => {
  try {
    const userId = getUserId();

    if (!userId) {
      return {
        status: "error",
        message: "You need to log in",
      };
    }
    const { data } = await axios.post(userURL + "/login", obj);
    // headers: {
    //   Authorization: "";
    // }
    return data;
  } catch (error) {
    return {
      status: "success",
      message: error.message,
    };
  }
};
