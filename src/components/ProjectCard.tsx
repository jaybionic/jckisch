import { Link as RouterLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import type { Project } from '../data/projects';
import {CardMedia} from "@mui/material";

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card variant="outlined" sx={{ height: '100%' }}>

      <CardActionArea
        component={RouterLink}
        to={`/projects/${project.slug}`}
        sx={{ height: '100%', alignItems: 'stretch', display: 'block' }}
      >
        <CardMedia sx={{ height: 220 }} image={project.image} />
        {/*<Box
          sx={{
            height: 140,
            backgroundImage: project.image ? `url(${project.image})` : project.color,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />*/}
        <CardContent>
          <Typography variant="overline" color="text.secondary">
            {project.year}
          </Typography>
          <Typography variant="h6" component="h3" gutterBottom>
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {project.tagline}
          </Typography>
          {/*<Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
            {project.tags.slice(0, 3).map((tag) => (
              <Chip key={tag} label={tag} size="small" />
            ))}
          </Stack>*/}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProjectCard;
