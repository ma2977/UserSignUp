import { axiosInstance } from "../api/axiosInstance";
export const deleteUser = async (id) => {
  try {
    await axiosInstance.delete(`user/${id}/`);
  } catch (error) {
    console.error(error);
  }
};
