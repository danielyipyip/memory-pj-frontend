import React, {useState} from "react";
import {AppBar, Container, Grow, Typography, Grid} from '@mui/material';
import Posts from "./components/posts/Posts.js"
import Form from "./components/form/Form.js"
import useStyles from './styles'

import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from "react";
import { getPost } from "./components/redux/posts/postAction";

import memory_img from './images/memories.png'

const App = () =>{
    const classes = useStyles();

    const dispatch = useDispatch();
    const posts = useSelector(state => state.post.posts)
    const id = useSelector(state => state.id.id)
    useEffect( ()=>{
        dispatch(getPost());
    }, [posts, id])

    return (
        <div>
        <Container max-width='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
                <img className={classes.image} src={memory_img} alt='memories' height={60}></img>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container className={classes.mainContainer} justify='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}><Posts /></Grid>
                        <Grid item xs={12} sm={4}><Form /></Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
            
        </div>
    )
}

export default App;