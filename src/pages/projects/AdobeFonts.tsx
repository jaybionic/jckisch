import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ProjectHeader from '../../components/ProjectHeader';
import {getProjectBySlug} from '../../data/projects';
import NotFound from '../NotFound';
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const project = getProjectBySlug('adobe-fonts');

const tags = ['React', 'TypeScript', 'WebComponents', 'Vite', 'Docker', 'Python', 'FastAPI', 'OpenCV', 'LLM integration'];

//https://helpx.adobe.com/firefly/web/create-mood-boards/firefly-boards/generative-text-edit.html

function AdobeFonts() {
  if (!project) {
    return <NotFound/>;
  }

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

        <Stack spacing={5}>
          <Box>
            <Typography variant="h5" component="h2" gutterBottom sx={{color: 'primary.main'}}>
              Glyph Finder
            </Typography>
            <Typography variant="body1" color="text.secondary">
              A single-page tool that helps you find which of Adobe's fonts actually support a specific glyph? Users
              type any character (or a raw Unicode code point via a dedicated U+____ field) and get a grid of result
              cards, each drawing that requested character in the font's own style with a deep link to its family page.
              A "try these" strip samples ~14 glyphs (with shuffle), and searches are deep-linkable and shareable.
            </Typography>
            <Box sx={{ml: 6, mt: 2}}>
              <Typography variant="body2" color="text.secondary">
                <li>Unicode-range match client: capped at 500 fonts</li>
                <li>Client-side "tofu" detection: cards for fonts that claim support but render an empty box are removed, filtering false positives.</li>
                <li>Live glyph rendering</li>
                <li>Deep-linking</li>
              </Typography>
            </Box>

            <Button
              variant="contained"
              href="https://labs.fonts.adobe.com/projects/glyph-finder"
              target="_blank"
              rel="noopener"
              startIcon={<OpenInNewIcon/>}
              sx={{mt: 4}}
            >
              Glyph Finder
            </Button>
          </Box>

          <Box
            component="img"
            src={'/images/adobe/labs/glyph-finder.png'}
            alt=""
            sx={{width: '100%', objectFit: 'cover', borderRadius: 1, border: "2px solid #CCC"}}
          />
        </Stack>

        <Stack spacing={5} sx={{mt: 8}}>
          <Box>
            <Typography variant="h5" component="h2" gutterBottom sx={{color: 'primary.main'}}>
              Project Apex
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Apex lets you navigate through Adobe's font library by visual similarity. Adobe Research ML maps every
              font into a similarity space flattened to a 2D grid. Related typefaces sit next to each other and the font
              changes continuously as you move via a joystick. A minimap shows your location, undo/redo retraces your
              path, and the font name deep-links to its family page.
            </Typography>
            <Box sx={{ml: 6, mt: 2}}>
              <Typography variant="body2" color="text.secondary">
                <li>Predictive, speed-scaled font prefetching</li>
                <li>Font-space as a toroidal sparse grid</li>
                <li>Glyph-subsetted font loading</li>
                <li>GSAP joystick engine with inertia/throw physics</li>
              </Typography>
            </Box>

            <Button
              variant="contained"
              href="https://labs.fonts.adobe.com/projects/glyph-finder"
              target="_blank"
              rel="noopener"
              startIcon={<OpenInNewIcon/>}
              sx={{mt: 4}}
            >
              Project Apex
            </Button>
          </Box>
          <Box
            component="img"
            src={'/images/adobe/labs/apex-new.png'}
            alt=""
            sx={{width: '100%', objectFit: 'cover', borderRadius: 1, border: "2px solid #CCC"}}
          />
        </Stack>
      </Container>
    </>
  );
}

export default AdobeFonts;
