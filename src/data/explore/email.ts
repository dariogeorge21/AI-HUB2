import { AITool } from '../types';

export const email: AITool[] = [
    {
        id: "sanebox",
        name: "SaneBox",
        description: "Utilizes AI to automatically sort incoming emails into folders like 'SaneLater' for less important messages, helping users focus on crucial emails.",
        logoUrl: "https://www.sanebox.com/favicon.ico",
        categories: ["email", "productivity", "inbox-management"],
        mainUse: "AI-powered email sorting and prioritization.",
        pricing: "Starts at $7/month after a free trial.",
        otherUses: "Unsubscribing, follow-up reminders, snoozing emails.",
        userExperience: "Simple integration with any email client and user-friendly.",
        websiteUrl: "https://www.sanebox.com/",
        rating: 4.7
      },
      {
        id: "flowrite",
        name: "Flowrite",
        description: "An AI-powered tool that automates the writing of emails and messages based on brief prompts, ideal for frequent email communication.",
        logoUrl: "https://cdn-1.webcatalog.io/catalog/flowrite/flowrite-icon-filled-256.png?v=1714780766060",
        categories: ["email", "writing-assistant", "productivity"],
        mainUse: "Quick email writing from short instructions.",
        pricing: "Plans start at €15/month with a free trial.",
        otherUses: "LinkedIn messages, team communications, support replies.",
        userExperience: "Easy to use and fast generation of professional messages.",
        websiteUrl: "https://www.flowrite.com/",
        rating: 4.6
      },
      {
        id: "missive",
        name: "Missive",
        description: "Combines email and chat for team collaboration, allowing shared inboxes and real-time collaboration on email drafts.",
        logoUrl: "https://play-lh.googleusercontent.com/BPHIi-PdFlKdITIxsw0usCwjYQtDSJKXj3xEI1XoKmjHSjjBNqsRTAMFldYSrro7PDE",
        categories: ["email", "collaboration", "team-productivity"],
        mainUse: "Shared inbox and collaborative email management.",
        pricing: "Free plan available; paid starts at $14/month.",
        otherUses: "Internal chat, task assignment, email templates.",
        userExperience: "Great for teams; smooth collaboration features.",
        websiteUrl: "https://missiveapp.com/",
        rating: 4.6
      },
      {
        id: "mailmaestro",
        name: "MailMaestro",
        description: "An AI assistant that integrates with Outlook, leveraging OpenAI's ChatGPT to draft and manage emails efficiently.",
        logoUrl: "https://media.licdn.com/dms/image/v2/C560BAQFJQeF0zArSPQ/company-logo_200_200/company-logo_200_200/0/1678884901696/maestrolabs_logo?e=2147483647&v=beta&t=lvhXzohdewGgYs3KdxrJDbrTBYomx5HQVW3GIevqqAk",
        categories: ["email", "writing-assistant", "outlook"],
        mainUse: "Automated email drafting and tone control.",
        pricing: "Free trial; paid plans available on request.",
        otherUses: "Summarizing email threads, grammar correction.",
        userExperience: "Saves time and integrates seamlessly with Outlook.",
        websiteUrl: "https://www.maestrolabs.com/ai-email-management",
        rating: 4.5
      },
      {
        id: "lindy",
        name: "Lindy",
        description: "An AI email assistant that automates inbox sorting, prioritizes messages, and sets up filters to keep your inbox organized.",
        logoUrl: "https://play-lh.googleusercontent.com/mOtpCHsXixu1M-pfN3MdinYiFQLmg-N338xEb3Y05o5DYvkVrnVDgG3hWK9OVI4fcJ3P",
        categories: ["email", "automation", "inbox-management"],
        mainUse: "Automated inbox filtering and prioritization.",
        pricing: "Subscription-based pricing, early access available.",
        otherUses: "Smart responses, productivity management.",
        userExperience: "Helps achieve a clean, sorted inbox effortlessly.",
        websiteUrl: "https://www.lindy.ai/tools/ai-email-management",
        rating: 4.5
      },
      {
        id: "canary-mail",
        name: "Canary Mail",
        description: "An email client with AI capabilities, offering features like Copilot for writing assistance, smart inbox prioritization, and end-to-end encryption.",
        logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr-tA8DcUT-9fM14426vtbnIW-AMDFDcJabg&s",
        categories: ["email", "secure-communication", "writing-assistant"],
        mainUse: "Secure and intelligent email communication.",
        pricing: "Free version; Pro starts at $20/year.",
        otherUses: "Encryption, productivity tracking, scheduling.",
        userExperience: "Smooth interface with top-tier privacy.",
        websiteUrl: "https://canarymail.io",
        rating: 4.6
      },
      {
        id: "shortwave",
        name: "Shortwave",
        description: "An AI-powered email client that helps organize and prioritize emails, aiming to reduce inbox clutter.",
        logoUrl: "https://www.shortwave.com/favicon.ico",
        categories: ["email", "productivity", "gmail-client"],
        mainUse: "Email prioritization and clutter reduction.",
        pricing: "Free basic plan; premium starts at $9/month.",
        otherUses: "Summarization, scheduling, smart folders.",
        userExperience: "Modern interface tailored for Gmail users.",
        websiteUrl: "https://www.shortwave.com",
        rating: 4.5
      },
      {
        id: "superhuman",
        name: "Superhuman",
        description: "A premium email client that offers AI features like email tracking, scheduled sending, and smart sorting to help users achieve 'inbox zero.'",
        logoUrl: "https://superhuman.com/favicon.ico",
        categories: ["email", "productivity", "professional"],
        mainUse: "High-efficiency email client for professionals.",
        pricing: "Starts at $30/month.",
        otherUses: "Email insights, keyboard shortcuts, reminders.",
        userExperience: "Blazing fast with a luxurious interface.",
        websiteUrl: "https://superhuman.com",
        rating: 4.7
      },
      {
        id: "mailspring",
        name: "Mailspring",
        description: "An open-source email client that includes AI features for email organization and prioritization, designed for power users.",
        logoUrl: "https://mailspring.com/favicon.ico",
        categories: ["email", "open-source", "advanced-features"],
        mainUse: "Advanced email management with AI features.",
        pricing: "Free and open-source.",
        otherUses: "Customizable, extensible, keyboard shortcuts.",
        userExperience: "Powerful yet user-friendly interface.",
        websiteUrl: "https://mailspring.com",
        rating: 4.5
      },
      {
        id: "mailtrack",
        name: "Mailtrack",
        description: "An AI tool that tracks email opens and provides insights, helping users understand email engagement and improve their communication strategies.",
        logoUrl: "https://mailtrack.io/favicon.ico",
        categories: ["email", "analytics", "engagement"],
        mainUse: "Email open tracking and engagement analysis.",
        pricing: "Free for personal use; paid plans available.",
        otherUses: "Email follow-up, campaign optimization, analytics.",
        userExperience: "Simple to use and provides actionable insights.",
        websiteUrl: "https://mailtrack.io",
        rating: 4.4
      },
      {
        id: "mailshake",
        name: "Mailshake",
        description: "An AI-driven email marketing platform that helps users create, send, and track email campaigns, with features like lead scoring and segmentation.",
        logoUrl: "https://mailshake.com/favicon.ico",
        categories: ["email", "marketing", "automation"],
        mainUse: "AI-powered email marketing and lead management.",
        pricing: "Free trial; paid plans starting at $19/month.",
        otherUses: "Lead scoring, segmentation, campaign tracking.",
        userExperience: "User-friendly interface with AI insights.",
        websiteUrl: "https://mailshake.com",
        rating: 4.5
      },
      //Add more
    ];