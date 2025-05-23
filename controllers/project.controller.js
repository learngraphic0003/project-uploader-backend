import Project from "../model/project.model.js";
import  User from "../model/user.model.js"

export const createproject = async (req, res) => {
  try {
    const { project_name } = req.body;

    const project = new Project({
      project_name,
     
    });
    await project.save();

    res.status(201).json({ message: "Project created successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
