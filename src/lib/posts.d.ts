// posts.d.ts

declare module '@lib/posts' {
    interface Post {
      title: string;
      slug: string;
      excerpt: string;
      date: string;
    }
  
    function getSortedPostsData(): Post[];
  }