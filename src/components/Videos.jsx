import { Stack, Box } from '@mui/system'
import React from 'react'
import {ChannelCard, VideoCard} from './index'

function Videos({ videos }) {
    console.log(videos)
  return (
    <Stack
        direction='row'
        flexWrap='wrap'
        justifyContent='start'
        alignItems='start'
        spacing={2}
    >
        {videos.map((item, idx) => (
            <Box key={idx}>
                {item.id.videoId && <VideoCard video={item} />}
                {item.id.channelId && <ChannelCard channelDetail={item}/>}
            </Box>
        ))}
    </Stack>
  )
}

export default Videos