# React-contentful site

## 📜 Screenshots
Desktop primary | Desktop secondary
:-------------------------:|:-------------------------:
![](https://user-images.githubusercontent.com/75943412/180653560-d5d27f88-48fc-44c5-8602-c9a326d6f534.png) | ![](https://user-images.githubusercontent.com/75943412/180653981-92348130-7651-4a3c-a249-7c13de5a2abc.png)

Mobile primary | Mobile secondary 
:-------------------------:|:-------------------------:
![](https://user-images.githubusercontent.com/75943412/180653645-3568ba31-e9c5-4b64-bd39-8448f474acdb.png) | ![](https://user-images.githubusercontent.com/75943412/180654133-5d149d0a-68f9-47aa-92df-59b7df24a58c.png)

Mobile primary | Mobile secondary 
:-------------------------:|:-------------------------:
![](https://user-images.githubusercontent.com/75943412/180653710-51d473ad-2e05-4c61-94eb-58ff38c796e5.png) | ![](https://user-images.githubusercontent.com/75943412/180653732-d2526d55-20ba-44f9-8aa8-e2e1c1645aee.png)


## 🤔 Objective
Build a React page based on this Figma Design. All the content (text and images) must be coming from any headless CMS of your choice. There are a few popular SaaS Headless CMS (for example - Contentful ) where you can do a free sign up for a trial period.

## 🐤 Application overview

- [ ] Non Functional Requirements
- [x] Each section of the homepage must be a separate react component.
- [x] Develop using Typescript.
- [x] Use tailwindcss(preferrable) or Material UI
- [x] No hardcoding of text in react app. All the content (text and images) must be coming from a Headless CMS through its API (Example API reference ).
- [x] Enable theming with just 2 colors i.e primary and secondary and font family
- [x] Create Typography components for H1, H2, Paragraph
- [ ] Use Storybook for 3 UI components 
- [x] Button - Primary and secondary
- [x] Typography - H1, H2, Paragraph
- [x] Sub component of the Why Choose us section with icon, title and paragraph.
- [ ] Prettier and Linter configuration
- [x] Host the page on Netlify, Vercel or another provider.
- [x] Readme file on how to deploy and run the service.
- [x] Add a checklist of the above items on ReadMe and check all the items before submitting the assignment.

## 🏗️ Built With

- [Vite](https://vitejs.dev/)
- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Contentful](https://app.contentful.com/)

## 🎏 Project Structure
```
├── node_modules (.gitignore)
├── public
│   └── favicon.jpg
├── src
│   ├── App.tsx
│   ├── components
│   │   ├── Button.tsx
│   │   ├── Consultation.tsx
│   │   ├── Layout.tsx
│   │   ├── ThemeContext.tsx
│   │   ├── hero
│   │   │   ├── Hero.tsx
│   │   │   └── HeroSkeletonLoader.tsx
│   │   ├── latestNews
│   │   │   ├── LatestNews.tsx
│   │   │   ├── LatestNewsCard.tsx
│   │   │   └── LatestNewsCardSkeletonLoader.tsx
│   │   ├── moreInfo
│   │   │   ├── MoreInfo.tsx
│   │   │   ├── MoreInfoCard.tsx
│   │   │   └── MoreInfoCardSkeletonLoader.tsx
│   │   ├── shared
│   │   │   ├── Footer.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── SectionHeaderPragraphSkeletonLoader.tsx
│   │   │   └── Sidebar.tsx
│   │   ├── teamInfo
│   │   │   ├── TeamInfo.tsx
│   │   │   └── TeamInfoSkeletonLoader.tsx
│   │   ├── typography
│   │   │   ├── Heading.tsx
│   │   │   ├── Paragraph.tsx
│   │   │   ├── SubHeading.tsx
│   │   │   └── Title.tsx
│   │   └── whyChooseUs
│   │       ├── WhyChooseUs.tsx
│   │       ├── WhyChooseUsCard.tsx
│   │       └── WhyChooseUsCardSkeletonLoader.tsx
│   ├── hooks
│   │   └── useContentful.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── pages
│   │   └── Home.tsx
│   └── vite-env.d.ts
├── tailwind.config.cjs
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── yarn-error.log
└── yarn.lock
```
## 🧑🏻‍🎤 Installation

1. Clone the repo
   ```sh
   git clone https://github.com/manikangkandas/techwondoe.git
   ```
2. Install packages using NPM or YARN

   ```sh
   npm install
   ```
   or

   ```sh
   yarn add
   ```

3. Run using NPM or YARN

   ```sh
   npm run dev
   ```
   or

   ```sh
   yarn dev
   ```

## 💁🏻‍♂️ Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch `git checkout -b feature/AmazingFeature`
3. Commit your Changes `git commit -m 'Add some AmazingFeature'`
4. Push to the Branch `git push origin feature/AmazingFeature`
5. Open a Pull Request

<!-- LICENSE -->

## ©️ License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- CONTACT -->

## 🤝 Contact

Author Info - [@manikankandas](https://linkedin.com/in/techwondoe) - manikangkan.das@outlook.com
<br />
Project github repo Link - [Techwondoe](https://github.com/manikangkandas/techwondoe)
Live link - [Techwondoe](https://manikangkandas.github.io/techwondoe/)
