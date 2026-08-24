import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ProjectHeader from '../../components/ProjectHeader';
import {getProjectBySlug} from '../../data/projects';
import NotFound from '../NotFound';
import {useState} from "react";
import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";
import Box from "@mui/material/Box";
import Lightbox from "../../components/Lightbox.tsx";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const project = getProjectBySlug('xbox');

const description = [
  'For the Xbox One launch, I led the technical side of a 3-hour takeover of around 15 large-scale screens in Times Square. Each billboard was owned by a different operator with its own specs - some driven by Flash or video files, others by web pages - so I owned the spec sheet for every screen and coordinated the team to deliver the right asset format to each. We consulted with R/GA in New York to help guide and validate the approach.',
  'Beyond a set of countdown timers and Flash based loops built for the event, I concepted and built the Gamerpic Shoutout Tower: a mobile site where patrons signed in with their Xbox gamertag (validated against their live Xbox Live account) and picked a gamerpic to associate with their name. Submissions cascaded down a stack of screens, growing to full size on the bottom display - a simple concept that drew over 900 participants during the 3-hour event.',
];

const tags = ['JavaScript', 'PHP', 'AJAX', 'Flash', 'Xbox Live API'];

const links = [
  {label: 'Times Square recap video', href: 'https://www.youtube.com/watch?v=Lq2QMViNLxc'},
];

const gallery = [
  '/images/xbox/xbox-01.jpg',
  '/images/xbox/xbox-05.jpg',
  '/images/xbox/xbox-08.jpg',
];

// Every image on the page, in the order it appears, so the lightbox can
// navigate through all of them regardless of how they're laid out below.
const allImages = [
  '/images/xbox/xbox-03.jpg',
  ...gallery,
  '/images/xbox/xbox-ts-mobile.png',
  '/images/xbox/xbox-10.jpg',
  '/images/xbox/xbox-11.jpg',
  '/images/xbox/xbox-16.jpg',
];

function Xbox() {
  if (!project) {
    return <NotFound/>;
  }

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <ProjectHeader project={project}/>
      <Container maxWidth="md" sx={{pb: 6}}>
        <Stack direction="row" spacing={1} useFlexGap sx={{flexWrap: 'wrap', mb: 4}}>
          {tags.map((tag) => (
            <Chip key={tag} label={tag}/>
          ))}
        </Stack>

        <Divider sx={{mb: 4}}/>

        <Stack spacing={2} sx={{mb: 4}}>
          {description.map((paragraph) => (
            <Typography key={paragraph} variant="body1" color="text.secondary">
              {paragraph}
            </Typography>
          ))}
        </Stack>

        <Stack direction="row" spacing={2} useFlexGap sx={{flexWrap: 'wrap', alignItems: 'center', mb: 5}}>
          {links.map((link) => (
            <Button key={link.label}
                    variant="contained"
                    href={link.href}
                    startIcon={<OpenInNewIcon />}
                    target="_blank"
                    rel="noopener"
            >
              {link.label}
            </Button>
          ))}
        </Stack>



        <Typography variant="h5" component="h2" gutterBottom sx={{ color: 'primary.main', mt: 4 }}>
          Gamerpic tower
        </Typography>
        <ButtonBase
          onClick={() => setLightboxIndex(allImages.indexOf('/images/xbox/xbox-ts-mobile.png'))}
          sx={{display: 'block', width: '100%', lineHeight: 0, borderRadius: 1, mb: 2}}
        >
          <Box
            component="img"
            src={'/images/xbox/xbox-ts-mobile.png'}
            alt=""
            sx={{width: '100%', objectFit: 'cover', borderRadius: 1}}
          />
        </ButtonBase>

        <Stack direction="row" spacing={2} sx={{mb: 2}}>

            <ButtonBase
              onClick={() => setLightboxIndex(allImages.indexOf('/images/xbox/xbox-10.jpg'))}
              sx={{display: 'block', width: '50%', lineHeight: 0, borderRadius: 1}}
            >
              <Box
                component="img"
                src={'/images/xbox/xbox-10.jpg'}
                alt=""
                sx={{width: '100%', objectFit: 'cover', borderRadius: 1}}
              />
            </ButtonBase>
            <ButtonBase
              onClick={() => setLightboxIndex(allImages.indexOf('/images/xbox/xbox-11.jpg'))}
              sx={{display: 'block', width: '50%', lineHeight: 0, borderRadius: 1}}
            >
              <Box
                component="img"
                src={'/images/xbox/xbox-11.jpg'}
                alt=""
                sx={{width: '100%', objectFit: 'cover', borderRadius: 1}}
              />
            </ButtonBase>

        </Stack>
        <ButtonBase
          onClick={() => setLightboxIndex(allImages.indexOf('/images/xbox/xbox-16.jpg'))}
          sx={{display: 'block', width: '100%', lineHeight: 0, borderRadius: 1}}
        >
          <Box
            component="img"
            src={'/images/xbox/xbox-16.jpg'}
            alt=""
            sx={{width: '100%', objectFit: 'cover', borderRadius: 1}}
          />
        </ButtonBase>

        <Typography variant="h5" component="h2" gutterBottom sx={{ color: 'primary.main', mt: 8 }}>
          Times Square photos
        </Typography>

        <ButtonBase
          onClick={() => setLightboxIndex(allImages.indexOf('/images/xbox/xbox-03.jpg'))}
          sx={{display: 'block', width: '100%', lineHeight: 0, borderRadius: 1, mb: 2}}
        >
          <Box
            component="img"
            src={'/images/xbox/xbox-03.jpg'}
            alt=""
            sx={{width: '100%', objectFit: 'cover', borderRadius: 1}}
          />
        </ButtonBase>

        <Grid container spacing={2} sx={{mb: 2}}>
          {gallery.map((src) => (
            <Grid key={src} size={{xs: 6, sm: 4}}>
              <ButtonBase
                onClick={() => setLightboxIndex(allImages.indexOf(src))}
                sx={{display: 'block', width: '100%', lineHeight: 0, borderRadius: 1}}
              >
                <Box
                  component="img"
                  src={src}
                  alt=""
                  sx={{width: '100%', objectFit: 'cover', borderRadius: 1}}
                />
              </ButtonBase>
            </Grid>
          ))}
        </Grid>

        <Lightbox
          images={allImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      </Container>
    </>
  );
}

export default Xbox;
