import React from "react";
import { useState, useEffect } from "react";
const cloudinaryName = import.meta.env.VITE_CLOUDINARY_NAME;
const cloudinaryPreset = import.meta.env.VITE_CLOUDINARY_PRESET;
import axios from "axios";

const UploadImg = () => {
  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState();

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", imagePreview);
    formData.append("upload_preset", cloudinaryPreset);
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudinaryName}/image/upload`,
      formData
    );
    setImage(response.data.url);
  };

  useEffect(() => {
    uploadImage();
  }, [imagePreview]);
  // console.log(image);

  return (
    <div>
      <img src={image} />
      <input type="file" onChange={(e) => setImagePreview(e.target.files[0])} />
      <button onClick={uploadImage}>Upload</button>
    </div>
  );
};

export default UploadImg;
