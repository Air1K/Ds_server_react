import axios from 'axios';

export const registration = async (name, email, username, password) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/registration`, {
            name,
            email,
            username,
            password
        })
        await console.log(JSON.stringify(response.data.message));
        document.location.href = "/login";
    } catch (e) {
        await alert("Ошибка регистрации, возможно этот emal уже зарегистрирован");
        console.log(e)

    }

}