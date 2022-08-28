import axios from 'axios';

export const registration = async (name, email, username, password) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/autorization`, {
            name,
            email,
            username,
            password
        })
        console.log(JSON.stringify(response.data.message))
    }
    catch (e) {
        console.log(e)
    }

}