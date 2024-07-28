import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
    Container,
    Box,
    Typography,
    Button,
    Grid,
    Card,
    CardContent,
    CardMedia,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle
} from "@mui/material";

// Define the types for the blog and club items
interface BlogItem {
    _id: string;
    name: string;
    news: number;
    date: string;
    image: string;
}

interface ClubItem {
    _id: string;
    nameOfClub: string;
    school: string;
}

const AUTH_HEADER = {
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YTUzYWY1Njc1MjIyMGU1NmFhM2YwNyIsImlhdCI6MTcyMjEwNDU2NSwiZXhwIjoxNzIyMjc3MzY1fQ.cZICjRGna_qC5N8KibRi35Ew2RuVlqYXV2xtu7KfAkE`
    }
};


//basically id everywhere had an underscore _, had to change that
function Admin() {
    const [blogs, setBlogs] = useState<BlogItem[]>([]);
    const [clubs, setClubs] = useState<ClubItem[]>([]);
    const [newBlog, setNewBlog] = useState<Partial<BlogItem>>({});
    const [newClub, setNewClub] = useState<Partial<ClubItem>>({});
    const [editingBlog, setEditingBlog] = useState<Partial<BlogItem> | null>(null);
    const [editingClub, setEditingClub] = useState<Partial<ClubItem> | null>(null);

    // Fetch blogs and clubs
    useEffect(() => {
        const getBlogs = async () => {
            try {
                const res = await axios.get<BlogItem[]>("http://localhost:4001/api/v1/blog", AUTH_HEADER);
                setBlogs(res.data);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };

        const getClubs = async () => {
            try {
                const res = await axios.get<ClubItem[]>("http://localhost:4001/api/v1/club", AUTH_HEADER);
                setClubs(res.data);
            } catch (error) {
                console.error("Error fetching clubs:", error);
            }
        };

        getBlogs();
        getClubs();
    }, []);

    // CRUD operations for blogs
    const handleCreateBlog = async () => {
        try {
            const res = await axios.post("http://localhost:4001/api/v1/blog", newBlog, AUTH_HEADER);
            setBlogs([...blogs, res.data]);
            setNewBlog({});
        } catch (error) {
            console.error("Error creating blog:", error);
        }
    };

    const handleDeleteBlog = async (_id: string) => {
        try {
            if (!_id) throw new Error('Blog _ID is undefined');
            await axios.delete(`http://localhost:4001/api/v1/blog/${_id}`, AUTH_HEADER);
            setBlogs(blogs.filter(blog => blog._id !== _id));
        } catch (error) {
            console.error("Error deleting blog:", error);
        }
    };

    const handleUpdateBlog = async () => {
        try {
            if (editingBlog?._id) {
                const res = await axios.put(`http://localhost:4001/api/v1/blog/${editingBlog._id}`, editingBlog, AUTH_HEADER);
                setBlogs(blogs.map(blog => (blog._id === editingBlog._id ? res.data : blog)));
                setEditingBlog(null);
            }
        } catch (error) {
            console.error("Error updating blog:", error);
        }
    };

    // CRUD operations for clubs
    const handleCreateClub = async () => {
        try {
            const res = await axios.post("http://localhost:4001/api/v1/club", newClub, AUTH_HEADER);
            setClubs([...clubs, res.data]);
            setNewClub({});
        } catch (error) {
            console.error("Error creating club:", error);
        }
    };

    const handleUpdateClub = async () => {
        try {
            if (editingClub?._id) {
                const res = await axios.put(`http://localhost:4001/api/v1/club/${editingClub._id}`, editingClub, AUTH_HEADER);
                setClubs(clubs.map(club => (club._id === editingClub._id ? res.data : club)));
                setEditingClub(null);
            }
        } catch (error) {
            console.error("Error updating club:", error);
        }
    };

    const handleDeleteClub = async (_id: string) => {
        try {
            await axios.delete(`http://localhost:4001/api/v1/club/${_id}`, AUTH_HEADER);
            setClubs(clubs.filter(club => club._id !== _id));
        } catch (error) {
            console.error("Error deleting club:", error);
        }
    };

    return (
        <Container maxWidth="xl" sx={{ mt: 10 }}>
            <Box sx={{ textAlign: 'center', mt: 10 }}>
                <Typography variant="h4" component="h1">
                    Add , Edit and Delete Content on the site! <span style={{ color: "#ec407a" }}>PAU!</span>
                </Typography>
                <Typography variant="body1" sx={{ mt: 3 }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, assumenda? Repellendus, iste corrupti? Tempore laudantium repellendus accusamus accusantium sed architecto odio, nisi expedita quas quidem nesciunt debitis dolore non aspernatur praesentium assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam consequatur!
                </Typography>
                <Link to="/">
                    <Button variant="contained" color="secondary" sx={{ mt: 3 }}>
                        Back
                    </Button>
                </Link>
            </Box>


            {/* Blog Section */}
            <Box sx={{ mt: 5 }}>
                <Typography variant="h5">Blogs</Typography>
                <Box sx={{ mb: 3 }}>
                    <TextField
                        label="Blog Name"
                        value={newBlog.name || ""}
                        onChange={(e) => setNewBlog({ ...newBlog, name: e.target.value })}
                        sx={{ mr: 2 }}
                    />
                    <TextField
                        label="News Count"
                        type="number"
                        value={newBlog.news || ""}
                        onChange={(e) => setNewBlog({ ...newBlog, news: parseInt(e.target.value) })}
                        sx={{ mr: 2 }}
                    />
                    <TextField
                        label="Date"
                        type="date"
                        value={newBlog.date || ""}
                        onChange={(e) => setNewBlog({ ...newBlog, date: e.target.value })}
                        InputLabelProps={{ shrink: true }}
                        sx={{ mr: 2 }}
                    />
                    <TextField
                        label="Image URL"
                        value={newBlog.image || ""}
                        onChange={(e) => setNewBlog({ ...newBlog, image: e.target.value })}
                        sx={{ mr: 2 }}
                    />
                    <Button variant="contained" onClick={handleCreateBlog}>Add Blog</Button>
                </Box>
                <Grid container spacing={4}>
                    {blogs.map((item) => (
                        <Grid item xs={12} md={3} key={item._id}>
                            <Card sx={{ height: '100%', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' }, backgroundColor: 'background.paper' }}>
                                {item.image && (
                                    <CardMedia
                                        component="img"
                                        image={item.image}
                                        alt={item.name}
                                        sx={{ height: 140 }}
                                    />
                                )}
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.name || 'No Blog Name'}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        News Count: {item.news}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Date: {item.date}
                                    </Typography>
                                    <Button variant="contained" color="primary" onClick={() => {console.log("Deleting blog with ID:", item._id); 
                                        setEditingBlog(item)}}>
                                        Edit
                                    </Button>
                                    <Button variant="contained" color="secondary" onClick={() => {
                                        console.log("Deleting blog with ID:", item._id); // Add this line
                                        handleDeleteBlog(item._id);
                                    }}>
                                        Delete
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Edit Blog Dialog */}
            <Dialog open={!!editingBlog} onClose={() => setEditingBlog(null)}>
                <DialogTitle>Edit Blog</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Blog Name"
                        value={editingBlog?.name || ""}
                        onChange={(e) => setEditingBlog({ ...editingBlog, name: e.target.value })}
                        sx={{ mr: 2 }}
                        fullWidth
                    />
                    <TextField
                        label="News Count"
                        type="number"
                        value={editingBlog?.news || ""}
                        onChange={(e) => setEditingBlog({ ...editingBlog, news: parseInt(e.target.value) })}
                        sx={{ mr: 2 }}
                        fullWidth
                    />
                    <TextField
                        label="Date"
                        type="date"
                        value={editingBlog?.date || ""}
                        onChange={(e) => setEditingBlog({ ...editingBlog, date: e.target.value })}
                        InputLabelProps={{ shrink: true }}
                        sx={{ mr: 2 }}
                        fullWidth
                    />
                    <TextField
                        label="Image URL"
                        value={editingBlog?.image || ""}
                        onChange={(e) => setEditingBlog({ ...editingBlog, image: e.target.value })}
                        sx={{ mr: 2 }}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setEditingBlog(null)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleUpdateBlog} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Club Section */}
            <Box sx={{ mt: 5 }}>
                <Typography variant="h5">Clubs</Typography>
                <Box sx={{ mb: 3 }}>
                    <TextField
                        label="Club Name"
                        value={newClub.nameOfClub || ""}
                        onChange={(e) => setNewClub({ ...newClub, nameOfClub: e.target.value })}
                        sx={{ mr: 2 }}
                    />
                    <TextField
                        label="School"
                        value={newClub.school || ""}
                        onChange={(e) => setNewClub({ ...newClub, school: e.target.value })}
                        sx={{ mr: 2 }}
                    />
                    <Button variant="contained" onClick={handleCreateClub}>Add Club</Button>
                </Box>
                <Grid container spacing={4}>
                    {clubs.map((item) => (
                        <Grid item xs={12} md={3} key={item._id}>
                            <Card sx={{ height: '100%', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' }, backgroundColor: 'background.paper' }}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.nameOfClub || 'No Club Name'}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        School: {item.school}
                                    </Typography>
                                    <Button variant="contained" color="primary" onClick={() => {console.log("Editing club with ID:", item._id);
                                         setEditingClub(item)}}>
                                        Edit
                                    </Button>
                                    <Button variant="contained" color="secondary" onClick={() => {console.log("Deleting club with ID:", item._id); handleDeleteClub(item._id)}}>
                                        Delete
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Edit Club Dialog */}
            <Dialog open={!!editingClub} onClose={() => setEditingClub(null)}>
                <DialogTitle>Edit Club</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Club Name"
                        value={editingClub?.nameOfClub || ""}
                        onChange={(e) => setEditingClub({ ...editingClub, nameOfClub: e.target.value })}
                        sx={{ mr: 2 }}
                        fullWidth
                    />
                    <TextField
                        label="School"
                        value={editingClub?.school || ""}
                        onChange={(e) => setEditingClub({ ...editingClub, school: e.target.value })}
                        sx={{ mr: 2 }}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setEditingClub(null)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleUpdateClub} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
}

export default Admin;
