import { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import type { Project } from '../data/projects';
import { extractAccentColor } from '../utils/color';
import { useColorMode } from '../context/ColorModeContext';
import Container from "@mui/material/Container";

function ProjectHeader({ project }: { project: Project }) {
  const { setAccentColor } = useColorMode();

  useEffect(() => {
    setAccentColor(extractAccentColor(project.color));
    return () => setAccentColor(null);
  }, [project, setAccentColor]);

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
      <Container maxWidth="md">
        <Button component={RouterLink} to="/" startIcon={<ArrowBackIcon />} sx={{ mt: 4, mb: 3 }}>
          Back to projects
        </Button>

        <Typography variant="h3" component="h1" gutterBottom>
          {project.title}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {project.year} · {project.role}
        </Typography>
        <Typography variant="h6" component="p" color="text.secondary" sx={{ mb: 3 }}>
          {project.tagline}
        </Typography>
      </Container>
    </>
  );
}

export default ProjectHeader;
