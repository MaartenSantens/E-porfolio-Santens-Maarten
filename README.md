<p align="center">
  <img alt="Fav Icon Png" src="https://github.com/KevinTrinh1227/Reactfolio/blob/master/public/assets/readme-icon.png" width="100"/>
</p>
<h1 align="center">
  kevintrinh.dev - v2
</h1>
<p align="center">
  The Second iteration of <a href="https://www.kevintrinh.dev" target="_blank">kevintrinh.dev</a> built with React.js with GitHub API integration.
</p>

<img alt="Screen Shot from 9-24-2023 of landing page." src="https://github.com/KevinTrinh1227/Reactfolio/blob/master/public/assets/screenshot.png">

## 📌 Important Information

This project recycles components from my old [V1 portfolio](https://www.kevintrinh-v1.netlify.app), while also adopting to a new theme and major UI changes inspired by this [DEMO](https://steam-portfolio-demo.vercel.app/). Native development machine: Linux OS (Ubuntu LTS) using NVM & Node v16.20.2.

This project is simply a revamped version of my [kevintrinh-v1](https://www.kevintrinh-v1.netlify.app). It comes with numerous updates including functionality, API integration, Significant UI changes, bug fixes, and much more! This project is fully open source and I encourage anyone interested, to contribute to the project as well. This iteration continues the simplistic approach to the same "one page one scroll" design philosophy as V1.

For easy use, I linked every element that makes up the app to `content.json` to eliminate having to open each component file to change content data, so you can edit everything mainly from one file. Refer to the corresponding JS file for more information on how to manipulate a specific section within the JSON.

## 🛠 set-up

1. Use the correct Node version using [NVM](https://github.com/nvm-sh/nvm) (Not mandatory)

   ```sh
   nvm install 16
   ```

   ```sh
   nvm alias default 16
   ```

2. Install the dependencies using npm or yarn

   ```sh
   npm install
   ```

   ```sh
   yarn install
   ```

3. Start the development server using npm or yarn

   ```sh
   npm start
   ```

   ```sh
   yarn run start
   ```

## 🚀 Build and run for production

1. Generate a complete static production build

   ```sh
   npm run build
   ```

## 🎨 CSS color codes and fonts

| Color         | Hex Code                                                             | Usage Info                 | CSS Usage              |
| ------------- | -------------------------------------------------------------------- | -------------------------- | ---------------------- |
| Dark Navy     | ![[#0b182c]](https://via.placeholder.com/10/0b182c?text=+) `#0b182c` | Main background color      | `var(--dark-navy)`     |
| Navy          | ![[#12223d]](https://via.placeholder.com/10/12223d?text=+) `#12223d` | Secondary background color | `var(--navy)`          |
| Light Navy    | ![[#233450]](https://via.placeholder.com/10/233450?text=+) `#233450` | Data tool tip color        | `var(--light-navy)`    |
| Light Lime    | ![[#64ff93]](https://via.placeholder.com/10/64ff93?text=+) `#64ff93` | Main accent color          | `var(--light-lime)`    |
| White         | ![[#e9f1fc]](https://via.placeholder.com/10/e9f1fc?text=+) `#e9f1fc` | Main text color            | `var(--white)`         |
| Bone White    | ![[#d4ddf8]](https://via.placeholder.com/10/d4ddf8?text=+) `#d4ddf8` | Secondary text color       | `var(--bone-white)`    |
| Smoke         | ![[#8992ac]](https://via.placeholder.com/10/8992ac?text=+) `#8992ac` | Tertiary text color        | `var(--smoke)`         |
| Light Smoke   | ![[#acb5cf]](https://via.placeholder.com/10/acb5cf?text=+) `#acb5cf` | Section subtitles text     | `var(--light-smoke)`   |
| Lighter Smoke | ![[#d0d8f3]](https://via.placeholder.com/10/d0d8f3?text=+) `#d0d8f3` | Section Title text         | `var(--lighter-smoke)` |
