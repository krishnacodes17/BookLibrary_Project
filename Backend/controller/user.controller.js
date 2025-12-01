import User from "../model/user.model.js";
import bcrypt from "bcrypt"

export const signup = async(req ,res)=>{
    try {
        const {fullName , email , PhoneNumber , password} = req.body;
        // console.log("req coming baby" , req.body)
        const user =await User.findOne({email})

        //  check user exits or not
        if(user){
            return res.status(400).json({message: "user already exists"})
        }

        const hashPassword = await bcrypt.hash(password,10)

        //  create new user 
        const createdUser = new User({
            fullName,
            email,
            PhoneNumber,
            password:hashPassword,
        })

        //  new user data save
       await createdUser.save()
        res.status(201).json({message:"user Created Successfully",user:{
            _id:createdUser._id,
            fullName:createdUser.fullName,
            email:createdUser.email
        }})

    } catch (error) {
        console.log(error)
    }
}



//  Login user 

export const login =async (req,res)=>{
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }

        return res.status(200).json({
            message: "Login successful",
            user: {
                _id: user._id,
                fullName: user.fullName,
                email: user.email,
            }, 
            
        });
       

    } catch (error) {
        console.log("error", error);
        return res.status(500).json({ message: "internal server error" });
    }
}