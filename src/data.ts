import { Company, ProjectID, type Project } from './components/ProjectSection';

import teamsSummary from './content/microsoft-teams-summary.txt?raw';
import amazonSummary from './content/amazon-seller-central-summary.txt?raw';
import wheelOfFortuneSummary from './content/gsn-wheel-of-fortune-slots-summary.txt?raw';
import videoBingoSummary from './content/gsn-video-bingo-summary.txt?raw';
import chefvilleSummary from './content/zynga-chefville-summary.txt?raw';
import cafeWorldSummary from './content/zynga-cafe-world-summary.txt?raw';

// TEAMS IMAGES
//import teams01 from './assets/teams/teams01.jpg';
//import teams02 from './assets/teams/teams02.jpg';
//import teams03 from './assets/teams/teams03.jpg';
import teams04 from './assets/teams/teams04.jpg';
import teams05 from './assets/teams/teams05.jpg';

// SELLER CENTRAL IMAGES
import sellerCentral01 from './assets/seller-central/seller-central01.jpg';
//import sellerCentral02 from './assets/seller-central/seller-central02.jpg';
//import sellerCentral03 from './assets/seller-central/seller-central03.jpg';

// WHEEL OF FORTUNE IMAGES
import wheelOfFortune01 from './assets/wheel-of-fortune/wheel-of-fortune01.jpg';
import wheelOfFortune02 from './assets/wheel-of-fortune/wheel-of-fortune02.jpg';
import wheelOfFortune03 from './assets/wheel-of-fortune/wheel-of-fortune03.jpg';

// VIDEO BINGO IMAGES
//import videoBingo01 from './assets/gsn-video-bingo/video-bingo01.jpg';
//import videoBingo02 from './assets/gsn-video-bingo/video-bingo02.jpg';
//import videoBingo03 from './assets/gsn-video-bingo/video-bingo03.jpg';

// CHEFVILLE IMAGES
//import chefville01 from './assets/zynga-chefville/chefville01.jpg';
//import chefville02 from './assets/zynga-chefville/chefville02.jpg';
//import chefville03 from './assets/zynga-chefville/chefville03.jpg';

// CAFE WORLD IMAGES
//import cafeWorld01 from './assets/zynga-cafe-world/cafe-world01.jpg';
//import cafeWorld02 from './assets/zynga-cafe-world/cafe-world02.jpg';
//import cafeWorld03 from './assets/zynga-cafe-world/cafe-world03.jpg';

export const professionalProjects: Project[] = [
    // MICROSOFT TEAMS
    {
    id: ProjectID.MicrosoftTeams,
    title: "Microsoft Teams",
    company: Company.Microsoft,
    role: "Software Engineer II",
    dates: "2020 - 2026",
    images: [
        teams04, 
        teams05,
    ],
    summary: teamsSummary,
    technologies: ["C++", "Windows", "macOS", "Direct3D", "Metal", "Copilot", "AI Agentic Coding"],
    },

    // AMAZON SELLER CENTRAL
    {
    id: ProjectID.AmazonSellerCentral,
    title: "Amazon Seller Central",
    company: Company.Amazon,
    role: "Software Development Engineer II",
    dates: "2017 - 2018",
    images: [
        sellerCentral01, 
    ],
    summary: amazonSummary,
    technologies: ["React", "TypeScript", "Redux", "CSS"],
    },

    // WHEEL OF FORTUNE SLOTS
    {
    id: ProjectID.GSNWheelOfFortune,
    title: "Wheel of Fortune Slots",
    company: Company.GSNGames,
    role: "Game Developer",
    dates: "2015 - 2017",
    images: [
        wheelOfFortune01, 
        wheelOfFortune02, 
        wheelOfFortune03,
    ],
    imageLayout: 'portrait',
    summary: wheelOfFortuneSummary,
    technologies: ["Unity3D", "C#", "iOS", "Android"],
    },

    // VIDEO BINGO
    {
    id: ProjectID.GSNVideoBingo,
    title: "Video Bingo",
    company: Company.GSNGames,
    role: "Game Developer",
    dates: "2014",
    summary: videoBingoSummary,
    technologies: ["Flash", "ActionScript 3"],
    },

    // CHEFVILLE
    {
    id: ProjectID.ZyngaChefville,
    title: "ChefVille",
    company: Company.Zynga,
    role: "Senior Software Engineer",
    dates: "2012 - 2014",
    summary: chefvilleSummary,
    technologies: ["Flash", "ActionScript 3", "PHP"],
    },

    // CAFE WORLD
    {
    id: ProjectID.ZyngaCafeWorld,
    title: "Cafe World",
    company: Company.Zynga,
    role: "Software Engineer",
    dates: "2011 - 2012",
    summary: cafeWorldSummary,
    technologies: ["Flash", "ActionScript 3", "PHP"],
    },
];

export const personalProjects: Project[] = [
    
];
