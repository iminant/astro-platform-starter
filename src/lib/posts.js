// lib/posts.js

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Path to your markdown files
const postsDirectory = path.join(process.cwd(), 'src/pages/blog');

// Function to fetch and sort blog post data
export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  console.log('File Names:', fileNames); // Debug log

  const allPostsData = fileNames.map(fileName => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    console.log(`Reading File: ${fileName}`); // Debug log

    const matterResult = matter(fileContents);
    console.log('Parsed Data:', matterResult.data); // Debug log

    return {
      ...matterResult.data,
      slug: matterResult.data.slug,
    };
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}