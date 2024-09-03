import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from "react-router-dom";
import { grey } from '../context/theme';

interface BlogItem {
    _id: string;
    name: string;
    news: number;
    date: string;
    image: string;
}

const Post: React.FC<BlogItem> = ({ _id, name, news, date, image }) => {
    return (
        <Card sx={{
            height: '100%', transition:
                'transform 0.2s',
            '&:hover': { transform: 'scale(1.05)' },
            backgroundColor: grey
        }}
            component={Link} to={`/blog/${_id}`}>


            {image && (
                <CardMedia
                    component="img"
                    image={image}
                    alt={name}
                    sx={{ height: 140 }}
                />
            )}


            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name || 'No Blog Name'}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    News Count: {news}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Date: {date}
                </Typography>
            </CardContent>


        </Card>
    )
}

export default Post