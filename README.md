# Frontend Engineering Internship Assessment

A responsive e-commerce web application built with **Next.js (App Router)** and **TypeScript**, featuring a landing page and search results page that display products from the [DummyJSON API](https://dummyjson.com/products).

The application allows users to:

* Browse products in a responsive grid layout
* Search products by name
* Filter products by category
* View detailed product information
* Navigate through a clean and user-friendly interface

## Features

### Product Discovery

* Dynamic product listing from the DummyJSON API
* Real-time search functionality
* Category-based filtering
* Product detail pages

### User Experience

* Responsive design for mobile, tablet, and desktop devices
* Loading states for asynchronous data fetching
* Error handling with user-friendly feedback
* Empty states when no products match the current search criteria

### SEO

* Metadata implementation using the Next.js Metadata API
* Semantic HTML structure
* Search-engine-friendly routing

## Technical Details

### Stack

* Next.js (App Router)
* React
* TypeScript
* Tailwind CSS

### Architecture

The project follows a component-based architecture with a focus on maintainability, scalability, and code quality.

Key considerations include:

* Reusable UI components
* Strong TypeScript typing
* Separation of concerns
* Responsive-first design approach
* Clean and organized project structure

### Performance Considerations

* Server-side rendering capabilities provided by Next.js
* Optimized data fetching
* Efficient component rendering
* Responsive image handling where applicable

## Running Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to view the application.

## Deployment

The application is deployed on Vercel and can be accessed through the provided deployment link.

## Notes

The UI implementation follows the structure and visual direction provided in the assessment design while prioritizing responsiveness, usability, accessibility, and maintainable code practices over pixel-perfect replication.
