# Member-App Frontend Project

This is the frontend part of Member-App, built using **Next.js**. It provides the user interface and communicates with the backend APIs to handle user interactions, display data, and manage authentication.

## Features

- **User Authentication**: JWT-based authentication with login, registration, and token management.
- **Responsive Design**: Optimized for desktop and mobile using Tailwind CSS.
- **API Integration**: Seamless integration with the backend REST APIs for data fetching and CRUD operations.
- **Dynamic Routing**: Dynamic routing to handle various pages based on user inputs and query parameters.
- **Priviledes & Redeem**: Show Priviledes list and use can redeem by Points. management.

## Technologies

- **Next.js**: React framework for server-side rendering, static generation, and routing.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for fast UI development.
- **JWT**: JSON Web Tokens for user authentication.
- **Docker**: Containerization for easier deployment and environment

## Environment Setup

### Development Setup

1. Clone the repository:
```bash
git clone https://github.com/auttapon2537/member-app-frontend.git
cd member-app-backend
```

2. Rename Environment file:
```bash
mv .env.local.example .env.local
```

3. Install dependencies:
```bash
npm install
```

4. Run project:
```bash
npm run dev
```

5. Check service is running:
```bash
curl -X GET http://localhost:3000/
```

### Development Setup
1. Build:
```bash
docker build -t member-app-front .
```

2. Run Docker:
```bash
docker-compose up -d
```

3. Check service is running:
```bash
curl -X GET http://localhost:3000/
```

## User for test

| Username      | Password      |
| ------------- |:-------------:|
| admin         | passwd        |
| user01        | passwd        |
| user02        | passwd        |

## Example
Login page
![Alt text](./docs/000.png)

Home page
![Alt text](./docs/001.png)

Privileges section
![Alt text](./docs/002.png)

Detail section (Ready to redeem)
![Alt text](./docs/003.png)

Detail section (Redeemed)
![Alt text](./docs/004.png)

Detail section (Points not enough)
![Alt text](./docs/005.png)