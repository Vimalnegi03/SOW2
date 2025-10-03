// controllers/sowSchoolVisitsController.js
import db from "../db.js";

export const getLastTwentyVisits = async (req, res) => {
 
   try {
    const [rows] = await db.query(
      `SELECT 
        DateOfVisit,
        SchoolName,
        SchoolUdise,
        TotalMaleStudentsAttended,
        TotalFemaleStudentsAttended,
        VideoUrl,
        StarOfTheDayStudentName,
        StarOfTheDayExperience,
        StarOfTheDayPhotoUrl
      FROM SowSchoolVisits
      ORDER BY DateOfVisit DESC
      LIMIT 5`
    );

    res.json(rows);
  } catch (err) {
    console.error("Error fetching visits:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }


};
