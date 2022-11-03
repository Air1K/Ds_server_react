import React, {useState, useEffect, useContext} from 'react';
import "./style.sass"
import {comment} from "../../actions/comment";
import {comment_get} from "../../actions/commentGet";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {login_user} from "../../actions/login";
import {IComments} from "../../models/IComments";
import CommentService from "../../services/CommentService";
import {Context} from "../../index";
import {Navigate} from "react-router-dom";
import {API_URL} from "../../http";

const Comments = () => {
    const {store} = useContext(Context);

    const [link_main, setLink_main] = useState(false);

    const [comment_post_get, setComment_post_get] = useState([])
    const [lov, setLov] = useState([])
    const [massComment, setMassComment] = useState([]);


    async function connectComments() {
        try {
            // const response = await CommentService.fetchComments();
            const eventSource = new EventSource(`${API_URL}/connect`)
            eventSource.onmessage = function (event) {
                const message = JSON.parse(event.data);
                // let reversed = [...message].reverse();
                setMassComment(prev => [message, ...prev]);
                console.log(message);
            }
            // console.log(response);
            // let reversed = [...response.data].reverse();
            // setMassComment(reversed);
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



    const obj_locUS = localStorage.getItem('user')
    const json_pars = JSON.parse(obj_locUS);

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