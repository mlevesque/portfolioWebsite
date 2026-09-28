import type { ComponentType } from 'react';

import NativeVideoRendering from './projects/microsoft-teams/01-native-video-rendering.mdx';
import ModularRenderPipeline from './projects/microsoft-teams/02-render-pipeline.mdx';
import CrossPlatformRendering from './projects/microsoft-teams/03-cross-platform-support.mdx';

export const projectDetails: Record<string, ComponentType[] | undefined> = {
  teams: [
    NativeVideoRendering,
    ModularRenderPipeline,
    CrossPlatformRendering,
  ],
};

export function hasProjectDetails(projectId: string): boolean {
  return Boolean(projectDetails[projectId]?.length);
}
