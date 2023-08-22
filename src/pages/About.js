import AppWrap from "../wrapper/Wrapper";
import profilePhoto from "../asset/computer.jpg";
import { useState } from "react";
import { motion } from "framer-motion";
import { pageVariant } from "./Contact";
import { TypeAnimation } from "react-type-animation";
import { Modal, Title, AboutMe, Services, EducationTimeLine, Feedback, LanguageSkills, ProgrammingSkills, ContactInformation } from "../components";
import { useTheme } from "../ThemeContext";
import { downloadableLink } from "../data";
const About = () => {
    const [showProfile, setShowProfile] = useState(false);
    const { themeColor } = useTheme()
    return (
        <motion.section
            variants={pageVariant}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 lg:gap-20 gap-5  text-gray">
            <div className="about__image h-[400px] lg:h-full"></div>
            <div>
                <Title
                    text="soraya haidary"
                    fontSize="text-4xl"
                    fontWeight="font-[500]">
                    <h4 className="text-gray py-3 text-xl">
                        <span className="text-white">Creative </span>
                        <TypeAnimation
                            sequence={["Freelancer", "Developer"]}
                            wrapper="span"
                            speed={0}
                            style={{ fontSize: "1em", display: "inline-block" }}
                            repeat={Infinity}
                        />
                    </h4>
                </Title>
                <p className="py-4 text-lg text-white">
                    My name is <span>Soraya Haidary</span>. I am a
                    web developer, and I'm very passionate and dedicated to my work, I
                    have acquired the skills and knowledge.
                </p>
                <button
                    className="button text-white"
                    style={{ background: `${themeColor}` }}
                    onClick={() => setShowProfile(!showProfile)}>
                    learn more
                </button>
                <Modal setShowProfile={setShowProfile} showProfile={showProfile}>
                    <div className="about__modal_base-container">
                        <div className="flex flex-col py-10 lg:py-5 items-center px-2 md:px-8 gap-5 mb-1">
                            <div>
                                <div className="lg:w-20 lg:h-20 w-52 h-52 rounded-full mx-auto">
                                    <img
                                        src={profilePhoto}
                                        alt="profile photo"
                                        className="w-full rounded-full h-full object-fill"
                                    />
                                </div>
                                <div>
                                    <h2 className="text-2xl 2xl:text-4xl  py-2 text-center">

                                        soraya <span
                                            style={{ color: `${themeColor}` }}>haidary</span>
                                    </h2>
                                    <h4 className="pb-2 text-center">creative developer</h4>
                                </div>
                            </div>
                            <div className="w-full">
                                <ContactInformation />
                            </div>
                            <div className="w-full my-1">
                                <a href={downloadableLink} download
                                    style={{ background: `${themeColor}` }}
                                    className="button w-full ">Download CV</a>
                            </div>
                        </div>
                        <div className="about__modal-container2">
                            <AboutMe />
                            <Services />
                            <ProgrammingSkills />
                            <LanguageSkills />
                            <EducationTimeLine />
                            <Feedback />
                        </div>
                    </div>
                </Modal>
            </div>
        </motion.section>
    );
};

export default AppWrap(About);
