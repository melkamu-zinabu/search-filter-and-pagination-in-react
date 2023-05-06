import mongoose from "mongoose";
const Schema=mongoose.Schema;
const userschema=new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
      //  required:true,
        minlength:6,
    },
    // photo: {
    //     data: Buffer,
    //     contentType: String
    //   }
    // ,
    // booking:[{
    //     type:mongoose.Types.ObjectId,
    //     ref:"Booking"
    // }]
})
export default mongoose.model('User',userschema);


/////////////////////////////
//paginated serach,filter api
////////////////////////////


// export const getalluser=async(req,res,next)=>{
//     const page = parseInt(req.query.page || 1);
//     const pageSize = parseInt(req.query.pageSize || 5);

//     const startIndex = (page - 1) * pageSize;
//     const endIndex = startIndex + pageSize;

//     let totalItems, items;

//     // Check if search query is present
//     if (req.query.search) {
//       try {
//         totalItems = await user.countDocuments({
//           $or: [
//             { name: { $regex: req.query.search, $options: "i" } },
//             { email: { $regex: req.query.search, $options: "i" } },
//             { phone: { $regex: req.query.search, $options: "i" } },
//           ],
//         });
//         items = await user
//           .find({
//             $or: [
//               { name: { $regex: req.query.search, $options: "i" } },
//               { email: { $regex: req.query.search, $options: "i" } },
//               { phone: { $regex: req.query.search, $options: "i" } },
//             ],
//           })
//           .skip(startIndex)
//           .limit(endIndex - startIndex)
//           .exec();
//       } catch (err) {
//         return next();
//       }
//     } 
//     else {
//       try {
//         totalItems = await user.countDocuments();
//         items = await user.find().skip(startIndex).limit(endIndex - startIndex).exec();
//       } catch (err) {
//         return next();
//       }
//     }

//     // Check if filter query is present
//     if (req.query.filter) {
//       const filterValue = parseInt(req.query.filter);
//       items = items.filter((item) => item.age === filterValue);
//     }

//     return res.status(200).json({ items, totalItems });
// };


// //////////////////////////
// for the above frontend code it need more improvement it has no pagination
// ////////////////////////////////


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterTerm, setFilterTerm] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios.get(`/api/users?page=${page}&pageSize=${pageSize}&search=${searchTerm}&filter=${filterTerm}`);
//       setUsers(result.data.items);
//     };

//     fetchData();
//   }, [page, pageSize, searchTerm, filterTerm]);

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleFilter = (event) => {
//     setFilterTerm(event.target.value);
//   };

//   return (
//     <div>
//       <div>
//         <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearch} />
//         <select value={filterTerm} onChange={handleFilter}>
//           <option value="">Filter by...</option>
//           <option value="admin">Admin</option>
//           <option value="user">User</option>
//         </select>
//       </div>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Role</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id}>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.role}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UserList;
