module.exports = {
  siteTitle: "luckyluu - Portfolio", // Site title.
  siteTitleShort: "luckyluu", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Front-End Developer live in Ho Chi Minh City, a photography geek, and a music lover", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://luubinhan.github.io",
  pathPrefix: "/portfolio",
  siteDescription: "luckyluu portfolio",
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "445556375516928", // FB Application ID for using app insights
  googleAnalyticsID: "UA-29685098-2", // GA tracking ID.
  disqusShortname: "luckyluu", // Disqus shortname.
  postDefaultCategoryID: "React", // Default category for posts.
  userName: "luckyluu", // Username to display in the author segment.
  userTwitter: "luubinhan", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Hồ Chí Minh, Việt Nam", // User location to display in the author segment.
  userAvatar: "https://media.licdn.com/dms/image/C4E03AQFQg5eGuqMWkA/profile-displayphoto-shrink_200_200/0?e=1543449600&v=beta&t=KSe235f95l89g6FW6ICJ91sd2uBfmBXKLosm3pfcwzo", // User avatar to display in the author segment.
  userDescription: "Front-End Developer live in Ho Chi Minh City, a photography geek, and a music lover", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/luubinhan",
      iconClassName: "github"
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/l%C6%B0u-b%C3%ACnh-an-03556553/",
      iconClassName: "linkedin"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/luubinhan",
      iconClassName: "twitter"
    },
    {
      label: "Codepen",
      url: "https://codepen.io/luckyluu/",
      iconClassName: "codepen"
    }
  ],
  copyright: "Copyright © 2018. luckyluu", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#01A1B1", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  // TODO: Move this literally anywhere better.
  toCChapters: ["", "Chapter 1", "Chapter 2"] // Used to generate the Table Of Contents. Index 0 should be blank.
};
