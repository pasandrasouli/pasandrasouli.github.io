import { Project } from "../../types";

export const trendyBee: Project = {
  id: 1,
  title: "TrendyBee",
  category: "Product Design Process Case Study • AI",
  coverImage: "/assets/images/Cover/trendybee.png",
  fullDescription: "",
  results: ["40% faster data retrieval", "85% user satisfaction increase", "Adopted by 3 major fintech partners"],
  caseStudy: [
    {
      type: "section",
      title: "Product Statement",
      description: "Trendy Bee is an intelligent content creation tool that I designed from scratch. Through problem framing, three distinct needs were discovered: trend discovery, idea-to-script conversion, and pre-publish video analysis. 4 Job Stories were defined, pain points were prioritized, and 4 key trade-offs were made. User flows include both the full path (trend → brainstorm) and quick path. The product is currently under development."
    },
    
    { type: "image", caption: "Design Thinking Process", src: "" },

    { type: "image", caption: "My Role", src: "" },

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

