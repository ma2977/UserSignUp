import { axiosInstance } from "../api/axiosInstance"
export const createUser = async (dataUser) => {
  try {
    const res = await axiosInstance.post("user/", dataUser);
    return res.data;
  } catch (error) {
    console.error("Oops, something went wrong", error)
  }
}
