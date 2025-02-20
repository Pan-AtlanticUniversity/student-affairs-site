import { Box, Button, createSvgIcon, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, InputBase, Paper, Stack, TextField, Typography } from "@mui/material";
import { AdminNavBar, Blog, Calendar } from "../../components";
import { accent, dark, disabled, grey } from "../../context/theme";
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";
import React from "react";
import { BlogItem } from "../../components/Blog";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import AddIcon from '@mui/icons-material/Add';
import axios from "axios";

const Admins = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = React.useState(false);
  const [selectedBlog, setSelectedBlog] = useState<BlogItem | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | string | null>(null)

  const handleClose = () => {
    setSelectedBlog(null);
    setSelectedFile(null)
    setOpen(false);
  };

  const editClub = (blogItem: BlogItem) => {
    setSelectedBlog(blogItem);
    setOpen(true);
  }


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]); // Handle new file selection
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setSelectedBlog((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlogUpload = async (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData).entries());

    if (selectedBlog?._id) {
      try {
        await axios.patch<BlogItem>(
          `/api/v1/blog/${selectedBlog._id}`,
          {
            entity_type: 'blogs', ...formJson, image: selectedFile
          },
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
      } catch (error) {
        console.error("Error uploading blog:", error);
      }
    } else {
      try {
        await axios.post<BlogItem>('api/v1/blog',
          { entity_type: 'blogs', ...formJson }, // Body
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
      } catch (error) {
        console.error("Error uploading blog:", error);
      }
    }
    handleClose();
    window.location.reload();
  }

  const CustomFilterIcon = createSvgIcon(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <rect y="0.00170898" width="13.3333" height="2.75862" rx="1.37931" fill={disabled} />
      <rect y="8.62231" width="20" height="2.75862" rx="1.37931" fill={disabled} />
      <rect x="6.66666" y="17.2432" width="13.3333" height="2.75862" rx="1.37931" fill={disabled} /></svg>,
    'Menu',
  );

  useEffect(() => {
    if (selectedBlog?.image) {
      setSelectedFile(selectedBlog.image); // Set the URL if editing an existing blog
    }
  }, [selectedBlog]);

  return (
    <Stack minHeight={"100vh"}
      pl={3} pr={3}
      sx={{
        overflowY: "scroll", overflowX: "hidden", gap: { xs: 6, md: 10, lg: 12 }, alignItems: "center"
      }}>

      <AdminNavBar route="Admins" />

      <Stack sx={{ marginTop: { xs: "80px", md: "100px" }, width: '100%' }} pt={6} gap={3}>

        <Stack
          sx={{
            flexDirection: { xs: 'column', md: 'row' },
            gap: 2, alignItems:
              'center', justifyContent:
              'space-between'
          }}>

          <Typography variant="h4" fontFamily={"Barlow"} color={dark} textAlign={'center'}>
            Manage content on the site
          </Typography>

          <Paper
            component="form"
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: "10px",
              borderRadius: "20px",
              backgroundColor: grey,
              width: { xs: '100%', md: '50%' }
            }}
          >
            <IconButton sx={{ p: '10px' }} aria-label="search icon">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search blogs"
              inputProps={{ 'aria-label': 'search clubs' }}
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />

          </Paper>

        </Stack>

        <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between', zIndex: 1 }}>
          <Button
            endIcon={<AddIcon fontSize="small" />}
            sx={{ textTransform: 'capitalize', width: 'fit-content' }}
            variant={'contained'}
            onClick={() => setOpen(true)}
          >
            Create New Blog
          </Button>

          <Button endIcon={<CustomFilterIcon fontSize="small" />} sx={{ textTransform: 'capitalize', color: disabled, width: 'fit-content' }}>
            Sort by: Most recent
          </Button>
        </Stack>

      </Stack>

      <Box
        sx={{
          position: 'relative', // Ensure the ::before pseudo-element is positioned correctly
          overflowX: 'visible',
          zIndex: 0,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,  // Adjust to center vertically
            left: 0,    // Align to the right edge
            transform: 'translate(-50%, -50%)', // Center the circle
            width: "clamp(150px, 25%, 300px)",
            aspectRatio: "1",
            borderRadius: '50%',
            backgroundColor: accent,
            zIndex: -1,
          }
        }}>
        <Blog mode={'admin'} searchQuery={searchQuery} openEditMenu={(BlogItem) => editClub(BlogItem)} />
        <Calendar isAdmin={true} />
        <Box
          sx={{ width: "40vw", aspectRatio: "1", maxWidth: "300px", right: { xs: -50, sm: 35, md: -125 }, bottom: { xs: -75, sm: -90, md: -50, lg: -125 } }}
          bgcolor={"secondary.main"}
          position="absolute"
          zIndex={0}
          borderRadius={"50%"}
        />
        <Dialog
          fullWidth
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: 'form',
            onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
              handleBlogUpload(event);
            },
          }}
        >
          <DialogTitle>Edit Club Content</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              required
              id="name"
              name="name"
              label="Club title"
              type="text"
              fullWidth
              value={selectedBlog?.name}
              onChange={handleInputChange}
              sx={{ marginTop: 3 }}
            />
            <TextField
              required
              id="content"
              name="content"
              label="Club content"
              placeholder="Club content"
              type="text"
              multiline
              fullWidth
              value={selectedBlog?.content}
              onChange={handleInputChange}
              rows={8}
              sx={{ marginTop: 3 }}
            />
            <Button
              variant="outlined"
              component="label"
              sx={{ marginTop: 3, borderColor: disabled, textTransform: 'capitalize', paddingTop: 1.5, paddingBottom: 1.5 }}
              fullWidth
              endIcon={<FileUploadIcon />}
            >
              {typeof selectedFile === "string"
                ? selectedFile.split('/')[6]
                : (selectedFile?.name ?? "Upload file")}
              <input
                type="file"
                accept="image/*"
                name='image'
                id='image'
                onChange={handleFileChange}
                hidden
              />
            </Button>
            <TextField
              required
              id="author"
              name="author"
              label="Blog author"
              placeholder="Blog author"
              type="text"
              fullWidth
              value={selectedBlog?.author}
              onChange={handleInputChange}
              sx={{ marginTop: 3 }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant={'outlined'} sx={{ borderColor: 'secondary.main', textTransform: 'capitalize' }}>Cancel</Button>
            <Button type="submit" variant={'contained'} sx={{ backgroundColor: 'secondary.main', textTransform: 'capitalize' }}>Upload</Button>
          </DialogActions>
        </Dialog>
      </Box >


    </Stack >
  )
}

export default Admins