import { Company, ProjectID, type Project } from './components/ProjectSection';

import teamsSummary from './content/microsoft-teams-summary.txt?raw';

import teams01 from './assets/teams/teams01.jpg';
//import teams02 from './assets/teams/teams02.jpg';
//import teams03 from './assets/teams/teams03.jpg';
import teams04 from './assets/teams/teams04.jpg';

export const professionalProjects: Project[] = [
    // MICROSOFT TEAMS
    {
    id: ProjectID.Teams,
    title: "Microsoft Teams",
    company: Company.Microsoft,
    role: "Software Engineer II",
    dates: "2020 - 2026",
    images: [
        teams04, 
        teams01,
    ],
    summary: teamsSummary,
    technologies: ["C++", "Widnows", "macOS", "Direct3D", "Metal", "Copilot", "AI Agentic Coding"],
    },

    // AMAZON SELLER CENTRAL
    {
    id: ProjectID.AmazonSellerCentral,
    title: "Amazon Seller Central",
    company: Company.Amazon,
    role: "Software Development Engineer",
    dates: "2017 - 2018",
    summary: "Developed and maintained the Amazon Seller Central application.",
    technologies: ["React", "TypeScript", "Redux", "CSS"],
    },

    // WHEEL OF FORTUNE SLOTS
    {
    id: ProjectID.WheelOfFortune,
    title: "Wheel of Fortune Slots",
    company: Company.GSNGames,
    role: "Game Developer",
    dates: "2015 - 2017",
    summary: "Developed and maintained the Wheel of Fortune game.",
    technologies: ["Unity3D", "C#", "iOS", "Android"],
    },

    // CHEFVILLE
    {
    id: ProjectID.Chefville,
    title: "ChefVille",
    company: Company.Zynga,
    role: "Senior Software Engineer",
    dates: "2012 - 2014",
    summary: "Developed and maintained the ChefVille game.",
    technologies: ["Flash", "ActionScript 3", "PHP"],
    },
];

export const personalProjects: Project[] = [
    
];
