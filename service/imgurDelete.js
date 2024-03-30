import axios from "axios";
import ENV from '../config.js'
const imgurDelete = async (deletehash) => {
    try {
        const response = await axios.delete(`https://api.imgur.com/3/image/${deletehash}`, {
            headers: {
                'Authorization': `Bearer ${ENV.imgur_ACCESS_TOKEN}`
            }
        });
    } catch (error) {
        console.error('Error deleting image from Imgur:');
        throw error; // Propagate the error to handle it at the higher level
    }
}

export default imgurDelete;