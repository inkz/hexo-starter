exports.handler = async function(event, context) {
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
    return {
        statusCode: 200,
        body: JSON.stringify({message: "Hello World"})
    };
}
