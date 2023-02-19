import React,{useState} from 'react'
import classes from './NewPost.module.css';
const NewPost = ({onCancel,onAddPost}) => {
  const [enteredBody, setEntredBody] = useState('Entre your message');
  const [enteredAuthor, setEnteredAuthor] = useState('Entre your message');
  
  function bodyChangeHandler(event){
    setEntredBody(event.target.value);
  }
  
  function authorChangeHandler(event){
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event){
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor
    }
    onAddPost(postData);
    onCancel()
  }
  return (
    <form className={classes.form} onSubmit = {submitHandler} >
        <p>
            <label htmlFor="name">Your Name</label>
            <input type="text" id='name' required onChange = {authorChangeHandler } />
        </p>
        <p>
            <label htmlFor="body">Text</label>
            <textarea id="body" required rows="3" onChange={bodyChangeHandler}></textarea>
        </p>
        <p className={classes.actions}>
          <button type='button' onClick={onCancel}>Cancel</button>
          <button>Submit</button>
        </p>
    </form>
  )
}

export default NewPost