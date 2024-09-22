

const Header = ({id, className}) => {

    
  return (
    <header id={id} className={`bg-secondary-200 mt-[92px] ${className}`}>
      <div className="container">
        <div
          className="max-xl:min-h-screen xl:max-h-[800px] py-20 flex flex-col lg:flex-row items-center justify-between xl:justify-around gap-x-10"
        >
          {/* Content - Text & Button */}
          <div className="max-sm:flex-1 flex items-center">
            <div>
              <span className="text-primary-gradient text-3xl mb-[10px]">
                Hello, we're
              </span>
              <h1 className="text-white text-[60px] sm:text-[120px] leading-none font-bold mb-6 relative">
                <span className="text-primary-gradient">S</span>olo
                <br />
                <span className="sm:ml-14">Codes</span>
                {/* Slogan */}
                <span
                  className="slogan text-5xl font-bold capitalize opacity-5 absolute w-100 hidden sm:block hover:translate-y-[-5px] duration-700"
                >
                  business for every
                  <span className="text-primary-gradient text-[55px]">s</span>
                  olution
                </span>
              </h1>
              <h2 className="text-gray-200 text-sm sm:text-2xl mb-10">
                Marketing & Development
              </h2>
              <a
                href="#contact-us"
                className="primary-gradient text-white text-2xl py-3 px-12 rounded-full capitalize btn-animate"
              >
                Hire us
              </a>
            </div>
          </div>
          {/* Image */}
          <div className="hidden sm:block mt-12">
            <img src="assets/img/hero.svg" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
