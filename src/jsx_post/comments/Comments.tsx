import React, {useState, useEffect, useContext} from 'react';
import "./style.sass"
import CommentService from "../../services/CommentService";
import {Context} from "../../index";
import {API_URL} from "../../http";

const Comments = () => {
    const {store} = useContext(Context);
    const [massComment, setMassComment] = useState([]);


    async function connectComments() {
        try {
            const eventSource = new EventSource(`${API_URL}/connect`)
            eventSource.onmessage = function (event) {
                const message = JSON.parse(event.data);
                setMassComment(prev => [message, ...prev]);
                console.log(message);
            }
        } catch (e) {
            console.log(e);
        }
    }

    async function get_comments() {
        try {
            const response = await CommentService.fetchComments();
            console.log(response);
            let reversed = [...response.data].reverse();
            setMassComment(reversed);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        console.log("Сработал useEffect")
        get_comments();
        connectComments();
    }, []);

    const [comment_text, setComment_text] = useState('')

    async function PostComment() {
        try {
            await store.commentPush(store.user.id, comment_text);

        } catch (e) {
            console.log(e);
        }
    }



    return (
        <div className="container__">
            <div className="main-commentarii">
                <div className="post-comments">

                    <p>Комментарий<br/>
                        <textarea onChange={e => {
                            setComment_text(e.target.value)

                        }} name="comment"// cols="40" rows="3"
                                  value={comment_text}>

                        </textarea>
                    </p>
                    <p>
                        <button onClick={() => {
                            PostComment();
                        }}>Отправить
                        </button>
                        <input type="reset" value="Очистить"/>
                    </p>

                </div>
                <div className="get-Coments">
                    {   massComment ? (
                        massComment.map((massComments) =>

                        <div key={massComments.time}>
                            <div className="username">{massComments.username}</div>
                            <div className="time">{massComments.time}</div>
                            <div className="contents">{massComments.content}</div>
                        </div>

                    ))
                    :
                        (<div>Комментарии пусты</div>)
                    }

                    {/*{comment_post_get[1].username}*/}
                    {/*{clone_comment.length}*/}
                    <div className="line-comments"/>
                    <div className="comments_get">
                        <div className="name_comm">
                            {/*{comment_get().then((value => value[0].username))}*/}
                        </div>
                        <div className="time_comm">

                        </div>
                        <div className="content_comm">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comments;