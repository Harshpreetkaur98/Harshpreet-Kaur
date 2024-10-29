// WORK EXPERIENCE
import desktopEngineerImage from './Images-Netflix/University-of-Greenwich-logo-DE.png';
import clearingAmbassadorImage from './Images-Netflix/University-of-Greenwich-logo-Clearing.png';
import studentPrefectImage from './Images-Netflix/University-of-Greenwich-logo-SP.png';
import uogWis from './Images-Netflix/uogWis.png';
import headstarter from './Images-Netflix/Headstarter-AI.png';
import adventroz from './Images-Netflix/Adventroz.png';
// WORK EXPERIENCE CONTENT
import sweFellow from '../Content/Experience-Content/sweFellow'
import sdeAdventroz from '../Content/Experience-Content/sdeAdventroz';
import DesktopEngineer from '../Content/Experience-Content/DesktopEngineer';
import vp_uog from '../Content/Experience-Content/vp_uog';
import clearing from '../Content/Experience-Content/clearing';
import sp_sgnps from '../Content/Experience-Content/sp_sgnps';

// EDUCATION
import greenwich from './Images-Netflix/university-of-greenwich.jpg';
import sgnps from './Images-Netflix/School-logo.jpg';
// EDUCATION CONTENT
import sgnpsDesc from '../Content/Education-Content/sgnps';
import greenwichDesc from '../Content/Education-Content/greenwich';

// PROJECTS
import insurifyAI from './Images-Netflix/insurify.ai.png';
import simonsGame from './Images-Netflix/simonsGame.png';
// PROJECTS CONTENT
import insurifyaiDesc from '../Content/Project-Content/insurifyai';
import simonsGameDesc from '../Content/Project-Content/simons';



// CERTIFICATES
import udemy from './Images-Netflix/udemy-certification.jpg';
import barclays from './Images-Netflix/Barclays-certification.png';
// CERTIFICATES CONTENT
import barclaysDesc from '../Content/Certificate-Content/barclays';
import udemyDesc from '../Content/Certificate-Content/udemy';



export const experienceData = [
    {
        id : 1,
        title: 'Software Engineering Fellow',
        description: sweFellow,
        imageUrl: headstarter
    },

    {
        id : 2,
        title: 'Software Developer',
        description: sdeAdventroz,
        imageUrl: adventroz
    },

    {
        id : 3,
        title: 'Desktop Engineer',
        description: DesktopEngineer,
        imageUrl: desktopEngineerImage
    },

    {
        id : 4,
        title: 'Vice President',
        description: vp_uog,
        imageUrl: uogWis
    },

    {
        id : 5,
        title: 'Clearing, Welcome and Campus Ambassador',
        description: clearing,
        imageUrl: clearingAmbassadorImage

    },


    {
        id : 6,
        title: 'Student Prefect',
        description: sp_sgnps,
        imageUrl: studentPrefectImage
    }
];

export const educationData =[
    {
        id: 1,
        title: 'University of Greenwich',
        description: greenwichDesc,
        imageUrl: greenwich
    }, 
    {
        id: 2,
        title: 'Sri Guru Nanak Public School',
        description: sgnpsDesc,
        imageUrl: sgnps
    }
];

export const projects =[
    {
        id: 1,
        title: 'Insurify.ai',
        description: insurifyaiDesc,
        imageUrl: insurifyAI
    },
    {
        id: 2,
        title: 'Adventroz',
        description: sdeAdventroz,
        imageUrl: adventroz
    },
    {
        id: 3,
        title: 'Simons Game',
        description: simonsGameDesc,
        imageUrl: simonsGame
    }
];

export const certificate = [
    {
        id: 1,
        title: 'Udemy',
        description: udemyDesc,
        imageUrl: udemy
    },
    {
        id: 2,
        title: 'Barclays',
        description: barclaysDesc,
        imageUrl: barclays
    }
]

