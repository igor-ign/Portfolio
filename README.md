# Introduction

Welcome to my portfolio project! This website serves as a showcase of my skills and work as a front-end developer. The primary goal of this project is to demonstrate my expertise in creating responsive, user-friendly web interfaces with modern web technologies.

This portfolio is designed to stand out from the average web developer portfolio. It includes stages where you can specify the website language and the skills you would like to see in a front-end developer. I chose this approach because most front-end developer portfolios are simple landing pages that provide basic information about the developer. While the traditional format is practical, my intention was to create something unique and more interactive. This portfolio features dynamic elements, a clean professional design, and a personalized user experience.

Whether you're a recruiter, developer, or someone interested in web development, I hope this portfolio gives you a clear understanding of my capabilities and creativity. Feel free to explore the website, get to know me better, and reach out if you have any questions or opportunities for collaboration.

Although my contact information is available on the portfolio, I’ve included my email and LinkedIn profile link here for your convenience:

Email: igor.ignacio.contact@gmail.com  
LinkedIn: www.linkedin.com/in/igor-ignacio

In this documentation, you will find the technical details of this project. I will also provide instructions on how to run this project if you are interested in testing it. If your purpose is simply to view the website, you can access it through this link: https://portifolio-fawn-rho.vercel.app/

## What you will see in this readme:
- [Technologies used in the project](#technologies-used-in-the-project)
- [How to run the project](#how-to-run-the-project)
- [How the translation works](#how-the-translation-works)
- [Project structure](#project-structure)
- [Coding patterns and adopted practices](#coding-patterns-and-adopted-practices)

## Technologies used in the project
- ReactJS
- Typescript
- SASS
- NodeJS **(use V20.9.0 or higher)**

**Project Libraries:**

- i18n
- Material UI
- Prettier

## How to run the project
1. Clone the repository:
    ```sh
    git clone https://github.com/igor-ign/Portfolio.git
    ```
2. Navigate to the project directory:
    ```sh
    cd Portfolio
    ```
3. Install dependencies:
    ```sh
    yarn
    ```
4. Start the development server:
    ```sh
    yarn start
    ```
## How the translation works

To translate the website to Portuguese/English, I'm using a JavaScript library called [i18n](https://react.i18next.com/). This library allows me to translate the website into any language by providing an object named "resources", where all the translations are stored.


To handle translations, I call the `useTranslation()` hook and get the `t()` function. This function enables me to translate the website's text based on the current language.
```Typescript
export default function MyComponent() {
  const { t } = useTranslation();

  return <p>{t('valid-resources-object-property')}</p>
}
```
I can specify the base language in the `i18n.ts` file. To change the language, I use the i18n object from the `useTranslation()` hook and the `changeLanguage('lang')` method.
```Typescript
export default function MyButtonComponent() {
  const { i18n } = useTranslation();

  return <div>
    <button onClick={() => i18n.changeLanguage('en')}>English</button> // Change language to English
    <button onClick={() => i18n.changeLanguage('pt')}>Portuguese</button> // Change language to Portuguese
  </div>
}
```
To keep my i18n.ts file cleaner, I have created a separate file called `resources.ts` to store the constant variable that will hold all the translations of the website.

## Project structure
The project features a well-organized folder structure to enhance both readability and maintainability. Below is an overview of the main directories and their purposes:

```text
├── /public # Public assets (HTML, Favicon, etc..)
├── /src # Application source code
│    ├── /assets # Images and Icons
│    │        ├─ portifolio-image.jpg
│    │        ├─ brazilian-flag.jpg
│    │        ├─ usa-flag.jpg
│    │	      └── index.js
│    ├── /components # Components used throughout the project
│    │        ├─ /component1
│    │        │	    ├─ index.tsx
│    │	      │	    └── index.scss
│    │ 	      └── index.ts
│    ├── /constants # Global constant variables
│    │        ├─ constant1.ts
│    │ 	      └── index.ts
│    ├── /types # Global interfaces and types
│    │        ├─ type1.ts
│    │ 	      └── index.ts
│    ├── /context # Application contexts created using ReactJS's Context API
│    │        ├─ stage.tsx
│    │ 	      └── index.ts
│    ├── /stages # Application stages
│    │        ├─ /language-selection
│    │        │    ├─ index.tsx
│    │        │    └── styles.scss
│    │        │     
│    │        └── index.ts
│    ├─ /styles # Color variables and sass mixins
│    │  	    ├─ colors.scss 
│    │  	    ├─ mixins.scss 
│    │              └── index.scss
│    │
│    ├── app.scss # App component styles
│    ├── App.tsx # App component
│    ├── i18n.ts # i18n configuration file
│    ├── index.scss # Global styles
│    └── index.tsx # ReactJS index page
│
├── package.json # Node.js package file
├── tsconfig.json # Typescript configuration file
├── .prettierrc.json # Prettier configuration file
├── README.md # Project documentation
└── LICENSE # Project license file
```

## Coding patterns and adopted practices

In this project, I'm following a set of coding patterns and best practices to ensure consistency while coding and a more organized code. This section will be used to talk about the code patterns and best practices I have decided to follow.

### Conventional commits

To maintain a standardized and semantic versioning approach, I have adopted Conventional Commits for the project commit messages. Conventional Commits are a convention for writing commit messages in a consistent and structured manner, this pattern help us to generate a clear and meaningful changelog.

When commiting in this project the following format should be used:
```plaintext
<type>: <description>

Example:
feat: added user management page
refactor: changed header dimensions
fix: fixed user register form bug
```
### Alias imports
In my project, I use alias imports to simplify and shorten my import statements, making the code cleaner and easier to manage. Alias imports allow you to create custom paths for your modules, so you don't have to use long relative paths.

Alias imports are configured in the tsconfig.json file. Here’s how they are set up:
```Json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@/*": ["/*"]
    }
  }
}
```
- `baseUrl`: This option sets the base directory for resolving non-relative module names. In this case, it is set to the src directory.
- `paths`: This option maps module import paths to specific directories. The @/* alias is mapped to the root of the src directory.

Instead of importing a module using a relative path like this:
```Typescript
import MyComponent from '../../components/MyComponent';
```

You can use the alias to simplify the import statement:
```Typescript
import MyComponent from 'components';
```
This setup helps to avoid complex and hard-to-read import paths, making the codebase more maintainable.
  
### Import order 

To maintain a well-organized codebase and enhance readability, this project adhere to a specific import order for our modules and components. The order is as follows:
```typescript
import { useState, useEffect } from 'react'; #1 - ReactJS imports
import { useTranslation } from 'react-i18next';  #2 - Libraries
import { Language } from '@mui/icons-material';
import { IMAGES } from 'assets'; #3 - Project images and Icons
import { Toast } from 'components'; #4 - Global components 
import { CONSTANT_VARIABLE } from 'constants'; #5 - Global constants
import { MyType, MyInterface } from 'types'; #7 - Global interfaces and types
import ./style.scss #12 - Page styles

```
  
Key points of the import order:
1. This import order applies consistently to all modules and components, ensuring a unified structure.
2. ReactJS imports are placed at the beginning to emphasize their importance as the foundation of our components.
3. The import for styles (./style.scss) is positioned last to maintain a clear separation between dependencies and styling.

### Simplified imports

In order to simplify imports in this project I'm centralizing exports using dedicated `index.ts` files in each folder. Adopting centralized index files is a beneficial practice for maintaining a clean and efficient codebase in JavaScript/TypeScript projects, this technique simplifies import statements and offers several advantages like:
1. **Code Organization:** It helps in organizing and centralizing your exports. All related modules are grouped together in the index file, making it easier to locate and manage dependencies.
2. **Simplified Refactoring:** If you decide to change the internal structure of your modules or move files around, you only need to update the index file. This can simplify the process of refactoring and reduce the chances of breaking existing imports.

Example of how the simplified imports work:

```typescript
Instead of:
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';

It will be:
import { Header, Footer } from 'components';
```

### Component organization

Each component in this project adhere to a organizational structure I have defined to enhance code readability and maintainability. Below you can see an overview of how the components are organized in terms of code:

```typescript
export function MyComponent({ prop1, prop2...}) {
// #1 - State variables
const [isToastOpen, setIsToastOpen] = useState<boolean>(false);

// #2 - Library hooks and custom hooks
const { t, i18n } = useTranslation();

// #3 - UseEffects
 useEffect(() => {
    ...useEffect code
 }, [])
}

// #4 - Functions
    function getLanguageSelectionButtonClassname(buttonLanguage: 'pt' | 'en') {
        const currentLanguage = i18n.language

        const isButtonLanguageSelected = buttonLanguage === currentLanguage
        const languageSelectionButtonClassname = isButtonLanguageSelected ? 'language-selection-button selected' : 'language-selection-button'

        return languageSelectionButtonClassname
    }

return <> ...page code </>
```

The key points of this structure are:

1. **Scalability:** The structure is designed to scale as the component evolves, making it easier to add new features and functionalities.
2. **Consistency:** Following this structure ensures consistency across all components in the project.

### Variable and function naming

Consistent and meaningful variable and function names are essential for code readability and maintainability for all projects independent on which programming language or technology you are using. This project follow specific naming conventions to ensure clarity and understanding across the codebase.

#### General guidelines

1. **Descriptive and Clear Names:**
   - Choose names that clearly convey the purpose and functionality of the variable or function.

   ```typescript
   // Good example
   const userId = user.id;

   // Avoid
   const id = user.id
   ```
   ```typescript
   // Good example
   function calculateTotalPrice() {
       // function body
   }
   
   // Avoid
   function calculate() { # Calculate what? This function tell us nothing about its role.
       // function body
   }
   ```

2. **Uppercase name for Constants:**
   - Use uppercase for constant variables and separate words with underscores.

  ```typescript
   // Good example
   const WEBSITE_STAGES = 100;
   
   // Avoid
   const websiteStages = 100;
  ```

3. **Use "has" and "is" Prefix for Booleans:**
   - Prefix boolean variable names with "has" or "is", this is considered a good practice for naming boolean variables by multiple programming language communities.

   ```typescript
   // Good example
   const hasPermission = true;

   const isLoggedIn = false;

   // Avoid
   const permission = true;

   const loggedIn = false;
   ```
   
### SASS/CSS patterns

Talking about styling, this project follows the RSCSS (Reasonable Standard for CSS Stylesheet) pattern, which provides a structured and maintainable way to organize our SASS/CSS code. This pattern encourages a modular and scalable architecture, making it easier to manage and read style files across the project.

RSCSS rely on three key points:

1. **Components:** A component is the container of all the elements of the UI. They are named with at least two words, using dash as substitute to spaces, for example: `.search-bar`, `.card-header`.
2. **Elements:** Elements are the pieces inside our components, they are selected using the CSS child selector `>`. Example of element selection:
   ```sass
   .card-header { # This is the component
      ...styles
      > .header-title { # This is our element!
         ...styles
      }
   }
   ```
3. **Variants:** They are the modifiers of our components and elements. Example:
      ```sass
   .card-header { # This is the component
      ...styles
      > .header-title { 
         ...styles

         &.-highlithed { # This is our variant!
            ...styles
         }
      }
   }
   ```

This project also rely on the kebab-case to name its CSS/SASS classes. Example:
```sass
// Good
.card-header {...}
.page-container {...}

// Avoid
.cardHeader {...}
.page_container {...}
```
