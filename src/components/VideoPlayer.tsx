import { useRef, useState } from 'react';
import type { SxProps, Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

interface VideoPlayerProps {
  src: string;
  title?: string;
  poster?: string;
  autoPlay?: boolean;
  sx?: SxProps<Theme>;
}

function VideoPlayer({ src, title, poster, autoPlay = false, sx }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <Box
      onClick={togglePlay}
      sx={{
        position: 'relative',
        width: '100%',
        lineHeight: 0,
        borderRadius: 1,
        overflow: 'hidden',
        cursor: 'pointer',
        ...sx,
      }}
    >
      <Box
        component="video"
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        autoPlay={autoPlay}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        sx={{ width: '100%', display: 'block', borderRadius: 1 }}
      />
      {title && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            px: 2,
            py: 1,
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))',
            pointerEvents: 'none',
          }}
        >
          <Typography variant="subtitle2" sx={{ color: 'common.white', fontWeight: 600 }}>
            {title}
          </Typography>
        </Box>
      )}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: isPlaying ? 'transparent' : 'rgba(0, 0, 0, 0.35)',
          opacity: isPlaying ? 0 : 1,
          transition: 'opacity 0.2s ease, background-color 0.2s ease',
          '&:hover': { opacity: 1, bgcolor: 'rgba(0, 0, 0, 0.25)' },
        }}
      >
        <IconButton
          size="large"
          disableRipple
          sx={{
            bgcolor: 'primary.main',
            color: 'common.white',
            '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.7)' },
          }}
        >
          {isPlaying ? <PauseIcon fontSize="large" /> : <PlayArrowIcon fontSize="large" />}
        </IconButton>
      </Box>
    </Box>
  );
}

export default VideoPlayer;
