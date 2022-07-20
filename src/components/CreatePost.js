//import { useState } from "react"
import {firestore} from '../firebase' ;
import {useFormInput} from '../hooks'

function CreatePost() {
  const title = useFormInput('') ;
  const subTitle = useFormInput('');
  const content = useFormInput('');


  function handleSubmit(e) {
    e.preventDefault() ;
    console.log('title' , title) ;
    console.log('subTitle' , subTitle) ;
    console.log('content' , content) ;

    firestore.collection('posts').add({
      title: title.value ,
      content: content.value ,
      subTitle: subTitle.value ,
      createdAt: new Date() ,
    })
  }
    return <div className="crate-post">
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          {/* <input value={title} onChange={(e) =>setTitle(e.target.value)}/> */}
          <input {...title} ></input>
        </div>

        <div className="form-field">
          <label>sub title</label>
          {/* <input value={subTitle} onChange={(e) =>setSubTitle(e.target.value)}/> */}
          <input {...subTitle}></input>
        </div>

        <div className="form-field">
          <label>Content</label>
          <textarea {...content}></textarea>
        </div>

        <button className="Create-Post-btn">Create Post</button>

      </form>
    </div>
  }

  export default CreatePost