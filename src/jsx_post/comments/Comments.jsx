import React, {useState, useEffect} from 'react';
import "./style.sass"
import {comment} from "../../actions/comment";
import {comment_get} from "../../actions/commentGet";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {login_user} from "../../actions/login";


const Comments = () => {
    var style = document.querySelector('body').style;
    var style_strok = 'url()';
    style.setProperty('--background', style_strok);
    style.setProperty('--filter', 'blur(5px)');
    const [comment_post_get, setComment_post_get] = new useState([])
    const [lov, setLov] = new useState([])

    useEffect(()=>{
        async function ret_mass(){
            await comment_get();
            setComment_post_get(await JSON.parse(sessionStorage.getItem('get_comment')))
            console.log("AAAAAAAAAA")
        }
        ret_mass();
    },[lov]);

    const [comment_text, setComment_text] = useState('')
    const obj_locUS = localStorage.getItem('user')
    const json_pars = JSON.parse(obj_locUS);

console.log(comment_post_get)

    return (
        <div className="commentarii">
            <div className="main-commentarii">
                <div className="post-comments">

                    <p>Комментарий<br/>
                        <textarea onChange={e => {
                            setComment_text(e.target.value)
                        }} name="comment" cols="40" rows="3" value={comment_text}></textarea>
                    </p>
                    <p>
                        <button onClick={() => {
                            comment(json_pars.user.username, comment_text);setLov([]);
                        }}>Отправить
                        </button>
                        <input type="reset" value="Очистить"/>
                    </p>

                </div>
                <div className="get-Coments">
                    {comment_post_get.map((comment_post_gets) =>

                        <div key={comment_post_gets._id}>{comment_post_gets.username}</div>
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