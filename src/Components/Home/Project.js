import React from 'react';
import { useParams } from 'react-router-dom';
import img1 from '../../assets/Screenshots/Web capture_10-6-2022_19110_aurora-car-parts.firebaseapp.com.jpeg'
import img2 from '../../assets/Screenshots/screenshot-1 (2).jpeg'
import img3 from '../../assets/Screenshots/screenshot-1 (3).jpeg'
import img4 from '../../assets/Screenshots/screenshot-1 (4).jpeg'
import img5 from '../../assets/Screenshots/image (2).png'
import img6 from '../../assets/Screenshots/image (3).png'
import img7 from '../../assets/Screenshots/image (6).png'
import img8 from '../../assets/Screenshots/image (7).png'
import img9 from '../../assets/Screenshots/image (4).png'
import img10 from '../../assets/Screenshots/image (5).png'
import img11 from '../../assets/Screenshots/image (8).png'
import img12 from '../../assets/Screenshots/image (1).png'


const Project = () => {

  const {index} = useParams()

  const projects = [
    {
      index: 1,
      name: 'Aurora-car-parts',
      type: 'Manufacturer Website',
      stack: 'Full Stack',
      description: 'A full-stack project with a user login system enabled with firebase, Moreover, the frontend is bootstrapped with React and the backend server is created using node and express with the cloud database system MongoDB. The website has its admin panel and fully-secured user authorization system using a JWT token.',
      screenshot: [img1, img5, img6]
    },
    {
      index: 2,
      name: 'SunnySide Agency',
      type: 'landing Page',
      stack: 'Responsive',
      description: 'A fully responsive landing page for creative agencies created using HTML, CSS, Sass. Click below to learn more about the website.',
      screenshot: [img2, img7, img8]
    },
    {
      index: 3,
      name: 'Smart Photography',
      type: 'service provider',
      stack: 'Front end',
      description: 'A beautiful front-end project of a single-independent service provider created with React, The user authentication system was enabled with Firebase.',
      screenshot: [img3, img9, img10]
    },
    {
      index: 4,
      name: 'MArvelous Toy Store',
      type: 'Warehouse Website',
      stack: 'Full Stack',
      description: 'This is another full-stack project bootstrapped with React. The user authentication system is enabled with Firebase and a nice-built user experience created with tailwind CSS libraries. Moreover, the website has its backend server created with node, express, and MongoDB.',
      screenshot: [img4, img11, img12]
    },
  ]

  const details = projects.find(p => p.index === parseInt(index))
  console.log(details, index);

    return (
              <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-10 lg:grid-cols-2">
                  <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
                      <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          points=" 8,5 8,1 16,1 16,5"
                          strokeLinejoin="round"
                        />
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          points="9,15 1,15 1,5 23,5 23,15 15,15"
                          strokeLinejoin="round"
                        />
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          points="22,18 22,23 2,23 2,18"
                          strokeLinejoin="round"
                        />
                        <rect
                          x="9"
                          y="13"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          width="6"
                          height="4"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="max-w-xl mb-6">
                      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                        {details.name}
                        
                      </h2>
                      <p className="text-base text-gray-700 md:text-lg">
                        {details.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center -mx-4 lg:pl-8">
                    <div className="flex flex-col items-end px-3">
                      <img
                        className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                        src={details.screenshot[2]}
                        alt=""
                      />
                      <img
                        className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                        src={details.screenshot[1]}
                        alt=""
                      />
                    </div>
                    <div className="px-3">
                      <img
                        className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                        src={details.screenshot[0]}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          };

export default Project;