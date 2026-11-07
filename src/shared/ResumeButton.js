import resumePdf from "../assets/Resume.pdf";

export const ResumeButton = () => (
    <a className="section-button" href={resumePdf} download="ernst-robert-resume.pdf">
        <button className="vvd"><span>Download resume</span></button>
    </a>
);
