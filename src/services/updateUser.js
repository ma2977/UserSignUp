import { axiosInstance } from "../api/axiosInstance";
export const updateUser = async (id, newDataUser) => {
  try {
    await axiosInstance.put(`user/${id}/`, newDataUser);
  } catch (error) {
    console.error(error);
  }
};
