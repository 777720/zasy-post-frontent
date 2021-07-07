const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

const prefixRE = /^ZASY_APP_/

const env = {};



module.exports = class ServiceEnv {
    run(mode = 'development') {
        const env = dotenv.parse(fs.readFileSync(path.resolve(__dirname, `../.env.${mode}`)))
        Object.keys(env).forEach(key => {
            if (prefixRE.test(key) || key === 'NODE_ENV') {
                env[key] = JSON.stringify(env[key])
            } else {
                Reflect.deleteProperty(env, key)
            }
        })
    }
}



