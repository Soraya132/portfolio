import { Title } from "../components"
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "../ThemeContext";
import { education } from "../data";

const EducationTimeLine = () => {
    const { themeColor } = useTheme()
    return (
        <div>
            <Title
                text="Education Timeline"
                fontSize="text-2xl"
                fontWeight="font-[400]"
            />
            <VerticalTimeline layout="1-column-left">
                {education.map((edu, index) => {
                    return (
                        <VerticalTimelineElement
                            key={edu + index}
                            className="vertical-timeline-element--work"
                            iconStyle={{
                                background: `${themeColor}`,
                                color: "#fff",
                            }}>
                            <div className="flex flex-row justify-between">
                                <div>
                                    <div className="text-slate-500">
                                        {edu.date}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-0">
                                    <h2 className="vertical-timeline-element-title">{edu.name}</h2>
                                    <p className="text-slate-500">{edu.position}</p>
                                </div>
                            </div>
                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline>
        </div>
    )
}

export default EducationTimeLine
