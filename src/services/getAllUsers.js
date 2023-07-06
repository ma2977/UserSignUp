import { axiosInstance } from "../api/axiosInstance";
export const getAllUsers = async () => {
  try {
    const res = 
    await axiosInstance.get("user");
    return res.data;
  } 
   catch (error) {
   console.error(error);
  }
};
