import type { ProjectPageContent } from '../components/ProjectPageIntroduction';

import TeamsIntroduction from './projects/microsoft-teams/00-introduction.mdx';
import ModularRenderPipeline from './projects/microsoft-teams/01-render-pipeline.mdx';
// import RenderOptimizations from './projects/microsoft-teams/02-render-optimizations.mdx';
// import teams01 from '../assets/teams/teams04.jpg';
// import teams02 from '../assets/teams/teams05.jpg';

export const projectDetails: Record<string, ProjectPageContent | undefined> = {
  teams: {
    introduction: TeamsIntroduction,
    media: {
      type: 'images',
      images: [],
    },
    sections: [
      {
        id: 'modular-render-pipeline',
        title: 'Modular Render Pipeline',
        content: ModularRenderPipeline,
        tags: ['C++', 'Software Architecture', 'Modular Design', 'Polymorphism', 'Cross-Platform', 'Multithreading', 'Metal', 'Direct3D'],
      },
      // {
      //   id: 'render-optimizations',
      //   title: 'Render Optimizations',
      //   content: RenderOptimizations,
      // }
    ],
  },
};

export function hasProjectDetails(projectId: string): boolean {
  return Boolean(projectDetails[projectId]?.introduction);
}
