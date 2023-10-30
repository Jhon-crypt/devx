DevX allows developers to build their personal portfolios, share their experiences, skills, projects, and other achievements in their coding journey

Devx [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Database built on [Supabase](https://supabase.com/)
Auth built on 
Database built on [Hanko](hanko.io)

## Getting Started

### Project setup
Before we start building we're going to set up our Database and API. This is as simple as starting a new Project in Supabase and then creating a "schema" inside the database.

### Set up the database schema
Now we are going to set up the database schema. you can just copy/paste the SQL from below and run it in the Supabase SQL Editor.
```bash

create table
  public.portfolio (
    id bigint primary key generated always as identity,
    created_at timestamp with time zone not null default now(),
    name text null,
    user_id uuid null,
    portfolio_id uuid null default gen_random_uuid (),
    cover_image_link text null,
    user_name text null,
    user_title text null,
    user_about text null,
    user_avatar text null
  );

create table
  public.portfolio_projects (
    id bigint primary key generated always as identity,
    created_at timestamp with time zone not null default now(),
    project_name text null,
    project_link text null,
    cover_image_link text null,
    github_link text null,
    portfolio_id uuid null default gen_random_uuid ()
  );

create table
  public.portfolio_skills (
    id bigint primary key generated always as identity,
    created_at timestamp with time zone not null default now(),
    skills_name text null,
    portfolio_id uuid null default gen_random_uuid ()
  );

create table
  public.portfolio_views (
    id bigint primary key generated always as identity,
    created_at timestamp with time zone not null default now(),
    ip text null,
    portfolio_id uuid null default gen_random_uuid ()
  );

create table
  public.project_contact (
    id bigint primary key generated always as identity,
    created_at timestamp with time zone not null default now(),
    email_link text null,
    x_link text null,
    linkedin_link text null,
    phone_number text null,
    portfolio_id uuid null default gen_random_uuid ()
  );
```

### Get the API Keys
Now that you've created some database tables, 
We just need to get the Project URL and anon key from the API settings.

Go to the API Settings page in the Dashboard.
Find your Project URL, anon keys.
Then paste the required keys in your .env file with this format
```bash
NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_KEY

```

## Integrate Hanko with Next.js

### Add the Hanko API URL
Retrieve the API URL from the Hanko console and place it in your .env file.
```bash
NEXT_PUBLIC_HANKO_API_URL=url
```

### Create a project
Create a new project in the Supabase Dashboard.
Enter your project details.
Wait for the new database to launch.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
