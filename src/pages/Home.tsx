import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import EmailIcon from "@mui/icons-material/Email";
import {CONTACT_EMAIL} from "../configs/config.ts";

function Home() {
  return (
    <>
      <Box
        sx={{
          background: 'linear-gradient(180deg, rgba(109, 155, 195, 0.08) 0%, rgba(124,58,237,0) 60%)',
          py: { xs: 10, md: 14 },
        }}
      >
        <Container maxWidth="md">
          <Stack spacing={3} sx={{ alignItems: 'flex-start' }}>
            <Typography variant="h2" component="h1" sx={{ letterSpacing: '-0.02em' }}>
              Hi, I&apos;m Jason Kisch.
              <br />
              I build thoughtful, reliable software.
            </Typography>
            <Typography variant="h6" component="p" color="text.secondary" sx={{ maxWidth: 560 }}>
              I&apos;m a full-stack engineer with over 15 years of experience across the entire software development lifecycle.
              Here&apos;s a sample of things I&apos;ve worked on.
            </Typography>
            <Stack direction="row" spacing={2} sx={{ pt: 1 }}>
              <Button variant="contained" size="large" endIcon={<ArrowDownwardIcon />} href="#projects">
                View projects
              </Button>
              <Button variant="outlined" href={`mailto:${CONTACT_EMAIL}`} startIcon={<EmailIcon />}>
                Get in touch
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" id="projects" sx={{ py: { xs: 8, md: 10 } }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Selected projects
        </Typography>
        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid key={project.slug} size={{ xs: 12, sm: 6, md: 6 }}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Home;
