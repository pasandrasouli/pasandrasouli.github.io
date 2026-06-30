import { Project } from '../../types'

export const oms: Project = {
  id: 4,
  title: "OMS",
  category: "",
  coverImage: "./assets/images/Cover/Marketwatch.png",
  fullDescription: "",
  results: [],
    caseStudy: [
       {
      type: 'section',
      title: 'Product Overview',
      description:
        "XinoTrader is an online platform tailored for individuals and firms with an advanced understanding of the stock market. It offers an array of comprehensive data analysis tools to empower users in making well-informed decisions when trading on the Iran stock market."
    },
       {
      type: 'section',
      title: 'Problem Statement',
      description:
      'Users need to simultaneously view information on multiple stocks and track their changes.The sheer volume of stock information and its continuous updates during market hours can be overwhelming for users.'
    },
       {
      type: 'section',
      title: 'Goals',
      description:
        'The target audience of Xino Trader consists of professional and high-frequency traders and basket companies in the stock market. '
    },
       {
      type: 'section',
      title: 'Target Audience',
      description:
        'The target audience of Xino Trader consists of professional and high-frequency traders and basket companies in the stock market. '
    },
       {
      type: 'section',
      title: 'User Research summary',
      description:
        'In the initial phase of our user research process, we pinpointed our target audience, which primarily consists of professional and high-frequency traders and basket companies in the stock market. To gain insights into their experiences, perspectives, and pain points related to symbol information comparison, we conducted in-depth interviews with 20 users from this segment. Additionally, we observed users directly to analyze their behaviors and patterns while navigating the platform. By meticulously analyzing the gathered data, we identified the core needs and challenges faced by these users.'
    },
    {
      type: 'withBullet',
      title: 'Qualitative Questions',
      titleGroups: [
        {
          subTitle: '',
          description: '',
        },
      ],
      items: [
        "What information do you believe is essential for effectively comparing different stocks?",
        "Do existing tools provide a straightforward and swift means of comparing stocks? What issues do they encounter?",
        "How do you feel about the idea of grouping and filtering information to enhance accessibility?",
        'Can you suggest any alternative solutions to facilitate the comparison of stocks?',
        'In your opinion, what would be the most user-friendly way to display stock information with minimal noise?',
        'Do you have any specific recommendations or criticisms regarding the current XinoTrader platform?'
      
      ],
    },
     {
      type: 'image',
      caption: 'Pain Points',
      src: './Public/assets/images/OMS/PainPoints.png',
    },
     {
      type: 'image',
      caption: '',
      src: './Public/assets/images/OMS/UserPersona01.png',
    },
     {
      type: 'image',
      caption: '',
      src: './Public/assets/images/OMS/UserPersona02.png',
    },
     {
      type: 'image',
      caption: '',
      src: './Public/assets/images/OMS/UserPersona03.png',
    },
     {
      type: 'image',
      caption: '',
      src: './Public/assets/images/OMS/UserJourney.png',
    },
     {
      type: 'image',
      caption: '',
      src: './Public/assets/images/OMS/InformationArchitecture.png',
    },
     {
      type: 'image',
      caption: '',
      src: './Public/assets/images/OMS/Low-fidelity.png',
    },
     {
      type: 'image',
      caption: '',
      src: './Public/assets/images/OMS/Dark.png',
    },
     {
      type: 'image',
      caption: '',
      src: './Public/assets/images/OMS/Light.png',
    },
   
],
}
