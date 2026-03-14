const delay = ms => new Promise(r => setTimeout(r, ms));

export async function generateBlogPost({ websiteUrl, targetKeyword, blogTitle, tone, length }) {
  await delay(2500);
  return {
    title: blogTitle || `${targetKeyword} — The Definitive Guide`,
    keyword: targetKeyword,
    tone,
    length,
    content: `## Introduction\nWelcome to our comprehensive look at ${targetKeyword}. In today's digital landscape, understanding the nuances of this topic is essential for growth.\n\n## Why it Matters\nBased on our scan of ${websiteUrl || 'your website'}, we've identified key areas where ${targetKeyword} can drive engagement and improve your bottom line.\n\n## Conclusion\nThis generated content is optimized for a ${tone} tone and formatted for a ${length} reading experience.`,
  };
}