import { Project } from '../../types'

export const medicineReminder: Project = {
  id: 3, 
  title: "Medicine Reminder",
  category: "",
  coverImage: "./assets/images/Cover/Medicine.png",
  fullDescription: "",
  results: [],
  caseStudy: [
    {
      type: 'section',
      title: 'User Research & Problem Understanding:',
      description: 'Challenges Faced by Users:',
    },
    {
      type: 'withBullet',
      title: 'Elderly Users:',
      titleGroups: [],
      items: [
        'Forgetfulness: Elderly individuals often forget to take their medications on time due to age-related memory issues.',
        'Complex Schedules: Managing multiple medications with varying frequencies and dosages can be overwhelming.',
        'Accessibility Issues: Navigating through complex apps can be challenging for those unfamiliar with technology.',
        'Custom Alerts: Lack of tailored notifications for specific needs, such as visual or auditory impairments.',
      ],
    },
    {
      type: 'withBullet',
      title: 'Working Professionals:',
      titleGroups: [],
      items: [
        'Busy Schedules: Work commitments often lead to missed medication times.',
        'Distraction: Notifications may go unnoticed during meetings or busy hours.',
        'Customization Needs: Standardized reminders do not accommodate unique daily routines or changing schedules.',
      ],
    },
    {
      type: 'withBullet',
      title: 'Problems the New Feature Needs to Solve:',
      titleGroups: [],
      items: [
        'Timely Medication Reminders: Ensure users receive alerts at the right time with customizable snooze options and priority settings.',
        'Simplified Management: Create an intuitive interface for adding, editing, and tracking medications.',
        'User-Friendly Notifications: Provide clear, concise, and customizable alerts tailored to user needs (e.g., vibration-only for meetings, voice prompts for the visually impaired).',
        'Integrated Calendar View: Offer a visual representation of medication schedules to help users stay organized.',
        'Flexibility for Changes: Allow users to easily update schedules or dosage instructions in response to changing prescriptions or routines.',
        'Error Prevention: Avoid missed doses by enabling recurring notifications until the medication is marked as taken.',
        'Cross-Device Sync: Ensure seamless access and management of medication schedules across devices for convenience.',
      ],
    },

    {
      type: 'image',
      caption: 'Information Architecture (IA):',
      src: 'https://placehold.co/600x400/EEE/31343C',
    },
    {
      type: 'image',
      caption: 'Wireframes (Low Fidelity):',
      src: 'https://placehold.co/600x400/EEE/31343C',
    },
    {
      type: 'image',
      caption: 'Visual Design (Mid-Fidelity):',
      src: 'https://placehold.co/600x400/EEE/31343C',
    },

    {
      type: 'section',
      title: 'Interaction Design',
      description: '',
    },

    {
      type: 'withBullet',
      title: 'How Reminders Work on the Mobile App',
      titleGroups: [{ subTitle: 'User Interaction with Notifications:', description: '' }],
      items: [
        'Notifications appear as banner alerts at the scheduled time, showing the medication name and an action button ("Mark as Taken" or "Snooze").',
        'Users can tap the "Details" button on the notification to open the app, view detailed information about the medication, or modify the reminder.',
        'If "Snooze" is selected, the notification reappears after a user-specified duration (e.g., 5 or 10 minutes).',
      ],
    },
    {
      type: 'withBullet',
      title: '',
      titleGroups: [{ subTitle: 'Do Not Disturb (DND) Adaptation:', description: '' }],
      items: [
        'If the device is in DND mode, the app uses vibration-based notifications or a silent alert, as shown in the wireframes.',
        'For critical reminders, the app offers an option in settings (accessible from the "Notification Preferences" page) to bypass DND mode.',
        'The "Reminders" page in your design integrates a toggle switch for enabling or disabling high-priority reminders.',
      ],
    },
    {
      type: 'withBullet',
      title: 'Micro-Interactions',
      titleGroups: [{ subTitle: 'Visual Animations for Actions:', description: '' }],
      items: [
        'In your "Medication List" page, when users mark a medication as "Taken," an animated checkmark overlays the medication\'s entry, accompanied by a color change (e.g., green-out to indicate completion).',
        'On the "Add Reminder" page, after saving, a confirmation toast message appears at the bottom with a slide-up animation.',
      ],
    },
    {
      type: 'withBullet',
      title: '',
      titleGroups: [{ subTitle: 'Feedback on Actions:', description: '' }],
      items: [
        'On the "Add Reminder" page, input fields (e.g., medication name or dosage) include interactive highlights (e.g., borders glowing slightly) when selected.',
        'A slight vibration confirms actions like saving or deleting reminders from the list.',
      ],
    },
    {
      type: 'withBullet',
      title: '',
      titleGroups: [{ subTitle: 'Calendar Integration for Progress Tracking:', description: '' }],
      items: [
        'On the main "Reminders" page, a calendar icon is linked to a daily progress view. Days with completed reminders are marked with a checkmark.',
      ],
    },
    {
      type: 'withBullet',
      title: '',
      titleGroups: [{ subTitle: 'Notification Preferences and Sounds:', description: '' }],
      items: [
        'Users can configure notification sounds from the "Settings" page, accessible via the button navigation.',
        'Notification tone selection.',
        'Reminder frequency adjustment (e.g., "Snooze after 5 minutes").',
        'Reminder prioritization.',
      ],
    },

    {
      type: 'section',
      title: 'User Testing Plan',
      description: '',
    },

    {
      type: 'withBullet',
      title: '',
      titleGroups: [{ subTitle: 'Introduction', description: '' }],
      items: [
        'The user testing plan is divided into two main sections: {A: Quantitative Testing, B: Qualitative Testing}',
        'We use Usability Testing as the primary framework to gather both numerical (Quantitative) and experiential (Qualitative) data for optimizing the design. Additionally, A/B Testing is employed in the qualitative section to assess the effectiveness of certain design choices.',
      ],
    },
    {
      type: 'withBullet',
      title: 'Quantitative Testing',
      titleGroups: [
        {
          subTitle: 'Goal',
          description:
            'To collect numerical data that evaluates the performance of the design and identifies high-level issues',
        },
      ],
      items: [
        'Task-Based Testing:',
        'Users complete predefined tasks, such as setting a reminder, editing medication details, or deleting an alert',
        'Completion Rate: Percentage of users successfully completing tasks.',
        'Time on Task: Average time required to complete each task.',
        'Error Rate: Number of errors experienced by users during tasks.',
      ],
    },
    {
      type: 'withBullet',
      title: 'Quantitative Testing',
      titleGroups: [
        {
          subTitle: 'Goal',
          description:
            'To understand user experiences, uncover deeper issues, and gather feedback for improving the design',
        },
      ],
      items: [
        'Observing users interacting with the design.',
        'Using the Think Aloud Protocol (users verbalize their thoughts while completing tasks).',
        'Recording user interactions for further analysis.',
        'Issues users encounter while completing tasks.',
        'User reactions to the design (emotions, verbal feedback).',
        'Presenting two different versions of a feature (e.g., how reminders are displayed) to two groups of users.',
        'Comparing the performance of the two versions to determine the best option.',
        'Click-through rates (CTR) and interaction rates with the reminders.',
        'Percentage of users who prefer a specific version.',
      ],
    },

    {
      type: 'section',
      title: 'Sample Size',
      description: '5-8 users for Usability and A/B Testing, selected from diverse target groups',
    },
    {
      type: 'section',
      title: 'Outcome',
      description:
        'Qualitative insights that identify deeper issues and improve user interactions with the system.',
    },
  ],
}
