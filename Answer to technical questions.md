# Question 1: How long did you spend on the coding assignment?

I spent around 3 hours in building the application, implementing the functionality, making the application responsive and writing test cases. 

I successfully implemented all required functionalities, including responsiveness, accessibility, sorting based on title and published year. Infact, I wanted to give a better experience for users using this app and hence , I added an additional feature of pagination structuring them semantically based on accessibility making it effective for users to traverse through multiple dataset pages. 

# a. What would you add to your solution if you had more time?
# b. If you didn't spend much time on the coding test, then use this as an opportunity to explain what you would add.

If given more time I would have additionally incorporated filter search functionality within the table which would have further enhanced the user experience by allowing users to quickly locate specific items within the dataset. This extra feature would have provided a more efficient and tailored browsing experience.

# Question 2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

I have added pagination feature to this application because given the huge dataset , to make the user experience better I have added the pagination feature.

#  How would you track down a performance issue in production? Have you ever had to do this?

To track down and resolve a performance issue in a React application in production, I took the following steps:

1. I found that some components were re-rendering unnecessarily. By wrapping these components with React.memo, I ensured they only re-rendered when their props changed.
2. Another issue was - To improve load times, I implemented code splitting using React.lazy and Suspense. This allowed the application to load components only when they were needed, reducing the initial bundle size.

# How would you improve the API that you just used?

Pagination Controls: the API could have been more robust with pagination controls to handle large sets of search results. If the API had such features I could have integrated with the additional feature pagination that I added for the user experience to get effective user experience for searching through data sets. This could include options to specify the number of results per page and the ability to navigate between pages more easily. Based on the number of results loaded say there are more than 300, then get first 100 at one API call, make the next API call to get next 100, that way the component and data load times aren’t affected , they will look smoother.

# Please describe yourself using correctly formatted JSON.

{
  "name": "Akshaya Dupati",
  "skills": [
    "ReactJS",
    "JavaScript",
    "React-Redux",
    "NodeJS",
    "HTML",
    "CSS",
    "Jest",
    "MongoDB",
    "Express",
    "GraphQL",
    "Bootstrap",
    "Tailwind"
  ],
  experience: [
    {
      "company": "Aarorn Technologies",
      "currentCompany": true,
      "responsibilities": [
        "Experience working with RBC's Wealth Management team, where I managed and processed extensive datasets, executing meticulous data validation procedures based on specific business logic criteria.",
        "Implemented an automated script for dynamic conversion of JSON data into a GraphQL schema using NodeJS, to significantly optimize workflow efficiency and reduce manual schema creation.",
        "Accelerated the user interface development process through implementation of component-based architecture with React and Redux.",
        "Constructed interactive and responsive web pages using HTML, CSS, JavaScript and React.",
        "Implemented lazy-loading techniques to boost application performance and elevate user experience.",
        "Strong technical expertise in React-Redux architecture, adeptly managing application state to maintain robust data flow and scalability.",
        "Implemented modern ES6 syntax and features to enhance code efficiency, resulting in faster load times and improved overall user experience.",
        "Utilized preprocessors like SCSS to enhance CSS maintainability, modularity, and efficiency in web development projects.",
        "Conducted comprehensive automation testing with Jest and React Testing Library (RTL), ensuring high code quality and reliability",
        "Integrated REST APIs to retrieve user data and enhance dynamic functionality of the application.",
        "Worked on version control tools such as Git, and bug tracking tools like JIRA."
      ]
    },
    {
      "company": "IndoChino",
      "currentCompany": false,
      "responsibilities": [
        "Implemented React components using both class components and modern React hooks, enhancing development efficiency, scalability, and code maintainability.",
        "Implemented fixes and features in JavaScript applications using React, Redux and ES6, leading to a 20% increase in user satisfaction.",
        "Implemented RESTful APIs to facilitate efficient data retrieval and management integrating with Postgres database.",
        "Managed software releases collaboratively using CI/CD pipelines built with Jenkins, for seamless continuous integration ensuring smooth deployment across multiple environments.",
        "Proficient in Agile Software Development methodologies, ensuring iterative and efficient project execution."
      ]
    },
    {
      "company": "Crayon Data",
      "currentCompany": false,
      "responsibilities": [
        "Experienced in fast-paced startup environments, specializing in travel-focused product development.",
        "Swiftly addressed and provided quick fixes for customer issues that arose in the production environment.",
        "Mentored junior developers in a fast-paced environment, providing guidance and support as needed.",
        "Experience building components for various scenarios using both React class-based components and React hooks.",
        "Implemented React-Redux for state manipulations and dispatched actions.",
        "Collaborated with front-end teams to integrate React components with Node.js backend, improving development efficiency by 25%",
        "Utilized JavaScript and advanced ES6 features adeptly to develop complex functionalities with robustness and efficiency.",
        "Utilized SCSS to achieve reusability, maintain consistency and reusability across project."
      ]
    },
    {
      "company": "Tata Consultancy Services",
      "currentCompany": false,
      "responsibilities": [
        "Design, develop web user interfaces using HTML, CSS, Bootstrap, JavaScript, ReactJS to meet business requirements.",
        "Experienced in functional programming, leveraging principles to create clean, maintainable, and efficient code"
      ]
    }
  ],
  "education": [
    {
      "institutionName": "Humber College, University of Guelph",
      "graduationYear": "2022"
    },
    {
      "institutionName": "Anna University",
      "graduationYear": "2016"
    }
  ],
  
}