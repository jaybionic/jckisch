import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function ImageGallery({ images }: { images: string[] }) {
  return (
    <Grid container spacing={2}>
      {images.map((src) => (
        <Grid key={src} size={{ xs: 6, sm: 4 }}>
          <Box component="a" href={src} target="_blank" rel="noopener" sx={{ display: 'block', lineHeight: 0 }}>
            <Box
              component="img"
              src={src}
              alt=""
              sx={{ width: '100%', objectFit: 'cover', borderRadius: 1 }}
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default ImageGallery;
