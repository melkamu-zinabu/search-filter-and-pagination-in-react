
import bcrypt from "bcryptjs";
import user from "../model/user.js";
export const getalluser=async(req,res,next)=>{
    //In the React component code, we are passing the currentPage and PAGE_SIZE values as query parameters in the axios.get request:
    const page = parseInt(req.query.page || 1);
    const pageSize = parseInt(req.query.pageSize || 5);

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    let totalItems;

    try{
    totalItems = await user.countDocuments();
    const items = await user.find().skip(startIndex).limit(endIndex - startIndex).exec();
    return res.status(200).json({ items, totalItems });
    }
    catch(err){
        return next();// retuns to the next availeble middleware
    }

}



export const signup=async(req,res,next)=>{
    const{name,email,password}=req.body;
    // we need to decrpt password tpps tore in the database
    if(!name&&name.trim()===''&&!email&&email.trim()===''&!password&&password.trim()===''){
        return res.status(422).json({message:'invalid input'});
    }
    // we have to salt it
    const newpassword=bcrypt.hashSync(password, 10);
   let users;
   try{
    users=new user({
        name,email,password:newpassword
    })
    users =await users.save();
   }
   catch(err){
    //return next(err);
    console.log(err);
   }
   if(!users){
    return res.status(500).json({message:'unexpected error'})
   }
   return  res.status(201).json({users})

}






//paginated serach filter user component

// Route: GET /api/users
// Get paginated, filtered, and searched user data
export const getfiltereduser= async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;
    const search = req.query.search || "";
    const filter = req.query.filter || "";

    const skip = (page - 1) * pageSize;
    const limit = pageSize;

    // Build the query conditions based on the search and filter parameters
    const conditions = {};
    if (search) {
      conditions.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
      ];
    }
    if (filter) {
      conditions.role = filter;
    }

    // Get the total count of matching users
    const totalCount = await user.countDocuments(conditions);

    // Fetch the paginated user data
    const users = await user.find(conditions)
      .skip(skip)
      .limit(limit);

    res.json({
      items: users,
      totalItems: totalCount,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch users" });
  }
};


