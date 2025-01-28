import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-20 max-sm:mt-40">
      <h1 className="max-sm:text-4xl text-6xl font-bold max-sm:font-extrabold text-[#1d324f] min-h-16 w-screen text-center overflow-hidden">
        Sparring Sessions Podcast
      </h1>

      <div className="flex flex-row items-center justify-center gap-32 max-sm:gap-8 max-md:gap-16">
        <a
          href="https://www.youtube.com/@SparringSessionsPod"
          target="_blank"
          className="flex items-center gap-2 w-auto h-auto max-sm:max-h-[80] max-sm:max-w-[80] max-md:h-[120] max-md:w-[120]"
        >
          <Image src="/Youtube.png" alt="Youtube" width={140} height={140} />
        </a>
        <a
          href="https://www.instagram.com/sparring_sessions"
          target="_blank"
          className="flex items-center gap-2 max-sm:max-h-[60] max-sm:max-w-[60] max-md:h-[100] max-md:w-[100]"
        >
          <Image
            src="/instagram.png"
            alt="Instagram"
            width={120}
            height={120}
          />
        </a>
        <a
          href="https://open.spotify.com/show/4EJycwHyG2T2aH1K0YIatk"
          target="_blank"
          className="flex items-center gap-2 max-sm:max-h-[60] max-sm:max-w-[60] max-md:h-[100] max-md:w-[100]"
        >
          <Image src="/spotify.png" alt="Spotify" width={120} height={120} />
        </a>
      </div>
    </div>
  );
}
