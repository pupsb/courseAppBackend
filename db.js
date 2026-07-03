import mongoose, { Schema } from "mongoose"
mongoose.connect("mongodb+srv://iromnao60_db_user:8kdn4QFe7nRf8RF7@cluster1.71avjfq.mongodb.net/courseapp")
    .then(() => console.log("Successfully connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));

const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema({
    email: {type: String,unique:true},
    password: String,
    firstName: String,
    lastName: String,

});
const adminSchema =new Schema({
     email: {type: String,unique:true},
    password: String,
    firstName: String,
    lastName: String,
});
const courseSchema =new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId

});
const purchaseSchema =new Schema({
    userId: ObjectId,
    courseId: ObjectId
});

const userModel = mongoose.model("User", userSchema);
const adminModel = mongoose.model("Admin", adminSchema);
const courseModel = mongoose.model("Course", courseSchema);
const purchaseModel = mongoose.model("Purchase", purchaseSchema);

export  {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}