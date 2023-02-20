exports.dbName = 'invoice';
exports.collections = {
    invoices: 'invoices',
};

class Config {
    
    async load() {
        
        return;
    }
    
    getProps() {
        return {
            noCorrelationId: true, 
            noAuth: true, 
        }
    }
    
    getAuthorizedClientID() {
        return {
            
        }
    }

    getMongoUrl() {
        return `mongodb://${process.env.DB_USER}:${process.env.DB_PWD}@tcm-db.cluster-cg8sekuujcqh.eu-west-1.docdb.amazonaws.com:27017/?ssl=true&ssl_ca_certs=rds-combined-ca-bundle.pem&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false`
        return "mongodb://:" + this.mongoUser + ":" + this.mongoPwd + "@" + this.mongoEndpoint + "/admin?retryWrites=true&w=majority";
    }
} 


exports.config = new Config();