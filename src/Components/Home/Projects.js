import { Link } from "react-router-dom";
import img1 from '../../assets/Screenshots/swap.png'
import img2 from '../../assets/Screenshots/take-a-trip.png'
import img3 from '../../assets/Screenshots/learning mates.png'


const Projects = () => {


  const projects = [
    {
      index: 1,
      name: 'Swap',
      type: 'Resell Website of Mobile Phone',
      stack: 'Full Stack',
      description: 'A full stack project of Reselling MobilePhone created using MERN stack. Click below to learn more about the website.',
      screenshot: img1
    },
    {
      index: 2,
      name: 'Take A Trip',
      type: 'Travel Website',
      stack: 'Responsive',
      description: 'A full stack project of Travel Website created using MERN stack. Click below to learn more about the website.',
      screenshot: img2
    },
    {
      index: 3,
      name: 'Learning Mates',
      type: 'Learning Platform Website',
      stack: 'Front end',
      description: 'A front project for Learning Different Courses created using React. Click below to learn more about the website.',
      screenshot: img3
    },
    
  ]

    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <h1 className="my-3 mb-10 text-center text-4xl  text-blue-600 font-bold">My Projects</h1>
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          
          {projects.map(p => <div key={p.index} className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
              src={p.screenshot}
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <a
                  href="/"
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title="traveling">
                  {p.type}
                </a>
                <span className="text-gray-600"> — {p.stack}</span>
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Visit the East"
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                {p.name}
              </a>
              <p className="mb-2 text-gray-700">
                {p.description} 
              </p>
              <Link to={`/project/${p.index}`}
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                See More
              </Link>
            </div>
          </div>)}
        </div>
      </div>
    );
  };

  export default Projects;