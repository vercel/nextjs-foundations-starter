import { faker } from "@faker-js/faker";

/**
 * Type definition for a blog post
 */
export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  coverImage: string;
  publishedAt: Date;
  tags: string[];
};

// Categories and tags for posts
const TAGS = [
  "javascript",
  "typescript",
  "react",
  "nextjs",
  "nodejs",
  "web",
  "tutorial",
  "guide",
];

/**
 * Generate a single blog post
 */
const generatePost = (overrides?: Partial<Post>): Post => {
  const title = faker.lorem.sentence({ min: 3, max: 8 });
  const slug = faker.helpers.slugify(title).toLowerCase();

  return {
    id: faker.string.uuid(),
    slug,
    title,
    excerpt: faker.lorem.paragraph({ min: 2, max: 3 }),
    content: faker.lorem.paragraphs({ min: 5, max: 10 }, "\n\n"),
    author: {
      name: faker.person.fullName(),
      avatar: faker.image.avatar(),
    },
    coverImage: faker.image.urlPicsumPhotos({ width: 1200, height: 630 }),
    publishedAt: faker.date.recent({ days: 90 }),
    tags: faker.helpers.arrayElements(TAGS, { min: 2, max: 4 }),
    ...overrides,
  };
};

// Memoize generated posts for consistency
let cachedPosts: Post[] | null = null;

const getAllPosts = (): Post[] => {
  if (!cachedPosts) {
    cachedPosts = Array.from({ length: 20 }, () => generatePost());
  }
  return cachedPosts;
};

/**
 * Fetch a list of blog posts
 * @param limit - Number of posts to return (default: 10)
 * @returns Promise resolving to array of posts
 */
export async function getPosts(limit = 10): Promise<Post[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  const allPosts = getAllPosts();
  const sortedPosts = allPosts.sort(
    (a, b) => b.publishedAt.getTime() - a.publishedAt.getTime(),
  );

  return sortedPosts.slice(0, limit);
}
