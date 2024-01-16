
# MERN Book Search Engine

![Project Image](url_to_project_image)

> A web application that allows users to search for books, save them to their account, and manage their saved books.

---

## Table of Contents

- [Description](#description)
- [User Stories](#user-stories)
- [Mock-Up](#mock-up)
- [Getting Started](#getting-started)
  - [Back-End Specifications](#back-end-specifications)
  - [Front-End Specifications](#front-end-specifications)
- [Grading Requirements](#grading-requirements)
- [Deployment](#deployment)
- [Application Quality](#application-quality)
- [Repository Quality](#repository-quality)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Description

This project is a MERN stack application that provides a book search engine with features such as searching for books, saving them to a user's account, and managing saved books.

---

## User Stories

- As an avid reader, I want to search for new books to read.
- As a user, I want to be able to log in or sign up to save and manage my book list.
- ...

---

## Mock-Up

![Mock-Up](url_to_mock_up_animation)

---

## Getting Started

To run this project locally or make modifications, follow the instructions in the [Getting Started](#getting-started) section of the original assignment.

### Back-End Specifications

- `auth.js`: Update the auth middleware function to work with the GraphQL API.
- `server.js`: Implement the Apollo Server and apply it to the Express server as middleware.
- `Schemas directory`:
  - `index.js`: Export typeDefs and resolvers.
  - `resolvers.js`: Define query and mutation functionality.
  - `typeDefs.js`: Define necessary Query and Mutation types.

### Front-End Specifications

- `queries.js`: Holds the GET_ME query.
- `mutations.js`:
  - `LOGIN_USER`: Executes the loginUser mutation.
  - `ADD_USER`: Executes the addUser mutation.
  - `SAVE_BOOK`: Executes the saveBook mutation.
  - `REMOVE_BOOK`: Executes the removeBook mutation.
- `App.jsx`: Create an Apollo Provider to work with the Apollo Server.
- `SearchBooks.jsx`: Use the Apollo useMutation() Hook to execute the SAVE_BOOK mutation.
- `SavedBooks.jsx`: Use the useQuery() Hook to execute the GET_ME query and useMutation() Hook to execute the REMOVE_BOOK mutation.
- `SignupForm.jsx`: Replace the addUser functionality with the ADD_USER mutation.
- `LoginForm.jsx`: Replace the loginUser functionality with the LOGIN_USER mutation.

---

## Grading Requirements

- Technical Acceptance Criteria: 40%
- Deployment: 32%
- Application Quality: 15%
- Repository Quality: 13%

---

## Deployment

This application is deployed on [Render](url_to_live_application).

---

## Application Quality

- User experience is intuitive and easy to navigate.
- User interface style is clean and polished.
- Application resembles the mock-up functionality provided in the Challenge instructions.

---

## Repository Quality

- Repository has a unique name.
- Follows best practices for file structure and naming conventions.
- Follows best practices for class/id naming conventions, indentation, quality comments, etc.
- Contains multiple descriptive commit messages.
- Contains high-quality README file with description, screenshot, and link to the deployed application.

---

## Contributing

To contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

## Contact

Your Name - [jason82autotech@gmail.com] - [https://www.linkedin.com/in/jason-grant-231334267/
]

---
I used the help of ChatGPT, calssmates, instructor, and Ta;'s. I also used Google extensively and lots of you tube videos!
