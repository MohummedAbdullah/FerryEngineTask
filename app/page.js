'use client';
import React from "react";
import styles from "./page.module.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';
import { styled,IconButton,CloseIcon } from '@mui/material';
import { Box, Grid, Typography, Card, CardContent, Rating, Divider, Select, MenuItem, InputAdornment, Checkbox, FormControlLabel } from '@mui/material';
import Filter from "@components/Filter";

export default function Home() {
  const [value, setValue] = React.useState(2);
  const [ferryvalue, setFerryValue] = React.useState(2);
  const [showFilter, setShowFilter] = React.useState(false)

  return (
    <main className={styles.main}>
      <Box className={styles.headerContainer}>
        <Box>
          <Box className={styles.heading}>Home</Box>
          <Box className={styles.subheading}>
            Discover the <b>57 ferry operators</b> we work with
          </Box>
        </Box>
        <button className={styles.button}>
          <ArrowForwardIosIcon sx={{ fontSize: 18, marginRight: 1 }} />
          Book Your Tickets
        </button>
      </Box>
      <Box>
      </Box>

      <Box className={styles.container}>
      <Box className={styles.filtersContainer}>
        <Box className={styles.filterItem}  onClick={()=>{
          setShowFilter(true)
        }}> <TuneIcon sx={{ marginRight: '0.1rem' }} /> 
        Filters</Box>
        <Box className={styles.filterItem}>Sort By: Reviews Number (High First)</Box>
        <Box className={styles.filterItem}> <SearchIcon sx={{marginRight: '0.1em'}} /> Search</Box>
      </Box>
      <Box className={styles.liveMapView}>
        Live Map View
      </Box>
    </Box>
    <Grid container spacing={2} sx={{ marginTop: 2 }}>
        <Grid item xs={4}>
          <Box className={styles.gridItem1}>
          <Filter showFilter={showFilter} onClose={setShowFilter} />
          </Box>
        </Grid>
        <Grid item xs={8}>
      <Box className={styles.gridItem2}>
        <Card className={styles.card}>
          <CardContent>
            <Box sx={{display:"flex", justifyContent:'space-between'}}>
            <Typography variant="h6" className={styles.cardHeading}>
              Blue Star Ferries
            </Typography>
            <Rating
              name="simple-controlled"
              value={ferryvalue}
              onChange={(event, newValue) => {
                setFerryValue(newValue);
              }}
            />
            </Box>
            <Box sx={{display:'flex',justifyContent:"space-between"}}>
              <Box sx={{display:'flex',flexDirection:'column'}}>
                <span style={{marginBottom:'6px'}}>
                  <b>Operates in</b>
                <p>Greece</p>
                </span>
                <span  style={{marginBottom:'6px'}}>
                  <p>Vessels Number: 8</p>
                <p>Ferry Types: 8 Normal</p>
                </span>
                <span  style={{marginBottom:'6px'}}>
                  <p>Popular Vessels</p>
                <p style={{color:"blue"}}>Blue Star Delos</p>
                </span>
              </Box>
            <Typography variant="body2" sx={{width:"70%"}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </Typography>
            </Box>
          </CardContent>
        </Card>
        <Card className={styles.card}>
          <CardContent>
            <Box sx={{display:"flex", justifyContent:'space-between'}}>
            <Typography variant="h6" className={styles.cardHeading}>
              Sea Jets
            </Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            </Box>
            <Box sx={{display:'flex',justifyContent:"space-between"}}>
              <Box sx={{display:'flex',flexDirection:'column'}}>
                <span style={{marginBottom:'6px'}}>
                  <b>Operates in</b>
                <p>Greece</p>
                </span>
                <span  style={{marginBottom:'6px'}}>
                  <p>Vessels Number: 8</p>
                <p>Ferry Types: 8 Normal</p>
                </span>
                <span  style={{marginBottom:'6px'}}>
                  <p>Popular Vessels</p>
                <p style={{color:"blue"}}>Blue Star Delos</p>
                </span>
              </Box>
            <Typography variant="body2" sx={{width:"70%"}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Grid>
      </Grid>
    </main>
  );
}
