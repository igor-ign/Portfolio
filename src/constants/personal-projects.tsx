import { IMAGES } from "assets"

const { 
    PORTIFOLIO_FIRST_IMAGE, 
    PORTIFOLIO_SECOND_IMAGE,
    MAZE_CARS_IMAGE,
    MAZE_MOTORCYCLE_IMAGE
} = IMAGES

export const PROJECTS = [
    {
        name: 'Portifolio',
        images: [
            <img alt={PORTIFOLIO_FIRST_IMAGE.alt} src={PORTIFOLIO_FIRST_IMAGE.image}/>,
            <img alt={PORTIFOLIO_SECOND_IMAGE.alt} src={PORTIFOLIO_SECOND_IMAGE.image}/>
        ],
        description: {
            pt: 'Como um desenvolvedor front-end apaixonado pelo que faz, criei este projeto de portfólio para destacar minhas habilidades e experiência na criação de websites criativos e intuitivos. Este projeto demonstra minha dedicação em entregar soluções de alta qualidade e criativas que superam expectativas já que decidi criar este portfólio em um formato que difere do portfólio médio de um desenvolvedor.',
            en: "As a passionate front-end developer, I've created this portifolio project to highlight my skills, experience, and creativity in crafting engaging and intuitive web experiences. This project demonstrates my dedication to delivering high-quality and creative solutions that exceed expectations as I have decided to create this portifolio in a format that differ from the average developer portifolio."
        },
        githubLink: 'https://github.com/igor-ign/Portifolio'
    },
    {
        name: 'Maze White Label',
        images: [
            <img alt={MAZE_CARS_IMAGE.alt} src={MAZE_CARS_IMAGE.image}/>,
            <img alt={MAZE_MOTORCYCLE_IMAGE.alt} src={MAZE_MOTORCYCLE_IMAGE.image}/>
        ],
        description: {
            pt: 'Maze é um website white-label versátil projetado para as marcas de venda de carros e motos da Maze. Com Maze Cars e Maze Motorcycles, os usuários podem explorar e selecionar veículos que estejam alinhados com suas preferências e necessidades.',
            en: 'Maze is a versatile white-label application designed for Maze’s car and motorcycle selling brands. With Maze Cars and Maze Motorcycles, users can seamlessly explore and select vehicles that align with their preferences and needs.'
        },
        githubLink: 'https://github.com/igor-ign/Maze-White-Label'
    }
]