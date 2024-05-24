// import { getStorage } from "firebase/storage";
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
  getMetadata,
} from "firebase/storage";
import { initializeApp } from "firebase/app";
import FBconfig from "../firebase/firebase.config.js";
import { giveCurrentDateTime } from "../utils/timerelatefun.js";
import User from "../models/user.model.js";

initializeApp(FBconfig);
const storage = getStorage();

export const handleUploadImg = async (req, res) => {
  // console.log(req.params.id);

  console.log(req.user._id);

  try {
    // const dateTime = giveCurrentDateTime();
    const newFileName = req.user._id;
    const storageRef = ref(storage, `files/${newFileName}.JPG`);

    // Check if file exists
    const fileExists = await getMetadata(ref(storage, `files/${newFileName}`))
      .then(() => true)
      .catch(() => false);

    if (fileExists) {
      // If the file exists, delete it
      const existingFileRef = ref(storage, `files/${newFileName}`);
      await deleteObject(existingFileRef);
      console.log("Existing file deleted.");
    }
    // Create file metadata including the content type
    const metadata = {
      contentType: req.file.mimetype,
    };

    // Upload the file in the bucket storage
    const snapshot = await uploadBytesResumable(
      storageRef,
      req.file.buffer,
      metadata
    );
    //by using uploadBytesResumable we can control the progress of uploading like pause, resume, cancel

    // Grab the public url
    const downloadURL = await getDownloadURL(snapshot.ref);

    console.log("File successfully uploaded.");

    const UpdatedUser = await User.findOneAndUpdate(
      { _id: req.user._id }, // Điều kiện tìm kiếm: Tìm người dùng theo _id
      { profilePic: downloadURL }, // Giá trị mới cho trường profilePic
      { new: true } // Tùy chọn để trả về tài liệu đã cập nhật
    );
    if (UpdatedUser) {
      console.log("User update successfully");
    }

    return res.send({
      message: "file uploaded to firebase storage",
      name: newFileName, //maybe change this to the username file name
      type: req.file.mimetype,
      downloadURL: downloadURL,
    });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

// export const getStoragedata = async (req, res) => {
//   initializeApp(FBconfig);
//   const storage = await getStorage();
//   console.log(storage);
//   res.send(storage);
// };
