import React from "react";
import s from './Post.module.css'

const Post = (props, likesCount) => {
  return (
    <div className={s.item}>
      <div className={s.upPost}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgxfDAMqK3mhyikTk6uhY8Bn3HdpjkMvuzLQ&usqp=CAU' />
        <div className={s.name}>
          Name
        </div>
      </div>
      <div className={s.message}>
        {props.message}
      </div>
      <div>
        <span>like</span> {props.count}
      </div>
    </div>
  )
}

export default Post