import React from "react";
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Grid,
    Chip,
    Stack,
} from "@mui/material";

const Post = (props) => {
    const {
        creator,
        title,
        message,
        tags,
        selectedFile,
        likeCount,
        _id,
        onSetId,
    } = props;

    const handleEdit = (e) => {
        e.preventDefault();
        onSetId(() => _id);
    };

    return (
        <Grid item xs={3}>
            <Card sx={{}}>
                <CardMedia
                    component="img"
                    height="230"
                    image={selectedFile}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {creator}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {message}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Stack direction="row" spacing={1}>
                        <Chip label={tags} />
                    </Stack>
                </CardContent>
                <CardActions
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <Button size="small">{likeCount} Like</Button>
                    <Button size="small" onClick={handleEdit}>
                        Edit
                    </Button>
                    <Button size="small">Delete</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Post;
