import React, {useState} from 'react';
import "./style.sass"
import {comment} from "../../actions/comment";
const Comments = () => {

    const [comment_text, setComment_text] = useState('')
    const obj_locUS = localStorage.getItem('user')
    const json_pars = JSON.parse(obj_locUS);
    return (
        <div className="commentarii">
            <div className="main-commentarii">
                <div className="post-comments">

                        <p>Комментарий<br/>
                            <textarea onChange={e=>{setComment_text(e.target.value)}} name="comment" cols="40" rows="3" value={comment_text}></textarea>
                        </p>
                        <p>
                            <button onClick={()=>{comment(json_pars.user.username, comment_text)}}>Отправить</button>
                            <input type="reset" value="Очистить"/>
                        </p>

                </div>
                <div className="get-Coments">
                    <div className="line-comments"/>

                </div>
            </div>
        </div>
);
};

export default Comments;