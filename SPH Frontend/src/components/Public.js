import { Carousel } from "flowbite-react";
import { Link } from "react-scroll";

const Public = () => {
  const content = (
    <body className="w-full">
      <header className="lg:sticky top-0 z-20">
        <nav className="bg-red-900 sticky border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <div className="flex items-center">
              <img
                src={require("../img/ICFSI Logo.png")}
                className="mr-3 h-8 sm:h-11"
                alt="ICFSI Logo"
              />
              <span className="self-center text-white text-base lg:text-xl font-semibold whitespace-nowrap dark:text-white">
                SAUP Portal HAU
              </span>
            </div>
            <div className="flex items-center lg:order-2">
              <a
                href="/login"
                className="text-white dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xs lg:text-sm px-5 py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Log in
              </a>
            </div>
            <div class=" items-center w-full lg:flex lg:w-auto lg:order-1">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:text-sm lg:space-x-8 lg:mt-0">
                <li>
                  <Link to="home" spy={true} offset={-60} smooth={true}>
                    <a
                      className="block cursor-pointer lg:text-base py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent text-xs lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="partners" spy={true} offset={-60} smooth={true}>
                    <a className="block cursor-pointer lg:text-base py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent text-xs lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                      Partners
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="involve" spy={true} offset={-60} smooth={true}>
                    <a className="block cursor-pointer lg:text-base py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent text-xs lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                      Get Involved
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="aboutus" spy={true} offset={-60} smooth={true}>
                    <a className="block cursor-pointer lg:text-base py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent text-xs lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                      About Us
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="contact" spy={true} offset={-60} smooth={true}>
                    <a className="block cursor-pointer lg:text-base py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent text-xs lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section id="home" className="bg-white dark:bg-gray-900">
        <div className="grid py-8 px-4 mx-auto max-w-screen-lg lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="place-self-center mr-auto lg:col-span-7">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-4xl xl:text-5xl dark:text-white">
              Office of the Community Extension Services (OCES)
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-base lg:text-xl dark:text-gray-400">
              Welcome to the Extension Service arm of the Holy Angel University!
              We are dedicated to making a positive impact on the world by
              implementing a wide range of programs and activities that extend
              beyond the boundaries of our campus.
            </p>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
              alt="mockup"
            ></img>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-8">
          <h2 className="mb-8 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
            You’ll be in good company
          </h2>
          <div className="text-gray-500 flex justify-center">
            <div className="h-96 aspect-video">
              <Carousel slideInterval={5000}>
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                  alt="..."
                />
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                  alt="..."
                />
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                  alt="..."
                />
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                  alt="..."
                />
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                  alt="..."
                />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-800">
        <div
          id="partners"
          className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"
        >
          <div className="mb-8 max-w-screen-md lg:mb-16">
            <h2 className="mb-4 text-3xl lg:text-4xl font-extrabold md:text-3xl text-gray-900 dark:text-white">
              Our Partners and Linkages
            </h2>
            <p className="text-gray-500 md:text-sm dark:text-gray-400">
              Here at Flowbite we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
          </div>
          <div className="space-y-8 grid grid-cols-3 md:gap-12 md:space-y-0">
            <div className="grid row-span-2 grid-cols-2 gap-4 mt-8">
              <img
                className="w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                alt="office content 1"
              ></img>
              <img
                className="mt-4 w-full rounded-lg lg:mt-10"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                alt="office content 2"
              ></img>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Indigenous People’s Communities
              </h3>
              <ol className="ml-8" style={{ listStyleType: "disc" }}>
                <li className="text-sm lg:text-base text-gray-500 dark:text-gray-400">
                  Sitio Pidpid
                </li>
                <li className="text-sm lg:text-base text-gray-500 dark:text-gray-400">
                  Aetahanan
                </li>
                <li className="text-sm lg:text-base text-gray-500 dark:text-gray-400">
                  Kalapi Negrito
                </li>
                <li className="text-sm lg:text-base text-gray-500 dark:text-gray-400">
                  Villa Maria
                </li>
              </ol>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Public Schools in Angeles City and Pampanga
              </h3>
              <ol className="ml-8" style={{ listStyleType: "disc" }}>
                <li className="text-sm lg:text-base text-gray-500 dark:text-gray-400">
                  Elementary Schools
                </li>
                <li className="text-sm lg:text-base text-gray-500 dark:text-gray-400">
                  High Schools
                </li>
                <li className="text-sm lg:text-base text-gray-500 dark:text-gray-400">
                  Integrated Schools
                </li>
              </ol>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Networks and Linkages
              </h3>
              <ol className="ml-8" style={{ listStyleType: "disc" }}>
                <li className="text-sm lg:text-base text-gray-500 dark:text-gray-400">
                  Archdiocese/Parishes
                </li>
                <li className="text-sm lg:text-base text-gray-500 dark:text-gray-400">
                  Archdiocese/Parishes
                </li>
                <li className="text-sm lg:text-base text-gray-500 dark:text-gray-400">
                  Private/Non-Government Agencies
                </li>
              </ol>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Other Sectors
              </h3>
              <ol className="ml-8" style={{ listStyleType: "disc" }}>
                <li className="text-sm lg:text-base text-gray-500 dark:text-gray-400">
                  Children with disabilities
                </li>
                <li className="text-sm lg:text-base text-gray-500 dark:text-gray-400">
                  Inmates of Camp 174th (Angeles City Jail)
                </li>
                <li className="text-sm lg:text-base text-gray-500 dark:text-gray-400">
                  Women, the elderly, children in conflict with the law and
                  orphans
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-900">
        <div id="involve" className="py-8 px-6 mx-auto lg:py-16 lg:px-20">
          <div className="w-full text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 lg:text-4xl text-3xl font-bold text-gray-900 dark:text-white">
              Get Involved
            </h2>
            <div className="grid grid-cols-2 grid-rows-2 gap-x-10 lg:gap-x-24">
              <div>
                <h2 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white">
                  You can share in big or small ways:
                </h2>
                <div className="text-sm lg:text-base text-justify font-semibold">
                  The community programs and services are facilitated through
                  the technical, material, and financial support of our
                  students, employees, partners and other donors. We believe
                  that each one has something to share, including the
                  communities or sectors being served. Through our shared
                  actions, we can help improve the lives of Filipino families.
                </div>
              </div>
              <div>
                <h2 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white">
                  Serve our partner communities:
                </h2>
                <ol
                  className="text-sm lg:text-base ml-8"
                  style={{ listStyleType: "disc" }}
                >
                  <li>Public schools</li>
                  <li>Underserved barangays in Angeles and Pampanga</li>
                  <li>Children / persons with disabilities</li>
                  <li>
                    Inmates and children in critical / vulnerable circumstances
                  </li>
                  <li>
                    Indigenous peoples (IPs), senior citizens and the youth
                  </li>
                  <li>
                    GOs, NGOs and parishes that may request services to
                    complement their programs for particular sectors or
                    communities
                  </li>
                </ol>
              </div>
              <div>
                <h2 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white">
                  You can volunteer as:
                </h2>
                <ol
                  className="text-sm lg:text-base ml-8"
                  style={{ listStyleType: "disc" }}
                >
                  <li>Resource speaker/facilitator/trainer</li>
                  <li>Organizer, steering committee member</li>
                  <li>Volunteer participant</li>
                  <li>Donor, solicitor</li>
                </ol>
              </div>
              <div>
                <h2 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white">
                  Get involved in the areas of:
                </h2>
                <ol
                  className="text-sm lg:text-base ml-8"
                  style={{ listStyleType: "disc" }}
                >
                  <li>Research and Documentation</li>
                  <li>Community Organization and Education</li>
                  <li>
                    Livelihood and Lifelong Skills Training,and Technical
                    Assistance
                  </li>
                  <li>Spiritual Development and Values Formation</li>
                  <li>Micro-Infrastructure Project Support</li>
                  <li>Preventive and Promotive Health Care</li>
                  <li>Disaster Response</li>
                  <li>Outreach Activities</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white">
              We didn't reinvent the wheel
            </h2>
            <div className="text-sm lg:text-base mb-4">
              <p>
                We are strategists, designers and developers. Innovators and
                problem solvers. Small enough to be simple and quick, but big
                enough to deliver the scope you want at the pace you need. Small
                enough to be simple and quick, but big enough to deliver the
                scope you want at the pace you need.
              </p>
              <p>
                We are strategists, designers and developers. Innovators and
                problem solvers. Small enough to be simple and quick.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            ></img>
            <img
              className="mt-4 w-full rounded-lg lg:mt-10"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            ></img>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-900">
        <div id="aboutus" className="py-8 px-6 mx-auto lg:py-16 lg:px-20">
          <div className="w-full text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
              About Us
            </h2>
            <p className="mb-4 text-sm lg:text-base font-light">
              This is the extension service arm of the University that
              implements programs and activities ranging from outreach to
              developmental forms. It engages the university’s faculty,
              non-teaching staff, students, and alumni in volunteer services
              through the extension of support to, for and with marginalized
              sectors/communities in terms of material, technical, educational,
              service learning, as well as values formation.
            </p>
            <div className="grid grid-cols-2 gap-x-24">
              <div>
                <h2 className="text-center text-xl font-semibold text-gray-900 uppercase dark:text-white">
                  Mission
                </h2>
                <div className="text-sm lg:text-base text-justify font-semibold">
                  Capable, committed and compassionate Holy Angel University
                  volunteers and workers in communion with empowered and enabled
                  ecclesial communities
                </div>
              </div>
              <div>
                <h2 className="text-xl text-center font-semibold text-gray-900 uppercase dark:text-white">
                  Vision
                </h2>
                <div className="text-sm lg:text-base text-justify font-semibold">
                  Participating in the mission of Christ, we, the community
                  extension volunteers and workers, promote stewardship, growth
                  and development by generating options for and with our
                  marginalized partner communities in Angeles City and outlying
                  areas of Pampanga.
                </div>
              </div>

              <div className="col-span-2 text-center px-28 mt-6">
                <h2 className=" text-xl font-semibold text-gray-900 uppercase dark:text-white">
                  Goals and Objectives:
                </h2>
                <div className="text-sm lg:text-base mb-4 font-semibold">
                  To engage the staff, volunteers, and partner communities in
                  enabling, community building, and developmental programs by
                  working on the following components:
                </div>
                <div>
                  <ol
                    className="text-left text-sm lg:text-base grid grid-cols-2 gap-x-24"
                    style={{ listStyleType: "upper-greek" }}
                  >
                    <div>
                      <li>
                        Character and capacity formation of staff, volunteers,
                        department-based community service representatives, and
                        partner Peoples’ Organizations or groups;
                      </li>
                      <li>
                        Stewardship framework in operating principles, community
                        building processes and approaches, and developmental
                        interventions to improve quality of life and
                        preserve/promote the dignity of the person and the
                        integrity of creation.
                      </li>
                      <li>
                        Sound and creative resource generation, allocation,
                        mobilization, and related operational procedures
                      </li>
                    </div>

                    <div>
                      <li>
                        Participative and contextualized needs assessment,
                        planning, implementation, feedback processes, and impact
                        evaluation
                      </li>
                      <li>
                        Partnerships/linkages building with GOs and NGOs,
                        alumni, and the Church for program complementation
                      </li>
                    </div>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div
          id="contact"
          className="py-6 px-4 mx-auto max-w-screen-xl sm:py-10 lg:px-4"
        >
          <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-3xl lg:text-4xl font-extrabold leading-tight text-gray-900 dark:text-white">
              Contact Us
            </h2>
            <p className="font-light text-gray-500 dark:text-gray-400 md:text-lg">
              Thank you for your interest in our Extension Service arm of the
              University! We are here to answer any questions you may have about
              our programs and activities.
            </p>
          </div>
        </div>
      </section>

      <footer className="p-4 bg-gray-50 sm:p-6 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl">
          <div className="md:flex md:justify-between">
            <div className="grid grid-cols-5 lg:gap-8 sm:gap-4 sm:grid-cols-3">
              <div className="row-span-3">
                <div href="https://flowbite.com" className="flex items-center">
                  <img
                    src={require("../img/ICFSI Logo.png")}
                    className="mr-3 h-8 sm:h-11"
                    alt="ICFSI Logo"
                  />
                  <span className="self-center text-red-900 text-base lg:text-xl font-semibold whitespace-nowrap">
                    SAUP Portal HAU
                  </span>
                </div>
              </div>
              <div>
                <h2 className="mb-2 sm:text-xs lg:text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Head, Office of the Community Extension Services and National
                  Service Training Program
                </h2>
              <div className="text-gray-600">
                <div className="mb-2 text-sm lg:text-base font-semibold">
                  Ms. Shirley Mae B. Marcos
                </div>
                <div className="text-sm lg:text-base">
                  smbarrera@hau.edu.ph
                  <br></br>
                  Monday to Friday 8:00 a.m. to 5:00 p.m.
                  <br></br>
                  Saturday 8:00 a.m. to 12:00 nn.
                  <br></br>
                  Local 1324
                </div>
              </div>
              </div>
              <div>
                <h2 className="mb-2 sm:text-xs lg:text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Coordinator, National Service Training Program (NSTP) / Staff,
                  Campus Ministry Office
                </h2>
              <div className="text-gray-600">
                <div className="mb-2 text-sm lg:text-base font-semibold">
                  Ms. Hazel A. Basilio
                </div>
                <div className="text-sm lg:text-base">
                  hbasilio@hau.edu.ph
                  <br></br>
                  Monday 8:00 a.m. to 12:00 nn.
                  <br></br>
                  Tuesday to Friday 8:00 a.m. to 5:00 p.m.
                  <br></br>
                  Saturday 7:00 a.m. to 4:00 p.m.
                  <br></br>
                  Local 1324 (OCES) or 1130 (CMO)
                </div>
              </div>
              </div>
              <div className="col-span-2">
                <h2 className="-mb-3 sm:text-xs lg:text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Staff, Office of the Community Extension Services (OCES)
                </h2>
              </div>
              <div className="text-gray-600">
                <div className="mb-2 text-sm lg:text-base font-semibold">
                  Ms. Emee Rose L. Balilu
                </div>
                <div className="text-sm lg:text-base">
                  erbalilu@hau.edu.ph
                  <br></br>
                  Monday to Friday 8:00 a.m. to 5:00 p.m.
                  <br></br>
                  Saturday 8:00 a.m. to 12:00 nn.
                  <br></br>
                  Local 1324
                </div>
              </div>
              <div className="text-gray-600">
                <div className="mb-2 text-sm lg:text-base font-semibold">
                  Ms. Emee Rose L. Balilu
                </div>
                <div className="text-sm lg:text-base">
                  erbalilu@hau.edu.ph
                  <br></br>
                  Monday to Friday 8:00 a.m. to 5:00 p.m.
                  <br></br>
                  Saturday 8:00 a.m. to 12:00 nn.
                  <br></br>
                  Local 1324
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://flowbite.com" className="">
                SAUP HAU
              </a>
              . 
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <script src="https://unpkg.com/flowbite@1.4.7/dist/flowbite.js"></script>
    </body>
  );
  return content;
};
export default Public;
