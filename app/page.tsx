import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-1 bg-gradient-to-br from-[#eadabe] to-[#1d314e] from-30% content-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 h-screen w-screen">
      <div className="absolute top-4 right-4 rounded-3xl overflow-hidden">
        <Image
          src="/Sparring_Sessions_Logo.jpg"
          alt="Sparring Sessions Logo"
          width={150}
          height={150}
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-20">
        <h1 className="sm:text-6xl md:text-5xl text-4xl sm:font-bold font-extrabold text-[#1d324f] min-h-14 w-screen text-center overflow-hidden">
          Sparring Sessions Podcast
        </h1>

        <div className="flex flex-row items-center justify-center gap-16">
          <a
            href="https://www.youtube.com/@SparringSessionsPod"
            target="_blank"
            className="flex items-center gap-2 w-auto h-auto"
          >
            <Image src="/Youtube.png" alt="Youtube" width={100} height={100} />
          </a>
          <a
            href="https://www.instagram.com/sparring_sessions"
            target="_blank"
            className="flex items-center gap-2"
          >
            <Image
              src="/instagram.png"
              alt="Instagram"
              width={80}
              height={80}
            />
          </a>
          <a
            href="https://open.spotify.com/show/4EJycwHyG2T2aH1K0YIatk"
            target="_blank"
            className="flex items-center gap-2"
          >
            <Image src="/spotify.png" alt="Spotify" width={80} height={80} />
          </a>
        </div>
      </div>
    </div>
  );
}
