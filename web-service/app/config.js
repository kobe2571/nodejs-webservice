var config = module.exports;

config.server = {
    host: "localhost" || "127.0.0.1",
    port: "3000"
};

config.mongodb = {
    protocol: "mongo",
    host: "localhost" || "127.0.0.1",
    port: "27017",
    db_name: "testDB"
};