# PC Builder Website using Next.js

This is a simple PC Builder website built using Next.js, a React framework for server-side rendering (SSR) and static site generation (SSG). The website allows users to build their custom PC by selecting PC components from different categories like CPU, motherboard, RAM, power supply unit, storage device, monitor, and others.

## Frontend Live Link:

[Live Website Link](https://your-live-link-here)

## Frontend Github Repository Link:

[Frontend Github Repository](https://github.com/knowaminul/pc-builder)

## Table of Contents

- [Navbar](#navbar)
- [Home Page](#home-page)
- [Featured Category Sections](#featured-category-sections)
- [Product Detail Page / Route](#product-detail-page--route)
- [PC Builder Page](#pc-builder-page)
- [Bonus Part](#bonus-part)

## Navbar

The website's navbar features a **PC Builder** button that redirects the user to the PC Builder page, where they can start building their PC. Additionally, there is a Categories dropdown that allows users to navigate directly to different PC component categories, each with its own corresponding route using static site generation (SSG).

## Home Page

The home page showcases featured products that are randomly selected from various PC component categories. Each featured product card displays the following information:

- Image
- Product Name
- Category
- Price
- Status (In Stock | Out of Stock)
- Rating (Out of 5 Stars)

Clicking on any of the featured products will take the user to the product detail page to view more information about that specific component.

Below the featured products, there are 6 Featured Categories, each corresponding to a PC component category. Clicking on any of these categories will redirect the user to another page where at least 3 products of that specific category will be displayed.

## Featured Category Sections

The Featured Category Sections page displays products from a specific category. Each product card shows the following information:

- Image
- Product Name
- Category
- Price
- Status (In Stock | Out of Stock)
- Rating (Out of 5 Stars)

Clicking on any of the products on this page will take the user to the product detail page for more information.

## Product Detail Page / Route

The Product Detail page provides comprehensive information about a particular PC component. Each PC component includes the following details:

- Image
- Product Name
- Category
- Status (In Stock | Out of Stock)
- Price
- Description
- Key Features (e.g., Brand, Model, Specification, Port, Type, Resolution, Voltage, etc.)
- Individual Rating (Out of 5 Stars)
- Average Rating (Out of 5 Stars)
- Reviews

## PC Builder Page

The PC Builder page uses server-side rendering (SSR) and allows users to build their custom PC by selecting components from different categories. The available categories are:

- CPU / Processor
- Motherboard
- RAM
- Power Supply Unit
- Storage Device
- Monitor

For each category, there is a "Choose/Select" button. Clicking on this button will take the user to another page where at least 3 components of that specific category will be displayed. Each component card shows the following information:

- Image
- Product Name
- Category
- Price
- Status (In Stock | Out of Stock)
- Rating (Out of 5 Stars)

On this page, each component card has an "Add to Builder" button. Clicking on this button will redirect the user back to the PC Builder page and update the state of the selected category section with the chosen component. The application uses Redux / Context API to create a central store for this functionality.

Once the user has added at least 5-6 components (CPU, RAM, Power Supply, Storage, Motherboard, and Casing), the "Complete Build" button becomes active. Clicking on this button will show a success alert indicating that the PC build is complete.

## Bonus Part

- The PC Builder page is a protected/private route, and only logged-in users can access it. User authentication is implemented using NextAuth, which supports at least one social login provider (Google/Github).
- The "Complete Build" button displays a success alert when the user successfully completes building their PC.
- The Home page includes a hero section/banner section and a footer.
- The entire application is responsive, ensuring an enjoyable user experience on both mobile and desktop devices.

## How to Run the Project

To run the PC Builder website locally on your machine, follow these steps:

1. Clone the repository:
```bash

git clone https://github.com/knowaminul/pc-builder.git
cd pc-builder

```
2. Install dependencies:
```bash
npm install
```
3. Run the development server:
```bash
npm run dev
```
4. Open your web browser and visit `http://localhost:3000` to access the PC Builder website.

## Conclusion

Congratulations! You've now explored the features of the PC Builder website built using Next.js. Feel free to check out the live link and the GitHub repository to see the website in action and review the code. If you have any questions or feedback, please don't hesitate to reach out. Happy PC building! 🚀
