import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Grid } from "@mui/material";
import Post from "components/Post";
import Form from "components/Form";

import { getPosts } from "redux/features/postSlice";
import { postsLoadingSelector, postsSelector } from "redux/selector";

const App = () => {
    const dispatch = useDispatch();
    const posts = useSelector(postsSelector);
    const loading = useSelector(postsLoadingSelector);
    const [idPost, setIdPost] = useState("");

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
                        {loading ? (
                            <h1>loading</h1>
                        ) : (
                            posts &&
                            posts.map((e, i) => (
                                <Post key={e._id} {...e} onSetId={setIdPost} />
                            ))
                        )}
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <Form idPost={idPost} onSetId={setIdPost} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default App;
