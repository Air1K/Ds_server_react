import axios from 'axios';

export const comment = async (username, content) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/comment`, {
            username,
            content
        })
        await console.log(JSON.stringify(response.data.message));
        // document.location.href = "/login";
    } catch (e) {
        await alert("Ошибка, комментарий не создан");
        console.log(e)

    }

}