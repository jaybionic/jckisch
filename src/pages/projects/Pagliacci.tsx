import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import { GooglePlayButton } from 'react-mobile-app-button';
import ProjectHeader from '../../components/ProjectHeader';
import ImageGallery from '../../components/ImageGallery';
import { getProjectBySlug } from '../../data/projects';
import { useColorMode } from '../../context/ColorModeContext';
import NotFound from '../NotFound';

const project = getProjectBySlug('pagliacci');

const description = [
  'I was lead developer on the first release of the Pagliacci Android app, building the application from the ground up.',
  'The app runs on an MVVM architecture with RxJava handling reactive data flow and Firebase powering the backend. I also designed and implemented custom animations in the app, built on top of BBAD - an animation library I wrote myself to cut the boilerplate out of staggered and cascading UI motion.',
];

const tags = ['Android SDK', 'MVVM', 'RxJava', 'Firebase', 'Motion Design'];

const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.pagliacci.mario';

const gallery = [
  '/images/pagliacci/pagliacci-1.png',
  '/images/pagliacci/pagliacci-5.png',
  '/images/pagliacci/pagliacci-3.png',
];

function Pagliacci() {
  const { mode } = useColorMode();

  if (!project) {
    return <NotFound />;
  }

  return (
    <>
      <ProjectHeader project={project} />
      <Container maxWidth="md" sx={{ pb: 6}}>
        <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap', mb: 4 }}>
          {tags.map((tag) => (
            <Chip key={tag} label={tag} />
          ))}
        </Stack>

        <Divider sx={{ mb: 4 }} />

        <Stack spacing={2} sx={{ mb: 4 }}>
          {description.map((paragraph) => (
            <Typography key={paragraph} variant="body1" color="text.secondary">
              {paragraph}
            </Typography>
          ))}
        </Stack>

        <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: 'wrap', alignItems: 'center', mb: 5 }}>
          <GooglePlayButton url={playStoreUrl} theme={mode} title="GET IT ON" width={190} height={64} />
        </Stack>

        <ImageGallery images={gallery} />
      </Container>
    </>
  );
}

export default Pagliacci;
