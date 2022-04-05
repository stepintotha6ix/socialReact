import React from "react";
import s from './MyPosts.module.css'
import Post from './post/Post'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from './../../../utils/validators/validators'
import { Textarea } from "../../command/FormsControls/FormsControls";


const MyPosts = (props) => {

  let postsElements =
    props.posts.map(post => <Post key={post.id} message={post.message} count={post.countLike} />)

  let addNewPost = (values) => {
    props.addPost(values.newPostText)
  }

  return (
    <div className={s.BlockPosts}>
      <AddPostReduxForm onSubmit={addNewPost}/>
      <div className={s.postItem}>
        {postsElements}
      </div>
    </div>
  )
}

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.message}>
        <Field className={s.textarea} component={Textarea}
         name={'newPostText'}
          
          placeholder={'Post message'}/>
      </div>
      <div>
        <button className={s.button}>Add post</button>
      </div>
    </form>

  )
}
const AddPostReduxForm = reduxForm({ form: 'ProfileAddPostForm' })(AddPostForm)

export default MyPosts