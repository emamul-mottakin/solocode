import Navbar from "../components/Navbar"
import Header from "../components/Header"


export const meta = () => {
  return [
    { title: "Solo Codes" },
  ];
};

export default function Index() {

  
  return <div>
    {/* Nav bar */}
    <Navbar />

    {/* hero section  */}
    <Header id="home" /> 

    {/* about us section */}
    <section
      id="about-us"
      className="w-full py-20 bg-secondary-200 flex items-center justify-center flex-col"
    >
      {/* section title */}
      <div
        className="container flex items-center justify-center flex-col gap-10 mb-10"
      >
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-5xl text-white capitalize font-bold mb-10">ABOUT</h2>
          <div className="absolute z-10 mt-10">
            <div
              className="w-52 h-1 rounded bg-secondary-200 flex flex-col justify-center items-center"
            >
              <div
                className="h-full w-20 rounded bg-primary-100 shadow-custom"
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* about us content - img and text */}
      <div className="container">
        <div
          className="w-full grid gap-8 items-center lg:grid-cols-2 md:grid-cols-1"
        >
          {/* image */}
          <div className="w-full">
            <img src="assets/img/team.svg" alt="" className="w-full" />
          </div>
          {/* contect - text & button */}
          <div className="w-full flex flex-col gap-4 p-5 items-center">
            <h2 className="text-white font-bold text-2xl capitalize">Who we are</h2>
            <p className="text-gray-300 my-4 text-start">
              At Solo Code, we are a dedicated digital agency specializing in
              digital marketing, Meta marketing, and web development services.
              Our mission is to empower businesses to thrive in the digital
              world through innovative strategies and cutting-edge solutions.
              From enhancing your online presence to crafting compelling digital
              campaigns, our team is committed to delivering excellence and
              driving success for your brand. Discover the Solo Code difference
              and let us help you navigate the complexities of the digital
              landscape with confidence and creativity.
            </p>
            <a
              href="#contact-us"
              className="primary-gradient text-white text-base py-3 px-6 rounded-full flex items-end justify-center gap-3 max-w-96 btn-animate"
            >
              <span className="text-white"
                ><i className="fa-solid fa-phone-volume"></i
              ></span>
              <span className="text-white capitalize">book a call</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    {/*certification section Start*/}
    <section className="w-full pb-20 bg-secondary-200">
      <div
        className="w-full container grid gap-8 items-center lg:grid-cols-3 md:grid-cols-2 bg-secondary-200"
      >
        {/* certificate 1 */}
        <div
          className="w-full h-auto p-6 bg-white rounded flex gap-5 items-center justify-center"
        >
          <img src="assets/img/certificate1.png" alt="" className="w-32" />
          <div>
            <div>
              <i className="fa-solid fa-star text-primary-200"></i>
              <i className="fa-solid fa-star text-primary-200"></i>
              <i className="fa-solid fa-star text-primary-200"></i>
              <i className="fa-solid fa-star text-primary-200"></i>
              <i className="fa-solid fa-star text-primary-200"></i>
            </div>
            <h3 className="font-bold">SEMRUSH CERTIFIED</h3>
          </div>
        </div>

        {/* certificate 2 */}
        <div
          className="w-full h-auto p-6 bg-white rounded flex gap-5 items-center justify-center"
        >
          <img
            src="assets/img/certificate2.png"
            alt="Hubspot Certificate"
            className="w-32"
          />
          <div>
            <div>
              <i className="fa-solid fa-star text-primary-200"></i>
              <i className="fa-solid fa-star text-primary-200"></i>
              <i className="fa-solid fa-star text-primary-200"></i>
              <i className="fa-solid fa-star text-primary-200"></i>
              <i className="fa-solid fa-star text-primary-200"></i>
            </div>
            <h3 className="font-bold">HUBSPOT CERTIFIED</h3>
          </div>
        </div>

        {/* certificate 3 */}
        <div
          className="w-full h-auto p-6 bg-white rounded flex gap-5 items-center justify-center"
        >
          <img
            src="assets/img/certificate3.png"
            alt="Google Certificate"
            className="w-32"
          />
          <div>
            {/* star icons */}
            <div>
              <i className="fa-solid fa-star text-primary-200"></i>
              <i className="fa-solid fa-star text-primary-200"></i>
              <i className="fa-solid fa-star text-primary-200"></i>
              <i className="fa-solid fa-star text-primary-200"></i>
              <i className="fa-solid fa-star text-primary-200"></i>
            </div>
            {/* certificate title */}
            <h3 className="font-bold uppercase">GOOGLE CERTIFIED</h3>
          </div>
        </div>
      </div>
    </section>

    {/*service section start*/}
    <section id="service" className="w-full py-20 bg-secondary-200">
      <div className="container">
        <div className="flex items-center justify-center flex-col gap-10">
          {/* section title */}
          <div className="flex justify-center items-center flex-col mb-9">
            <h2 className="text-5xl text-white font-bold capitalize mb-10">
              service
            </h2>
            <div className="absolute z-10 mt-10">
              <div
                className="w-52 h-1 rounded bg-secondary-100 flex flex-col justify-center items-center"
              >
                <div
                  className="h-full w-20 rounded bg-primary-100 shadow-custom"
                ></div>
              </div>
            </div>
          </div>

          {/* service cards */}
          <div
            className="w-full grid gap-8 items-center lg:grid-cols-3 md:grid-cols-2"
          >
            {/* card 1 (complete digital marketing) */}
            <div
              className="group px-5 py-10 overflow-hidden min-h-[330px] rounded-md flex gap-2 justify-between items-center flex-col cursor-pointer border-2 border-secondary-100 hover:border-2 hover:border-primary-100 duration-200 hover:shadow-custom"
            >
              {/* icon */}
              <span
                className="w-20 h-20 rounded-full border border-secondary-100 flex justify-center items-center text-white group-hover:text-primary-100 group-hover:border-primary-100 duration-200 group-hover:shadow-custom"
              >
                <i className="fa-2x fa-solid fa-arrow-up-right-dots"></i>
              </span>
              {/* content or text */}
              <h2
                className="text-white text-xl group-hover:text-primary-100 duration-200 text-center font-bold"
              >
                Complete Digital Marketing
              </h2>
              <p className="text-gray-300 text-center cursor-text">
                Let us take care of your digital marketing needs—from SEO to
                social media and targeted ad campaigns—so you can focus on doing
                what you love.
              </p>
            </div>

            {/* card 2 */}
            <div
              className="group px-5 py-10 overflow-hidden min-h-[330px] rounded-md flex gap-2 justify-between items-center flex-col cursor-pointer border-2 border-secondary-100 hover:border-2 hover:border-primary-100 duration-200 hover:shadow-custom"
            >
              {/* icon (SEO)*/}
              <span
                className="w-20 h-20 rounded-full border border-secondary-100 flex justify-center items-center text-white group-hover:text-primary-100 group-hover:border-primary-100 duration-200 group-hover:shadow-custom"
              >
                <i className="fa-2x fa-solid fa-magnifying-glass-dollar"></i>
              </span>
              {/* contect and text */}
              <h2
                className="text-white text-xl group-hover:text-primary-100 duration-200 text-center font-bold"
              >
                Search Engine Optimization
              </h2>
              <p className="text-center text-gray-300 cursor-text">
                At Solo Code, we’re here to help your brand stand out. Our
                expert SEO services are designed to drive more organic traffic
                to your website.
              </p>
            </div>

            {/* card 3 (Social Media Marketing)*/}
            <div
              className="group px-5 py-10 overflow-hidden min-h-[330px] rounded-md flex gap-2 justify-between items-center flex-col cursor-pointer border-2 border-secondary-100 hover:border-2 hover:border-primary-100 duration-200 hover:shadow-custom"
            >
              {/* icon */}
              <span
                className="w-20 h-20 rounded-full border border-secondary-100 flex justify-center items-center text-white group-hover:text-primary-100 group-hover:border-primary-100 duration-200 group-hover:shadow-custom"
              >
                <i className="fa-2x fa-brands fa-meta"></i>
              </span>
              {/* content or text */}
              <h2
                className="text-white text-xl group-hover:text-primary-100 duration-200 text-center font-bold"
              >
                Social Media Marketing
              </h2>
              <p className="text-center text-gray-300 cursor-text">
                At Solo Code, we craft custom strategies to help you connect,
                engage, and build a loyal community around your brand.
              </p>
            </div>

            {/* card 4 (Graphic Design)*/}
            <div
              className="group px-5 py-10 overflow-hidden min-h-[330px] rounded-md flex gap-2 justify-between items-center flex-col cursor-pointer border-2 border-secondary-100 hover:border-2 hover:border-primary-100 duration-200 hover:shadow-custom"
            >
              {/* icon */}
              <span
                className="w-20 h-20 rounded-full border border-secondary-100 flex justify-center items-center text-white group-hover:text-primary-100 group-hover:border-primary-100 duration-200 group-hover:shadow-custom"
              >
                <i className="fa-2x fa-solid fa-crop-simple"></i>
              </span>

              {/* content & text */}
              <h2
                className="text-white text-xl group-hover:text-primary-100 duration-200 text-center font-bold"
              >
                Graphic Design
              </h2>
              <p className="text-center text-gray-300 cursor-text">
                We create eye-catching visuals that make your brand shine and
                connect with your audience.
              </p>
            </div>

            {/* card 5 (Video editing)*/}
            <div
              className="group px-5 py-10 overflow-hidden min-h-[330px] rounded-md flex gap-2 justify-between items-center flex-col cursor-pointer border-2 border-secondary-100 hover:border-2 hover:border-primary-100 duration-200 hover:shadow-custom"
            >
              {/* icon */}
              <span
                className="w-20 h-20 rounded-full border border-secondary-100 flex justify-center items-center text-white group-hover:text-primary-100 group-hover:border-primary-100 duration-200 group-hover:shadow-custom"
              >
                <i className="fa-2x fa-solid fa-video"></i>
              </span>

              {/* content or text */}
              <h2
                className="text-white text-xl group-hover:text-primary-100 duration-200 text-center font-bold"
              >
                Video Editing
              </h2>
              <p className="text-center text-gray-300 cursor-text">
                Elevate your content with expert video editing. We transform raw
                footage into polished, compelling videos that tell your story.
              </p>
            </div>

            {/* card 6  (web development)*/}
            <div
              className="group px-5 py-10 overflow-hidden min-h-[330px] rounded-md flex gap-2 justify-between items-center flex-col cursor-pointer border-2 border-secondary-100 hover:border-2 hover:border-primary-100 duration-200 hover:shadow-custom"
            >
              {/* icon */}
              <span
                className="w-20 h-20 rounded-full border border-secondary-100 flex justify-center items-center text-white group-hover:text-primary-100 group-hover:border-primary-100 duration-200 group-hover:shadow-custom"
              >
                <i className="fa-2x fa-solid fa-code"></i>
              </span>

              {/* content or text */}
              <h2
                className="text-white text-xl group-hover:text-primary-100 duration-200 text-center font-bold"
              >
                Web Development
              </h2>
              <p className="text-center text-gray-300 cursor-text">
                We create responsive, user-friendly websites that perfectly fit
                your needs, delivering seamless functionality and an engaging
                experience for your visitors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* project and portfolio section */}
    <section id="project" className="bg-secondary-200 py-20">
      <div className="container">
        {/* project section title */}
        <div className="flex justify-center items-center flex-col mb-9">
          <h2 className="text-5xl text-white font-bold capitalize mb-10">
            Projects
          </h2>
          <div className="absolute z-10 mt-10">
            <div
              className="w-52 h-1 rounded bg-secondary-100 flex flex-col justify-center items-center"
            >
              <div
                className="h-full w-20 rounded bg-primary-100 shadow-custom"
              ></div>
            </div>
          </div>
        </div>

        {/* tab-btns */}
        <div className="mb-9">
          <div
            className="p-2 bg-secondary-100 text-white rounded-lg inline-block text-xs text-center [&>*]:max-[310px]:block [&>*]:max-[310px]:m-auto max-[310px]:w-full"
          >
            <button
              className="tab-btn py-2 px-6 rounded-full btn-animate primary-gradient"
              data-tab="new"
            >
              New
            </button>
            <button
              className="tab-btn py-2 px-6 rounded-full btn-animate"
              data-tab="web-dev"
            >
              Web Development
            </button>
            <button
              className="tab-btn py-2 px-6 rounded-full btn-animate"
              data-tab="video-editing"
            >
              Video Editing
            </button>
            <button
              className="tab-btn py-2 px-6 rounded-full btn-animate"
              data-tab="graphics-design"
            >
              Graphics Design
            </button>
            <button
              className="tab-btn py-2 px-6 rounded-full btn-animate"
              data-tab="digital-marketing"
            >
              Digital Marketing
            </button>
          </div>
        </div>

        {/* tab-contents (new projects) */}
        <div
          id="new"
          className="tab-content grid gap-8 justify-center justify-items-center md:grid-cols-2 lg:grid-cols-3"
        >
          {/* project one */}
          <div id="pm-dashboard" className="relative">
            <figure
              className="py-3 px-4 space-y-3 rounded-lg text-gray-300 bg-gray-500/20 hover:bg-gray-500/25 duration-200 group"
            >
              {/* project title */}
              <div>
                <figcaption className="text-xl">
                  Project Management Dashboard
                </figcaption>
              </div>
              {/* project image */}
              <div
                className="w-full h-full rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  className="w-full h-full group-hover:scale-105 duration-200"
                  src="assets/img/portfolio/dashboard-design.png"
                  alt="portfolio-1"
                />
              </div>
              {/* action btns */}
              <div className="flex justify-between">
                <button
                  className="modal-open py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Overview
                </button>
                <button
                  className="py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Details
                </button>
              </div>
            </figure>
            {/* modal */}
            <dialog
              className="modal hidden fixed top-0 left-0 w-full h-screen bg-black/70 z-[200] text-white backdrop-blur-sm flex justify-center items-center"
            >
              <div className="container">
                <div
                  className="modal-wrapper min-h-fit max-h-[80vh] bg-gradient-to-r bg-gray-500/20 backdrop-blur-3xl overflow-y-scroll overflow-x-hidden"
                >
                  <div className="container space-y-6">
                    {/* modal header */}
                    <div className="flex justify-between mt-6">
                      <h4 className="text-xl font-bold">
                        Project Management Dashboard
                      </h4>
                      <div>
                        <button
                          className="modal-close-btn px-5 py-2 border border-white/20 btn-animate"
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    </div>
                    <hr />
                    {/* modal body */}
                    <div className="flex max-sm:flex-col max-sm:items-center gap-6">
                      {/* image */}
                      <div className="flex-1">
                        <div className="max-w-[400px]">
                          <img
                            className="rounded-xl"
                            src="assets/img/portfolio/dashboard-design.png"
                            alt="project-img"
                          />
                        </div>
                      </div>
                      {/* content */}
                      <div className="flex-1 space-y-4">
                        <h4 className="text-3xl font-bold">
                          Project Management Dashboard 🔥
                        </h4>
                        <div>
                          <h6 className="text-xl font-bold capitalize inline">
                            description :
                          </h6>
                          <p className="inline">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Pariatur impedit cum suscipit corporis atque
                            vitae vel animi qui harum maxime ipsum reiciendis
                            molestias neque quae quam odio, commodi, eaque
                            inventore. Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Sed in ex ea officia doloremque
                            eius obcaecati debitis quia, repellat voluptates hic
                            ipsum, atque quaerat tenetur delectus! Corporis
                            blanditiis aperiam architecto?
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    {/* modal footer */}
                    <div
                      className="flex justify-between items-center flex-wrap gap-8 pb-6"
                    >
                      <p className="text-xl">Thanks for watching our projects</p>
                      <div className="flex flex-wrap gap-4">
                        <a
                          href="https://dribbble.com/emamul-mottakin"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Visit Site
                        </a>

                        <a
                          href="project/modern-portfolio-ui.html"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>

          {/* project two */}
          <div id="modern-portfolio-ui" className="relative">
            {/* project card */}
            <figure
              className="py-3 px-4 space-y-3 rounded-lg text-gray-300 bg-blue-950/20 hover:bg-blue-950/25 duration-200 group"
            >
              {/* project title */}
              <figcaption>
                <h4 className="text-xl capitalize">Mordern portfolio UI</h4>
              </figcaption>
              {/* project image */}
              <div
                className="w-full h-full rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  className="w-full h-full group-hover:scale-105 duration-200"
                  src="assets/img/portfolio/ui-ux_mordarn-portfolio.jpg"
                  alt="portfolio-1"
                />
              </div>
              {/* actions */}
              <div className="flex justify-between">
                <button
                  className="modal-open py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Overview
                </button>
                <button
                  className="py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Details
                </button>
              </div>
            </figure>
            {/* modal */}
            <dialog
              className="modal hidden fixed top-0 left-0 w-full h-screen bg-black/70 z-[200] text-white backdrop-blur-sm flex justify-center items-center"
            >
              <div className="container">
                <div
                  className="modal-wrapper min-h-fit max-h-[80vh] bg-gradient-to-r bg-blue-950/20 backdrop-blur-3xl overflow-y-scroll overflow-x-hidden"
                >
                  <div className="container space-y-6">
                    {/* modal header */}
                    <div className="flex justify-between mt-6">
                      <h4 className="text-xl font-bold">Mordarn portfolio UI</h4>
                      <div>
                        <button
                          className="modal-close-btn px-5 py-2 border border-white/20 btn-animate"
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    </div>
                    <hr />
                    {/* modal body */}
                    <div className="flex max-sm:flex-col max-sm:items-center gap-6">
                      {/* image */}
                      <div className="flex-1">
                        <div className="max-w-[400px]">
                          <img
                            className="rounded-xl"
                            src="assets/img/portfolio/ui-ux_mordarn-portfolio.jpg"
                            alt="project-img"
                          />
                        </div>
                      </div>
                      {/* content */}
                      <div className="flex-1 space-y-4">
                        <h4 className="text-3xl font-bold">
                          Mordarn portfolio UI 🔥
                        </h4>
                        <div>
                          <h6 className="text-xl font-bold capitalize inline">
                            description :
                          </h6>
                          <p className="inline">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Pariatur impedit cum suscipit corporis atque
                            vitae vel animi qui harum maxime ipsum reiciendis
                            molestias neque quae quam odio, commodi, eaque
                            inventore. Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Sed in ex ea officia doloremque
                            eius obcaecati debitis quia, repellat voluptates hic
                            ipsum, atque quaerat tenetur delectus! Corporis
                            blanditiis aperiam architecto?
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    {/* modal footer */}
                    <div
                      className="flex justify-between items-center flex-wrap gap-8 pb-6"
                    >
                      <p className="text-xl">Thanks for watching our projects</p>
                      <div className="flex flex-wrap gap-4">
                        <a
                          href="https://dribbble.com/shots/19657102-Modern-Portfolio-Website-UI"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Visit Site
                        </a>

                        <a
                          href="project/modern-portfolio-ui.html"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>

          {/* project three */}
          <div id="hecto" className="relative">
            {/* project card */}
            <figure
              className="py-3 px-4 space-y-3 rounded-lg text-gray-300 bg-purple-500/20 hover:bg-purple-500/25 duration-200 group"
            >
              {/* project title */}
              <div>
                <figcaption className="text-xl capitalize">
                  Hecto - Ecommerce
                </figcaption>
              </div>
              {/* project image */}
              <div
                className="w-full h-full rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  className="w-full h-full group-hover:scale-105 duration-200"
                  src="assets/img/portfolio/hecto-ecommerce.png"
                  alt="portfolio-1"
                />
              </div>
              {/* actions */}
              <div className="flex justify-between">
                <button
                  className="modal-open py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Overview
                </button>
                <button
                  className="py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Details
                </button>
              </div>
            </figure>
            {/* modal */}
            <dialog
              className="modal hidden fixed top-0 left-0 w-full h-screen bg-black/70 z-[200] text-white backdrop-blur-sm flex justify-center items-center"
            >
              <div className="container">
                {/* modal-wrapper */}
                <div
                  className="modal-wrapper min-h-fit max-h-[80vh] bg-gradient-to-r bg-blue-500/20 backdrop-blur-3xl overflow-y-scroll overflow-x-hidden"
                >
                  <div className="container space-y-6">
                    {/* modal header */}
                    <div className="flex justify-between mt-6">
                      <h4 className="text-xl font-bold">Hecto - Ecommerce</h4>
                      <div>
                        <button
                          className="modal-close-btn px-5 py-2 border border-white/20 btn-animate"
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    </div>
                    <hr />
                    {/* modal body */}
                    <div className="flex max-sm:flex-col max-sm:items-center gap-6">
                      {/* image */}
                      <div className="flex-1">
                        <div className="max-w-[400px]">
                          <img
                            className="rounded-xl"
                            src="assets/img/portfolio/hecto-ecommerce.png"
                            alt="project-img"
                          />
                        </div>
                      </div>
                      {/* content */}
                      <div className="flex-1 space-y-4">
                        {/* title */}
                        <h4 className="text-3xl font-bold">
                          Hecto - Complete E-commerce HTML Template 🔥
                        </h4>
                        {/* description */}
                        <div>
                          <h6 className="text-xl font-bold capitalize inline">
                            description :
                          </h6>
                          <p className="inline">
                            Hecto is a fully functional e-commerce web template
                            that provides all the essential pages an online
                            store needs. The template includes key pages such as
                            the Home page, Shop page, Product Details page,
                            Checkout page, and Contact page, offering a
                            comprehensive foundation for any e-commerce website.
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    {/* modal footer */}
                    <div
                      className="flex justify-between items-center flex-wrap gap-8 pb-6"
                    >
                      <p className="text-xl">Thanks for watching our projects</p>
                      <div className="flex flex-wrap gap-4">
                        <a
                          href="https://emamul-mottakin.github.io/hecto/dist/"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Visit Site
                        </a>

                        <a
                          href="project/hecto.html"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>

          {/* project four */}
          <div id="vape-ecommerce-ui" className="relative">
            {/* project card */}
            <figure
              className="py-3 px-4 space-y-3 rounded-lg text-gray-300 bg-[#eeaddc]/20 group hover:bg-[#eeaddc]/25 duration-200"
            >
              {/* project title */}
              <div>
                <figcaption className="text-xl">Vape Ecommerce Web UI</figcaption>
              </div>
              {/* project image */}
              <div
                className="w-full h-full rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  className="w-full h-full group-hover:scale-105 duration-200"
                  src="assets/img/portfolio/ui-ux_vape-ecommerce.png"
                  alt="portfolio-1"
                />
              </div>
              {/* actions */}
              <div className="flex justify-between">
                <button
                  className="modal-open py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Overview
                </button>
                <button
                  className="py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Details
                </button>
              </div>
            </figure>
            {/* modal */}
            <dialog
              className="modal hidden fixed top-0 left-0 w-full h-screen bg-black/70 z-[200] text-white backdrop-blur-sm flex justify-center items-center"
            >
              <div className="container">
                <div
                  className="modal-wrapper min-h-fit max-h-[80vh] bg-gradient-to-r bg-[#eeaddc]/20 backdrop-blur-3xl overflow-y-scroll overflow-x-hidden"
                >
                  <div className="container space-y-6">
                    {/* modal header */}
                    <div className="flex justify-between mt-6">
                      <h4 className="text-xl font-bold">Vape Ecommerce Web UI</h4>
                      <div>
                        <button
                          className="modal-close-btn px-5 py-2 border border-white/20 btn-animate"
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    </div>
                    <hr />
                    {/* modal body */}
                    <div className="flex max-sm:flex-col max-sm:items-center gap-6">
                      {/* image */}
                      <div className="flex-1">
                        <div className="max-w-[400px]">
                          <img
                            className="rounded-xl"
                            src="assets/img/portfolio/ui-ux_vape-ecommerce.png"
                            alt="project-img"
                          />
                        </div>
                      </div>
                      {/* content */}
                      <div className="flex-1 space-y-4">
                        <h4 className="text-3xl font-bold">
                          Vape seling e-commerce UI Design 🔥
                        </h4>
                        <div>
                          <h6 className="text-xl font-bold capitalize inline">
                            description :
                          </h6>
                          <p className="inline">
                            Introducing a captivating vaping e-commerce website
                            UI that sets the stage for an extraordinary online
                            shopping experience. Immerse yourself in a sleek and
                            intuitive design that seamlessly blends style and
                            functionality. Discover an extensive collection of
                            top-tier vape products, elegantly showcased with
                            stunning visuals and detailed descriptions.
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    {/* modal footer */}
                    <div
                      className="flex justify-between items-center flex-wrap gap-8 pb-6"
                    >
                      <p className="text-xl">Thanks for watching our projects</p>
                      <div className="flex flex-wrap gap-4">
                        <a
                          href="https://dribbble.com/shots/21779155-Vape-e-commerce-web-UI"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Visit Site
                        </a>

                        <a
                          href="project/vape-ecommerce-ui.html"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>

          {/* project five */}
          <div id="gutim" className="relative">
            {/* project card */}
            <figure
              className="py-3 px-4 space-y-3 rounded-lg text-gray-300 bg-[#ec4157]/20 hover:bg-[#ec4157]/25 duration-200 group"
            >
              {/* project title */}
              <div>
                <figcaption className="text-xl capitalize">
                  Gutim - Gym Website
                </figcaption>
              </div>
              {/* project image */}
              <div
                className="w-full h-full rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  className="w-full h-full group-hover:scale-105 duration-200"
                  src="assets/img/portfolio/gym-website.png"
                  alt="portfolio-1"
                />
              </div>
              {/* actions */}
              <div className="flex justify-between">
                <button
                  className="modal-open py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Overview
                </button>
                <button
                  className="py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Details
                </button>
              </div>
            </figure>
            {/* modal */}
            <dialog
              className="modal hidden fixed top-0 left-0 w-full h-screen bg-black/70 z-[200] text-white backdrop-blur-sm flex justify-center items-center"
            >
              <div className="container">
                <div
                  className="modal-wrapper min-h-fit max-h-[80vh] bg-gradient-to-r bg-[#ec4157]/20 backdrop-blur-3xl overflow-y-scroll overflow-x-hidden"
                >
                  <div className="container space-y-6">
                    {/* modal header */}
                    <div className="flex justify-between mt-6">
                      <h4 className="text-xl font-bold">Gutim - Gym Website</h4>
                      <div>
                        <button
                          className="modal-close-btn px-5 py-2 border border-white/20 btn-animate"
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    </div>
                    <hr />
                    {/* modal body */}
                    <div className="flex max-sm:flex-col max-sm:items-center gap-6">
                      {/* image */}
                      <div className="flex-1">
                        <div className="max-w-[400px]">
                          <img
                            className="rounded-xl"
                            src="assets/img/portfolio/gym-website.png"
                            alt="project-img"
                          />
                        </div>
                      </div>
                      {/* content */}
                      <div className="flex-1 space-y-4">
                        <h4 className="text-3xl font-bold">
                          Fitness, Workout, Gym Website 🔥
                        </h4>
                        <div>
                          <h6 className="text-xl font-bold capitalize inline">
                            description :
                          </h6>
                          <p className="inline">
                            Gutim is an awesome gym and fitness website template
                            that works great for all kinds of sports-related
                            projects. Its clean, modern design makes it easy to
                            use right away. The platform offers personalized
                            workout plans, helps track progress, and gives
                            useful insights to support your overall health
                            journey.
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    {/* modal footer */}
                    <div
                      className="flex justify-between items-center flex-wrap gap-8 pb-6"
                    >
                      <p className="text-xl">Thanks for watching our projects</p>
                      <div className="flex flex-wrap gap-4">
                        <a
                          href="https://emamul-mottakin.github.io/gutim/"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Visit Site
                        </a>

                        <a
                          href="project/gutim.html"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>

          {/* project six */}
          <div id="medi" className="relative">
            {/* project card */}
            <figure
              className="py-3 px-4 space-y-3 rounded-lg text-gray-300 bg-blue-500/20 hover:bg-blue-500/25 duration-200 group"
            >
              {/* project title */}
              <div>
                <figcaption className="text-xl capitalize">
                  Medi - health website
                </figcaption>
              </div>
              {/* project image */}
              <div
                className="w-full h-full rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  className="w-full h-full group-hover:scale-105 duration-200"
                  src="assets/img/portfolio/medi.png"
                  alt="portfolio-1"
                />
              </div>
              {/* actions */}
              <div className="flex justify-between">
                <button
                  className="modal-open py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Overview
                </button>
                <button
                  className="py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Details
                </button>
              </div>
            </figure>
            {/* modal */}
            <dialog
              className="modal hidden fixed top-0 left-0 w-full h-screen bg-black/70 z-[200] text-white backdrop-blur-sm flex justify-center items-center"
            >
              <div className="container">
                {/* modal-wrapper */}
                <div
                  className="modal-wrapper min-h-fit max-h-[80vh] bg-gradient-to-r bg-blue-500/20 backdrop-blur-3xl overflow-y-scroll overflow-x-hidden"
                >
                  <div className="container space-y-6">
                    {/* modal header */}
                    <div className="flex justify-between mt-6">
                      <h4 className="text-xl font-bold">Medi - health website</h4>
                      <div>
                        <button
                          className="modal-close-btn px-5 py-2 border border-white/20 btn-animate"
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    </div>
                    <hr />
                    {/* modal body */}
                    <div className="flex max-sm:flex-col max-sm:items-center gap-6">
                      {/* image */}
                      <div className="flex-1">
                        <div className="max-w-[400px]">
                          <img
                            className="rounded-xl"
                            src="assets/img/portfolio/medi.png"
                            alt="project-img"
                          />
                        </div>
                      </div>
                      {/* content */}
                      <div className="flex-1 space-y-4">
                        {/* title */}
                        <h4 className="text-3xl font-bold">
                          Medi - Healthcare & Doctor Appointment Booking
                          Platform 🔥
                        </h4>
                        {/* description */}
                        <div>
                          <h6 className="text-xl font-bold capitalize inline">
                            description :
                          </h6>
                          <p className="inline">
                            Medi is a health and care-related website that I
                            developed as part of a learning project to enhance
                            my web design skills. While the design is originally
                            from Colorlib's Medi Template, I recreated the
                            entire webpage from scratch using HTML, CSS, and
                            SASS to refine my coding and styling abilities. This
                            project helped me gain a deeper understanding of
                            frontend development and the importance of clean,
                            efficient code.
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    {/* modal footer */}
                    <div
                      className="flex justify-between items-center flex-wrap gap-8 pb-6"
                    >
                      <p className="text-xl">Thanks for watching our projects</p>
                      <div className="flex flex-wrap gap-4">
                        <a
                          href="https://emamul-mottakin.github.io/Medi/"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Visit Site
                        </a>

                        <a
                          href="project/medi.html"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>
        </div>

        {/* tab-contents (web dev projects) */}
        <div
          id="web-dev"
          className="hidden tab-content grid gap-8 justify-center justify-items-center md:grid-cols-2 lg:grid-cols-3"
        >
          {/* project two */}
          <div id="modern-portfolio-ui" className="relative">
            {/* project card */}
            <figure
              className="py-3 px-4 space-y-3 rounded-lg text-gray-300 bg-blue-950/20 hover:bg-blue-950/25 duration-200 group"
            >
              {/* project title */}
              <figcaption>
                <h4 className="text-xl capitalize">Mordern portfolio UI</h4>
              </figcaption>
              {/* project image */}
              <div
                className="w-full h-full rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  className="w-full h-full group-hover:scale-105 duration-200"
                  src="assets/img/portfolio/ui-ux_mordarn-portfolio.jpg"
                  alt="portfolio-1"
                />
              </div>
              {/* actions */}
              <div className="flex justify-between">
                <button
                  className="modal-open py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Overview
                </button>
                <button
                  className="py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Details
                </button>
              </div>
            </figure>
            {/* modal */}
            <dialog
              className="modal hidden fixed top-0 left-0 w-full h-screen bg-black/70 z-[200] text-white backdrop-blur-sm flex justify-center items-center"
            >
              <div className="container">
                <div
                  className="modal-wrapper min-h-fit max-h-[80vh] bg-gradient-to-r bg-blue-950/20 backdrop-blur-3xl overflow-y-scroll overflow-x-hidden"
                >
                  <div className="container space-y-6">
                    {/* modal header */}
                    <div className="flex justify-between mt-6">
                      <h4 className="text-xl font-bold">Mordarn portfolio UI</h4>
                      <div>
                        <button
                          className="modal-close-btn px-5 py-2 border border-white/20 btn-animate"
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    </div>
                    <hr />
                    {/* modal body */}
                    <div className="flex max-sm:flex-col max-sm:items-center gap-6">
                      {/* image */}
                      <div className="flex-1">
                        <div className="max-w-[400px]">
                          <img
                            className="rounded-xl"
                            src="assets/img/portfolio/ui-ux_mordarn-portfolio.jpg"
                            alt="project-img"
                          />
                        </div>
                      </div>
                      {/* content */}
                      <div className="flex-1 space-y-4">
                        <h4 className="text-3xl font-bold">
                          Mordarn portfolio UI 🔥
                        </h4>
                        <div>
                          <h6 className="text-xl font-bold capitalize inline">
                            description :
                          </h6>
                          <p className="inline">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Pariatur impedit cum suscipit corporis atque
                            vitae vel animi qui harum maxime ipsum reiciendis
                            molestias neque quae quam odio, commodi, eaque
                            inventore. Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Sed in ex ea officia doloremque
                            eius obcaecati debitis quia, repellat voluptates hic
                            ipsum, atque quaerat tenetur delectus! Corporis
                            blanditiis aperiam architecto?
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    {/* modal footer */}
                    <div
                      className="flex justify-between items-center flex-wrap gap-8 pb-6"
                    >
                      <p className="text-xl">Thanks for watching our projects</p>
                      <div className="flex flex-wrap gap-4">
                        <a
                          href="https://dribbble.com/shots/19657102-Modern-Portfolio-Website-UI"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Visit Site
                        </a>

                        <a
                          href="project/modern-portfolio-ui.html"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>

          {/* project three */}
          <div id="hecto" className="relative">
            {/* project card */}
            <figure
              className="py-3 px-4 space-y-3 rounded-lg text-gray-300 bg-purple-500/20 hover:bg-purple-500/25 duration-200 group"
            >
              {/* project title */}
              <div>
                <figcaption className="text-xl capitalize">
                  Hecto - Ecommerce
                </figcaption>
              </div>
              {/* project image */}
              <div
                className="w-full h-full rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  className="w-full h-full group-hover:scale-105 duration-200"
                  src="assets/img/portfolio/hecto-ecommerce.png"
                  alt="portfolio-1"
                />
              </div>
              {/* actions */}
              <div className="flex justify-between">
                <button
                  className="modal-open py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Overview
                </button>
                <button
                  className="py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Details
                </button>
              </div>
            </figure>
            {/* modal */}
            <dialog
              className="modal hidden fixed top-0 left-0 w-full h-screen bg-black/70 z-[200] text-white backdrop-blur-sm flex justify-center items-center"
            >
              <div className="container">
                {/* modal-wrapper */}
                <div
                  className="modal-wrapper min-h-fit max-h-[80vh] bg-gradient-to-r bg-blue-500/20 backdrop-blur-3xl overflow-y-scroll overflow-x-hidden"
                >
                  <div className="container space-y-6">
                    {/* modal header */}
                    <div className="flex justify-between mt-6">
                      <h4 className="text-xl font-bold">Hecto - Ecommerce</h4>
                      <div>
                        <button
                          className="modal-close-btn px-5 py-2 border border-white/20 btn-animate"
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    </div>
                    <hr />
                    {/* modal body */}
                    <div className="flex max-sm:flex-col max-sm:items-center gap-6">
                      {/* image */}
                      <div className="flex-1">
                        <div className="max-w-[400px]">
                          <img
                            className="rounded-xl"
                            src="assets/img/portfolio/hecto-ecommerce.png"
                            alt="project-img"
                          />
                        </div>
                      </div>
                      {/* content */}
                      <div className="flex-1 space-y-4">
                        {/* title */}
                        <h4 className="text-3xl font-bold">
                          Hecto - Complete E-commerce HTML Template 🔥
                        </h4>
                        {/* description */}
                        <div>
                          <h6 className="text-xl font-bold capitalize inline">
                            description :
                          </h6>
                          <p className="inline">
                            Hecto is a fully functional e-commerce web template
                            that provides all the essential pages an online
                            store needs. The template includes key pages such as
                            the Home page, Shop page, Product Details page,
                            Checkout page, and Contact page, offering a
                            comprehensive foundation for any e-commerce website.
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    {/* modal footer */}
                    <div
                      className="flex justify-between items-center flex-wrap gap-8 pb-6"
                    >
                      <p className="text-xl">Thanks for watching our projects</p>
                      <div className="flex flex-wrap gap-4">
                        <a
                          href="https://emamul-mottakin.github.io/hecto/dist/"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Visit Site
                        </a>

                        <a
                          href="project/hecto.html"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>

          {/* project one */}
          <div id="pm-dashboard" className="relative">
            <figure
              className="py-3 px-4 space-y-3 rounded-lg text-gray-300 bg-gray-500/20 hover:bg-gray-500/25 duration-200 group"
            >
              {/* project title */}
              <div>
                <figcaption className="text-xl">
                  Project Management Dashboard
                </figcaption>
              </div>
              {/* project image */}
              <div
                className="w-full h-full rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  className="w-full h-full group-hover:scale-105 duration-200"
                  src="assets/img/portfolio/dashboard-design.png"
                  alt="portfolio-1"
                />
              </div>
              {/* action btns */}
              <div className="flex justify-between">
                <button
                  className="modal-open py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Overview
                </button>
                <button
                  className="py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Details
                </button>
              </div>
            </figure>
            {/* modal */}
            <dialog
              className="modal hidden fixed top-0 left-0 w-full h-screen bg-black/70 z-[200] text-white backdrop-blur-sm flex justify-center items-center"
            >
              <div className="container">
                <div
                  className="modal-wrapper min-h-fit max-h-[80vh] bg-gradient-to-r bg-gray-500/20 backdrop-blur-3xl overflow-y-scroll overflow-x-hidden"
                >
                  <div className="container space-y-6">
                    {/* modal header */}
                    <div className="flex justify-between mt-6">
                      <h4 className="text-xl font-bold">
                        Project Management Dashboard
                      </h4>
                      <div>
                        <button
                          className="modal-close-btn px-5 py-2 border border-white/20 btn-animate"
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    </div>
                    <hr />
                    {/* modal body */}
                    <div className="flex max-sm:flex-col max-sm:items-center gap-6">
                      {/* image */}
                      <div className="flex-1">
                        <div className="max-w-[400px]">
                          <img
                            className="rounded-xl"
                            src="assets/img/portfolio/dashboard-design.png"
                            alt="project-img"
                          />
                        </div>
                      </div>
                      {/* content */}
                      <div className="flex-1 space-y-4">
                        <h4 className="text-3xl font-bold">
                          Project Management Dashboard 🔥
                        </h4>
                        <div>
                          <h6 className="text-xl font-bold capitalize inline">
                            description :
                          </h6>
                          <p className="inline">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Pariatur impedit cum suscipit corporis atque
                            vitae vel animi qui harum maxime ipsum reiciendis
                            molestias neque quae quam odio, commodi, eaque
                            inventore. Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Sed in ex ea officia doloremque
                            eius obcaecati debitis quia, repellat voluptates hic
                            ipsum, atque quaerat tenetur delectus! Corporis
                            blanditiis aperiam architecto?
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    {/* modal footer */}
                    <div
                      className="flex justify-between items-center flex-wrap gap-8 pb-6"
                    >
                      <p className="text-xl">Thanks for watching our projects</p>
                      <div className="flex flex-wrap gap-4">
                        <a
                          href="https://dribbble.com/emamul-mottakin"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Visit Site
                        </a>

                        <a
                          href="project/modern-portfolio-ui.html"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>

          {/* project four */}
          <div id="vape-ecommerce-ui" className="relative">
            {/* project card */}
            <figure
              className="py-3 px-4 space-y-3 rounded-lg text-gray-300 bg-[#eeaddc]/20 group hover:bg-[#eeaddc]/25 duration-200"
            >
              {/* project title */}
              <div>
                <figcaption className="text-xl">Vape Ecommerce Web UI</figcaption>
              </div>
              {/* project image */}
              <div
                className="w-full h-full rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  className="w-full h-full group-hover:scale-105 duration-200"
                  src="assets/img/portfolio/ui-ux_vape-ecommerce.png"
                  alt="portfolio-1"
                />
              </div>
              {/* actions */}
              <div className="flex justify-between">
                <button
                  className="modal-open py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Overview
                </button>
                <button
                  className="py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Details
                </button>
              </div>
            </figure>
            {/* modal */}
            <dialog
              className="modal hidden fixed top-0 left-0 w-full h-screen bg-black/70 z-[200] text-white backdrop-blur-sm flex justify-center items-center"
            >
              <div className="container">
                <div
                  className="modal-wrapper min-h-fit max-h-[80vh] bg-gradient-to-r bg-[#eeaddc]/20 backdrop-blur-3xl overflow-y-scroll overflow-x-hidden"
                >
                  <div className="container space-y-6">
                    {/* modal header */}
                    <div className="flex justify-between mt-6">
                      <h4 className="text-xl font-bold">Vape Ecommerce Web UI</h4>
                      <div>
                        <button
                          className="modal-close-btn px-5 py-2 border border-white/20 btn-animate"
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    </div>
                    <hr />
                    {/* modal body */}
                    <div className="flex max-sm:flex-col max-sm:items-center gap-6">
                      {/* image */}
                      <div className="flex-1">
                        <div className="max-w-[400px]">
                          <img
                            className="rounded-xl"
                            src="assets/img/portfolio/ui-ux_vape-ecommerce.png"
                            alt="project-img"
                          />
                        </div>
                      </div>
                      {/* content */}
                      <div className="flex-1 space-y-4">
                        <h4 className="text-3xl font-bold">
                          Vape seling e-commerce UI Design 🔥
                        </h4>
                        <div>
                          <h6 className="text-xl font-bold capitalize inline">
                            description :
                          </h6>
                          <p className="inline">
                            Introducing a captivating vaping e-commerce website
                            UI that sets the stage for an extraordinary online
                            shopping experience. Immerse yourself in a sleek and
                            intuitive design that seamlessly blends style and
                            functionality. Discover an extensive collection of
                            top-tier vape products, elegantly showcased with
                            stunning visuals and detailed descriptions.
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    {/* modal footer */}
                    <div
                      className="flex justify-between items-center flex-wrap gap-8 pb-6"
                    >
                      <p className="text-xl">Thanks for watching our projects</p>
                      <div className="flex flex-wrap gap-4">
                        <a
                          href="https://dribbble.com/shots/21779155-Vape-e-commerce-web-UI"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Visit Site
                        </a>

                        <a
                          href="project/vape-ecommerce-ui.html"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>

          {/* project five */}
          <div id="gutim" className="relative">
            {/* project card */}
            <figure
              className="py-3 px-4 space-y-3 rounded-lg text-gray-300 bg-[#ec4157]/20 hover:bg-[#ec4157]/25 duration-200 group"
            >
              {/* project title */}
              <div>
                <figcaption className="text-xl capitalize">
                  Gutim - Gym Website
                </figcaption>
              </div>
              {/* project image */}
              <div
                className="w-full h-full rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  className="w-full h-full group-hover:scale-105 duration-200"
                  src="assets/img/portfolio/gym-website.png"
                  alt="portfolio-1"
                />
              </div>
              {/* actions */}
              <div className="flex justify-between">
                <button
                  className="modal-open py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Overview
                </button>
                <button
                  className="py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Details
                </button>
              </div>
            </figure>
            {/* modal */}
            <dialog
              className="modal hidden fixed top-0 left-0 w-full h-screen bg-black/70 z-[200] text-white backdrop-blur-sm flex justify-center items-center"
            >
              <div className="container">
                <div
                  className="modal-wrapper min-h-fit max-h-[80vh] bg-gradient-to-r bg-[#ec4157]/20 backdrop-blur-3xl overflow-y-scroll overflow-x-hidden"
                >
                  <div className="container space-y-6">
                    {/* modal header */}
                    <div className="flex justify-between mt-6">
                      <h4 className="text-xl font-bold">Gutim - Gym Website</h4>
                      <div>
                        <button
                          className="modal-close-btn px-5 py-2 border border-white/20 btn-animate"
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    </div>
                    <hr />
                    {/* modal body */}
                    <div className="flex max-sm:flex-col max-sm:items-center gap-6">
                      {/* image */}
                      <div className="flex-1">
                        <div className="max-w-[400px]">
                          <img
                            className="rounded-xl"
                            src="assets/img/portfolio/gym-website.png"
                            alt="project-img"
                          />
                        </div>
                      </div>
                      {/* content */}
                      <div className="flex-1 space-y-4">
                        <h4 className="text-3xl font-bold">
                          Fitness, Workout, Gym Website 🔥
                        </h4>
                        <div>
                          <h6 className="text-xl font-bold capitalize inline">
                            description :
                          </h6>
                          <p className="inline">
                            Gutim is an awesome gym and fitness website template
                            that works great for all kinds of sports-related
                            projects. Its clean, modern design makes it easy to
                            use right away. The platform offers personalized
                            workout plans, helps track progress, and gives
                            useful insights to support your overall health
                            journey.
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    {/* modal footer */}
                    <div
                      className="flex justify-between items-center flex-wrap gap-8 pb-6"
                    >
                      <p className="text-xl">Thanks for watching our projects</p>
                      <div className="flex flex-wrap gap-4">
                        <a
                          href="https://emamul-mottakin.github.io/gutim/"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Visit Site
                        </a>

                        <a
                          href="project/gutim.html"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>

          {/* project six */}
          <div id="medi" className="relative">
            {/* project card */}
            <figure
              className="py-3 px-4 space-y-3 rounded-lg text-gray-300 bg-blue-500/20 hover:bg-blue-500/25 duration-200 group"
            >
              {/* project title */}
              <div>
                <figcaption className="text-xl capitalize">
                  Medi - health website
                </figcaption>
              </div>
              {/* project image */}
              <div
                className="w-full h-full rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  className="w-full h-full group-hover:scale-105 duration-200"
                  src="assets/img/portfolio/medi.png"
                  alt="portfolio-1"
                />
              </div>
              {/* actions */}
              <div className="flex justify-between">
                <button
                  className="modal-open py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Overview
                </button>
                <button
                  className="py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Details
                </button>
              </div>
            </figure>
            {/* modal */}
            <dialog
              className="modal hidden fixed top-0 left-0 w-full h-screen bg-black/70 z-[200] text-white backdrop-blur-sm flex justify-center items-center"
            >
              <div className="container">
                {/* modal-wrapper */}
                <div
                  className="modal-wrapper min-h-fit max-h-[80vh] bg-gradient-to-r bg-blue-500/20 backdrop-blur-3xl overflow-y-scroll overflow-x-hidden"
                >
                  <div className="container space-y-6">
                    {/* modal header */}
                    <div className="flex justify-between mt-6">
                      <h4 className="text-xl font-bold">Medi - health website</h4>
                      <div>
                        <button
                          className="modal-close-btn px-5 py-2 border border-white/20 btn-animate"
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    </div>
                    <hr />
                    {/* modal body */}
                    <div className="flex max-sm:flex-col max-sm:items-center gap-6">
                      {/* image */}
                      <div className="flex-1">
                        <div className="max-w-[400px]">
                          <img
                            className="rounded-xl"
                            src="assets/img/portfolio/medi.png"
                            alt="project-img"
                          />
                        </div>
                      </div>
                      {/* content */}
                      <div className="flex-1 space-y-4">
                        {/* title */}
                        <h4 className="text-3xl font-bold">
                          Medi - Healthcare & Doctor Appointment Booking
                          Platform 🔥
                        </h4>
                        {/* description */}
                        <div>
                          <h6 className="text-xl font-bold capitalize inline">
                            description :
                          </h6>
                          <p className="inline">
                            Medi is a health and care-related website that I
                            developed as part of a learning project to enhance
                            my web design skills. While the design is originally
                            from Colorlib's Medi Template, I recreated the
                            entire webpage from scratch using HTML, CSS, and
                            SASS to refine my coding and styling abilities. This
                            project helped me gain a deeper understanding of
                            frontend development and the importance of clean,
                            efficient code.
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    {/* modal footer */}
                    <div
                      className="flex justify-between items-center flex-wrap gap-8 pb-6"
                    >
                      <p className="text-xl">Thanks for watching our projects</p>
                      <div className="flex flex-wrap gap-4">
                        <a
                          href="https://emamul-mottakin.github.io/Medi/"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Visit Site
                        </a>

                        <a
                          href="project/medi.html"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>
        </div>
        {/* tab-contents (video editing projects) */}
        <div
          id="video-editing"
          className="hidden tab-content grid gap-8 justify-center justify-items-center md:grid-cols-2 lg:grid-cols-3"
        >
          {/* project one */}
          <div id="pm-dashboard" className="relative">
            <figure
              className="py-3 px-4 space-y-3 rounded-lg text-gray-300 bg-gray-500/20 hover:bg-gray-500/25 duration-200 group"
            >
              {/* project title */}
              <div>
                <figcaption className="text-xl">
                  Project Management Dashboard
                </figcaption>
              </div>
              {/* project image */}
              <div
                className="w-full h-full rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  className="w-full h-full group-hover:scale-105 duration-200"
                  src="assets/img/portfolio/dashboard-design.png"
                  alt="portfolio-1"
                />
              </div>
              {/* action btns */}
              <div className="flex justify-between">
                <button
                  className="modal-open py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Overview
                </button>
                <button
                  className="py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Details
                </button>
              </div>
            </figure>
            {/* modal */}
            <dialog
              className="modal hidden fixed top-0 left-0 w-full h-screen bg-black/70 z-[200] text-white backdrop-blur-sm flex justify-center items-center"
            >
              <div className="container">
                <div
                  className="modal-wrapper min-h-fit max-h-[80vh] bg-gradient-to-r bg-gray-500/20 backdrop-blur-3xl overflow-y-scroll overflow-x-hidden"
                >
                  <div className="container space-y-6">
                    {/* modal header */}
                    <div className="flex justify-between mt-6">
                      <h4 className="text-xl font-bold">
                        Project Management Dashboard
                      </h4>
                      <div>
                        <button
                          className="modal-close-btn px-5 py-2 border border-white/20 btn-animate"
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    </div>
                    <hr />
                    {/* modal body */}
                    <div className="flex max-sm:flex-col max-sm:items-center gap-6">
                      {/* image */}
                      <div className="flex-1">
                        <div className="max-w-[400px]">
                          <img
                            className="rounded-xl"
                            src="assets/img/portfolio/dashboard-design.png"
                            alt="project-img"
                          />
                        </div>
                      </div>
                      {/* content */}
                      <div className="flex-1 space-y-4">
                        <h4 className="text-3xl font-bold">
                          Project Management Dashboard 🔥
                        </h4>
                        <div>
                          <h6 className="text-xl font-bold capitalize inline">
                            description :
                          </h6>
                          <p className="inline">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Pariatur impedit cum suscipit corporis atque
                            vitae vel animi qui harum maxime ipsum reiciendis
                            molestias neque quae quam odio, commodi, eaque
                            inventore. Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Sed in ex ea officia doloremque
                            eius obcaecati debitis quia, repellat voluptates hic
                            ipsum, atque quaerat tenetur delectus! Corporis
                            blanditiis aperiam architecto?
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    {/* modal footer */}
                    <div
                      className="flex justify-between items-center flex-wrap gap-8 pb-6"
                    >
                      <p className="text-xl">Thanks for watching our projects</p>
                      <div className="flex flex-wrap gap-4">
                        <a
                          href="https://dribbble.com/emamul-mottakin"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Visit Site
                        </a>

                        <a
                          href="project/modern-portfolio-ui.html"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>

          {/* project two */}
          <div id="modern-portfolio-ui" className="relative">
            {/* project card */}
            <figure
              className="py-3 px-4 space-y-3 rounded-lg text-gray-300 bg-blue-950/20 hover:bg-blue-950/25 duration-200 group"
            >
              {/* project title */}
              <figcaption>
                <h4 className="text-xl capitalize">Mordern portfolio UI</h4>
              </figcaption>
              {/* project image */}
              <div
                className="w-full h-full rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  className="w-full h-full group-hover:scale-105 duration-200"
                  src="assets/img/portfolio/ui-ux_mordarn-portfolio.jpg"
                  alt="portfolio-1"
                />
              </div>
              {/* actions */}
              <div className="flex justify-between">
                <button
                  className="modal-open py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Overview
                </button>
                <button
                  className="py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Details
                </button>
              </div>
            </figure>
            {/* modal */}
            <dialog
              className="modal hidden fixed top-0 left-0 w-full h-screen bg-black/70 z-[200] text-white backdrop-blur-sm flex justify-center items-center"
            >
              <div className="container">
                <div
                  className="modal-wrapper min-h-fit max-h-[80vh] bg-gradient-to-r bg-blue-950/20 backdrop-blur-3xl overflow-y-scroll overflow-x-hidden"
                >
                  <div className="container space-y-6">
                    {/* modal header */}
                    <div className="flex justify-between mt-6">
                      <h4 className="text-xl font-bold">Mordarn portfolio UI</h4>
                      <div>
                        <button
                          className="modal-close-btn px-5 py-2 border border-white/20 btn-animate"
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    </div>
                    <hr />
                    {/* modal body */}
                    <div className="flex max-sm:flex-col max-sm:items-center gap-6">
                      {/* image */}
                      <div className="flex-1">
                        <div className="max-w-[400px]">
                          <img
                            className="rounded-xl"
                            src="assets/img/portfolio/ui-ux_mordarn-portfolio.jpg"
                            alt="project-img"
                          />
                        </div>
                      </div>
                      {/* content */}
                      <div className="flex-1 space-y-4">
                        <h4 className="text-3xl font-bold">
                          Mordarn portfolio UI 🔥
                        </h4>
                        <div>
                          <h6 className="text-xl font-bold capitalize inline">
                            description :
                          </h6>
                          <p className="inline">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Pariatur impedit cum suscipit corporis atque
                            vitae vel animi qui harum maxime ipsum reiciendis
                            molestias neque quae quam odio, commodi, eaque
                            inventore. Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Sed in ex ea officia doloremque
                            eius obcaecati debitis quia, repellat voluptates hic
                            ipsum, atque quaerat tenetur delectus! Corporis
                            blanditiis aperiam architecto?
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    {/* modal footer */}
                    <div
                      className="flex justify-between items-center flex-wrap gap-8 pb-6"
                    >
                      <p className="text-xl">Thanks for watching our projects</p>
                      <div className="flex flex-wrap gap-4">
                        <a
                          href="https://dribbble.com/shots/19657102-Modern-Portfolio-Website-UI"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Visit Site
                        </a>

                        <a
                          href="project/modern-portfolio-ui.html"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>

          {/* project three */}
          <div id="hecto" className="relative">
            {/* project card */}
            <figure
              className="py-3 px-4 space-y-3 rounded-lg text-gray-300 bg-purple-500/20 hover:bg-purple-500/25 duration-200 group"
            >
              {/* project title */}
              <div>
                <figcaption className="text-xl capitalize">
                  Hecto - Ecommerce
                </figcaption>
              </div>
              {/* project image */}
              <div
                className="w-full h-full rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  className="w-full h-full group-hover:scale-105 duration-200"
                  src="assets/img/portfolio/hecto-ecommerce.png"
                  alt="portfolio-1"
                />
              </div>
              {/* actions */}
              <div className="flex justify-between">
                <button
                  className="modal-open py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Overview
                </button>
                <button
                  className="py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Details
                </button>
              </div>
            </figure>
            {/* modal */}
            <dialog
              className="modal hidden fixed top-0 left-0 w-full h-screen bg-black/70 z-[200] text-white backdrop-blur-sm flex justify-center items-center"
            >
              <div className="container">
                {/* modal-wrapper */}
                <div
                  className="modal-wrapper min-h-fit max-h-[80vh] bg-gradient-to-r bg-blue-500/20 backdrop-blur-3xl overflow-y-scroll overflow-x-hidden"
                >
                  <div className="container space-y-6">
                    {/* modal header */}
                    <div className="flex justify-between mt-6">
                      <h4 className="text-xl font-bold">Hecto - Ecommerce</h4>
                      <div>
                        <button
                          className="modal-close-btn px-5 py-2 border border-white/20 btn-animate"
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    </div>
                    <hr />
                    {/* modal body */}
                    <div className="flex max-sm:flex-col max-sm:items-center gap-6">
                      {/* image */}
                      <div className="flex-1">
                        <div className="max-w-[400px]">
                          <img
                            className="rounded-xl"
                            src="assets/img/portfolio/hecto-ecommerce.png"
                            alt="project-img"
                          />
                        </div>
                      </div>
                      {/* content */}
                      <div className="flex-1 space-y-4">
                        {/* title */}
                        <h4 className="text-3xl font-bold">
                          Hecto - Complete E-commerce HTML Template 🔥
                        </h4>
                        {/* description */}
                        <div>
                          <h6 className="text-xl font-bold capitalize inline">
                            description :
                          </h6>
                          <p className="inline">
                            Hecto is a fully functional e-commerce web template
                            that provides all the essential pages an online
                            store needs. The template includes key pages such as
                            the Home page, Shop page, Product Details page,
                            Checkout page, and Contact page, offering a
                            comprehensive foundation for any e-commerce website.
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    {/* modal footer */}
                    <div
                      className="flex justify-between items-center flex-wrap gap-8 pb-6"
                    >
                      <p className="text-xl">Thanks for watching our projects</p>
                      <div className="flex flex-wrap gap-4">
                        <a
                          href="https://emamul-mottakin.github.io/hecto/dist/"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Visit Site
                        </a>

                        <a
                          href="project/hecto.html"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>

          {/* project four */}
          <div id="vape-ecommerce-ui" className="relative">
            {/* project card */}
            <figure
              className="py-3 px-4 space-y-3 rounded-lg text-gray-300 bg-[#eeaddc]/20 group hover:bg-[#eeaddc]/25 duration-200"
            >
              {/* project title */}
              <div>
                <figcaption className="text-xl">Vape Ecommerce Web UI</figcaption>
              </div>
              {/* project image */}
              <div
                className="w-full h-full rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  className="w-full h-full group-hover:scale-105 duration-200"
                  src="assets/img/portfolio/ui-ux_vape-ecommerce.png"
                  alt="portfolio-1"
                />
              </div>
              {/* actions */}
              <div className="flex justify-between">
                <button
                  className="modal-open py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Overview
                </button>
                <button
                  className="py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Details
                </button>
              </div>
            </figure>
            {/* modal */}
            <dialog
              className="modal hidden fixed top-0 left-0 w-full h-screen bg-black/70 z-[200] text-white backdrop-blur-sm flex justify-center items-center"
            >
              <div className="container">
                <div
                  className="modal-wrapper min-h-fit max-h-[80vh] bg-gradient-to-r bg-[#eeaddc]/20 backdrop-blur-3xl overflow-y-scroll overflow-x-hidden"
                >
                  <div className="container space-y-6">
                    {/* modal header */}
                    <div className="flex justify-between mt-6">
                      <h4 className="text-xl font-bold">Vape Ecommerce Web UI</h4>
                      <div>
                        <button
                          className="modal-close-btn px-5 py-2 border border-white/20 btn-animate"
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    </div>
                    <hr />
                    {/* modal body */}
                    <div className="flex max-sm:flex-col max-sm:items-center gap-6">
                      {/* image */}
                      <div className="flex-1">
                        <div className="max-w-[400px]">
                          <img
                            className="rounded-xl"
                            src="assets/img/portfolio/ui-ux_vape-ecommerce.png"
                            alt="project-img"
                          />
                        </div>
                      </div>
                      {/* content */}
                      <div className="flex-1 space-y-4">
                        <h4 className="text-3xl font-bold">
                          Vape seling e-commerce UI Design 🔥
                        </h4>
                        <div>
                          <h6 className="text-xl font-bold capitalize inline">
                            description :
                          </h6>
                          <p className="inline">
                            Introducing a captivating vaping e-commerce website
                            UI that sets the stage for an extraordinary online
                            shopping experience. Immerse yourself in a sleek and
                            intuitive design that seamlessly blends style and
                            functionality. Discover an extensive collection of
                            top-tier vape products, elegantly showcased with
                            stunning visuals and detailed descriptions.
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    {/* modal footer */}
                    <div
                      className="flex justify-between items-center flex-wrap gap-8 pb-6"
                    >
                      <p className="text-xl">Thanks for watching our projects</p>
                      <div className="flex flex-wrap gap-4">
                        <a
                          href="https://dribbble.com/shots/21779155-Vape-e-commerce-web-UI"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Visit Site
                        </a>

                        <a
                          href="project/vape-ecommerce-ui.html"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>

          {/* project five */}
          <div id="gutim" className="relative">
            {/* project card */}
            <figure
              className="py-3 px-4 space-y-3 rounded-lg text-gray-300 bg-[#ec4157]/20 hover:bg-[#ec4157]/25 duration-200 group"
            >
              {/* project title */}
              <div>
                <figcaption className="text-xl capitalize">
                  Gutim - Gym Website
                </figcaption>
              </div>
              {/* project image */}
              <div
                className="w-full h-full rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  className="w-full h-full group-hover:scale-105 duration-200"
                  src="assets/img/portfolio/gym-website.png"
                  alt="portfolio-1"
                />
              </div>
              {/* actions */}
              <div className="flex justify-between">
                <button
                  className="modal-open py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Overview
                </button>
                <button
                  className="py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Details
                </button>
              </div>
            </figure>
            {/* modal */}
            <dialog
              className="modal hidden fixed top-0 left-0 w-full h-screen bg-black/70 z-[200] text-white backdrop-blur-sm flex justify-center items-center"
            >
              <div className="container">
                <div
                  className="modal-wrapper min-h-fit max-h-[80vh] bg-gradient-to-r bg-[#ec4157]/20 backdrop-blur-3xl overflow-y-scroll overflow-x-hidden"
                >
                  <div className="container space-y-6">
                    {/* modal header */}
                    <div className="flex justify-between mt-6">
                      <h4 className="text-xl font-bold">Gutim - Gym Website</h4>
                      <div>
                        <button
                          className="modal-close-btn px-5 py-2 border border-white/20 btn-animate"
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    </div>
                    <hr />
                    {/* modal body */}
                    <div className="flex max-sm:flex-col max-sm:items-center gap-6">
                      {/* image */}
                      <div className="flex-1">
                        <div className="max-w-[400px]">
                          <img
                            className="rounded-xl"
                            src="assets/img/portfolio/gym-website.png"
                            alt="project-img"
                          />
                        </div>
                      </div>
                      {/* content */}
                      <div className="flex-1 space-y-4">
                        <h4 className="text-3xl font-bold">
                          Fitness, Workout, Gym Website 🔥
                        </h4>
                        <div>
                          <h6 className="text-xl font-bold capitalize inline">
                            description :
                          </h6>
                          <p className="inline">
                            Gutim is an awesome gym and fitness website template
                            that works great for all kinds of sports-related
                            projects. Its clean, modern design makes it easy to
                            use right away. The platform offers personalized
                            workout plans, helps track progress, and gives
                            useful insights to support your overall health
                            journey.
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    {/* modal footer */}
                    <div
                      className="flex justify-between items-center flex-wrap gap-8 pb-6"
                    >
                      <p className="text-xl">Thanks for watching our projects</p>
                      <div className="flex flex-wrap gap-4">
                        <a
                          href="https://emamul-mottakin.github.io/gutim/"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Visit Site
                        </a>

                        <a
                          href="project/gutim.html"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>

          {/* project six */}
          <div id="medi" className="relative">
            {/* project card */}
            <figure
              className="py-3 px-4 space-y-3 rounded-lg text-gray-300 bg-blue-500/20 hover:bg-blue-500/25 duration-200 group"
            >
              {/* project title */}
              <div>
                <figcaption className="text-xl capitalize">
                  Medi - health website
                </figcaption>
              </div>
              {/* project image */}
              <div
                className="w-full h-full rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  className="w-full h-full group-hover:scale-105 duration-200"
                  src="assets/img/portfolio/medi.png"
                  alt="portfolio-1"
                />
              </div>
              {/* actions */}
              <div className="flex justify-between">
                <button
                  className="modal-open py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Overview
                </button>
                <button
                  className="py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Details
                </button>
              </div>
            </figure>
            {/* modal */}
            <dialog
              className="modal hidden fixed top-0 left-0 w-full h-screen bg-black/70 z-[200] text-white backdrop-blur-sm flex justify-center items-center"
            >
              <div className="container">
                {/* modal-wrapper */}
                <div
                  className="modal-wrapper min-h-fit max-h-[80vh] bg-gradient-to-r bg-blue-500/20 backdrop-blur-3xl overflow-y-scroll overflow-x-hidden"
                >
                  <div className="container space-y-6">
                    {/* modal header */}
                    <div className="flex justify-between mt-6">
                      <h4 className="text-xl font-bold">Medi - health website</h4>
                      <div>
                        <button
                          className="modal-close-btn px-5 py-2 border border-white/20 btn-animate"
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    </div>
                    <hr />
                    {/* modal body */}
                    <div className="flex max-sm:flex-col max-sm:items-center gap-6">
                      {/* image */}
                      <div className="flex-1">
                        <div className="max-w-[400px]">
                          <img
                            className="rounded-xl"
                            src="assets/img/portfolio/medi.png"
                            alt="project-img"
                          />
                        </div>
                      </div>
                      {/* content */}
                      <div className="flex-1 space-y-4">
                        {/* title */}
                        <h4 className="text-3xl font-bold">
                          Medi - Healthcare & Doctor Appointment Booking
                          Platform 🔥
                        </h4>
                        {/* description */}
                        <div>
                          <h6 className="text-xl font-bold capitalize inline">
                            description :
                          </h6>
                          <p className="inline">
                            Medi is a health and care-related website that I
                            developed as part of a learning project to enhance
                            my web design skills. While the design is originally
                            from Colorlib's Medi Template, I recreated the
                            entire webpage from scratch using HTML, CSS, and
                            SASS to refine my coding and styling abilities. This
                            project helped me gain a deeper understanding of
                            frontend development and the importance of clean,
                            efficient code.
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    {/* modal footer */}
                    <div
                      className="flex justify-between items-center flex-wrap gap-8 pb-6"
                    >
                      <p className="text-xl">Thanks for watching our projects</p>
                      <div className="flex flex-wrap gap-4">
                        <a
                          href="https://emamul-mottakin.github.io/Medi/"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Visit Site
                        </a>

                        <a
                          href="project/medi.html"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>
        </div>
        {/* tab-contents (graphics design projects) */}
        <div
          id="graphics-design"
          className="hidden tab-content grid gap-8 justify-center justify-items-center md:grid-cols-2 lg:grid-cols-3"
        >
          {/* project one */}
          <div id="pm-dashboard" className="relative">
            <figure
              className="py-3 px-4 space-y-3 rounded-lg text-gray-300 bg-gray-500/20 hover:bg-gray-500/25 duration-200 group"
            >
              {/* project title */}
              <div>
                <figcaption className="text-xl">
                  Project Management Dashboard
                </figcaption>
              </div>
              {/* project image */}
              <div
                className="w-full h-full rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  className="w-full h-full group-hover:scale-105 duration-200"
                  src="assets/img/portfolio/dashboard-design.png"
                  alt="portfolio-1"
                />
              </div>
              {/* action btns */}
              <div className="flex justify-between">
                <button
                  className="modal-open py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Overview
                </button>
                <button
                  className="py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Details
                </button>
              </div>
            </figure>
            {/* modal */}
            <dialog
              className="modal hidden fixed top-0 left-0 w-full h-screen bg-black/70 z-[200] text-white backdrop-blur-sm flex justify-center items-center"
            >
              <div className="container">
                <div
                  className="modal-wrapper min-h-fit max-h-[80vh] bg-gradient-to-r bg-gray-500/20 backdrop-blur-3xl overflow-y-scroll overflow-x-hidden"
                >
                  <div className="container space-y-6">
                    {/* modal header */}
                    <div className="flex justify-between mt-6">
                      <h4 className="text-xl font-bold">
                        Project Management Dashboard
                      </h4>
                      <div>
                        <button
                          className="modal-close-btn px-5 py-2 border border-white/20 btn-animate"
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    </div>
                    <hr />
                    {/* modal body */}
                    <div className="flex max-sm:flex-col max-sm:items-center gap-6">
                      {/* image */}
                      <div className="flex-1">
                        <div className="max-w-[400px]">
                          <img
                            className="rounded-xl"
                            src="assets/img/portfolio/dashboard-design.png"
                            alt="project-img"
                          />
                        </div>
                      </div>
                      {/* content */}
                      <div className="flex-1 space-y-4">
                        <h4 className="text-3xl font-bold">
                          Project Management Dashboard 🔥
                        </h4>
                        <div>
                          <h6 className="text-xl font-bold capitalize inline">
                            description :
                          </h6>
                          <p className="inline">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Pariatur impedit cum suscipit corporis atque
                            vitae vel animi qui harum maxime ipsum reiciendis
                            molestias neque quae quam odio, commodi, eaque
                            inventore. Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Sed in ex ea officia doloremque
                            eius obcaecati debitis quia, repellat voluptates hic
                            ipsum, atque quaerat tenetur delectus! Corporis
                            blanditiis aperiam architecto?
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    {/* modal footer */}
                    <div
                      className="flex justify-between items-center flex-wrap gap-8 pb-6"
                    >
                      <p className="text-xl">Thanks for watching our projects</p>
                      <div className="flex flex-wrap gap-4">
                        <a
                          href="https://dribbble.com/emamul-mottakin"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Visit Site
                        </a>

                        <a
                          href="project/modern-portfolio-ui.html"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>

          {/* project two */}
          <div id="modern-portfolio-ui" className="relative">
            {/* project card */}
            <figure
              className="py-3 px-4 space-y-3 rounded-lg text-gray-300 bg-blue-950/20 hover:bg-blue-950/25 duration-200 group"
            >
              {/* project title */}
              <figcaption>
                <h4 className="text-xl capitalize">Mordern portfolio UI</h4>
              </figcaption>
              {/* project image */}
              <div
                className="w-full h-full rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  className="w-full h-full group-hover:scale-105 duration-200"
                  src="assets/img/portfolio/ui-ux_mordarn-portfolio.jpg"
                  alt="portfolio-1"
                />
              </div>
              {/* actions */}
              <div className="flex justify-between">
                <button
                  className="modal-open py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Overview
                </button>
                <button
                  className="py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Details
                </button>
              </div>
            </figure>
            {/* modal */}
            <dialog
              className="modal hidden fixed top-0 left-0 w-full h-screen bg-black/70 z-[200] text-white backdrop-blur-sm flex justify-center items-center"
            >
              <div className="container">
                <div
                  className="modal-wrapper min-h-fit max-h-[80vh] bg-gradient-to-r bg-blue-950/20 backdrop-blur-3xl overflow-y-scroll overflow-x-hidden"
                >
                  <div className="container space-y-6">
                    {/* modal header */}
                    <div className="flex justify-between mt-6">
                      <h4 className="text-xl font-bold">Mordarn portfolio UI</h4>
                      <div>
                        <button
                          className="modal-close-btn px-5 py-2 border border-white/20 btn-animate"
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    </div>
                    <hr />
                    {/* modal body */}
                    <div className="flex max-sm:flex-col max-sm:items-center gap-6">
                      {/* image */}
                      <div className="flex-1">
                        <div className="max-w-[400px]">
                          <img
                            className="rounded-xl"
                            src="assets/img/portfolio/ui-ux_mordarn-portfolio.jpg"
                            alt="project-img"
                          />
                        </div>
                      </div>
                      {/* content */}
                      <div className="flex-1 space-y-4">
                        <h4 className="text-3xl font-bold">
                          Mordarn portfolio UI 🔥
                        </h4>
                        <div>
                          <h6 className="text-xl font-bold capitalize inline">
                            description :
                          </h6>
                          <p className="inline">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Pariatur impedit cum suscipit corporis atque
                            vitae vel animi qui harum maxime ipsum reiciendis
                            molestias neque quae quam odio, commodi, eaque
                            inventore. Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Sed in ex ea officia doloremque
                            eius obcaecati debitis quia, repellat voluptates hic
                            ipsum, atque quaerat tenetur delectus! Corporis
                            blanditiis aperiam architecto?
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    {/* modal footer */}
                    <div
                      className="flex justify-between items-center flex-wrap gap-8 pb-6"
                    >
                      <p className="text-xl">Thanks for watching our projects</p>
                      <div className="flex flex-wrap gap-4">
                        <a
                          href="https://dribbble.com/shots/19657102-Modern-Portfolio-Website-UI"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Visit Site
                        </a>

                        <a
                          href="project/modern-portfolio-ui.html"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>

          {/* project three */}
          <div id="hecto" className="relative">
            {/* project card */}
            <figure
              className="py-3 px-4 space-y-3 rounded-lg text-gray-300 bg-purple-500/20 hover:bg-purple-500/25 duration-200 group"
            >
              {/* project title */}
              <div>
                <figcaption className="text-xl capitalize">
                  Hecto - Ecommerce
                </figcaption>
              </div>
              {/* project image */}
              <div
                className="w-full h-full rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  className="w-full h-full group-hover:scale-105 duration-200"
                  src="assets/img/portfolio/hecto-ecommerce.png"
                  alt="portfolio-1"
                />
              </div>
              {/* actions */}
              <div className="flex justify-between">
                <button
                  className="modal-open py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Overview
                </button>
                <button
                  className="py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Details
                </button>
              </div>
            </figure>
            {/* modal */}
            <dialog
              className="modal hidden fixed top-0 left-0 w-full h-screen bg-black/70 z-[200] text-white backdrop-blur-sm flex justify-center items-center"
            >
              <div className="container">
                {/* modal-wrapper */}
                <div
                  className="modal-wrapper min-h-fit max-h-[80vh] bg-gradient-to-r bg-blue-500/20 backdrop-blur-3xl overflow-y-scroll overflow-x-hidden"
                >
                  <div className="container space-y-6">
                    {/* modal header */}
                    <div className="flex justify-between mt-6">
                      <h4 className="text-xl font-bold">Hecto - Ecommerce</h4>
                      <div>
                        <button
                          className="modal-close-btn px-5 py-2 border border-white/20 btn-animate"
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    </div>
                    <hr />
                    {/* modal body */}
                    <div className="flex max-sm:flex-col max-sm:items-center gap-6">
                      {/* image */}
                      <div className="flex-1">
                        <div className="max-w-[400px]">
                          <img
                            className="rounded-xl"
                            src="assets/img/portfolio/hecto-ecommerce.png"
                            alt="project-img"
                          />
                        </div>
                      </div>
                      {/* content */}
                      <div className="flex-1 space-y-4">
                        {/* title */}
                        <h4 className="text-3xl font-bold">
                          Hecto - Complete E-commerce HTML Template 🔥
                        </h4>
                        {/* description */}
                        <div>
                          <h6 className="text-xl font-bold capitalize inline">
                            description :
                          </h6>
                          <p className="inline">
                            Hecto is a fully functional e-commerce web template
                            that provides all the essential pages an online
                            store needs. The template includes key pages such as
                            the Home page, Shop page, Product Details page,
                            Checkout page, and Contact page, offering a
                            comprehensive foundation for any e-commerce website.
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    {/* modal footer */}
                    <div
                      className="flex justify-between items-center flex-wrap gap-8 pb-6"
                    >
                      <p className="text-xl">Thanks for watching our projects</p>
                      <div className="flex flex-wrap gap-4">
                        <a
                          href="https://emamul-mottakin.github.io/hecto/dist/"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Visit Site
                        </a>

                        <a
                          href="project/hecto.html"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>

          {/* project four */}
          <div id="vape-ecommerce-ui" className="relative">
            {/* project card */}
            <figure
              className="py-3 px-4 space-y-3 rounded-lg text-gray-300 bg-[#eeaddc]/20 group hover:bg-[#eeaddc]/25 duration-200"
            >
              {/* project title */}
              <div>
                <figcaption className="text-xl">Vape Ecommerce Web UI</figcaption>
              </div>
              {/* project image */}
              <div
                className="w-full h-full rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  className="w-full h-full group-hover:scale-105 duration-200"
                  src="assets/img/portfolio/ui-ux_vape-ecommerce.png"
                  alt="portfolio-1"
                />
              </div>
              {/* actions */}
              <div className="flex justify-between">
                <button
                  className="modal-open py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Overview
                </button>
                <button
                  className="py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Details
                </button>
              </div>
            </figure>
            {/* modal */}
            <dialog
              className="modal hidden fixed top-0 left-0 w-full h-screen bg-black/70 z-[200] text-white backdrop-blur-sm flex justify-center items-center"
            >
              <div className="container">
                <div
                  className="modal-wrapper min-h-fit max-h-[80vh] bg-gradient-to-r bg-[#eeaddc]/20 backdrop-blur-3xl overflow-y-scroll overflow-x-hidden"
                >
                  <div className="container space-y-6">
                    {/* modal header */}
                    <div className="flex justify-between mt-6">
                      <h4 className="text-xl font-bold">Vape Ecommerce Web UI</h4>
                      <div>
                        <button
                          className="modal-close-btn px-5 py-2 border border-white/20 btn-animate"
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    </div>
                    <hr />
                    {/* modal body */}
                    <div className="flex max-sm:flex-col max-sm:items-center gap-6">
                      {/* image */}
                      <div className="flex-1">
                        <div className="max-w-[400px]">
                          <img
                            className="rounded-xl"
                            src="assets/img/portfolio/ui-ux_vape-ecommerce.png"
                            alt="project-img"
                          />
                        </div>
                      </div>
                      {/* content */}
                      <div className="flex-1 space-y-4">
                        <h4 className="text-3xl font-bold">
                          Vape seling e-commerce UI Design 🔥
                        </h4>
                        <div>
                          <h6 className="text-xl font-bold capitalize inline">
                            description :
                          </h6>
                          <p className="inline">
                            Introducing a captivating vaping e-commerce website
                            UI that sets the stage for an extraordinary online
                            shopping experience. Immerse yourself in a sleek and
                            intuitive design that seamlessly blends style and
                            functionality. Discover an extensive collection of
                            top-tier vape products, elegantly showcased with
                            stunning visuals and detailed descriptions.
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    {/* modal footer */}
                    <div
                      className="flex justify-between items-center flex-wrap gap-8 pb-6"
                    >
                      <p className="text-xl">Thanks for watching our projects</p>
                      <div className="flex flex-wrap gap-4">
                        <a
                          href="https://dribbble.com/shots/21779155-Vape-e-commerce-web-UI"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Visit Site
                        </a>

                        <a
                          href="project/vape-ecommerce-ui.html"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>

          {/* project five */}
          <div id="gutim" className="relative">
            {/* project card */}
            <figure
              className="py-3 px-4 space-y-3 rounded-lg text-gray-300 bg-[#ec4157]/20 hover:bg-[#ec4157]/25 duration-200 group"
            >
              {/* project title */}
              <div>
                <figcaption className="text-xl capitalize">
                  Gutim - Gym Website
                </figcaption>
              </div>
              {/* project image */}
              <div
                className="w-full h-full rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  className="w-full h-full group-hover:scale-105 duration-200"
                  src="assets/img/portfolio/gym-website.png"
                  alt="portfolio-1"
                />
              </div>
              {/* actions */}
              <div className="flex justify-between">
                <button
                  className="modal-open py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Overview
                </button>
                <button
                  className="py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Details
                </button>
              </div>
            </figure>
            {/* modal */}
            <dialog
              className="modal hidden fixed top-0 left-0 w-full h-screen bg-black/70 z-[200] text-white backdrop-blur-sm flex justify-center items-center"
            >
              <div className="container">
                <div
                  className="modal-wrapper min-h-fit max-h-[80vh] bg-gradient-to-r bg-[#ec4157]/20 backdrop-blur-3xl overflow-y-scroll overflow-x-hidden"
                >
                  <div className="container space-y-6">
                    {/* modal header */}
                    <div className="flex justify-between mt-6">
                      <h4 className="text-xl font-bold">Gutim - Gym Website</h4>
                      <div>
                        <button
                          className="modal-close-btn px-5 py-2 border border-white/20 btn-animate"
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    </div>
                    <hr />
                    {/* modal body */}
                    <div className="flex max-sm:flex-col max-sm:items-center gap-6">
                      {/* image */}
                      <div className="flex-1">
                        <div className="max-w-[400px]">
                          <img
                            className="rounded-xl"
                            src="assets/img/portfolio/gym-website.png"
                            alt="project-img"
                          />
                        </div>
                      </div>
                      {/* content */}
                      <div className="flex-1 space-y-4">
                        <h4 className="text-3xl font-bold">
                          Fitness, Workout, Gym Website 🔥
                        </h4>
                        <div>
                          <h6 className="text-xl font-bold capitalize inline">
                            description :
                          </h6>
                          <p className="inline">
                            Gutim is an awesome gym and fitness website template
                            that works great for all kinds of sports-related
                            projects. Its clean, modern design makes it easy to
                            use right away. The platform offers personalized
                            workout plans, helps track progress, and gives
                            useful insights to support your overall health
                            journey.
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    {/* modal footer */}
                    <div
                      className="flex justify-between items-center flex-wrap gap-8 pb-6"
                    >
                      <p className="text-xl">Thanks for watching our projects</p>
                      <div className="flex flex-wrap gap-4">
                        <a
                          href="https://emamul-mottakin.github.io/gutim/"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Visit Site
                        </a>

                        <a
                          href="project/gutim.html"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>

          {/* project six */}
          <div id="medi" className="relative">
            {/* project card */}
            <figure
              className="py-3 px-4 space-y-3 rounded-lg text-gray-300 bg-blue-500/20 hover:bg-blue-500/25 duration-200 group"
            >
              {/* project title */}
              <div>
                <figcaption className="text-xl capitalize">
                  Medi - health website
                </figcaption>
              </div>
              {/* project image */}
              <div
                className="w-full h-full rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  className="w-full h-full group-hover:scale-105 duration-200"
                  src="assets/img/portfolio/medi.png"
                  alt="portfolio-1"
                />
              </div>
              {/* actions */}
              <div className="flex justify-between">
                <button
                  className="modal-open py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Overview
                </button>
                <button
                  className="py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Details
                </button>
              </div>
            </figure>
            {/* modal */}
            <dialog
              className="modal hidden fixed top-0 left-0 w-full h-screen bg-black/70 z-[200] text-white backdrop-blur-sm flex justify-center items-center"
            >
              <div className="container">
                {/* modal-wrapper */}
                <div
                  className="modal-wrapper min-h-fit max-h-[80vh] bg-gradient-to-r bg-blue-500/20 backdrop-blur-3xl overflow-y-scroll overflow-x-hidden"
                >
                  <div className="container space-y-6">
                    {/* modal header */}
                    <div className="flex justify-between mt-6">
                      <h4 className="text-xl font-bold">Medi - health website</h4>
                      <div>
                        <button
                          className="modal-close-btn px-5 py-2 border border-white/20 btn-animate"
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    </div>
                    <hr />
                    {/* modal body */}
                    <div className="flex max-sm:flex-col max-sm:items-center gap-6">
                      {/* image */}
                      <div className="flex-1">
                        <div className="max-w-[400px]">
                          <img
                            className="rounded-xl"
                            src="assets/img/portfolio/medi.png"
                            alt="project-img"
                          />
                        </div>
                      </div>
                      {/* content */}
                      <div className="flex-1 space-y-4">
                        {/* title */}
                        <h4 className="text-3xl font-bold">
                          Medi - Healthcare & Doctor Appointment Booking
                          Platform 🔥
                        </h4>
                        {/* description */}
                        <div>
                          <h6 className="text-xl font-bold capitalize inline">
                            description :
                          </h6>
                          <p className="inline">
                            Medi is a health and care-related website that I
                            developed as part of a learning project to enhance
                            my web design skills. While the design is originally
                            from Colorlib's Medi Template, I recreated the
                            entire webpage from scratch using HTML, CSS, and
                            SASS to refine my coding and styling abilities. This
                            project helped me gain a deeper understanding of
                            frontend development and the importance of clean,
                            efficient code.
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    {/* modal footer */}
                    <div
                      className="flex justify-between items-center flex-wrap gap-8 pb-6"
                    >
                      <p className="text-xl">Thanks for watching our projects</p>
                      <div className="flex flex-wrap gap-4">
                        <a
                          href="https://emamul-mottakin.github.io/Medi/"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Visit Site
                        </a>

                        <a
                          href="project/medi.html"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>
        </div>
        {/* tab-contents (digital marketing projects) */}
        <div
          id="digital-marketing"
          className="hidden tab-content grid gap-8 justify-center justify-items-center md:grid-cols-2 lg:grid-cols-3"
        >
          {/* project one */}
          <div id="pm-dashboard" className="relative">
            <figure
              className="py-3 px-4 space-y-3 rounded-lg text-gray-300 bg-gray-500/20 hover:bg-gray-500/25 duration-200 group"
            >
              {/* project title */}
              <div>
                <figcaption className="text-xl">
                  Project Management Dashboard
                </figcaption>
              </div>
              {/* project image */}
              <div
                className="w-full h-full rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  className="w-full h-full group-hover:scale-105 duration-200"
                  src="assets/img/portfolio/dashboard-design.png"
                  alt="portfolio-1"
                />
              </div>
              {/* action btns */}
              <div className="flex justify-between">
                <button
                  className="modal-open py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Overview
                </button>
                <button
                  className="py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Details
                </button>
              </div>
            </figure>
            {/* modal */}
            <dialog
              className="modal hidden fixed top-0 left-0 w-full h-screen bg-black/70 z-[200] text-white backdrop-blur-sm flex justify-center items-center"
            >
              <div className="container">
                <div
                  className="modal-wrapper min-h-fit max-h-[80vh] bg-gradient-to-r bg-gray-500/20 backdrop-blur-3xl overflow-y-scroll overflow-x-hidden"
                >
                  <div className="container space-y-6">
                    {/* modal header */}
                    <div className="flex justify-between mt-6">
                      <h4 className="text-xl font-bold">
                        Project Management Dashboard
                      </h4>
                      <div>
                        <button
                          className="modal-close-btn px-5 py-2 border border-white/20 btn-animate"
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    </div>
                    <hr />
                    {/* modal body */}
                    <div className="flex max-sm:flex-col max-sm:items-center gap-6">
                      {/* image */}
                      <div className="flex-1">
                        <div className="max-w-[400px]">
                          <img
                            className="rounded-xl"
                            src="assets/img/portfolio/dashboard-design.png"
                            alt="project-img"
                          />
                        </div>
                      </div>
                      {/* content */}
                      <div className="flex-1 space-y-4">
                        <h4 className="text-3xl font-bold">
                          Project Management Dashboard 🔥
                        </h4>
                        <div>
                          <h6 className="text-xl font-bold capitalize inline">
                            description :
                          </h6>
                          <p className="inline">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Pariatur impedit cum suscipit corporis atque
                            vitae vel animi qui harum maxime ipsum reiciendis
                            molestias neque quae quam odio, commodi, eaque
                            inventore. Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Sed in ex ea officia doloremque
                            eius obcaecati debitis quia, repellat voluptates hic
                            ipsum, atque quaerat tenetur delectus! Corporis
                            blanditiis aperiam architecto?
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    {/* modal footer */}
                    <div
                      className="flex justify-between items-center flex-wrap gap-8 pb-6"
                    >
                      <p className="text-xl">Thanks for watching our projects</p>
                      <div className="flex flex-wrap gap-4">
                        <a
                          href="https://dribbble.com/emamul-mottakin"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Visit Site
                        </a>

                        <a
                          href="project/modern-portfolio-ui.html"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>

          {/* project two */}
          <div id="modern-portfolio-ui" className="relative">
            {/* project card */}
            <figure
              className="py-3 px-4 space-y-3 rounded-lg text-gray-300 bg-blue-950/20 hover:bg-blue-950/25 duration-200 group"
            >
              {/* project title */}
              <figcaption>
                <h4 className="text-xl capitalize">Mordern portfolio UI</h4>
              </figcaption>
              {/* project image */}
              <div
                className="w-full h-full rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  className="w-full h-full group-hover:scale-105 duration-200"
                  src="assets/img/portfolio/ui-ux_mordarn-portfolio.jpg"
                  alt="portfolio-1"
                />
              </div>
              {/* actions */}
              <div className="flex justify-between">
                <button
                  className="modal-open py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Overview
                </button>
                <button
                  className="py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Details
                </button>
              </div>
            </figure>
            {/* modal */}
            <dialog
              className="modal hidden fixed top-0 left-0 w-full h-screen bg-black/70 z-[200] text-white backdrop-blur-sm flex justify-center items-center"
            >
              <div className="container">
                <div
                  className="modal-wrapper min-h-fit max-h-[80vh] bg-gradient-to-r bg-blue-950/20 backdrop-blur-3xl overflow-y-scroll overflow-x-hidden"
                >
                  <div className="container space-y-6">
                    {/* modal header */}
                    <div className="flex justify-between mt-6">
                      <h4 className="text-xl font-bold">Mordarn portfolio UI</h4>
                      <div>
                        <button
                          className="modal-close-btn px-5 py-2 border border-white/20 btn-animate"
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    </div>
                    <hr />
                    {/* modal body */}
                    <div className="flex max-sm:flex-col max-sm:items-center gap-6">
                      {/* image */}
                      <div className="flex-1">
                        <div className="max-w-[400px]">
                          <img
                            className="rounded-xl"
                            src="assets/img/portfolio/ui-ux_mordarn-portfolio.jpg"
                            alt="project-img"
                          />
                        </div>
                      </div>
                      {/* content */}
                      <div className="flex-1 space-y-4">
                        <h4 className="text-3xl font-bold">
                          Mordarn portfolio UI 🔥
                        </h4>
                        <div>
                          <h6 className="text-xl font-bold capitalize inline">
                            description :
                          </h6>
                          <p className="inline">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Pariatur impedit cum suscipit corporis atque
                            vitae vel animi qui harum maxime ipsum reiciendis
                            molestias neque quae quam odio, commodi, eaque
                            inventore. Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Sed in ex ea officia doloremque
                            eius obcaecati debitis quia, repellat voluptates hic
                            ipsum, atque quaerat tenetur delectus! Corporis
                            blanditiis aperiam architecto?
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    {/* modal footer */}
                    <div
                      className="flex justify-between items-center flex-wrap gap-8 pb-6"
                    >
                      <p className="text-xl">Thanks for watching our projects</p>
                      <div className="flex flex-wrap gap-4">
                        <a
                          href="https://dribbble.com/shots/19657102-Modern-Portfolio-Website-UI"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Visit Site
                        </a>

                        <a
                          href="project/modern-portfolio-ui.html"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>

          {/* project three */}
          <div id="hecto" className="relative">
            {/* project card */}
            <figure
              className="py-3 px-4 space-y-3 rounded-lg text-gray-300 bg-purple-500/20 hover:bg-purple-500/25 duration-200 group"
            >
              {/* project title */}
              <div>
                <figcaption className="text-xl capitalize">
                  Hecto - Ecommerce
                </figcaption>
              </div>
              {/* project image */}
              <div
                className="w-full h-full rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  className="w-full h-full group-hover:scale-105 duration-200"
                  src="assets/img/portfolio/hecto-ecommerce.png"
                  alt="portfolio-1"
                />
              </div>
              {/* actions */}
              <div className="flex justify-between">
                <button
                  className="modal-open py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Overview
                </button>
                <button
                  className="py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Details
                </button>
              </div>
            </figure>
            {/* modal */}
            <dialog
              className="modal hidden fixed top-0 left-0 w-full h-screen bg-black/70 z-[200] text-white backdrop-blur-sm flex justify-center items-center"
            >
              <div className="container">
                {/* modal-wrapper */}
                <div
                  className="modal-wrapper min-h-fit max-h-[80vh] bg-gradient-to-r bg-blue-500/20 backdrop-blur-3xl overflow-y-scroll overflow-x-hidden"
                >
                  <div className="container space-y-6">
                    {/* modal header */}
                    <div className="flex justify-between mt-6">
                      <h4 className="text-xl font-bold">Hecto - Ecommerce</h4>
                      <div>
                        <button
                          className="modal-close-btn px-5 py-2 border border-white/20 btn-animate"
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    </div>
                    <hr />
                    {/* modal body */}
                    <div className="flex max-sm:flex-col max-sm:items-center gap-6">
                      {/* image */}
                      <div className="flex-1">
                        <div className="max-w-[400px]">
                          <img
                            className="rounded-xl"
                            src="assets/img/portfolio/hecto-ecommerce.png"
                            alt="project-img"
                          />
                        </div>
                      </div>
                      {/* content */}
                      <div className="flex-1 space-y-4">
                        {/* title */}
                        <h4 className="text-3xl font-bold">
                          Hecto - Complete E-commerce HTML Template 🔥
                        </h4>
                        {/* description */}
                        <div>
                          <h6 className="text-xl font-bold capitalize inline">
                            description :
                          </h6>
                          <p className="inline">
                            Hecto is a fully functional e-commerce web template
                            that provides all the essential pages an online
                            store needs. The template includes key pages such as
                            the Home page, Shop page, Product Details page,
                            Checkout page, and Contact page, offering a
                            comprehensive foundation for any e-commerce website.
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    {/* modal footer */}
                    <div
                      className="flex justify-between items-center flex-wrap gap-8 pb-6"
                    >
                      <p className="text-xl">Thanks for watching our projects</p>
                      <div className="flex flex-wrap gap-4">
                        <a
                          href="https://emamul-mottakin.github.io/hecto/dist/"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Visit Site
                        </a>

                        <a
                          href="project/hecto.html"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>

          {/* project four */}
          <div id="vape-ecommerce-ui" className="relative">
            {/* project card */}
            <figure
              className="py-3 px-4 space-y-3 rounded-lg text-gray-300 bg-[#eeaddc]/20 group hover:bg-[#eeaddc]/25 duration-200"
            >
              {/* project title */}
              <div>
                <figcaption className="text-xl">Vape Ecommerce Web UI</figcaption>
              </div>
              {/* project image */}
              <div
                className="w-full h-full rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  className="w-full h-full group-hover:scale-105 duration-200"
                  src="assets/img/portfolio/ui-ux_vape-ecommerce.png"
                  alt="portfolio-1"
                />
              </div>
              {/* actions */}
              <div className="flex justify-between">
                <button
                  className="modal-open py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Overview
                </button>
                <button
                  className="py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Details
                </button>
              </div>
            </figure>
            {/* modal */}
            <dialog
              className="modal hidden fixed top-0 left-0 w-full h-screen bg-black/70 z-[200] text-white backdrop-blur-sm flex justify-center items-center"
            >
              <div className="container">
                <div
                  className="modal-wrapper min-h-fit max-h-[80vh] bg-gradient-to-r bg-[#eeaddc]/20 backdrop-blur-3xl overflow-y-scroll overflow-x-hidden"
                >
                  <div className="container space-y-6">
                    {/* modal header */}
                    <div className="flex justify-between mt-6">
                      <h4 className="text-xl font-bold">Vape Ecommerce Web UI</h4>
                      <div>
                        <button
                          className="modal-close-btn px-5 py-2 border border-white/20 btn-animate"
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    </div>
                    <hr />
                    {/* modal body */}
                    <div className="flex max-sm:flex-col max-sm:items-center gap-6">
                      {/* image */}
                      <div className="flex-1">
                        <div className="max-w-[400px]">
                          <img
                            className="rounded-xl"
                            src="assets/img/portfolio/ui-ux_vape-ecommerce.png"
                            alt="project-img"
                          />
                        </div>
                      </div>
                      {/* content */}
                      <div className="flex-1 space-y-4">
                        <h4 className="text-3xl font-bold">
                          Vape seling e-commerce UI Design 🔥
                        </h4>
                        <div>
                          <h6 className="text-xl font-bold capitalize inline">
                            description :
                          </h6>
                          <p className="inline">
                            Introducing a captivating vaping e-commerce website
                            UI that sets the stage for an extraordinary online
                            shopping experience. Immerse yourself in a sleek and
                            intuitive design that seamlessly blends style and
                            functionality. Discover an extensive collection of
                            top-tier vape products, elegantly showcased with
                            stunning visuals and detailed descriptions.
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    {/* modal footer */}
                    <div
                      className="flex justify-between items-center flex-wrap gap-8 pb-6"
                    >
                      <p className="text-xl">Thanks for watching our projects</p>
                      <div className="flex flex-wrap gap-4">
                        <a
                          href="https://dribbble.com/shots/21779155-Vape-e-commerce-web-UI"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Visit Site
                        </a>

                        <a
                          href="project/vape-ecommerce-ui.html"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>

          {/* project five */}
          <div id="gutim" className="relative">
            {/* project card */}
            <figure
              className="py-3 px-4 space-y-3 rounded-lg text-gray-300 bg-[#ec4157]/20 hover:bg-[#ec4157]/25 duration-200 group"
            >
              {/* project title */}
              <div>
                <figcaption className="text-xl capitalize">
                  Gutim - Gym Website
                </figcaption>
              </div>
              {/* project image */}
              <div
                className="w-full h-full rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  className="w-full h-full group-hover:scale-105 duration-200"
                  src="assets/img/portfolio/gym-website.png"
                  alt="portfolio-1"
                />
              </div>
              {/* actions */}
              <div className="flex justify-between">
                <button
                  className="modal-open py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Overview
                </button>
                <button
                  className="py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Details
                </button>
              </div>
            </figure>
            {/* modal */}
            <dialog
              className="modal hidden fixed top-0 left-0 w-full h-screen bg-black/70 z-[200] text-white backdrop-blur-sm flex justify-center items-center"
            >
              <div className="container">
                <div
                  className="modal-wrapper min-h-fit max-h-[80vh] bg-gradient-to-r bg-[#ec4157]/20 backdrop-blur-3xl overflow-y-scroll overflow-x-hidden"
                >
                  <div className="container space-y-6">
                    {/* modal header */}
                    <div className="flex justify-between mt-6">
                      <h4 className="text-xl font-bold">Gutim - Gym Website</h4>
                      <div>
                        <button
                          className="modal-close-btn px-5 py-2 border border-white/20 btn-animate"
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    </div>
                    <hr />
                    {/* modal body */}
                    <div className="flex max-sm:flex-col max-sm:items-center gap-6">
                      {/* image */}
                      <div className="flex-1">
                        <div className="max-w-[400px]">
                          <img
                            className="rounded-xl"
                            src="assets/img/portfolio/gym-website.png"
                            alt="project-img"
                          />
                        </div>
                      </div>
                      {/* content */}
                      <div className="flex-1 space-y-4">
                        <h4 className="text-3xl font-bold">
                          Fitness, Workout, Gym Website 🔥
                        </h4>
                        <div>
                          <h6 className="text-xl font-bold capitalize inline">
                            description :
                          </h6>
                          <p className="inline">
                            Gutim is an awesome gym and fitness website template
                            that works great for all kinds of sports-related
                            projects. Its clean, modern design makes it easy to
                            use right away. The platform offers personalized
                            workout plans, helps track progress, and gives
                            useful insights to support your overall health
                            journey.
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    {/* modal footer */}
                    <div
                      className="flex justify-between items-center flex-wrap gap-8 pb-6"
                    >
                      <p className="text-xl">Thanks for watching our projects</p>
                      <div className="flex flex-wrap gap-4">
                        <a
                          href="https://emamul-mottakin.github.io/gutim/"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Visit Site
                        </a>

                        <a
                          href="project/gutim.html"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>

          {/* project six */}
          <div id="medi" className="relative">
            {/* project card */}
            <figure
              className="py-3 px-4 space-y-3 rounded-lg text-gray-300 bg-blue-500/20 hover:bg-blue-500/25 duration-200 group"
            >
              {/* project title */}
              <div>
                <figcaption className="text-xl capitalize">
                  Medi - health website
                </figcaption>
              </div>
              {/* project image */}
              <div
                className="w-full h-full rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  className="w-full h-full group-hover:scale-105 duration-200"
                  src="assets/img/portfolio/medi.png"
                  alt="portfolio-1"
                />
              </div>
              {/* actions */}
              <div className="flex justify-between">
                <button
                  className="modal-open py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Overview
                </button>
                <button
                  className="py-1 px-4 rounded-full btn-animate border border-gray-300/5"
                >
                  Details
                </button>
              </div>
            </figure>
            {/* modal */}
            <dialog
              className="modal hidden fixed top-0 left-0 w-full h-screen bg-black/70 z-[200] text-white backdrop-blur-sm flex justify-center items-center"
            >
              <div className="container">
                {/* modal-wrapper */}
                <div
                  className="modal-wrapper min-h-fit max-h-[80vh] bg-gradient-to-r bg-blue-500/20 backdrop-blur-3xl overflow-y-scroll overflow-x-hidden"
                >
                  <div className="container space-y-6">
                    {/* modal header */}
                    <div className="flex justify-between mt-6">
                      <h4 className="text-xl font-bold">Medi - health website</h4>
                      <div>
                        <button
                          className="modal-close-btn px-5 py-2 border border-white/20 btn-animate"
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    </div>
                    <hr />
                    {/* modal body */}
                    <div className="flex max-sm:flex-col max-sm:items-center gap-6">
                      {/* image */}
                      <div className="flex-1">
                        <div className="max-w-[400px]">
                          <img
                            className="rounded-xl"
                            src="assets/img/portfolio/medi.png"
                            alt="project-img"
                          />
                        </div>
                      </div>
                      {/* content */}
                      <div className="flex-1 space-y-4">
                        {/* title */}
                        <h4 className="text-3xl font-bold">
                          Medi - Healthcare & Doctor Appointment Booking
                          Platform 🔥
                        </h4>
                        {/* description */}
                        <div>
                          <h6 className="text-xl font-bold capitalize inline">
                            description :
                          </h6>
                          <p className="inline">
                            Medi is a health and care-related website that I
                            developed as part of a learning project to enhance
                            my web design skills. While the design is originally
                            from Colorlib's Medi Template, I recreated the
                            entire webpage from scratch using HTML, CSS, and
                            SASS to refine my coding and styling abilities. This
                            project helped me gain a deeper understanding of
                            frontend development and the importance of clean,
                            efficient code.
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    {/* modal footer */}
                    <div
                      className="flex justify-between items-center flex-wrap gap-8 pb-6"
                    >
                      <p className="text-xl">Thanks for watching our projects</p>
                      <div className="flex flex-wrap gap-4">
                        <a
                          href="https://emamul-mottakin.github.io/Medi/"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Visit Site
                        </a>

                        <a
                          href="project/medi.html"
                          target="_blank"
                          className="py-2 px-8 border border-white/20 btn-animate rounded-full"
                        >
                          Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </section>

    {/*formula section*/}
    <section className="w-full bg-secondary-200 py-20">
      {/* section title */}
      <div className="container">
        <div className="flex justify-center items-center flex-col mb-14">
          <h2
            className="text-4xl sm:text-5xl text-white font-bold capitalize mb-10"
          >
            our formula
          </h2>
          <div className="absolute z-10 mt-10">
            <div
              className="w-52 h-1 rounded bg-secondary-100 flex flex-col justify-center items-center"
            >
              <div
                className="h-full w-20 rounded bg-primary-100 shadow-custom"
              ></div>
            </div>
          </div>
        </div>
      </div>
      {/* paragraph */}
      <div className="container flex flex-col gap-5 text-center">
        <p className="w-full text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est,
          assumenda officia. Corporis, ad, odit veritatis ratione amet alias aut
          accusantium incidunt totam modi excepturi eaque earum tenetur quidem
          sunt cumque sit quod! Consectetur, facere hic. Odio ipsam nihil
          reiciendis eum corporis neque eaque repudiandae. Delectus distinctio,
          qui aliquam labore hic, odit at iusto
        </p>
      </div>
      {/* formula */}
      <div className="container mt-16">
        <div
          className="text-white grid gap-8 md:flex sm:flex-cols justify-center items-center px-20 bg-secondary-100 py-10 w-full max-w-4xl rounded-lg m-auto shadow-custom border-2 border-primary-100"
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <i
              className="fa-2xl fa-solid fa-box-open border border-secondary-100 w-20 h-20 rounded-full flex items-center justify-center text-white"
            ></i>
            <span className="text-white">Understand</span>
          </div>
          <i className="fa-2xl fa-solid fa-plus text-white text-center"></i>
          <div className="flex flex-col items-center justify-center gap-2">
            <i
              className="fa-2xl fa-regular fa-lightbulb border border-secondary-100 w-20 h-20 rounded-full flex items-center justify-center text-white"
            ></i>
            <span className="text-white">Plan</span>
          </div>
          <i className="fa-2xl fa-solid fa-plus text-white text-center"></i>
          <div className="flex flex-col items-center justify-center gap-2">
            <i
              className="fa-2xl fa-solid fa-hourglass-start border border-secondary-100 w-20 h-20 rounded-full flex items-center justify-center text-white"
            ></i>
            <span className="text-white">Start</span>
          </div>
          <i className="fa-2xl fa-solid fa-equals text-white text-center"></i>
          <div className="flex flex-col items-center justify-center gap-2">
            <i
              className="fa-2xl fa-solid fa-arrow-up-right-dots border border-primary-100 w-20 h-20 rounded-full flex items-center justify-center text-primary-100"
            ></i>
            <span className="text-primary-100 text-lg text-center uppercase"
              >RESULTS IN 6 MONTHS <br />
              OR LESS</span
            >
          </div>
        </div>
      </div>
    </section>

    {/* contact  us  */}
    <section id="contact-us" className="bg-secondary-200 py-20 text-white">
      <div className="container">
        {/* secton title */}
        <div className="text-center">
          <h2 className="text-5xl my-4 inline-block after:">Contact</h2>
        </div>
        {/* contact form & info */}
        <div className="lg:flex justify-between gap-10">
          {/* contact form */}
          <div className="mt-10 flex-1">
            <h3 className="text-3xl">Just say Hello</h3>
            <form action="#" method="post">
              <div>
                <input
                  className="py-[12px] px-[20px] my-5 bg-secondary-100 rounded-lg text-white outline-none focus:outline w-full transition-all duration-200 active:ring-2 active:ring-offset-2 ring-primary-100 active:shadow-custom"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <input
                  className="py-[12px] px-[20px] my-5 bg-secondary-100 rounded-lg text-white outline-none focus:outline w-full transition-all duration-200 active:ring-2 active:ring-offset-2 ring-primary-100 active:shadow-custom"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <input
                  className="py-[12px] px-[20px] my-5 bg-secondary-100 rounded-lg text-white outline-none focus:outline w-full transition-all duration-200 active:ring-2 active:ring-offset-2 ring-primary-100 active:shadow-custom"
                  type="text"
                  placeholder="Your Subject"
                />
              </div>
              <div>
                <textarea
                  className="py-[12px] px-[20px] my-5 bg-secondary-100 rounded-lg text-white outline-none focus:outline transition-all duration-200 active:ring-2 active:ring-offset-2 w-full ring-primary-100 active:shadow-custom"
                  name="msg"
                  id="msg"
                  placeholder="Your Message"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <button
                className="primary-gradient text-white text-lg py-3 px-6 rounded-full transition-all duration-200 active:ring-2 active:ring-offset-2 ring-primary-100 active:scale-90"
              >
                Send Message
              </button>
            </form>
          </div>
          {/* contact info  */}
          <div className="mt-10 flex-1">
            {/* contact info titles */}
            <div>
              <h3 className="text-3xl">Contact Info</h3>
              <p className="my-4 text-white">
                We’d love to hear from you! Whether you have a question, need
                assistance, or want to discuss your project, we’re here to help.
                Feel free to contact.
              </p>
            </div>
            {/* contact info items - mail, phone, address*/}
            <div>
              {/* mail address */}
              <div className="group flex gap-5 items-center my-3">
                <span
                  className="flex items-center justify-center w-12 h-12 rounded-full border border-secondary-200 group-hover:border-primary-100 transition-all duration-500"
                  ><i className="fa-solid fa-envelope"></i
                ></span>
                <div>
                  <h4 className="text-xl">Email</h4>
                  <a
                    href="#"
                    className="text-white cursor-pointer hover:text-primary-100 transition-all duration-500 block"
                    >mdraselhossain8281@gmail.com</a
                  >
                  <a
                    href="#"
                    className="text-white cursor-pointer hover:text-primary-100 transition-all duration-500"
                    >emarko3236@gmail.com</a
                  >
                </div>
              </div>
              {/* phone */}
              <div className="group flex gap-5 items-center my-3">
                <span
                  className="flex items-center justify-center w-12 h-12 rounded-full border border-secondary-200 group-hover:border-primary-100 transition-all duration-500"
                  ><i className="fa-solid fa-phone"></i
                ></span>
                <div>
                  <h4 className="text-xl">Phone</h4>
                  <a
                    href="#"
                    className="text-white cursor-pointer hover:text-primary-100 transition-all duration-500 block"
                    >+880 01648-949926</a
                  >
                  <a
                    href="#"
                    className="text-white cursor-pointer hover:text-primary-100 transition-all duration-500"
                    >+880 01982-814627</a
                  >
                </div>
              </div>
              {/* Address */}
              <div className="group flex gap-5 items-center my-3">
                <span
                  className="flex items-center justify-center w-12 h-12 rounded-full border border-secondary-200 group-hover:border-primary-100 transition-all duration-500"
                  ><i className="fa-solid fa-location-dot"></i
                ></span>
                <div>
                  <h4 className="text-xl">Address</h4>
                  <a
                    href="#"
                    className="text-white cursor-pointer hover:text-primary-100 transition-all duration-500 block"
                    >177/6 dewanpara, Vasantek, Mirpur 14</a
                  >
                  <a
                    href="#"
                    className="text-white cursor-pointer hover:text-primary-100 transition-all duration-500"
                    >Dhaka, Bangladesh</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* footer section */}
    <footer className="py-5 text-center bg-secondary-100">
      <p className="text-white">
        © 2024. Designed by solocode. All right reserved.
      </p>
    </footer>
    </div>
}