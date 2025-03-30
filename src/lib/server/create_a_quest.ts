import { TempQuest } from "./models";

export async function create_temp_vars(
    name: string,
    email: string,
    quest_type: string, //DONE
    allowRemix: string, //DONE
    questionCount: number //DONE
) {
    try {
        // Create a new document in MongoDB with the given parameters
        const newQuest = new TempQuest({
            name,
            email,
            quest_type,
            allowRemix,
            questionCount
        });
        
        // Save the document to the database
        await newQuest.save();
        
        return { success: true, message: "Quest created successfully", data: newQuest };
    } catch (error) {
        return { success: false, message: "Error creating quest", error };
    }
}