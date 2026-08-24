import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ProjectHeader from '../../components/ProjectHeader';
import ImageGallery from '../../components/ImageGallery';
import { getProjectBySlug } from '../../data/projects';
import NotFound from '../NotFound';

const project = getProjectBySlug('adobe-fonts');

const tags = ['React', 'TypeScript', 'WebComponents', 'Vite', 'Docker', 'Python', 'FastAPI', 'OpenCV', 'LLM integration'];

const sections = [
  {
    title: 'Labs',
    description: ['I built...'],
    gallery: [] as string[],
  },
  {
    title: 'OpenType features',
    description: ['I built...'],
    gallery: [] as string[],
  },
  {
    title: 'Copy space detection',
    description: ['I built...'],
    gallery: [] as string[],
  },
  {
    title: 'Prototyping tools',
    description: ['I built...'],
    gallery: [] as string[],
  },
];

const links = [
  { label: 'Live demo', href: '#' },
  { label: 'Source', href: '#' },
];

function AdobeFonts() {
  if (!project) {
    return <NotFound />;
  }

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

        <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: 'wrap', alignItems: 'center', mb: 5 }}>
          {links.map((link) => (
            <Button key={link.label} variant="contained" href={link.href} target="_blank" rel="noopener">
              {link.label}
            </Button>
          ))}
        </Stack>

        <Stack spacing={5}>
          {sections.map((section, index) => (
            <Box key={section.title}>
              {index > 0 && <Divider sx={{ mb: 5 }} />}
              <Typography variant="h5" component="h2" gutterBottom sx={{ color: 'primary.main' }}>
                {section.title}
              </Typography>
              <Stack spacing={2} sx={{ mb: section.gallery.length ? 3 : 0 }}>
                {section.description.map((paragraph) => (
                  <Typography key={paragraph} variant="body1" color="text.secondary">
                    {paragraph}
                  </Typography>
                ))}
              </Stack>
              {section.gallery.length > 0 && <ImageGallery images={section.gallery} />}
            </Box>
          ))}
        </Stack>
      </Container>
    </>
  );
}

export default AdobeFonts;
