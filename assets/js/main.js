// Bilingual dictionary
const translations = {
  en: {
    brand_title: "Joshua's Lab",
    brand_affiliation_1: "NUS Yong Loo Lin School of Medicine",
    brand_affiliation_2: "Department of Otolaryngology",

    nav_home: "Home",
    nav_research: "Research",
    nav_team: "Team",
    nav_news: "News",
    nav_publications: "Publications",
    nav_positions: "Positions",
    nav_contact: "Contact",

    hero_kicker:
      "NUS Yong Loo Lin School of Medicine · Department of Otolaryngology",
    hero_title: "Joshua's Lab",
    hero_subtitle:
      "A research group at the interface of otolaryngology and biomedical science.",
    hero_body:
      "We are building a collaborative environment to explore clinical and translational questions in ear, nose, and throat medicine. Detailed research themes will be announced soon.",
    hero_cta_primary: "Explore research",
    hero_cta_secondary: "Get in touch",

    hero_card_label: "Lab Snapshot",
    hero_card_item_1_label: "Institution",
    hero_card_item_1_value: "National University of Singapore",
    hero_card_item_2_label: "School",
    hero_card_item_2_value: "Yong Loo Lin School of Medicine",
    hero_card_item_3_label: "Department",
    hero_card_item_3_value: "Otolaryngology",
    hero_card_note:
      "Content on research, team, publications and news will be added progressively.",

    section_view_all: "View all",

    section_research_title: "Research",
    section_research_caption:
      "Research interests and projects will be listed here.",
    section_research_card_1_title: "Focus Area 01",
    section_research_card_1_body:
      "Placeholder for a key research theme. Detailed description coming soon.",
    section_research_card_2_title: "Focus Area 02",
    section_research_card_2_body:
      "Placeholder for another research direction. To be updated.",
    section_research_card_3_title: "Focus Area 03",
    section_research_card_3_body:
      "Space reserved for emerging projects and collaborations.",

    section_team_title: "Team",
    section_team_caption:
      "Profiles of PI, clinicians, researchers, and trainees will appear here.",
    section_team_pill: "Coming soon",
    section_team_text:
      "This space is reserved for the lab roster, including principal investigator, research staff, clinicians, students, and collaborators.",

    section_news_title: "News & Highlights",
    section_news_caption:
      "Announcements, publications, and lab updates will be posted here.",
    section_news_empty_title: "No news yet.",
    section_news_empty_body:
      "Once the lab is fully set up, this section will highlight recent achievements, talks, and events.",

    // Research page
    page_research_title: "Research",
    page_research_subtitle:
      "An overview of ongoing and planned research directions in Joshua's Lab.",
    page_research_block_1_title: "Focus Area 01",
    page_research_block_1_body:
      "Placeholder for a detailed description of the first major research direction. This could include clinical questions, methodology, and collaborative partners.",
    page_research_block_2_title: "Focus Area 02",
    page_research_block_2_body:
      "Space reserved for a second research theme, such as imaging, AI, or translational projects in otolaryngology.",
    page_research_block_3_title: "Focus Area 03",
    page_research_block_3_body:
      "Additional research topics and emerging ideas will be listed here as the lab grows.",
    page_research_block_4_title: "Collaborations",
    page_research_block_4_body:
      "This section will highlight internal and external collaborations, joint grants, and multi-disciplinary initiatives.",

    // Team page
    page_team_title: "Team",
    page_team_subtitle:
      "The people behind Joshua's Lab — to be introduced here.",
    page_team_pill: "Coming soon",
    page_team_body:
      "This page will provide a structured overview of the team, including principal investigator, clinical collaborators, research fellows, students and administrative support.",

    // News page
    page_news_title: "News & Highlights",
    page_news_subtitle:
      "Formal announcements, publications, and lab milestones will be collected here.",
    page_news_empty_title: "No news yet.",
    page_news_empty_body:
      "As the lab grows, this page will highlight key updates, awards, invited talks, and media features.",

    // Publications page
    page_publications_title: "Publications",
    page_publications_subtitle:
      "A curated list of selected publications will be compiled here.",
    page_publications_body:
      "This page is reserved for peer-reviewed papers, conference proceedings, and other scholarly outputs. Entries can later be grouped by year or theme.",

    // Positions page
    page_positions_title: "Positions",
    page_positions_subtitle:
      "Open positions, fellowships, and student opportunities will be posted here.",
    page_positions_empty_title: "No open positions at the moment.",
    page_positions_empty_body:
      "When positions become available, this page will outline desired profiles, responsibilities, and application instructions for clinicians, research fellows, and students.",

    // Contact page
    page_contact_title: "Contact",
    page_contact_subtitle:
      "Basic contact information for Joshua's Lab at NUS.",
    page_contact_block_1_title: "Lab affiliation",
    page_contact_block_1_body:
      "Joshua's Lab\nDepartment of Otolaryngology\nYong Loo Lin School of Medicine\nNational University of Singapore",
    page_contact_block_2_title: "Contact",
    page_contact_block_2_body:
      "Specific contact details (email, phone, office location) will be added here when confirmed.",

    footer_lab_name: "Joshua's Lab",
    footer_affiliation:
      "NUS Yong Loo Lin School of Medicine, Department of Otolaryngology",
    footer_rights_prefix: "©",
    footer_rights_suffix: "All rights reserved."
  },

  zh: {
    brand_title: "Joshua 实验室",
    brand_affiliation_1: "新加坡国立大学 Yong Loo Lin 医学院",
    brand_affiliation_2: "耳鼻咽喉科",

    nav_home: "首页",
    nav_research: "研究方向",
    nav_team: "团队",
    nav_news: "新闻动态",
    nav_publications: "成果发表",
    nav_positions: "招募信息",
    nav_contact: "联系",

    hero_kicker: "新加坡国立大学 · Yong Loo Lin 医学院 · 耳鼻咽喉科",
    hero_title: "Joshua 实验室",
    hero_subtitle: "立足耳鼻咽喉临床实践的转化医学与基础研究团队。",
    hero_body:
      "实验室正在逐步建设中，将围绕耳鼻咽喉相关疾病的临床问题与基础机制展开研究。具体研究方向与课题将陆续更新。",
    hero_cta_primary: "查看研究方向",
    hero_cta_secondary: "联系方式",

    hero_card_label: "实验室概况",
    hero_card_item_1_label: "学校",
    hero_card_item_1_value: "新加坡国立大学",
    hero_card_item_2_label: "学院",
    hero_card_item_2_value: "Yong Loo Lin 医学院",
    hero_card_item_3_label: "系所",
    hero_card_item_3_value: "耳鼻咽喉科",
    hero_card_note: "研究方向、团队成员、成果发表与新闻动态将逐步上线。",

    section_view_all: "查看全部",

    section_research_title: "研究方向",
    section_research_caption: "具体研究兴趣与项目将在此展示。",
    section_research_card_1_title: "研究主题 01",
    section_research_card_1_body:
      "预留用于关键研究方向的简介。详细内容敬请期待。",
    section_research_card_2_title: "研究主题 02",
    section_research_card_2_body:
      "预留用于第二个研究方向的说明。后续将补充具体信息。",
    section_research_card_3_title: "研究主题 03",
    section_research_card_3_body:
      "预留用于新项目与多学科合作的展示空间。",

    section_team_title: "团队",
    section_team_caption:
      "课题组负责人、医生、研究人员及学生等信息将在这里呈现。",
    section_team_pill: "即将上线",
    section_team_text:
      "此处将用于展示实验室成员，包括 PI、研究人员、临床合作者以及学生等。",

    section_news_title: "新闻与动态",
    section_news_caption: "论文发表、获奖和讲座等信息将在此更新。",
    section_news_empty_title: "暂时没有新闻。",
    section_news_empty_body:
      "实验室正式运行后，这里会展示最新的成果分享、会议报告和其他重要动态。",

    // Research page
    page_research_title: "研究方向",
    page_research_subtitle: "Joshua 实验室的主要研究板块概览。",
    page_research_block_1_title: "研究主题 01",
    page_research_block_1_body:
      "用于详细介绍第一个主要研究方向，例如关注的临床问题、研究方法与合作团队等。",
    page_research_block_2_title: "研究主题 02",
    page_research_block_2_body:
      "预留给第二个研究方向，如影像学、人工智能或转化医学相关项目。",
    page_research_block_3_title: "研究主题 03",
    page_research_block_3_body:
      "随着团队发展，更多研究主题与课题将更新到此处。",
    page_research_block_4_title: "合作与联合项目",
    page_research_block_4_body:
      "将在这里介绍校内外合作、联合课题和多学科交叉研究等信息。",

    // Team page
    page_team_title: "团队",
    page_team_subtitle: "实验室成员介绍将陆续更新。",
    page_team_pill: "即将上线",
    page_team_body:
      "本页面将系统展示团队结构，包括负责人、临床合作者、博士后、研究助理和学生等。",

    // News page
    page_news_title: "新闻与动态",
    page_news_subtitle: "实验室的重要进展与对外报道将在这里集中呈现。",
    page_news_empty_title: "暂时没有新闻。",
    page_news_empty_body:
      "随着实验室建设推进，本页面将记录代表性论文、获奖情况、邀请报告和媒体报道等。",

    // Publications page
    page_publications_title: "成果发表",
    page_publications_subtitle: "代表性论文与科研成果列表将在此整理展示。",
    page_publications_body:
      "本页面预留用于列出期刊论文、会议论文以及其他科研成果，未来可以按年份或研究主题进行归类。",

    // Positions page
    page_positions_title: "招募信息",
    page_positions_subtitle: "正式招募信息（博士后、研究助理、学生等）将发布在此。",
    page_positions_empty_title: "目前暂无开放岗位。",
    page_positions_empty_body:
      "当有职位开放时，本页面将详细说明岗位类型、基本要求、工作内容以及申请方式，欢迎对耳鼻咽喉相关研究感兴趣的同学与同事关注。",

    // Contact page
    page_contact_title: "联系信息",
    page_contact_subtitle: "Joshua 实验室的基本联系渠道。",
    page_contact_block_1_title: "隶属单位",
    page_contact_block_1_body:
      "Joshua 实验室\n耳鼻咽喉科\nYong Loo Lin 医学院\n新加坡国立大学",
    page_contact_block_2_title: "联系方式",
    page_contact_block_2_body:
      "具体邮箱、电话和办公地点确认后将公布在此。",

    footer_lab_name: "Joshua 实验室",
    footer_affiliation: "新加坡国立大学 Yong Loo Lin 医学院 · 耳鼻咽喉科",
    footer_rights_prefix: "©",
    footer_rights_suffix: "保留所有权利。"
  }
};

function setLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      // 保留换行：用 innerText
      el.innerText = dict[key];
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const bLang = btn.getAttribute("data-lang");
    btn.classList.toggle("is-active", bLang === lang);
  });

  try {
    localStorage.setItem("labLang", lang);
  } catch (e) {}
}

function highlightActiveNav() {
  const page = document.body.getAttribute("data-page");
  if (!page) return;
  document.querySelectorAll(".nav-link").forEach((link) => {
    const navKey = link.getAttribute("data-nav");
    if (navKey === page) {
      link.classList.add("is-active");
    }
  });
}

function setupScrollReveal() {
  const sections = document.querySelectorAll(".reveal-on-scroll");
  if (!("IntersectionObserver" in window) || !sections.length) {
    sections.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  sections.forEach((el) => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  // language
  let initialLang = "en";
  try {
    const saved = localStorage.getItem("labLang");
    if (saved && translations[saved]) initialLang = saved;
  } catch (e) {}
  setLanguage(initialLang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      setLanguage(lang);
    });
  });

  // footer year
  const yearSpan = document.getElementById("footer-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  highlightActiveNav();
  setupScrollReveal();
});
