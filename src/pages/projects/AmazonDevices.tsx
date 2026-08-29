import {useState} from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import ButtonBase from '@mui/material/ButtonBase';
import ProjectHeader from '../../components/ProjectHeader';
import Lightbox from '../../components/Lightbox';
import {getProjectBySlug} from '../../data/projects';
import NotFound from '../NotFound';
import VideoPlayer from "../../components/VideoPlayer.tsx";

const project = getProjectBySlug('amazon-devices');

const tags = ['Android SDK', 'Node.js', 'Socket.io', 'Alexa', 'Rapid Prototyping', 'User testing'];

const echoSpotDescription = [
  'I built the end-to-end UX before the hardware existed - first as a to-scale model running on a tablet, then ported onto production units once they arrived, all from a single shared codebase.',
  'I designed and built Fast Scroll, a navigation model for flying through long lists on Echo Spot’s small circular screen: a light swipe moves one item at a time, a harder swipe drops into a free-scroll mode that moves through the whole list. To support the prototype, I also wrote a Node.js/Socket.io remote control tool that could drive a dozen devices at once during stakeholder demos, with live tuning of parameters.',
];

const echoSpotSyncd = '/images/amazon/amzn-spot-syncd.jpg';
const echoSpotCtrl = '/images/amazon/amzn-spot-remote.png';

const fireTvDescription = [
  'I prototyped and user tested multiple competing models for a full UI and UX overhaul of the Fire TV interface.',
];

const fireTvImage = '/images/amazon/amzn-firetv.png';

const fireTabletDescription = [
  'I developed the "For You" carousel that replaced the old Recents rail with a more personalized surface, and prototyped early explorations of Alexa on a touch-first device.',
];

const fireTabletGrid = [
  '/images/amazon/amzn-tablet-foryou-1.png',
  '/images/amazon/amzn-tablet-foryou-2.png',
  '/images/amazon/amzn-tablet-skills-1.png'
];

// Every image on the page, in the order it appears, so the lightbox can
// navigate through all of them regardless of how each section is laid out.
const allImages = [
  echoSpotSyncd,
  echoSpotCtrl,
  fireTvImage,
  ...fireTabletGrid
];

function AmazonDevices() {
  if (!project) {
    return <NotFound />;
  }

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const openImage = (src: string) => setLightboxIndex(allImages.indexOf(src));

  return (
    <>
      <ProjectHeader project={project} />
      <Container maxWidth="md" sx={{ pb: 6 }}>
        <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap', mb: 4 }}>
          {tags.map((tag) => (
            <Chip key={tag} label={tag} />
          ))}
        </Stack>

        <Divider sx={{ mb: 4 }} />

        <Box>
          <Typography variant="h5" component="h2" gutterBottom sx={{ color: 'primary.main' }}>
            Echo Spot
          </Typography>
          <Stack spacing={2} sx={{ mb: 3 }}>
            {echoSpotDescription.map((paragraph) => (
              <Typography key={paragraph} variant="body1" color="text.secondary">
                {paragraph}
              </Typography>
            ))}
          </Stack>


          <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
            <VideoPlayer src="/videos/amzn-spot-domains.mp4" title="Domains" />
            <VideoPlayer src="/videos/amzn-spot-fastscroll.mp4" title="Fast Scroll" />
          </Stack>

          <ButtonBase
            onClick={() => openImage(echoSpotSyncd)}
            sx={{ display: 'block', width: '100%', lineHeight: 0, borderRadius: 1, mb: 2 }}
          >
            <Box component="img" src={echoSpotSyncd} alt="" sx={{ width: '100%', objectFit: 'cover', borderRadius: 1 }} />
          </ButtonBase>

          <ButtonBase
            onClick={() => openImage(echoSpotCtrl)}
            sx={{ display: 'block', width: '100%', lineHeight: 0, borderRadius: 1, mb: 2 }}
          >
            <Box component="img" src={echoSpotCtrl} alt="" sx={{ width: '100%', objectFit: 'cover', borderRadius: 1 }} />
          </ButtonBase>

        </Box>

        <Divider sx={{ my: 5 }} />

        <Box>
          <Typography variant="h5" component="h2" gutterBottom sx={{ color: 'primary.main' }}>
            Fire TV
          </Typography>
          <Stack spacing={2} sx={{ mb: 3 }}>
            {fireTvDescription.map((paragraph) => (
              <Typography key={paragraph} variant="body1" color="text.secondary">
                {paragraph}
              </Typography>
            ))}
          </Stack>

          <ButtonBase
            onClick={() => openImage(fireTvImage)}
            sx={{ display: 'block', width: '100%', lineHeight: 0, borderRadius: 1 }}
          >
            <Box component="img" src={fireTvImage} alt="" sx={{ width: '100%', objectFit: 'cover', borderRadius: 1 }} />
          </ButtonBase>
        </Box>

        <Divider sx={{ my: 5 }} />

        <Box>
          <Typography variant="h5" component="h2" gutterBottom sx={{ color: 'primary.main' }}>
            Fire Tablet
          </Typography>
          <Stack spacing={2} sx={{ mb: 3 }}>
            {fireTabletDescription.map((paragraph) => (
              <Typography key={paragraph} variant="body1" color="text.secondary">
                {paragraph}
              </Typography>
            ))}
          </Stack>

          <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
            {fireTabletGrid.map((src) => (
              <ButtonBase
                key={src}
                onClick={() => openImage(src)}
                sx={{ display: 'block', width: '50%', lineHeight: 0, borderRadius: 1 }}
              >
                <Box component="img" src={src} alt="" sx={{ width: '100%', objectFit: 'cover', borderRadius: 1 }} />
              </ButtonBase>
            ))}
          </Stack>
        </Box>

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

export default AmazonDevices;
