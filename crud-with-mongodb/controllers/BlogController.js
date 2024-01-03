const blogSevice = require("../services/BlogService")

exports.getAllBlogs = async(req,res) =>{
try{
    const blogs = await blogSevice.getAllBlogs();
    res.json({data:blogs,status :"success"});
}catch(err){
    res.status(500).json({error : err.message})
}
}
exports.createBlog = async(req,res) =>{
try{
    const blog = await blogSevice.createBlog(req.body);
    res.json({data:blog,status :"success"});
}catch(err){
    res.status(500).json({error : err.message})
}
}
exports.getBlogById = async(req,res) =>{
try{
    const blog = await blogSevice.getBlogById(req.params.id);
    res.json({data:blog,status :"success"});
}catch(err){
    res.status(500).json({error : err.message})
}
}
exports.updateBlog = async(req,res) =>{
try{
    const blog = await blogSevice.updateBlog(req.params.id,req.body);
    res.json({data:blog,status :"success"});
}catch(err){
    res.status(500).json({error : err.message})
}
}
exports.deleteBlog = async(req,res) =>{
try{
    const blog = await blogSevice.deleteBlog(req.params.id);
    res.json({data:blog,status :"success"});
}catch(err){
    res.status(500).json({error : err.message})
}
};

