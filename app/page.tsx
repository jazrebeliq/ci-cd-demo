import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RebeliQ CI/CD Pipeline Demo",
  description: "CI/CD pipeline demo with Vercel and GitHub",
};

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center justify-center bg-zinc-50 px-6 dark:bg-zinc-950">
      <main className="w-full max-w-lg text-center">
        <p className="mb-3 text-sm font-medium tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
          RebeliQ CI/CD Pipeline demo with Vercel
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          Welcome, Bob
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          This app is wired for preview and production deploys through GitHub and
          Vercel.
        </p>
      </main>
    </div>
  );
}
