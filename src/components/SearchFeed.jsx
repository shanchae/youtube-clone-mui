import { Typography, Box, Stack} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { Videos, SideBar } from './index'

function SearchFeed() {
  const [videos, setVideos] = useState([])
  const { searchTerm } = useParams()

  useEffect(() => {

    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items))
  }, [searchTerm])

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row"}}}>
    <Box sx={{ height: { sx:'auto', md: '92vh', px:{sx: 0, md:2 }}}}>
      <SideBar/>
      <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff'}}>
        Copyright 2022
      </Typography>
    </Box>

    <Box
      p={2}
      sx={{overflowY:'auto', height: '90vh', flex: 2}}
    >
      <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white'}}>
          Search Results for: <span style={{ color: '#F31503'}}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos}/>
    </Box>
  </Stack>
    
  )
}

export default SearchFeed