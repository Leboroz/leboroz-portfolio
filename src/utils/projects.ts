import project1 from '../assets/images/projects/project-1.jpg';
import project2 from '../assets/images/projects/project-2.jpg';
import project7 from '../assets/images/projects/project-7.jpg';
import project5 from '../assets/images/projects/project-5.jpg';

const arrOfProjects = [
  {
    image: project1,
    title: 'RentUrTech',
    languages: ['React-Redux', 'SASS', 'Ruby on Rails'],
    description:
      'A scalable e-commerce web application, "RentUrTech", built utilizing React and Ruby on Rails. This application provides a template for businesses to manage and reserve products for customers for specific periods.It enables user account creation, login, and product viewing.An additional administration feature allows business owners to manage their product offerings.',
    linkLiveVersion: 'https://renturtechrender.netlify.app/',
    linkToSource: 'https://github.com/Final-Capstone-Elite-Group/RentUrTechFrontend',
  },
  {
    image: project2,
    title: 'Budget app',
    languages: ['Ruby on rails', 'Bootstrap'],
    description:
      'This is a ruby on rails application that allows to create users and authenticates them using devise. When users are logged in the can create groups of transactions and see the total amount. Users can create transactions for one or many groups.',
    linkLiveVersion: 'https://rails-budget-app-fqfy.onrender.com/',
    linkToSource: 'https://github.com/Leboroz/budget-app',
  },
  {
    image: project7,
    title: 'Management Dashboard',
    languages: ['JavaScript', 'React', 'Node', 'Express', 'MongoDB'],
    description: 'A robust full-stack application that enables users to create and manage property listings. Once logged in, users are directed to a dashboard displaying property metadata. The application allows the sorting and filtering of properties based on price or name for enhanced usability.',
    linkLiveVersion: 'https://eloquent-smakager-c12ce0.netlify.app/',
    linkToSource: 'https://github.com/Leboroz/management-dashboard',
  },
  {
    image: project5,
    title: 'LATAM Annual Conference',
    languages: ['HTML', 'SASS', 'Javascript'],
    description: 'This is a mock conference website inspired by a LATAM annual conference using Cindy Shin\'s template.It is built using HTML, CSS, and Javascript.',
    linkLiveVersion: 'https://leboroz.github.io/latam-annual-conference/',
    linkToSource: 'https://github.com/Leboroz/latam-annual-conference',
  },
];

export default arrOfProjects;

