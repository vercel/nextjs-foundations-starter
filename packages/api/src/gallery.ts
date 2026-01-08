import { faker } from "@faker-js/faker";

/**
 * Type definition for a gallery item
 */
export type GalleryItem = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  thumbnailUrl: string;
  category: string;
  tags: string[];
  createdAt: Date;
  featured: boolean;
};

// Categories for gallery items
const GALLERY_CATEGORIES = [
  "Product",
  "Team",
  "Office",
  "Events",
  "Projects",
  "Community",
];

/**
 * Generate a single gallery item
 */
const generateGalleryItem = (overrides?: Partial<GalleryItem>): GalleryItem => {
  return {
    id: faker.string.uuid(),
    title: faker.company.catchPhrase(),
    description: faker.lorem.paragraph(),
    imageUrl: faker.image.urlPicsumPhotos({ width: 1200, height: 800 }),
    thumbnailUrl: faker.image.urlPicsumPhotos({ width: 400, height: 300 }),
    category: faker.helpers.arrayElement(GALLERY_CATEGORIES),
    tags: faker.helpers.arrayElements(
      ["innovation", "design", "technology", "creativity", "teamwork"],
      { min: 2, max: 4 },
    ),
    createdAt: faker.date.recent({ days: 365 }),
    featured: faker.datatype.boolean({ probability: 0.2 }),
    ...overrides,
  };
};

// Memoize generated gallery items for consistency
let cachedGalleryItems: GalleryItem[] | null = null;

const getAllGalleryItems = (): GalleryItem[] => {
  if (!cachedGalleryItems) {
    cachedGalleryItems = Array.from({ length: 30 }, () =>
      generateGalleryItem(),
    );
  }
  return cachedGalleryItems;
};

/**
 * Fetch gallery items
 * @param limit - Number of items to return (default: 20)
 * @returns Promise resolving to array of gallery items
 */
export async function getGalleryItems(limit = 20): Promise<GalleryItem[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 350));

  const allItems = getAllGalleryItems();
  const sortedItems = allItems.sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
  );

  return sortedItems.slice(0, limit);
}
