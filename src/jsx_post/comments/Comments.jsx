import React, {useState, useEffect} from 'react';
import "./style.sass"
import {comment} from "../../actions/comment";
import {comment_get} from "../../actions/commentGet";
import axios from "axios";


const Comments = () => {
    // window.comments_post = {}
    const clone_comment = [];
    let comment_get = async (clone_comment) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/commentget`);

            await console.log(JSON.stringify(response.data.message));
            // document.location.href = "/login";
            // console.log(response.data);
            clone_comment = response.data;

            return response.data;
        } catch (e) {
            await alert("Ошибка, комментарий не создан");
            console.log(e)

        }

    }
    console.log(comment_get())
    const [comment_text, setComment_text] = useState('')
    const obj_locUS = localStorage.getItem('user')
    const json_pars = JSON.parse(obj_locUS);


    function push_el() {
        // let content = [];
        // console.log( Object.getOwnPropertyNames(clone_comment));
        // var keys = Object.keys(clone_comment);
        //
        // for (let i in clone_comment) {
        //     const item = clone_comment[i];
        //     console.log(item.username)
        // //     // content.push(<li key={item.id}>{item.username}</li>);
        // //
        // }
        // for (var i = 0, len = keys.length; i < len; i++) {
        //     console.log(clone_comment[keys[i]]);
        // }
        // return content;
    }
    push_el();


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
                    {/*{clone_comment.map((clone_comments)=>*/}

                    {/*<div>{clone_comments.username}</div>*/}

                    {/*)}*/}

                    {/*{clone_comment[1].username}*/}
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