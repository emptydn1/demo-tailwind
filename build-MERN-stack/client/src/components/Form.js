import React, { useEffect, useState } from "react";
import { Button, Typography, Box, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { createPost, updatePost } from "redux/features/postSlice";
import { postsFollowId } from "redux/selector";

const Form = ({ idPost, onSetId }) => {
    const dispatch = useDispatch();
    const postSpecific = useSelector(postsFollowId(idPost));
    const [postData, setPostData] = useState({
        creator: "",
        title: "",
        message: "",
        tags: "",
        selectedFile: "",
    });
    const { creator, title, message, tags } = postData;

    useEffect(() => {
        if (postSpecific) setPostData(postSpecific);
    }, [postSpecific]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (idPost) {
            dispatch(updatePost(postData));
            onSetId("");
            setPostData({
                creator: "",
                title: "",
                message: "",
                tags: "",
                selectedFile: "",
            });
        } else {
            dispatch(createPost(postData));
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "selectedFile") {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPostData((prev) => ({
                    ...prev,
                    [name]: reader.result,
                }));
            };
            reader.readAsDataURL(e.target.files[0]);
        } else {
            setPostData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Typography component="h1" variant="h5">
                Create Post
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
            >
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="creator"
                    onChange={handleChange}
                    value={creator}
                    label="creator"
                    id="creator"
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="title"
                    label="title"
                    onChange={handleChange}
                    value={title}
                    name="title"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="message"
                    label="message"
                    onChange={handleChange}
                    value={message}
                    id="message"
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="tags"
                    label="tags"
                    onChange={handleChange}
                    value={tags}
                    id="tags"
                />
                <input
                    type="file"
                    name="selectedFile"
                    id="selected-file"
                    onChange={handleChange}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Create
                </Button>
                <Button fullWidth type="reset" variant="contained">
                    Reset
                </Button>
            </Box>
        </Box>
    );
};

export default Form;
