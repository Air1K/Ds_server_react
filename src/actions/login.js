// noinspection UnreachableCodeJS

import axios from 'axios';

export const login_user = async (email, password) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/login`, {
            email,
            password
        })
        // console.log(response.data);
         localStorage.setItem('user', JSON.stringify(response.data));
        return response.data;

        // console.log(JSON.stringify(response.data.message));
    } catch (e) {
        await alert("Ошибка авторизации");
        console.log(e)

    }

}