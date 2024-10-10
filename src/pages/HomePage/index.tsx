
import './HomePage.css';
import Button from '../../components/ui/Button';

const projects = [
  {
    name: 'Search Filter',
    image: 'path/to/project1-image.jpg',
    intro: 'Short intro for Project 1',
    link: '/search-filter'
  },
  {
    name: 'React Hook Form',
    image: 'path/to/project2-image.jpg',
    intro: 'Short intro for Project 2',
    link: '/react-hook-forms'
  },
  {
    name: 'React Playground',
    image: 'path/to/project2-image.jpg',
    intro: 'Practice React',
    link: '/react-playground'
  },
  {
    name: 'Product Page (React Query)',
    image: 'path/to/project2-image.jpg',
    intro: 'Product page with the implementation of React Query',
    link: '/products-page'
  },
  {
    name: 'Framer Motion',
    image: 'path/to/project2-image.jpg',
    intro: 'All Learning related to framer motion',
    link: '/framer-motion'
  },
  {
    name: 'React Query',
    image: 'path/to/project2-image.jpg',
    intro: 'tutorial on react query',
    link: '/react-query'
  },
  {
    name: 'Habit  Tracker',
    image: 'path/to/project2-image.jpg',
    intro: 'Habit tracker built with material ui and Redux Toolkit',
    link: '/redux-toolkit'
  },
  // Add more projects as needed
];

const HomePage = () => {
  return (
    <>    <div className="home-page">
      {projects.map((project, index) => (
        <div key={index} className="card">
          <img src={project.image} alt={project.name} className="card-image" />
          <div className="card-content">
            <h3>{project.name}</h3>
            <p>{project.intro}</p>
            <Button btnText='View Project'  className='custom-class' link={project.link}/>
            
          </div>
        </div>
      ))}
     
    </div>
    <div className='mt-3'>
     <Button btnText='View More' />
     </div>
     </>

  );
};

export default HomePage;
