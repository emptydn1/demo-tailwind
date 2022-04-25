import React, { useEffect } from "react";
import { Container, Grid } from "@mui/material";
import Post from "components/Post";
import Form from "components/Form";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "redux/features/postSlice";
import { postsSelector } from "redux/selector";

const App = () => {
    const dispatch = useDispatch();
    const posts = useSelector(postsSelector);

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <Container
            maxWidth="false"
            sx={{
                marginTop: 10,
            }}
        >
            <Grid container spacing={5}>
                <Grid item xs={9}>
                    <Grid container spacing={1}>
                        {posts &&
                            posts.map((e, i) => <Post key={i + "1x"} {...e} />)}
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <Form />
                </Grid>
            </Grid>
        </Container>
    );
};

export default App;
