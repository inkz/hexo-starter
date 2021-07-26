const fs = require('fs')

exports.handler = async function(event, context) {
    const envs = await fs.promises.readFile('/proc/self/environ', {encoding: 'utf8'});
    
    console.log(`testing testing 123 ${event.path}`);
    if (event.queryStringParameters.user) {
        return {
            statusCode: 200,
            body: JSON.stringify({message: `Hello ${event.queryStringParameters.user}`})
        };
    }
    if (event.queryStringParameters.food) {
        return {
            statusCode: 200,
            body: JSON.stringify({message: "MM Food!"})
        };
    }
    if (event.queryStringParameters.envs) {
        return {
            statusCode: 200,
            body: JSON.stringify({message: envs})
        };
    }
    return {
        statusCode: 200,
        body: JSON.stringify({message: "Hello World"})
    };
}
