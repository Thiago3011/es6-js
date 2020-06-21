// yarn add axios

import axios from 'axios';

class api {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);

        } catch (err) {
            console.warn('erro na API');
        }
    }
}


api.getUserInfo('diego3g');