import mongoose from "mongoose";

// Check if the User model already exists before defining it
const User_Schema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true }
});

export const User_Model = mongoose.models.User || mongoose.model("User", User_Schema);

const TempQuest_Schema = new mongoose.Schema({
  quest_type: { type: String, required: true },
  allowRemix: { type: String, required: true },
  questionCount: { type: Number, required: true },
});

// Check if the TempQuest model already exists before defining it
export const TempQuest = mongoose.models.Quiz || mongoose.model("Quiz", TempQuest_Schema);