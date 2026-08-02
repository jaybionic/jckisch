import { useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { GooglePlayButton } from 'react-mobile-app-button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { getProjectBySlug } from '../data/projects';
import { extractAccentColor } from '../utils/color';
import { useColorMode } from '../context/ColorModeContext';
import ImageGallery from '../components/ImageGallery';
import NotFound from './NotFound';

function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const { mode, setAccentColor } = useColorMode();

  useEffect(() => {
    if (!project) {
      return;
    }
    setAccentColor(extractAccentColor(project.color));
    return () => setAccentColor(null);
  }, [project, setAccentColor]);

  if (!project) {
    return <NotFound />;
  }

  return (
    <>
      <Box
        sx={{
          height: 280,
          backgroundImage: project.image ? `url(${project.image})` : project.color,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Container maxWidth="md" sx={{ py: { xs: 6, md: 8 } }}>
        <Button component={RouterLink} to="/" startIcon={<ArrowBackIcon />} sx={{ mb: 3 }}>
          Back to projects
        </Button>

        <br/>

        <Typography variant="h3" component="h1" gutterBottom>
          {project.title}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {project.year} · {project.role}
        </Typography>
        <Typography variant="h6" component="p" color="text.secondary" sx={{ mb: 3 }}>
          {project.tagline}
        </Typography>

        <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap', mb: 4 }}>
          {project.tags.map((tag) => (
            <Chip key={tag} label={tag} />
          ))}
        </Stack>

        <Divider sx={{ mb: 4 }} />

        <Stack spacing={2} sx={{ mb: 4 }}>
          {project.description.map((paragraph) => (
            <Typography key={paragraph} variant="body1" color="text.secondary">
              {paragraph}
            </Typography>
          ))}
        </Stack>

        {(project.playStoreUrl || (project.links && project.links.length > 0)) && (
          <Stack
            direction="row"
            spacing={2}
            useFlexGap
            sx={{ flexWrap: 'wrap', alignItems: 'center', mb: project.gallery || project.sections ? 5 : 0 }}
          >
            {project.playStoreUrl && (
              <GooglePlayButton url={project.playStoreUrl} theme={mode} title="GET IT ON" width={190} height={64} />
            )}
            {project.links?.map((link) => (
              <Button key={link.label} variant="contained" href={link.href} target="_blank" rel="noopener">
                {link.label}
              </Button>
            ))}
          </Stack>
        )}

        {project.gallery && project.gallery.length > 0 && <ImageGallery images={project.gallery} />}

        {project.sections && project.sections.length > 0 && (
          <Stack spacing={5}>
            {project.sections.map((section, index) => (
              <Box key={section.title}>
                {index > 0 && <Divider sx={{ mb: 5 }} />}
                <Typography variant="h5" component="h2" gutterBottom sx={{ color: 'primary.main' }}>
                  {section.title}
                </Typography>
                <Stack spacing={2} sx={{ mb: section.gallery ? 3 : 0 }}>
                  {section.description.map((paragraph) => (
                    <Typography key={paragraph} variant="body1" color="text.secondary">
                      {paragraph}
                    </Typography>
                  ))}
                </Stack>
                {section.gallery && section.gallery.length > 0 && <ImageGallery images={section.gallery} />}
              </Box>
            ))}
          </Stack>
        )}
      </Container>
    </>
  );
}

export default ProjectDetail;
