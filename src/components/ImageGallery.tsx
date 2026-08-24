import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Lightbox from './Lightbox';

function ImageGallery({ images }: { images: string[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <Grid container spacing={2}>
        {images.map((src, index) => (
          <Grid key={src} size={{ xs: 6, sm: 4 }}>
            <ButtonBase
              onClick={() => setLightboxIndex(index)}
              sx={{ display: 'block', width: '100%', lineHeight: 0, borderRadius: 1 }}
            >
              <Box
                component="img"
                src={src}
                alt=""
                sx={{ width: '100%', objectFit: 'cover', borderRadius: 1 }}
              />
            </ButtonBase>
          </Grid>
        ))}
      </Grid>

      <Lightbox
        images={images}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </>
  );
}

export default ImageGallery;
