import axios from "axios";
import dotenv from 'dotenv';
dotenv.config();
import chalk from "chalk";

const imgurUpload = async (file) => {
    try {
        const response = await axios.post('https://api.imgur.com/3/image', file.buffer, {
            headers: {
                'Authorization': `Bearer ${process.env.imgur_ACCESS_TOKEN}`,
                'Content-Type': file.mimetype //
            }
        });
        const image = {
            id: response.data.data.id,
            link: response.data.data.link,
            deletehash: response.data.data.deletehash
        }
        return image;
    } catch (error) {
        console.error('Error uploading image to Imgur:', error);
        throw error;
    }
}

export default imgurUpload