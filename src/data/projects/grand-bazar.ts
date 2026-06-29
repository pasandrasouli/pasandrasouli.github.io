import { Project } from '../../types'

export const grandBazar: Project = {
  id: 2,
  title: "Grand Bazar",
  category: "Product Design Process",
  coverImage: "./assets/images/Cover/Grandbazar.png",
  fullDescription: "",
  results: [],
  caseStudy: [
    {
      type: "section",
      title: "Product Statement",
      description: " Most users receive credit from multiple service providers — banks, telecom companies, or financial platforms. However, each of these credits is isolated and can only be used separately.There was no existing solution that allowed users to combine all their available credit into one platform. This led to confusion, missed opportunities, and poor visibility into their total credit and spending power."
    },
    {
      type: "section",
      title: "Possible Solution",
      description: "Build a unified financial platform that aggregates all user credit from various providers into one digital wallet."
    },
    {
      type: "withBullet",
      title: "",
      titleGroups: [{ subTitle: "This platform should allow users to: ", description: "" }],
      items: [
        "See their total available credit in real time",
        "Make purchases online or in-store using the combined credit",
        "Manage installments, repayments, and budget planning in one place",
        "Easily track where their credit comes from and how it’s being used"
      ],
    },
    {
      type: "withBullet",
      title: "Target Audience",
      titleGroups: [{ subTitle: " ", description: "" }],
      items: [
        "Working adults (25–45) using credit to manage finances",
        "Users with multiple credit sources",
        "People shopping both online and offline",
        "Budget-conscious individuals",
        "Tech-savvy mobile users"
      ],
    },
    {
      type: "withBullet",
      title: "The Approach",
      titleGroups: [{ subTitle: " ", description: "" }],
      items: [
        "User Research – Interviewed and observed users to understand credit usage behavior",
        "Problem Definition – Mapped out key friction points in credit access and spending",
        "Information Architecture – Structured the platform around total credit visibility and control",
        "Wireframing & Prototyping – Designed low-fidelity wireframes followed by high-fidelity mockups",
        "User Testing – Validated flows with real users and refined based on feedback",
        "Visual Design – Used a bold, clear, mobile-first UI style.",
        "Iterative Improvements – Applied feedback loops to polish UX and add new features"
      ],
    },

    { type: "image", caption: "My Role", src: "./assets/images/Grandbazar/MyRole.png" },

    { type: "image", caption: "Design Thinking Process", src: "./assets/images/Grandbazar/DesignThinkingProcess.png" },
    { type: "image", caption: "Project Timeline", src: "./assets/images/Grandbazar/ProjectTimeline.png" },

    {
      type: "withBullet",
      title: "Emphatize Phase",
      titleGroups: [
        { subTitle: "Qualitative Research: ", description: "We conducted 1-on-1 user interviews with potential users who actively use credit services from different providers. The goal was to understand:" },
      ],
      items: [
        "How they track their credit",
        "The challenges they face",
        "Their behavior when purchasing with credit"
      ],
    },
    {
      type: "withBullet",
      title: "Key Insight Derived",
      titleGroups: [
        { subTitle: "", description: "" },
      ],
      items: [
        "Users lack a unified view of their credit – Most participants didn’t know how much total credit they had across platforms.",
        "Fragmented credit creates confusion – Switching between apps or providers made users feel frustrated and disoriented.",
        "Trust issues in using credit – Many users hesitated to use credit due to unclear terms, limits, or repayment plans.",
        "Desire for control and visibility – Users wanted a single place to see, manage, and plan their credit usage and installments.",
        "Mixed shopping behavior – Users shop both online and offline, but expect a consistent credit experience across both.",
        "Reminder & management tools are missing – Several users reported missing installment payments"

      ],
    },
    {
      type: "section",
      title: "Quantitative Research",
      description: " To validate the patterns observed in user interviews, we conducted a survey with 150+ participants who were active credit users. The goal was to gather measurable data on user behavior, pain points, and expectations."
    },
    { type: "image", caption: "Quantitative Research", src: "./assets/images/Grandbazar/QuantitativeResearch.png" },

    { type: "image", caption: "Information Architecture", src: "./assets/images/Grandbazar/UserPersona.png" },
    { type: "image", caption: "Typography & Colors", src: "./assets/images/Grandbazar/Typography&Colors.png" },
    { type: "image", caption: "High-Fidelity Wireframes", src: "./assets/images/Grandbazar/HighFidelityWireframes.png" },

  ]
}
