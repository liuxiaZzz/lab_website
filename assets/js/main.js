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

    hero_card_label: "Quick Links",
    hero_card_item_1_label: "Research Focus",
    hero_card_item_1_value: "Clinical & Translational ENT",
    hero_card_item_2_label: "Location",
    hero_card_item_2_value: "National University Hospital",
    hero_card_item_3_label: "Opportunities",
    hero_card_item_3_value: "Positions opening soon",
    hero_card_note:
      "For collaboration inquiries, please visit the Contact page.",

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
      "Meet the researchers behind Joshua's Lab.",
    page_team_pill: "Coming soon",
    page_team_body:
      "This page will provide a structured overview of the team, including principal investigator, clinical collaborators, research fellows, students and administrative support.",
    
    pi_title: "Principal Investigator",
    pi_affiliation_line1: "Assistant Professor, Department of Otolaryngology",
    pi_affiliation_line2: "NUS Yong Loo Lin School of Medicine",
    pi_research_label: "Research Interests:",
    pi_research_content: "Head and neck oncology, nasopharyngeal carcinoma screening, translational immunology, digital health technologies",
    
    team_members_title: "Team Members",
    view_profile: "View Profile",
    
    member_1_position: "Postdoctoral Research Fellow",
    member_1_research: "Research focus: Tumor immunology and microenvironment",
    member_2_position: "PhD Student",
    member_2_research: "Research focus: Cancer biomarker discovery",
    member_3_position: "Research Assistant",
    member_3_research: "Research focus: Clinical data analysis",
    member_4_position: "Master's Student",
    member_4_research: "Research focus: Computational biology",

    // Joshua profile page
    joshua_subtitle: "Principal Investigator",
    joshua_position_title: "Position",
    joshua_position_line1: "Assistant Professor",
    joshua_position_line2: "Department of Otolaryngology",
    joshua_position_line3: "NUS Yong Loo Lin School of Medicine",
    joshua_position_line4: "National University Hospital",
    joshua_education_title: "Education",
    joshua_education_line1: "MBBS, National University of Singapore",
    joshua_education_line2: "Residency in Otolaryngology - Head & Neck Surgery",
    joshua_education_line3: "Clinical and research training in head and neck oncology",
    joshua_research_title: "Research Interests",
    joshua_research_line1: "Nasopharyngeal carcinoma screening and early detection",
    joshua_research_line2: "Head and neck cancer immunology and tumor microenvironment",
    joshua_research_line3: "Translational research in otolaryngology",
    joshua_research_line4: "Digital health technologies and diagnostic innovation",
    joshua_research_line5: "Clinical trial design and implementation",
    joshua_bio_title: "Biography",
    joshua_bio_content: "Dr. Joshua K. Tay is an Assistant Professor in the Department of Otolaryngology at the NUS Yong Loo Lin School of Medicine and a practicing clinician at the National University Hospital. His research focuses on translational approaches to head and neck oncology, with particular emphasis on nasopharyngeal carcinoma screening, tumor immunology, and the development of innovative diagnostic technologies. Dr. Tay has published extensively in leading medical journals and is committed to bridging clinical practice with cutting-edge biomedical research.",
    joshua_selected_pubs_title: "Selected Publications",
    joshua_view_all_pubs: "View all publications →",
    joshua_contact_title: "Contact",
    joshua_office: "Office:",
    joshua_office_location: "National University Hospital, Singapore",

    // News page
    page_news_title: "News & Highlights",
    page_news_subtitle:
      "Formal announcements, publications, and lab milestones will be collected here.",
    page_news_empty_title: "No news yet.",
    page_news_empty_body:
      "As the lab grows, this page will highlight key updates, awards, invited talks, and media features.",

    news_1_date: "November 2024",
    news_1_title: "Lab Officially Established",
    news_1_description: "Joshua's Lab has been officially established at the Department of Otolaryngology, NUS Yong Loo Lin School of Medicine. We are excited to begin our research journey in head and neck oncology and translational medicine.",
    news_2_date: "October 2024",
    news_2_title: "New Publication in PNAS",
    news_2_description: "Our collaborative work on innate lymphoid cells in head and neck cancer has been published in Proceedings of the National Academy of Sciences. This study provides novel insights into the tumor immune microenvironment.",
    news_3_date: "September 2024",
    news_3_title: "Recruiting PhD Students and Postdocs",
    news_3_description: "We are actively seeking motivated PhD students and postdoctoral fellows to join our team. Research opportunities are available in cancer immunology, biomarker discovery, and digital health technologies.",
    news_4_date: "August 2024",
    news_4_title: "Grant Award Received",
    news_4_description: "Our research proposal on nasopharyngeal carcinoma screening has been awarded funding. This will support our efforts in developing improved early detection strategies for NPC in high-risk populations.",
    news_5_date: "July 2024",
    news_5_title: "Collaboration with NUH Launched",
    news_5_description: "A new collaborative project with National University Hospital has been initiated to study patient outcomes in head and neck surgery. This partnership will strengthen the translational impact of our research.",

    // Publications page
    page_publications_title: "Publications",
    page_publications_subtitle:
      "Selected publications from our research group.",
    page_publications_body:
      "This page is reserved for peer-reviewed papers, conference proceedings, and other scholarly outputs. Entries can later be grouped by year or theme.",
    publications_view_all: "View all publications on PubMed",

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
      "Get in touch with Joshua's Lab.",
    page_contact_block_1_title: "Lab affiliation",
    page_contact_block_1_body:
      "Joshua's Lab\nDepartment of Otolaryngology\nYong Loo Lin School of Medicine\nNational University of Singapore",
    page_contact_block_2_title: "Contact",
    page_contact_block_2_body:
      "Specific contact details (email, phone, office location) will be added here when confirmed.",

    contact_info_title: "Contact Information",
    contact_email_label: "Email:",
    contact_address_label: "Office Address:",
    contact_affiliation_label: "Affiliation:",
    contact_affiliation_line1: "Department of Otolaryngology",
    contact_affiliation_line2: "Yong Loo Lin School of Medicine",
    contact_affiliation_line3: "National University of Singapore",
    contact_location_title: "Location",

    footer_lab_name: "Joshua's Lab",
    footer_affiliation:
      "NUS Yong Loo Lin School of Medicine, Department of Otolaryngology",
    footer_rights_prefix: "©",
    footer_rights_suffix: "All rights reserved.",
    footer_link_nus_ent: "NUS ENT",
    footer_link_nuh_ent: "NUH ENT"
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

    hero_card_label: "快速链接",
    hero_card_item_1_label: "研究方向",
    hero_card_item_1_value: "临床与转化医学 · 耳鼻喉",
    hero_card_item_2_label: "实验室位置",
    hero_card_item_2_value: "新加坡国立大学医院",
    hero_card_item_3_label: "招募信息",
    hero_card_item_3_value: "岆时开放岗位",
    hero_card_note:
      "合作咨询请访问联系页面。",

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
      "随着团队发展,更多研究主题与课题将更新到此处。",

    // Team page
    page_team_title: "团队",
    page_team_subtitle: "认识 Joshua 实验室的研究人员。",
    page_team_pill: "即将上线",
    page_team_body:
      "本页面将提供团队的完整介绍,包括首席研究员、临床合作者、研究员、学生及行政支持人员。",
    
    pi_title: "首席研究员",
    pi_affiliation_line1: "助理教授,耳鼻咽喉科",
    pi_affiliation_line2: "新加坡国立大学 Yong Loo Lin 医学院",
    pi_research_label: "研究方向：",
    pi_research_content: "头颈肿瘤学、鼻咽癌筛查、转化免疫学、数字医疗技术",
    
    team_members_title: "团队成员",
    view_profile: "查看详情",
    
    member_1_position: "博士后研究员",
    member_1_research: "研究方向:肿瘤免疫与微环境",
    member_2_position: "博士研究生",
    member_2_research: "研究方向:癌症生物标志物发现",
    member_3_position: "研究助理",
    member_3_research: "研究方向:临床数据分析",
    member_4_position: "硕士研究生",
    member_4_research: "研究方向:计算生物学",

    // Joshua profile page
    joshua_subtitle: "首席研究员",
    joshua_position_title: "职位",
    joshua_position_line1: "助理教授",
    joshua_position_line2: "耳鼻咽喉科",
    joshua_position_line3: "新加坡国立大学 Yong Loo Lin 医学院",
    joshua_position_line4: "国立大学医院",
    joshua_education_title: "教育背景",
    joshua_education_line1: "新加坡国立大学 医学学士(MBBS)",
    joshua_education_line2: "耳鼻咽喉-头颈外科 住院医师培训",
    joshua_education_line3: "头颈肿瘤学 临床与研究培训",
    joshua_research_title: "研究方向",
    joshua_research_line1: "鼻咽癌筛查与早期诊断",
    joshua_research_line2: "头颈部肿瘤免疫学与肿瘤微环境",
    joshua_research_line3: "耳鼻咽喉科转化医学研究",
    joshua_research_line4: "数字医疗技术与诊断创新",
    joshua_research_line5: "临床试验设计与实施",
    joshua_bio_title: "个人简介",
    joshua_bio_content: "Joshua K. Tay 博士是新加坡国立大学 Yong Loo Lin 医学院耳鼻咽喉科助理教授,同时在国立大学医院担任临床医生。他的研究专注于头颈肿瘤学的转化医学方法,特别关注鼻咽癌筛查、肿瘤免疫学以及创新诊断技术的开发。Tay 博士在顶级医学期刊上发表了大量论文,致力于将临床实践与前沿生物医学研究相结合。",
    joshua_selected_pubs_title: "代表性论文",
    joshua_view_all_pubs: "查看所有论文 →",
    joshua_contact_title: "联系方式",
    joshua_office: "办公室:",
    joshua_office_location: "新加坡国立大学医院",
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

    news_1_date: "2024年11月",
    news_1_title: "实验室正式成立",
    news_1_description: "Joshua 实验室已在新加坡国立大学 Yong Loo Lin 医学院耳鼻咽喉科正式成立。我们很高兴开始在头颈肿瘤学和转化医学领域的研究之旅。",
    news_2_date: "2024年10月",
    news_2_title: "在 PNAS 发表新论文",
    news_2_description: "我们关于头颈部癌症中先天性淋巴细胞的合作研究已发表在《美国国家科学院院刊》上。该研究为肿瘤免疫微环境提供了新的见解。",
    news_3_date: "2024年9月",
    news_3_title: "招募博士生和博士后",
    news_3_description: "我们正在积极寻找有上进心的博士生和博士后研究员加入团队。可以在癌症免疫学、生物标志物发现和数字医疗技术等领域进行研究。",
    news_4_date: "2024年8月",
    news_4_title: "获得研究资助",
    news_4_description: "我们关于鼻咽癌筛查的研究提案获得了资助。这将支持我们为高风险人群开发改进的鼻咽癌早期检测策略。",
    news_5_date: "2024年7月",
    news_5_title: "与国立大学医院合作启动",
    news_5_description: "与国立大学医院的新合作项目已启动，用于研究头颈外科的患者结局。这一伙伴关系将增强我们研究的转化影响力。",

    // Publications page
    page_publications_title: "成果发表",
    page_publications_subtitle: "研究组代表性论文。",
    page_publications_body:
      "本页面预留用于列出期刊论文、会议论文以及其他科研成果,未来可以按年份或研究主题进行归类。",
    publications_view_all: "在 PubMed 查看所有论文",

    // Positions page
    page_positions_title: "招募信息",
    page_positions_subtitle: "正式招募信息（博士后、研究助理、学生等）将发布在此。",
    page_positions_empty_title: "目前暂无开放岗位。",
    page_positions_empty_body:
      "当有职位开放时，本页面将详细说明岗位类型、基本要求、工作内容以及申请方式，欢迎对耳鼻咽喉相关研究感兴趣的同学与同事关注。",

    // Contact page
    page_contact_title: "联系信息",
    page_contact_subtitle: "与 Joshua 实验室取得联系。",
    page_contact_block_1_title: "隶属单位",
    page_contact_block_1_body:
      "Joshua 实验室\n耳鼻咽喉科\nYong Loo Lin 医学院\n新加坡国立大学",
    page_contact_block_2_title: "联系方式",
    page_contact_block_2_body:
      "具体邮箱、电话和办公地点确认后将公布在此。",

    contact_info_title: "联系信息",
    contact_email_label: "邮箱:",
    contact_address_label: "办公室地址:",
    contact_affiliation_label: "所属机构:",
    contact_affiliation_line1: "耳鼻咽喉科",
    contact_affiliation_line2: "Yong Loo Lin 医学院",
    contact_affiliation_line3: "新加坡国立大学",
    contact_location_title: "位置",

    footer_lab_name: "Joshua 实验室",
    footer_affiliation: "新加坡国立大学 Yong Loo Lin 医学院 · 耳鼻咽喉科",
    footer_rights_prefix: "©",
    footer_rights_suffix: "保留所有权利。",
    footer_link_nus_ent: "新加坡国立大学 耳鼻咽喉科",
    footer_link_nuh_ent: "国立大学医院 耳鼻咽喉科"
  }
};

function setLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";

  // 添加语言切换时的淡入淡出效果
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      // 添加平滑过渡动画（缩短时间）
      el.style.transition = 'opacity 0.2s ease';
      el.style.opacity = '0';
      
      setTimeout(() => {
        // 保留换行：用 innerText
        el.innerText = dict[key];
        el.style.opacity = '1';
      }, 100);
    }
  });

  // 更新语言按钮状态
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const bLang = btn.getAttribute("data-lang");
    btn.classList.toggle("is-active", bLang === lang);
  });

  // 根据语言调整字体大小和行高
  if (lang === 'zh') {
    document.body.style.fontSize = '16px';
    document.body.style.lineHeight = '1.75';
  } else {
    document.body.style.fontSize = '15px';
    document.body.style.lineHeight = '1.65';
  }

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
          // 简化延迟效果
          setTimeout(() => {
            entry.target.classList.add("is-visible");
          }, 50);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
  );
  sections.forEach((el) => observer.observe(el));
}

// 简化页面滚动时的header变化效果
function setupHeaderScrollEffect() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
      header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
      header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
      header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
      header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
  });
}

// 添加平滑滚动效果
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || !href) return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // language
  let initialLang = "en";
  try {
    const saved = localStorage.getItem("labLang");
    if (saved && translations[saved]) initialLang = saved;
  } catch (e) {}
  
  // 初始化时不显示过渡动画
  const tempStyle = document.createElement('style');
  tempStyle.textContent = '[data-i18n] { transition: none !important; }';
  document.head.appendChild(tempStyle);
  
  setLanguage(initialLang);
  
  // 移除临时样式，恢复过渡效果
  setTimeout(() => {
    tempStyle.remove();
  }, 100);

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
  setupHeaderScrollEffect();
  setupSmoothScroll();
  
  // 简化页面加载动画
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.3s ease';
    document.body.style.opacity = '1';
  }, 50);
});
