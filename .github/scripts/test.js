module.exports = async ({github, context, core}) => {

    const {MESSAGE} = process.env;
    const message = `Hello ${MESSAGE}`;
    console.log(message);
    return message;

}