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

const Comments = () => {
    const {store} = useContext(Context);

    const [link_main, setLink_main] = useState(false);

    var style = document.querySelector('body').style;
    var style_strok = 'url()';
    style.setProperty('--background', style_strok);
    style.setProperty('--filter', 'blur(5px)');
    const [comment_post_get, setComment_post_get] = useState([])
    const [lov, setLov] = useState([])
    const [massComment, setMassComment] = useState<IComments[]>([]);

    useEffect(() => {
        async function ret_mass() {
            try {
                const response = await CommentService.fetchComments();
                console.log(response);
                let reversed = [...response.data].reverse();
                setMassComment(reversed);
            } catch (e) {
                console.log(e);
            }
        }

        ret_mass();
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
        <div className="commentarii">
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
                    {massComment.map((massComments) =>

                        <div key={massComments._id}>
                            <div className="username">{massComments.username}</div>
                            <div className="time">{massComments.time}</div>
                            <div className="contents">{massComments.content}</div>
                        </div>

                    )}

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