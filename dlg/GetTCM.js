var config = require('../config');
const mongo = require('mongodb');

exports.do = async (req, userContext, execContext) => {

    let client;

    try {
        client = await mongo.MongoClient.connect(config.config.getMongoUrl(), { useUnifiedTopology: true, tlsCAFile: `rds-combined-ca-bundle.pem` });
        const db = client.db(config.dbName);

        let result = await db.collection(config.collections.items).find().toArray();

        return {tcm: result};

    } catch (err) {

        console.log(err);

        if (err && err.code) throw err;

        const msg = "Error in GEt TCM";

        logger.compute(cid, msg, "error");

        throw { code: 500, message: msg, cid: cid }

    }
    finally {
        if (client) client.close();
    }


    // return [
    //     { level: 1, code: "interfaces", name: "Interfaces & Mobility" },
    //     { level: 1, code: "iot", name: "IoT" },
    //     { level: 1, code: "integration", name: "Integration" },
    //     { level: 1, code: "analytics", name: "Analytics" },
    //     { level: 1, code: "compute", name: "Compute" },
    //     { level: 1, code: "storage", name: "Storage" },
    //     { level: 1, code: "productivity", name: "Productivity" },
    //     { level: 1, code: "security", name: "Security & Identity" },
    //     { level: 1, code: "network", name: "Networking" }
    // ]
} 