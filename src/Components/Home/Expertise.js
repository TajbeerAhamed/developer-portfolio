import logo1 from '../../assets/HTML5_badge.png'
import logo2 from '../../assets/css3-icon.png'
import logo3 from '../../assets/456-4562295_library-of-javascript-icon-graphic-freeuse-png-files.png'
import logo4 from '../../assets/2000px-React-icon.svg_.webp'
import logo5 from '../../assets/expressjs-logo-text-serverside-runtime-system.jpg'
import logo6 from '../../assets/OIP.jpg'

const Feature = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="903f4a9e-7ac3-441c-9613-04c15fcc0a14"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#903f4a9e-7ac3-441c-9613-04c15fcc0a14)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">The</span>
            </span>{' '}
            areas of my profieciency
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            are enoromous...
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5 row-gap-6 mb-10 sm:grid-cols-3 lg:grid-cols-6">
          
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
              <img className='w-12' src={logo1} alt="" />
            </div>
          
          
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
              <img className='w-12' src={logo2} alt="" />
            </div>
          
          
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
              <img className='w-12' src={logo3} alt="" />
            </div>
          
          
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
              <img className='w-16' src={logo4} alt="" />
            </div>
          
          
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
              <img className='w-12' src={logo5} alt="" />
            </div>
          
          
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
              <img className='w-12' src={logo6} alt="" />
            </div>
          
          
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
              <img className='w-12' src='https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png' alt="" />
            </div>
          
          
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
              <img className='w-12' src='https://cdn.iconscout.com/icon/free/png-256/sass-226054.png' alt="" />
            </div>
          
          
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
              <img className='w-12' src='https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/tailwind-css.png' alt="" />
            </div>
          
          
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
              <img className='w-12' src='https://v5.getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png' alt="" />
            </div>
          
          
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
              <img className='w-12' src='https://www.technoscore.com/images/services/node-js-icon.png' alt="" />
            </div>
          
          
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
              <img className='w-12' src='https://tse4.mm.bing.net/th/id/OIP.6iSQRwwvlxEyym8nZbkC0AHaHa?pid=ImgDet&rs=1' alt="" />
            </div>
          
        </div>
        <div className="text-center">
          <a
            href="/"
            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Learn more
            <span className="ml-1 -mr-2">
              
            </span>
          </a>
        </div>
      </div>
    );
  };

export default Feature;