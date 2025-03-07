# Brawlman

Brawlman is a full-stack web application designed for managing Blood Bowl-style teams and simulating matches. Built with Next.js, Tailwind CSS, MongoDB Atlas, and NextAuth.js, this application provides a seamless experience for users to create and manage their teams.

## Features

- User authentication using Google OAuth via NextAuth.js
- Create, read, update, and delete teams and players
- Simulate matches between teams
- Responsive design using Tailwind CSS

## Project Structure

```
Brawlman
├── components          # Reusable components for the application
│   ├── Layout.js
│   └── Navbar.js
├── lib                # Library files for database connections
│   └── mongodb.js
├── models             # Mongoose models for MongoDB
│   ├── Team.js
│   ├── Player.js
│   └── Match.js
├── pages              # Next.js pages and API routes
│   ├── api
│   │   ├── teams.js
│   │   └── matches.js
│   ├── _app.js
│   ├── index.js
│   └── auth
│       └── [...nextauth].js
├── public             # Static assets
│   └── favicon.ico
├── styles             # CSS styles
│   ├── globals.css
│   └── tailwind.css
├── .env.local         # Environment variables
├── next.config.js     # Next.js configuration
├── package.json       # Project metadata and dependencies
├── tailwind.config.js  # Tailwind CSS configuration
└── postcss.config.js  # PostCSS configuration
```

## Getting Started

### Prerequisites

- Node.js (version 12 or later)
- MongoDB Atlas account

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/Brawlman.git
   cd Brawlman
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your environment variables in `.env.local`:
   ```
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Deployment

To deploy the application, you can use Vercel. Follow these steps:

1. Push your code to a GitHub repository.
2. Sign in to Vercel and import your GitHub repository.
3. Set up your environment variables in the Vercel dashboard.
4. Deploy your application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License. See the LICENSE file for details.