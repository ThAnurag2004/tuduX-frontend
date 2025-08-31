import { FaBell, FaCalendarCheck, FaChartLine, FaTasks, FaShieldAlt } from 'react-icons/fa';
import { FaMobileScreenButton } from "react-icons/fa6";

export const cardsData = [
  {
    title: 'Task Management',
    icon: FaTasks, // ✅ component reference
    content: 'Organize tasks with intelligent categorization, priority levels, and due date reminders that adapt to your workflow.',
    bulletPoints: [
      'Add, edit, and delete tasks',
      'Mark tasks as completed',
      'Categorize tasks with labels',
    ],
  },
  {
    title: 'Reminders & Notifications',
    icon: FaBell,
    content: 'Get timely reminders and notifications to stay on track.',
    bulletPoints: [
      'Set due dates and reminders',
      'Push notifications for upcoming tasks',
      'Never miss important deadlines',
    ],
  },
  {
    title: 'Calendar Integration',
    icon: FaCalendarCheck,
    content: 'Seamlessly sync with your existing calendar apps and never miss an important deadline or appointment.',
    bulletPoints: [
      'View tasks in daily, weekly, or monthly calendar',
      'Sync with Google Calendar',
      'Drag-and-drop tasks to reschedule',
    ],
  },
  {
    title: 'Productivity Insights',
    icon: FaChartLine,
    content: 'Track your productivity patterns and gain insights into your work habits with detailed analytics and reports.',
    bulletPoints: [
      'Analyze completed vs pending tasks',
      'Visual charts for task trends',
      'Set productivity goals',
    ],
  },
  {
    title: 'Privacy & Security',
    icon: FaShieldAlt,
    content: 'Your data is protected with enterprise-grade security and privacy features that keep your information safe.',
    bulletPoints: [
      'End-to-end encryption',
      'Two-factor authentication',
      'GDPR compliant',
    ],
  },
  {
    title: 'Cross-Platform Sync',
    icon: FaMobileScreenButton,
    content: 'Access your tasks anywhere, anytime with seamless synchronization across all your devices and platforms.',
    bulletPoints: [
      'iOS & Android apps',
      'Desktop applications',
      'Offline access',
    ],
  },
];
