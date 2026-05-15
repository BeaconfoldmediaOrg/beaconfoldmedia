import { ArrowUpRight } from "lucide-react";

const videos = [
  {
    id: "zJSsQZLYqYU",
    label: "Video 01",
    title: "BeaconFold Media featured video 01",
    url: "https://youtu.be/zJSsQZLYqYU",
  },
  {
    id: "s4mRsDrzrZ4",
    label: "Video 02",
    title: "BeaconFold Media featured video 02",
    url: "https://www.youtube.com/shorts/s4mRsDrzrZ4?feature=share",
  },
  {
    id: "Z7psIw0-F8k",
    label: "Video 03",
    title: "BeaconFold Media featured video 03",
    url: "https://www.youtube.com/shorts/Z7psIw0-F8k?feature=share",
  },
  {
    id: "vNB9sH0IOAQ",
    label: "Video 04",
    title: "BeaconFold Media featured video 04",
    url: "https://www.youtube.com/shorts/vNB9sH0IOAQ?feature=share",
  },
];

export function VideosSection() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-foreground/10" id="videos">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px" style={{ backgroundColor: "var(--gold)" }} />
            Insights & Perspectives

            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight">
             Ideas that shape

              <br />
              <span className="text-muted-foreground">the conversation.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            <article
              key={video.id}
              className="group border border-foreground/20 overflow-hidden transition-colors duration-300 hover:border-foreground"
            >
              <div className="relative aspect-[9/16] bg-foreground">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>

              <div className="flex items-center justify-between gap-4 p-5">
                <span className="font-mono text-xs text-muted-foreground">{video.label}</span>
                <a
                  href={video.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-mono text-foreground/60 transition-colors duration-300 group-hover:text-foreground"
                >
                  Watch
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
