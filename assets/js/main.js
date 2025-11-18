// Simple bilingual toggle for EN / 中文
const translations = {
  en: {
    brand_title: "Joshua's Lab",
    brand_affiliation_1: "NUS Yong Loo Lin School of Medicine",
    brand_affiliation_2: "Department of Otolaryngology",

    nav_home: "Home",
    nav_research: "Research",
    nav_people: "People",
    nav_news: "News",

    hero_kicker:
      "NUS Yong Loo Lin School of Medicine · Department of Otolaryngology",
    hero_title: "Joshua's Lab",
    hero_subtitle:
      "A research group at the interface of otolaryngology and biomedical science.",
    hero_body:
      "We are building a collaborative environment to explore clinical and translational questions in ear, nose, and throat medicine. Detailed research themes will be announced soon.",

    hero_card_label: "Lab Snapshot",
    hero_card_item_1_label: "Institution",
    hero_card_item_1_value: "National University of Singapore",
    hero_card_item_2_label: "School",
    hero_card_item_2_value: "Yong Loo Lin School of Medicine",
    hero_card_item_3_label: "Department",
    hero_card_item_3_value: "Otolaryngology",
    hero_card_note:
      "Content on research, people and news will be added progressively.",

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

    section_people_title: "People",
    section_people_caption:
      "Profiles of PI, clinicians, researchers, and trainees will appear here.",
    section_people_pill: "Coming soon",
    section_people_text:
      "This space is reserved for the lab roster, including principal investigator, research staff, clinicians, students, and collaborators.",

    section_news_title: "News & Highlights",
    section_news_caption:
      "Announcements, publications, and lab updates will be posted here.",
    section_news_empty_title: "No news yet.",
    section_news_empty_body:
      "Once the lab is fully set up, this section will highlight recent achievements, talks, and events.",

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
    nav_people: "团队成员",
    nav_news: "新闻动态",

    hero_kicker: "新加坡国立大学 · Yong Loo Lin 医学院 · 耳鼻咽喉科",
    hero_title: "Joshua 实验室",
    hero_subtitle: "立足耳鼻咽喉临床实践的转化医学与基础研究团队。",
    hero_body:
      "实验室正在逐步建设中，将围绕耳鼻咽喉相关疾病的临床问题与基础机制展开研究。具体研究方向与课题将陆续更新。",

    hero_card_label: "实验室概况",
    hero_card_item_1_label: "学校",
    hero_card_item_1_value: "新加坡国立大学",
    hero_card_item_2_label: "学院",
    hero_card_item_2_value: "Yong Loo Lin 医学院",
    hero_card_item_3_label: "系所",
    hero_card_item_3_value: "耳鼻咽喉科",
    hero_card_note: "研究方向、成员信息与新闻动态将逐步上线。",

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

    section_people_title: "团队成员",
    section_people_caption:
      "课题组负责人、医生、研究人员及学生等信息将在这里呈现。",
    section_people_pill: "即将上线",
    section_people_text:
      "此处将用于展示实验室成员，包括 PI、研究人员、临床合作者以及学生等。",

    section_news_title: "新闻与动态",
    section_news_caption: "论文发表、获奖和讲座等信息将在此更新。",
    section_news_empty_title: "暂时没有新闻。",
    section_news_empty_body:
      "实验室正式运行后，这里会展示最新的成果分享、会议报告和其他重要动态。",

    footer_lab_name: "Joshua 实验室",
    footer_affiliation:
      "新加坡国立大学 Yong Loo Lin 医学院 · 耳鼻咽喉科",
    footer_rights_prefix: "©",
    footer_rights_suffix: "保留所有权利。"
  }
};

function setLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  // Update <html lang="...">
  document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";

  // Update all text nodes with data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Toggle active state on buttons
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const bLang = btn.getAttribute("data-lang");
    btn.classList.toggle("is-active", bLang === lang);
  });

  // Persist preference
  try {
    localStorage.setItem("labLang", lang);
  } catch (e) {
    // ignore if storage not available
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Language from storage or default EN
  let initialLang = "en";
  try {
    const saved = localStorage.getItem("labLang");
    if (saved && translations[saved]) {
      initialLang = saved;
    }
  } catch (e) {
    // ignore
  }
  setLanguage(initialLang);

  // Wire up buttons
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      setLanguage(lang);
    });
  });

  // Footer year
  const yearSpan = document.getElementById("footer-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
