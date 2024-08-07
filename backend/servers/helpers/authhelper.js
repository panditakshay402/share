const bcrypt = require('bcrypt');

exports.hashPassword = async (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(10, (err, salt) => {
            if(err) {
                reject(err);
            }
            bcrypt.hash(password, salt, (err, hash) => {
                if(err) {
                    reject(err);
                }
                resolve(hash);
            }  );
        }   );  
    }   );          
}   ;


//decrypt password || compare password

exports.comparePassword = async (password, hashed) => {
    return bcrypt.compare(password, hashed);
};
