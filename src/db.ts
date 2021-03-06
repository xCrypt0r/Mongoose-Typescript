import mongoose from 'mongoose';

export default () => {
    let {
        MONGO_USER: user,
        MONGO_PASS: pass,
        MONGO_HOST: host,
        MONGO_PORT: port,
        MONGO_DATABASE: dababase
    } = process.env;

    pass = encodeURIComponent(pass);

    async function connect() {
        let url = `mongodb://${user}:${pass}@${host}:${port}/${dababase}`;

        try {
            await mongoose.connect(url, {
                keepAlive: true,
                useNewUrlParser: true,
                useFindAndModify: false,
                useUnifiedTopology: true,
                useCreateIndex: true
            });

            console.log('Connected to mongodb');
        } catch (e) {
            console.log('Failed to connect to mongodb: ');
            console.log(e);
        }
    }

    connect();
    mongoose.connection.on('disconnected', connect);
};
