import axios from 'axios';

export let comment_get = async () => {
    try {
        const response = await axios.get(`http://localhost:5000/api/commentget`);

        await console.log(JSON.stringify(response.data.message));
        // document.location.href = "/login";
        // console.log(response.data);
        comment_get = response.data;
        return response.data;
    } catch (e) {
        await alert("Ошибка, комментарий не создан");
        console.log(e)

    }

}