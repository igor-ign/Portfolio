import { IMAGES } from "assets";
import { TechnicalSkillsProps } from "types";

const {  
    DOCKER_ICON,
    JENKINS_ICON,
    NEXTJS_ICON,
    REACTJS_ICON,
    TYPESCRIPT_ICON,
    SASS_ICON,
    REDUX_ICON,
    STYLED_COMPONENTS_ICON,
    JAVASCRIPT_ICON,
    HTML_ICON,
    CSS_ICON,
    TAILWIND_CSS_ICON
} = IMAGES

export const TECHNICAL_SKILLS: TechnicalSkillsProps[] = [
    {
        name: 'Docker',
        technologyIcon: <img src={DOCKER_ICON.image} alt={DOCKER_ICON.alt} className="technology-icon"/>,
        skillLevel: 'basic-skill-level',
    },
    {
        name: 'Jenkins',
        technologyIcon: <img src={JENKINS_ICON.image} alt={JENKINS_ICON.alt} className="technology-icon"/>,
        skillLevel: 'basic-skill-level',
    },
    {
        name: 'NextJS',
        technologyIcon: <img src={NEXTJS_ICON.image} alt={NEXTJS_ICON.alt} className="technology-icon"/>,
        skillLevel: 'basic-skill-level',
    },
    {
        name: 'ReactJS',
        technologyIcon: <img src={REACTJS_ICON.image} alt={REACTJS_ICON.alt} className="technology-icon"/>,
        skillLevel: 'intermediate-skill-level',
    },
    {
        name: 'Typescript',
        technologyIcon: <img src={TYPESCRIPT_ICON.image} alt={TYPESCRIPT_ICON.alt} className="technology-icon"/>,
        skillLevel: 'intermediate-skill-level',
    },
    {
        name: 'SASS',
        technologyIcon: <img src={SASS_ICON.image} alt={SASS_ICON.alt} className="technology-icon"/>,
        skillLevel: 'basic-skill-level',
    },
    {
        name: 'Redux',
        technologyIcon: <img src={REDUX_ICON.image} alt={REDUX_ICON.alt} className="technology-icon"/>,
        skillLevel: 'basic-skill-level',
    },
    {
        name: 'Styled Components',
        technologyIcon: <img src={STYLED_COMPONENTS_ICON.image} alt={STYLED_COMPONENTS_ICON.alt} className="technology-icon"/>,
        skillLevel: 'basic-skill-level',
    },
    {
        name: 'Tailwind CSS',
        technologyIcon: <img src={TAILWIND_CSS_ICON.image} alt={TAILWIND_CSS_ICON.alt} className="technology-icon"/>,
        skillLevel: 'basic-skill-level'
    },
    {
        name: 'Javascript',
        technologyIcon: <img src={JAVASCRIPT_ICON.image} alt={JAVASCRIPT_ICON.alt} className="technology-icon"/>,
        skillLevel: 'intermediate-skill-level',
    },
    {
        name: 'HTML',
        technologyIcon: <img src={HTML_ICON.image} alt={HTML_ICON.alt} className="technology-icon"/>,
        skillLevel: 'intermediate-skill-level',
    },
    {
        name: 'CSS',
        technologyIcon: <img src={CSS_ICON.image} alt={CSS_ICON.alt} className="technology-icon"/>,
        skillLevel: 'intermediate-skill-level',
    }
]