const main = async () => {

    const {MESSAGE} = process.env;
    const message = `Hello ${MESSAGE}`;
    console.log(message);
    return message;

}

export default main;