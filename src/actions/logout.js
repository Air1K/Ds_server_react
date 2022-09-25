
import axios from 'axios';

export const logout_user = async (email, password) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/login`, {
            email,
            password
        })
        // console.log(response.data);
        console.log(response.data);
        return response.data;
        // console.log(JSON.stringify(response.data.message));
    } catch (e) {
        await alert("Ошибка выхода");
        console.log(e)

    }

}