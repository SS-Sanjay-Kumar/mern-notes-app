export function getAllNotes (req, res) {
    res.status(200).json({success:true, message:"Notes have been fetched/read succesfully"});
};

export function createNote(req, res) {
    res.status(201).json({success: true, message: "Note has been created succesfully"});
};

export function updateNote(req, res) {
    res.status(200).json({success:true, message: "Note has been updated succesfully"});
};

export function deleteNote (req, res) {
    res.status(200).json({success:true, message: "Note has been deleted succesfully"});
};