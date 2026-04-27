import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
   <div className="min-h-screen w-full flex items-center justify-center">
   <div>
     <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
      Welcome to Beaconfoldmedia!
    </h2>
    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 text-center">
      Project coming soon. Stay tuned for updates!
    </p>
    <p className="mt-6 text-sm text-gray-500 dark:text-gray-500 text-center">
      © 2023 Beaconfoldmedia. All rights reserved. <a href="https://www.wansom.ai" className="text-blue-500 hover:underline">Built by Wansom</a>
    </p>
   </div>
   </div>
      </main>
    </div>
  );
}
