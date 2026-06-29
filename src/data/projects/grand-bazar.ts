import { Project } from '../../types'

export const grandBazar: Project = {
  id: 2,
  title: "Grand Bazar",
  category: "Product Design Process",
  coverImage: "./public/assets/images/Cover/Grandbazar.png",
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
    
    { type: "image", caption: "My Role", src: "./public/assets/images/Grandbazar/MyRole.png" },

    { type: "image", caption: "My Role", src: "./public/assets/images/Grandbazar/DesignThinkingProcess.png" },

    {
      type: "withBullet",
      title: "Problem Framing",
      titleGroups: [{ subTitle: "Initial problem: ", description: "Build an AI tool for video generation and trend discovery" }],
      items: [
        "They don't know which trends are working,",
        "They have ideas but don't know how to write professional scripts.",
        "They create videos but don't realize issues until after posting."
      ],
    },
   
  ]
}
