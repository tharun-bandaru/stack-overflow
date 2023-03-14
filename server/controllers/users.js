import mongoose from "mongoose";

import users from "../models/auth.js";

export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await users.find();
    const allUserDetails = [];

    allUsers.forEach((users) => {
      allUserDetails.push({
        _id: users._id,
        name: users.name,
        about: users.about,
        tags: users.tags,
        joinedOn: users.joinedOn,
      });
    });
    res.status(200).json(allUserDetails);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateProfile = async (req, res) => {
  console.log("updated profile");
  const { id } = req.params;
  const { name, about, tags } = req.body;
  console.log("server user", id, name, about, tags);
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("question is unavailable");
  }

  try {
    const updateProfile = await users.findByIdAndUpdate(
      id,
      { $set: { name: name, about: about, tags: tags } },
      { new: true }
    );
    console.log("updated profile", updateProfile);
    res.status(200).json(updateProfile);
  } catch (error) {
    console.log("erro in server");
    res.status(405).json({ message: error.message });
  }
};
