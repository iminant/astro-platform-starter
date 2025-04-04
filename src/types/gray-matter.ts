// src/types/gray-matter.d.ts
declare module 'gray-matter' {
    interface Frontmatter {
      title: string;
      date: string;
      tags?: string[];
      categories?: string[];
      excerpt?: string;
    }
  
    function matter(content: string): { content: string; data: Frontmatter };
  
    export default matter;
  }