import User from "../models/User"
import bcrypt from "bcryptjs"
export const getAllUser=async(req , res , next)=>{
    
    let users
    try{
        users= await User.find()
    }catch(e){  
        return next(e)
    }

    if(!users){
       return res.status(500).json({message:"unexpected Error"})
    }

    return res.status(200).json({users})
}


export const signup=async(req , res , next)=>{
    const {name,email,password}= req.body
    
    if(!name,name.trim()==="",!password,password.trim()==="",!email,email.trim()===""){
        res.status(422).json({message:"Invalid Input"})
    }
    let hashPassword = bcrypt.hashSync(password)
    let user;
    
    try {
        user = new User({name,email,password:hashPassword})
        user =await user.save()
    } catch (e) {
        return next(e)
    }

    if(!user){
        return res.status(500).json({message:"unexpected Error"})
    }

    return  res.status(201).json({user})
}

export const updateUser=async(req , res , next)=>{
    const id = req.params.id ;
    const {name,email,password}= req.body
    
    if(!name,name.trim()==="",!password,password.trim()==="",!email,email.trim()===""){
        res.status(422).json({message:"Invalid Input"})
    }
    let hashPassword = bcrypt.hashSync(password)
    let user;
    
    try {
        user = await User.findByIdAndUpdate(id,{
            name,email,password:hashPassword
        })
    } catch (e) {
        return next(e)
    }

    if(!user){
        return res.status(500).json({message:"unexpected Error"})
    }

    return  res.status(201).json({message:"update sucsessfully"})
}

export const deleteUser =async(req , res , next)=>{
    const id = req.params.id ;
    
    try {
        user = await User.findByIdAndDelete(id)
    } catch (e) {
        return next(e)
    }

    return  res.status(201).json({message:"deleted sucsessfully"})
}

export const login =async(req , res , next)=>{
    const {email,password}= req.body
    
    if(!password,password.trim()==="",!email,email.trim()===""){
        res.status(422).json({message:"Invalid Input"})
    }
    let excestingUser
    try {
        excestingUser = await User.findOne({email})
    } catch (e) {
        return next(e)
    }
    if(!excestingUser){
        return res.status(404).json({message:"not found"})
    }

    const isPasswordCorrect = bcrypt.compareSync(password,excestingUser.password)
    if(!isPasswordCorrect){
        return res.status(400).json({message:"not correct"})
    }
    return res.status(200).json({message:"login sucsessfull"})
}

