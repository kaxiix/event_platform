import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null};

export const connectToDatabase = async () => {
    if (cached.conn) return cached.connect;

    if(!MONGODB_URI) throw new Error('MONGODB URI IS MISSING')

        cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
            dbName: 'evently',
            bufferCommands: false,
        })

        cached.conn = await cached.promise;
        return cached.conn
}