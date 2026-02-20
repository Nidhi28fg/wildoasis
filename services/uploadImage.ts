import axios from "axios";
import { CLOUDINARY_CLOUD_NAME } from "@/utils/config";

export const uploadImage = async (image: File) => {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "the-wild-oasis");

  const {
    data: { secure_url },
  } = await axios.post(
    `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
    formData
  );

  return secure_url;
};
