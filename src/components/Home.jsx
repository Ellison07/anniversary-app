import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Masonry from '@mui/lab/Masonry';
import { useNavigate } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

const itemData = [
  {
    img: './src/assets/Anniversary/july_16_2022.jpg',
    title: 'July-16-2022 ',
  },
  {
    img: './src/assets/Anniversary/Mar_3_2024.jpg',
    title: 'Mar-03-2024',
  },
  {
    img: './src/assets/Anniversary/Mar_10_24.jpg',
    title: 'Mar-10-2024',
  },
  {
    img: './src/assets/Anniversary/Mar_12_24.jpg',
    title: 'Mar-12-2024',
  },
  {
    img: './src/assets/Anniversary/May_28_2022.jpg',
    title: 'May-28-2022',
  },
  {
    img: './src/assets/Anniversary/Nov_4_2023.jpg',
    title: 'Nov-4-2023',
  },
  {
    img: './src/assets/Anniversary/Nov_12_2023.jpg',
    title: 'Nov-12-2023',
  },
  {
    img: './src/assets/Anniversary/Nov_13_2022.jpg',
    title: 'Nov-13-2022',
  },
  {
    img: './src/assets/Anniversary/Nov0_13_2023.jpg',
    title: 'Nov-13-2023',
  },
  {
    img: './src/assets/Anniversary/Oct_7_2023.jpg',
    title: 'Oct-07-2023',
  },
  {
    img: './src/assets/Anniversary/Sept_07_2022.jpg',
    title: 'Sept-07-2022',
  },
];

function ImageMasonry() {
  return (
    <Box sx={{ width: '100%', minHeight: 829 }}>
      <Masonry columns={{ xs: 2, sm: 3, md: 4 }} spacing={2}>
        {itemData.map((item, index) => (
          <div key={index}>
            <Label>{item.title}</Label>
            <img
              srcSet={`${item.img}`}
              src={`${item.img}?w=162&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  );
}

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Wellcome 
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Box sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box sx={{ padding: 2 }}>
              <Typography variant="h4" gutterBottom>
                Happy Anniversary to Us!
              </Typography>
              <Typography variant="body1" paragraph>
                Can you believe it's been another year already? Since July 7th, 2016, we've been creating beautiful memories together. Time flies when you're with the person who makes every moment special. From the little everyday joys to the big adventures, every memory with you is a treasure.
              </Typography>
              <Typography variant="body1" paragraph>
                Thank you for your endless love, your unwavering support, and for simply being you. You make my life brighter and my heart fuller. I look forward to many more years of laughter, love, and happiness together.
              </Typography>
              <Typography variant="body1" paragraph>
                Here's to us, to all we've accomplished since that wonderful day in 2016, and to the beautiful future ahead. I love you more with each passing day.
              </Typography>
              <Typography variant="h5" color="primary">
                Happy Anniversary!
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <ImageMasonry />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
