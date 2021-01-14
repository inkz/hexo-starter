exports.handler = async function(event, context) {
    console.log(`testing testing 123 ${event.path}`);
    return {
        statusCode: 200,
        body: JSON.stringify({message: "Hello World"})
    };
}
