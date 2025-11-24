import mongoose from 'mongoose'

// Creating a funtion that connects the MoongDB Database to the form using Mongoose.
const connectDB = async () => {
    console.log('Incoming POST request');
    
    if (mongoose.connection.readyState >= 1) {
        console.log('Already connected to MongoDB');
        return;
    }
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(process.env.MONGODB_URI,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    serverSelectionTimeoutMS: 10000,
                });
            console.log('MongoDB connected successfully')
        }
    } catch (error) {
        console.log('Cannot connect to MongoDB', error.message);
        throw error; // This is so the route can catch the error
    }
}

export default connectDB;
