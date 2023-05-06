
import SeasonalInfo from '../model/info.js'
export const infocontroller=async(req,res,next)=>{
  try {
    const { title, description } = req.body;

    // Create a new seasonal information object
    const seasonalInfo = new SeasonalInfo ({
      title,
      description,
    });

    // Save the seasonal information to the database
    const savedInfo = await seasonalInfo.save();

    res.status(201).json(savedInfo);
    console.log(savedInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add seasonal information' });
  }

  

}


export const getinfo=async (req,res)=>{
  try {
    const seasonalInfo = await SeasonalInfo.find();
    res.status(200).json(seasonalInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve seasonal information' });
  }
}




