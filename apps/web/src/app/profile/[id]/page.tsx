import { Suspense } from "react";

// Mock data fetching functions (simulate API calls)
async function fetchUserProfile(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return {
    id,
    name: "Demo User",
    email: "demo@example.com",
    joinedAt: new Date("2024-01-15"),
  };
}

async function fetchUserStats(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return { posts: 42, followers: 1234, following: 567 };
}

async function fetchUserActivity(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return [
    { type: "post", title: "My first post", date: new Date() },
    { type: "comment", title: "Great article!", date: new Date() },
  ];
}

// TODO: This fetches SEQUENTIALLY - learner optimizes with Promise.all
async function ProfileContent({ id }: { id: string }) {
  // INTENTIONAL: Sequential fetching (Section 4 Lesson 2 fixes this)
  const profile = await fetchUserProfile(id);
  const stats = await fetchUserStats(id);
  const activity = await fetchUserActivity(id);

  return (
    <div className="space-y-6">
      <section>
        <h1 className="font-bold text-2xl">{profile.name}</h1>
        <p className="text-gray-600">{profile.email}</p>
      </section>

      <section className="flex gap-4">
        <div>
          <strong>{stats.posts}</strong> posts
        </div>
        <div>
          <strong>{stats.followers}</strong> followers
        </div>
        <div>
          <strong>{stats.following}</strong> following
        </div>
      </section>

      <section>
        <h2 className="mb-2 font-semibold text-xl">Recent Activity</h2>
        <ul className="space-y-2">
          {activity.map((item, i) => (
            <li key={i} className="text-gray-700">
              {item.title}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="mx-auto max-w-2xl p-8">
      <Suspense
        fallback={<div className="animate-pulse">Loading profile...</div>}
      >
        <ProfileContent id={id} />
      </Suspense>
    </main>
  );
}
