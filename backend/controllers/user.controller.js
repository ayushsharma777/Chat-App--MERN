import User from "../models/user.model.js";

export const getUsersForSiderBar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password"); // excluding password field

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error in getUsersForSideBar controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
