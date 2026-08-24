import { useCallback, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface LightboxProps {
  images: string[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const open = index !== null;
  const hasMultiple = images.length > 1;

  const goPrev = useCallback(() => {
    if (index === null) return;
    onNavigate((index - 1 + images.length) % images.length);
  }, [index, images.length, onNavigate]);

  const goNext = useCallback(() => {
    if (index === null) return;
    onNavigate((index + 1) % images.length);
  }, [index, images.length, onNavigate]);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') goPrev();
      if (event.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, goPrev, goNext]);

  if (index === null) {
    return null;
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen
      slots={{ transition: Fade }}
      slotProps={{
        paper: {
          sx: {
            bgcolor: 'rgba(0, 0, 0, 0.92)',
          },
        },
      }}
    >
      <IconButton
        onClick={onClose}
        aria-label="Close"
        sx={{ position: 'absolute', top: 12, right: 12, color: 'common.white', zIndex: 1 }}
      >
        <CloseIcon />
      </IconButton>

      {hasMultiple && (
        <IconButton
          onClick={goPrev}
          aria-label="Previous image"
          sx={{
            position: 'absolute',
            top: '50%',
            left: { xs: 4, sm: 16 },
            transform: 'translateY(-50%)',
            color: 'common.white',
          }}
        >
          <ChevronLeftIcon fontSize="large" />
        </IconButton>
      )}

      <Box
        onClick={onClose}
        sx={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: { xs: 2, sm: 6 },
        }}
      >
        <Box
          component="img"
          src={images[index]}
          alt=""
          onClick={(event) => event.stopPropagation()}
          sx={{
            maxHeight: '100%',
            maxWidth: '100%',
            objectFit: 'contain',
            borderRadius: 1,
          }}
        />
      </Box>

      {hasMultiple && (
        <IconButton
          onClick={goNext}
          aria-label="Next image"
          sx={{
            position: 'absolute',
            top: '50%',
            right: { xs: 4, sm: 16 },
            transform: 'translateY(-50%)',
            color: 'common.white',
          }}
        >
          <ChevronRightIcon fontSize="large" />
        </IconButton>
      )}

      {hasMultiple && (
        <Typography
          variant="body2"
          sx={{ position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)', color: 'common.white' }}
        >
          {index + 1} / {images.length}
        </Typography>
      )}
    </Dialog>
  );
}

export default Lightbox;
