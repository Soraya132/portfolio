import { motion } from "framer-motion";

const AppWrap = (Component) =>
    function HOC() {
        return (
            <div className="flex flex-col w-full items-center my-10 pb-10 2xl:mt-44 h-[70%] overflow-y-scroll no-scrollbar mb-10 relative z-10">
                <div
                    className=" w-full lg:w-[60%] px-5 lg:px-0  ">
                    <Component />
                </div>
            </div>


        );
    };

export default AppWrap;