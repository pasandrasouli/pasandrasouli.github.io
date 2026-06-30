import { Project } from '../../types'

export const trendyBee: Project = {
  id: 1,
  title: "TrendyBee",
  category: "Product Design Process Case Study • AI",
  coverImage: "./assets/images/Cover/trendybee.png",
  fullDescription: "",
  results: ["40% faster data retrieval", "85% user satisfaction increase", "Adopted by 3 major fintech partners"],
  caseStudy: [
    {
      type: 'section',
      title: 'Product Statement',
      description:
        'Trendy Bee is an intelligent content creation tool that I designed from scratch. Through problem framing, three distinct needs were discovered: trend discovery, idea-to-script conversion, and pre-publish video analysis. 4 Job Stories were defined, pain points were prioritized, and 4 key trade-offs were made. User flows include both the full path (trend → brainstorm) and quick path. The product is currently under development.',
    },

    {
      type: 'image',
      caption: 'Design Thinking Process',
      src: './assets/images/Trendybee/DesignThinkingProcess.png',
    },

    { type: 'image', caption: 'My Role', src: './assets/images/Trendybee/MyRole.png' },

    {
      type: 'withBullet',
      title: 'Problem Framing',
      titleGroups: [
        {
          subTitle: 'Initial problem:',
          description: 'Build an AI tool for video generation and trend discovery',
        },
      ],
      items: [
        "They don't know which trends are working,",
        "They have ideas but don't know how to write professional scripts.",
        "They create videos but don't realize issues until after posting.",
      ],
    },
    {
      type: 'withBullet',
      title: 'Scenarios',
      titleGroups: [{ subTitle: 'Sara, fashion creator:', description: '' }],
      items: [
        'Sunday morning, wants to know which trends in perfume ads are hot this week',
        "After seeing a trending video, has an idea but doesn't know how to turn it into a script",
        "Before publishing, wants to know what's wrong with her video",
        'Found 3 trending videos, wants to use their pattern for a new script',
      ],
    },
    {
      type: 'withBullet',
      title: 'Job Stories',
      titleGroups: [{ subTitle: 'Sara, fashion creator:', description: '' }],
      items: [
        "When I want to plan my weekly video, I want to see which trends in my niche are hot so I know my content isn't outdated",
        'I have a rough idea in mind, I want to get multiple different scripts based on that idea so I can choose the best structure',
        "When I'm reviewing a video before publishing, I want to know exactly which parts are weak so I can fix them before posting",
        'When I find multiple trending videos, I want to use their pattern to generate a script so my content has higher chance of being seen',
      ],
    },
    {
      type: 'withBullet',
      title: 'Pain Points',
      titleGroups: [],
      items: [
        'Manual searching across multiple platforms',
        "Can't compare trends side by side",
        "Doesn't know what a good script structure looks like",
        'AI scripts feel repetitive and robotic',
        "Doesn't realize video has issues until after posting",
        'Separate tools for each task',
      ],
    },
    {
      type: 'image',
      caption: 'Low-Fidelity Wireframes',
      src: './assets/images/TrendyBee/LowFidelityWireframes.png',
    },
   
    
    {
      type: 'image',
      caption: 'Typography & Colors',
      src: './assets/images/TrendyBee/Typography&Colors.png',
    },
    {
      type: 'image',
      caption: 'High-Fidelity Wireframes',
      src: './assets/images/TrendyBee/HighFidelityWireframes.png',
    },
  ],
}
