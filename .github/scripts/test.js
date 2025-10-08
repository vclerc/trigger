module.exports = async () => {

    const {MESSAGE} = process.env;
    const message = `Hello ${MESSAGE}`;
    console.log(message);
    return message;

}