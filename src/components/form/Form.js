import React, {useState, useEffect, useCallback} from 'react'
import {TextField, Button, Typography, Paper} from '@mui/material'
import useStyles from "./styles"
import FileBase from 'react-file-base64'
import {useSelector, useDispatch} from 'react-redux'
import {postPost} from '../redux/posts/postAction'
import { getOnePost, updateId, UpdatePost } from '../redux'

function Form() {
  const classes = useStyles();
  const initialPostData = {creator: '', title: '', message: '', tags: '', selectedFile: '',}
  const [postData, setPostData] = useState(initialPostData);
  let id = useSelector(status => status.id.id);
  let post = useSelector(status => status.id.data)

  // console.log(post);

  const dispatch = useDispatch();
 
  const handleChange = evt =>{
    setPostData(prev => {
      return {...prev, [evt.target.name]: evt.target.value}
    })
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (id!=0){
      dispatch(UpdatePost(id, postData))
      // dispatch(updateId(0))
    }else{
      dispatch(postPost(postData))
      // dispatch(updateId(0))
    }
    clear();
  }

  useEffect(()=>{
    if (id!=0){dispatch(getOnePost(id))}
  }, [id])

  useEffect(()=>{
    setPostData(post)
  }, [post])

  const clear = () => {setPostData(initialPostData);}

  return (
    <Paper className={classes.paper}>
      <form className={classes.form+" "+classes.root} autoComplete='off' noValidate onSubmit={handleSubmit}>
        <Typography variant='h6'>{id!==0? `Editing "${post.title}"`: 'Creating New Memory'}</Typography>
        <TextField variant='outlined' value={postData.creator} onChange={evt => handleChange(evt)} name="creator" label="Creator" fullWidth />
        <TextField variant='outlined' value={postData.title} onChange={evt => handleChange(evt)} name="title" label="Title" fullWidth />
        <TextField variant='outlined' value={postData.message} onChange={evt => handleChange(evt)} name="message" label="Message" fullWidth />
        <TextField variant='outlined' value={postData.tags} onChange={
          evt => setPostData(prev => {return {...prev, tags: evt.target.value.split(',')}})} name="tag" label="Tag" fullWidth />
        <div className={classes.fileInput}>
          <FileBase type='file' multiple={false} onDone={
            ({base64}) => setPostData(prev => {return {...prev, selectedFile: base64}})}></FileBase>
        </div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  )
}

export default Form