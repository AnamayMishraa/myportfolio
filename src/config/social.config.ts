/**
 * Social Media Configuration
 *
 * Central configuration for all social media links and profiles.
 * ⚠️ IMPORTANT: Update these values with your own social media URLs!
 *
 * Replace all placeholder usernames and URLs with your actual profiles.
 */

export const socialConfig = {
  /**
   * LinkedIn profile
   * Get your LinkedIn username from your profile URL:
   * https://linkedin.com/in/YOUR-USERNAME
   */
  linkedin: {
    username: 'anamay-mishra',
    url: 'https://linkedin.com/in/anamay-mishra',
    label: 'LinkedIn',
  },

  /**
   * GitHub profile
   * Your GitHub username
   */
  github: {
    username: 'AnamayMishraa',
    url: 'https://github.com/AnamayMishraa',
    label: 'GitHub',
  },

  
  //  * Twitter/X profile
  //  * Your Twitter/X handle (without the @ symbol)
  
  
  twitter: {
    username: 'your-twitter-handle',
    handle: '@your-twitter-handle',
    url: 'https://twitter.com/your-twitter-handle',
    label: 'X (Twitter)',
  },
  

  /**
   * Additional social platforms (optional)
   * Uncomment and configure as needed:
   */

     email: {
     address: 'anamaymishra26@gmail.com',
     url: 'mailto:anamaymishra26@gmail.com',
     label: 'Email',
   },

  // mastodon: {
  //   username: '@yourusername@mastodon.social',
  //   url: 'https://mastodon.social/@yourusername',
  //   label: 'Mastodon',
  // },

  // medium: {
  //   username: 'yourusername',
  //   url: 'https://medium.com/@yourusername',
  //   label: 'Medium',
  // },
} as const;

export type SocialConfig = typeof socialConfig;
