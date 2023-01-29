import project1 from '../assets/images/projects/project-1.jpg';
import project2 from '../assets/images/projects/project-2.jpg';
import project3 from '../assets/images/projects/project-3.jpg';
import project5 from '../assets/images/projects/project-5.jpg';

const arrOfProjects = [
  {
    image: project1,
    title: 'RentUrTech',
    languages: ['React-Redux', 'SASS', 'Ruby on Rails'],
    description:
      'This is a React application part of a full-stack project called "RentUrTech". The main goal of this project is to provide users with an environment to reserve a specific product for a set amount of time. Thus, in this application users can create an account, can log in, and can see all the added equipment or the details of one. They will be required to log in to manage their own reservations. For creating and destroying equipment, the user needs a proper role. Feel free to take this project and modify it for your own business use!',
    linkLiveVersion: 'https://renturtech.netlify.app/',
    linkToSource: 'https://github.com/Final-Capstone-Elite-Group/RentUrTechFrontend',
  },
  {
    image: project2,
    title: 'Budget app',
    languages: ['Ruby on rails', 'Bootstrap', '+1'],
    description:
      'This is a ruby on rails application that allows to create users and authenticates them using devise. When users are logged in the can create groups of transactions and see the total amount. Users can create transactions for one or many groups.',
    linkLiveVersion: 'https://rails-budget-app-fqfy.onrender.com/',
    linkToSource: 'https://github.com/Leboroz/budget-app',
  },
  {
    image: project3,
    title: 'Pollution App',
    languages: ['React-Redux', 'SASS', '+1'],
    description:
      'This is a design for a mobile app that fetches from an pollution API and displays the data. Built with React-Redux and SASS.',
    linkLiveVersion: 'https://leboroz-ballhead.netlify.com ',
    linkToSource: 'https://github.com/Leboroz/ballhead-app',
  },
  {
    image: project5,
    title: 'LATAM Annual Conference',
    languages: ['HTML/CSS', 'SASS', 'Javascript'],
    description: 'This is a mock conference website inspired by a LATAM annual conference using Cindy Shin\'s template.It is built using HTML, CSS, and Javascript.',
    linkLiveVersion: 'https://leboroz.github.io/latam-annual-conference/',
    linkToSource: 'https://github.com/Leboroz/latam-annual-conference',
  },
];

export default arrOfProjects;

