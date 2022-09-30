import { __DEV__ } from '@/utils';
import React, { memo } from 'react';

const tools = [
  {
    name: 'Next.js',
    description: 'The React Framework for Production',
    url: 'https://nextjs.org/',
    logo: '/images/tools/nextjs.svg',
  },
  {
    name: 'React',
    description: 'A JavaScript library for building user interfaces',
    url: 'https://reactjs.org/',
    logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
  },
  {
    name: 'Tailwind CSS',
    description:
      'A utility-first CSS framework for rapidly building custom designs.',
    url: 'https://tailwindcss.com/',
    logo: '/images/tools/tailwindcss.svg',
  },
  {
    name: 'TypeScript',
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
    url: 'https://www.typescriptlang.org/',
    logo: '/images/tools/typescript.svg',
  },
  {
    name: 'Vercel',
    description:
      'Vercel is a cloud platform for static sites and Serverless Functions.',
    url: 'https://vercel.com/',
    logo: '/images/tools/vercel-icon-light.svg',
  },
  {
    name: 'GraphQL',
    description:
      'GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.',
    url: 'https://graphql.org/',
    logo: '/images/tools/graphql.svg',
  },
  {
    name: 'Apollo',
    description: 'Apollo is a GraphQL platform for building data graphs.',
    url: 'https://www.apollographql.com/',
    logo: '/images/apollo.svg',
  },
  {
    name: 'Prisma',
    description: 'Prisma is an open-source database toolkit.',
    url: 'https://www.prisma.io/',
    logo: '/images/prisma.svg',
  },
  {
    name: 'PostgreSQL',
    description:
      'PostgreSQL is a powerful, open source object-relational database system.',
    url: 'https://www.postgresql.org/',
    logo: '/images/postgresql.svg',
  },
  {
    name: 'MongoDB',
    description:
      'MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era.',
    url: 'https://www.mongodb.com/',
    logo: '/images/mongodb.svg',
  },
  {
    name: 'Redis',
    description:
      'Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache and message broker.',
    url: 'https://redis.io/',
    logo: '/images/redis.svg',
  },
  {
    name: 'Docker',
    description:
      'Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.',
    url: 'https://www.docker.com/',
    logo: '/images/docker.svg',
  },
  {
    name: 'Kubernetes',
    description:
      'Kubernetes is an open-source system for automating deployment, scaling, and management of containerized applications.',
    url: 'https://kubernetes.io/',
    logo: '/images/kubernetes.svg',
  },
  {
    name: 'Jest',
    description:
      'Jest is a delightful JavaScript Testing Framework with a focus on simplicity.',
    url: 'https://jestjs.io/',
    logo: '/images/jest.svg',
  },
  {
    name: 'React Testing Library',
    description:
      'Simple and complete React DOM testing utilities that encourage good testing practices.',
    url: 'https://testing-library.com/docs/react-testing-library/intro/',
    logo: '/images/react-testing-library.svg',
  },
  {
    name: 'Cypress',
    description:
      'Fast, easy and reliable testing for anything that runs in a browser.',
    url: 'https://www.cypress.io/',
    logo: '/images/cypress.svg',
  },
  {
    name: 'Storybook',
    description:
      'Storybook is an open source tool for developing UI components in isolation for React, Vue, and Angular.',
    url: 'https://storybook.js.org/',
    logo: '/images/storybook.svg',
  },
  {
    name: 'ESLint',
    description:
      'ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.',
    url: 'https://eslint.org/',
    logo: '/images/eslint.svg',
  },
  {
    name: 'Prettier',
    description: 'An opinionated code formatter.',
    url: 'https://prettier.io/',
    logo: '/images/prettier.svg',
  },
  {
    name: 'Husky',
    description: 'Husky can prevent bad git commit, git push and more 🐶 woof!',
    url: 'https://typicode.github.io/husky/',
    logo: '/images/husky.svg',
  },
  // golang
  {
    name: 'Golang',
    description:
      'Go is an open source programming language that makes it easy to build simple, reliable, and efficient software.',
    url: 'https://golang.org/',
    logo: '/images/golang.svg',
  },
  // nodejs
  {
    name: 'Node.js',
    description:
      "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
    url: 'https://nodejs.org/',
    logo: '/images/nodejs.svg',
  },
  // vuejs
  {
    name: 'Vue.js',
    description:
      'Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.',
    url: 'https://vuejs.org/',
    logo: '/images/vuejs.svg',
  },
  // php laravel
  {
    name: 'PHP',
    description:
      'PHP is a popular general-purpose scripting language that is especially suited to web development.',
    url: 'https://www.php.net/',
    logo: '/images/php.svg',
  },
  {
    name: 'Laravel',
    description:
      'Laravel is a web application framework with expressive, elegant syntax.',
    url: 'https://laravel.com/',
    logo: '/images/laravel.svg',
  },
];

export const OurTools: React.FC = memo(() => {
  return (
    <section className="bg-accents-100 text-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-2 mb-20">
          <div className="col-span-12 md:col-span-4">
            <h4 className="font-semibold text-2xl text-primary">Our Tools</h4>
            <h2 className="font-bold text-4xl">
              We use the best tools to get the job done.
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2">
          {tools.map((tool) => (
            <div key={tool.name} className="col-span-12 md:col-span-4">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-transparent text-white flex items-center justify-center">
                  <img src={tool.logo} alt={tool.name} />
                </div>
                <h4 className="font-semibold text-2xl text-white mt-4">
                  {tool.name}
                </h4>
                <p className="text-center text-gray-400 mt-2">
                  {tool.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

if (__DEV__) {
  OurTools.displayName = 'OurTools';
}
