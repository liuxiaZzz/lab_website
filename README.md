# ENT Genomics Lab Website

The official website for the **ENT Genomics Lab**, located at the **National University of Singapore (NUS) Yong Loo Lin School of Medicine**, Department of Otolaryngology. Led by Principal Investigator Dr. Joshua K. Tay.

**Live Site:** [https://liuxiaZzz.github.io/lab_website](https://liuxiaZzz.github.io/lab_website)

## 🧬 About the Lab

The ENT Genomics Lab focuses on head and neck oncology, nasopharyngeal carcinoma screening, translational immunology, and digital health technologies. This website serves as a portfolio of our research, publications, news, and team members.

## 🚀 Features

*   **Responsive Design**: Optimized for desktop, tablet, and mobile viewing.
*   **Modern UI**: Clean, academic aesthetic with parallax scroll effects and smooth animations.
*   **Team Profiles**: Dedicated profile pages for PI, staff, students, and alumni.
*   **Dynamic Sections**: Publications with DOI links, News section, and categorized media.
*   **Internationalization Ready**: Basic infrastructure for bilingual support (English/Chinese).

## 📂 Project Structure

```text
├── assets/
│   ├── css/            # Main stylesheets (style.css)
│   ├── js/             # Interactive scripts (main.js)
│   └── images/         # Organized media assets
│       ├── site/       # Logos, backgrounds
│       ├── team/       # Team member photos
│       ├── publications/# Publication covers
│       └── ...
├── index.html          # Home page
├── research.html       # Research interests & projects
├── team.html           # Team overview
├── team-*.html         # Individual profile pages
├── publications.html   # List of publications
├── news.html           # Lab news & updates
├── positions.html      # Job openings
├── labfun.html         # Gallery & events
└── contact.html        # Contact information
```

## 🛠️ Local Development

To run this project locally:

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/liuxiaZzz/lab_website.git
    ```
2.  **Open the project**:
    Navigate to the project folder and open `index.html` in your preferred web browser.
    
    *Recommended: Use VS Code "Live Server" extension for the best experience.*

## 📝 Modification Guide

*   **Updating Publications**: Edit `publications.html`. Ensure new entries follow the existing HTML structure and DOI links are placed on a new line.
*   **Adding Team Members**: 
    1.  Add a card in `team.html`.
    2.  Create a new `team-[name].html` file based on existing templates.
    3.  Add the photo to `assets/images/team/`.
*   **Changing Images**: Place new images in the appropriate `assets/images/` subfolder and update the `src` paths in the HTML.

## 📄 License

All rights reserved. Content and images are property of the ENT Genomics Lab.
