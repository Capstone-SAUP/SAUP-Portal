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
                                    <Link
                                        to="home"
                                        spy={true}
                                        offset={-60}
                                        smooth={true}
                                    >
                                        <a
                                            className="block cursor-pointer lg:text-base py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent text-xs lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                            aria-current="page"
                                        >
                                            Home
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="partners"
                                        spy={true}
                                        offset={-60}
                                        smooth={true}
                                    >
                                        <a className="block cursor-pointer lg:text-base py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent text-xs lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                            Partners
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="involve"
                                        spy={true}
                                        offset={-60}
                                        smooth={true}
                                    >
                                        <a className="block cursor-pointer lg:text-base py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent text-xs lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                            Get Involved
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="aboutus"
                                        spy={true}
                                        offset={-60}
                                        smooth={true}
                                    >
                                        <a className="block cursor-pointer lg:text-base py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent text-xs lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                            About
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="contact"
                                        spy={true}
                                        offset={-60}
                                        smooth={true}
                                    >
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
                        <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-4xl xl:text-4xl dark:text-white">
                            Office of the Community Extension Services (OCES)
                        </h1>
                        <p className="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 mr-5 md:text-base lg:text-xl dark:text-gray-400">
                            Welcome to the Extension Service arm of the Holy
                            Angel University! We are dedicated to making a
                            positive impact on the world by implementing a wide
                            range of programs and activities that extend beyond
                            the boundaries of our campus.
                        </p>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img
                            src={require("../img/landing_photo-1.jpg")}
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
                                    src={require("../img/landing_slideshow-1.jpg")}
                                    alt="..."
                                />
                                <img
                                    src={require("../img/landing_slideshow-2.jpg")}
                                    alt="..."
                                />
                                <img
                                    src={require("../img/landing_slideshow-3.jpg")}
                                    alt="..."
                                />
                                <img
                                    src={require("../img/landing_slideshow-4.jpg")}
                                    alt="..."
                                />
                                <img
                                    src={require("../img/landing_slideshow-5.jpg")}
                                    alt="..."
                                />
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-gray-100 dark:bg-gray-900">
                <div className="gap-16 items-center py-8 px-6 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-14">
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white">
                            Community Service Consultative Body
                        </h2>
                        <div className="text-sm lg:text-base mb-4">
                            <p>
                                In carrying out extension activities, the
                                University seeks to coordinate sectoral efforts
                                and resources for the maximum benefit of both
                                service providers and recipients toward the
                                attainment of the University’s vision.
                                Participatory management of ICESP and
                                sector-based projects and activities is
                                undertaken through the CSCB or the Community
                                Service Consultative Body consisting of
                                representatives from colleges, basic education,
                                non-teaching and administrators, the chairperson
                                of which is the Head of OCES. Alumni are also
                                invited when necessary.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <img
                            className="w-full rounded-lg"
                            src={require("../img/landing_photo-4.jpg")}
                            alt="oces department"
                        ></img>
                        <img
                            className="mt-4 w-full rounded-lg lg:mt-10"
                            src={require("../img/landing_photo-5.jpg")}
                            alt="department photo"
                        ></img>
                    </div>
                </div>
            </section>

            <section className="bg-white dark:bg-gray-800">
                <div
                    id="partners"
                    className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-14"
                >
                    <div className="mb-8 max-w-screen-md lg:mb-16">
                        <h2 className="mb-4 text-3xl lg:text-4xl font-extrabold md:text-3xl text-gray-900 dark:text-white">
                            Our Partners and Linkages
                        </h2>
                    </div>
                    <div className="space-y-8 grid grid-cols-3 md:gap-12 md:space-y-0">
                        <div className="grid row-span-2 grid-cols-2 gap-4 mt-8">
                            <img
                                className="w-full rounded-lg"
                                src={require("../img/landing_photo-2.jpg")}
                                alt="outreach 1"
                            ></img>
                            <img
                                className="mt-4 w-full rounded-lg lg:mt-10"
                                src={require("../img/landing_photo-3.jpg")}
                                alt="outreach 2"
                            ></img>
                        </div>
                        <div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">
                                Indigenous People’s Communities
                            </h3>
                            <ol
                                className="ml-8"
                                style={{ listStyleType: "disc" }}
                            >
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
                            <ol
                                className="ml-8"
                                style={{ listStyleType: "disc" }}
                            >
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
                            <ol
                                className="ml-8"
                                style={{ listStyleType: "disc" }}
                            >
                                <li className="text-sm lg:text-base text-gray-500 dark:text-gray-400">
                                    Archdiocese/Parishes
                                </li>
                                <li className="text-sm lg:text-base text-gray-500 dark:text-gray-400">
                                    Public Servants/Government Agencies
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
                            <ol
                                className="ml-8"
                                style={{ listStyleType: "disc" }}
                            >
                                <li className="text-sm lg:text-base text-gray-500 dark:text-gray-400">
                                    Children with disabilities
                                </li>
                                <li className="text-sm lg:text-base text-gray-500 dark:text-gray-400">
                                    Inmates of Camp 174th (Angeles City Jail)
                                </li>
                                <li className="text-sm lg:text-base text-gray-500 dark:text-gray-400">
                                    Women, the elderly, children in conflict
                                    with the law and orphans
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-100 dark:bg-gray-900">
                <div
                    id="involve"
                    className="py-8 px-6 mx-auto lg:py-16 lg:px-14"
                >
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
                                    The community programs and services are
                                    facilitated through the technical, material,
                                    and financial support of our students,
                                    employees, partners and other donors. We
                                    believe that each one has something to
                                    share, including the communities or sectors
                                    being served. Through our shared actions, we
                                    can help improve the lives of Filipino
                                    families.
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
                                    <li>
                                        Underserved barangays in Angeles and
                                        Pampanga
                                    </li>
                                    <li>
                                        Children / persons with disabilities
                                    </li>
                                    <li>
                                        Inmates and children in critical /
                                        vulnerable circumstances
                                    </li>
                                    <li>
                                        Indigenous peoples (IPs), senior
                                        citizens and the youth
                                    </li>
                                    <li>
                                        GOs, NGOs and parishes that may request
                                        services to complement their programs
                                        for particular sectors or communities
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
                                    <li>
                                        Resource speaker/facilitator/trainer
                                    </li>
                                    <li>
                                        Organizer, steering committee member
                                    </li>
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
                                    <li>
                                        Community Organization and Education
                                    </li>
                                    <li>
                                        Livelihood and Lifelong Skills
                                        Training,and Technical Assistance
                                    </li>
                                    <li>
                                        Spiritual Development and Values
                                        Formation
                                    </li>
                                    <li>
                                        Micro-Infrastructure Project Support
                                    </li>
                                    <li>
                                        Preventive and Promotive Health Care
                                    </li>
                                    <li>Disaster Response</li>
                                    <li>Outreach Activities</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white dark:bg-gray-900">
                <div
                    id="aboutus"
                    className="py-8 px-6 mx-auto lg:py-16 lg:px-14"
                >
                    <div className="w-full text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                            About
                        </h2>
                        <p className="mb-4 text-sm lg:text-base font-light">
                            This is the extension service arm of the University
                            that implements programs and activities ranging from
                            outreach to developmental forms. It engages the
                            university’s faculty, non-teaching staff, students,
                            and alumni in volunteer services through the
                            extension of support to, for and with marginalized
                            sectors/communities in terms of material, technical,
                            educational, service learning, as well as values
                            formation.
                        </p>
                        <div className="grid grid-cols-2 gap-x-24 ">
                            <div className="px-16">
                                <h2 className="text-center text-xl font-semibold text-gray-900 uppercase dark:text-white">
                                    Mission
                                </h2>
                                <div className="text-sm lg:text-base text-justify font-semibold">
                                    Capable, committed and compassionate Holy
                                    Angel University volunteers and workers in
                                    communion with empowered and enabled
                                    ecclesial communities
                                </div>
                            </div>
                            <div className="px-16">
                                <h2 className="text-xl text-center font-semibold text-gray-900 uppercase dark:text-white">
                                    Vision
                                </h2>
                                <div className="text-sm lg:text-base text-justify font-semibold">
                                    Participating in the mission of Christ, we,
                                    the community extension volunteers and
                                    workers, promote stewardship, growth and
                                    development by generating options for and
                                    with our marginalized partner communities in
                                    Angeles City and outlying areas of Pampanga.
                                </div>
                            </div>

                            <div className="col-span-2  mt-6">
                                <h2 className=" text-xl font-semibold text-gray-900 uppercase dark:text-white">
                                    Goals and Objectives:
                                </h2>
                                <div className="text-sm lg:text-base col-span-1 mb-4 font-semibold">
                                    To engage the staff, volunteers, and partner
                                    communities in enabling, community building,
                                    and developmental programs by working on the
                                    following components:
                                </div>
                                <div>
                                    <ol
                                        className="px-28 text-left text-sm lg:text-base grid grid-cols-2 gap-x-24"
                                        style={{ listStyleType: "upper-greek" }}
                                    >
                                        <div>
                                            <li>
                                                Character and capacity formation
                                                of staff, volunteers,
                                                department-based community
                                                service representatives, and
                                                partner Peoples’ Organizations
                                                or groups;
                                            </li>
                                            <li>
                                                Stewardship framework in
                                                operating principles, community
                                                building processes and
                                                approaches, and developmental
                                                interventions to improve quality
                                                of life and preserve/promote the
                                                dignity of the person and the
                                                integrity of creation.
                                            </li>
                                        </div>

                                        <div>
                                            <li>
                                                Sound and creative resource
                                                generation, allocation,
                                                mobilization, and related
                                                operational procedures
                                            </li>
                                            <li>
                                                Participative and contextualized
                                                needs assessment, planning,
                                                implementation, feedback
                                                processes, and impact evaluation
                                            </li>
                                            <li>
                                                Partnerships/linkages building
                                                with GOs and NGOs, alumni, and
                                                the Church for program
                                                complementation
                                            </li>
                                        </div>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-100 dark:bg-gray-900">
                <div
                    id="contact"
                    className="py-6 px-4 mx-auto max-w-screen-xl sm:py-10 lg:px-4"
                >
                    <div className="mx-auto max-w-screen-sm text-center">
                        <h2 className="mb-4 text-3xl lg:text-4xl font-extrabold leading-tight text-gray-900 dark:text-white">
                            Contact Us
                        </h2>
                        <p className="font-light text-gray-500 dark:text-gray-400 md:text-lg">
                            Thank you for your interest in our Extension Service
                            arm of the University! We are here to answer any
                            questions you may have about our programs and
                            activities.
                        </p>
                    </div>
                </div>
            </section>

            <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">
                <div className="mx-auto max-w-screen-xl">
                    <div className="md:flex md:justify-between">
                        <div className="grid grid-cols-5 lg:gap-8 sm:gap-4 sm:grid-cols-3">
                            <div className="row-span-3">
                                <div
                                    href="https://flowbite.com"
                                    className="flex items-center"
                                >
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
                                    Head, Office of the Community Extension
                                    Services and National Service Training
                                    Program
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
                                    Coordinator, National Service Training
                                    Program (NSTP) / Staff, Campus Ministry
                                    Office
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
                                    Staff, Office of the Community Extension
                                    Services (OCES)
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
                    </div>
                </div>
            </footer>

        </body>
    );
    return content;
};
export default Public;
