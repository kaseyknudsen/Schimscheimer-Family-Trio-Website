'use client'

const YouTubeEmbed = ({ videoId, title, width, height }) => (
  <div className="video-responsive text-3xl mb-5">
    <p className="text-3xl mb-5">{title}</p>
    <iframe
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${videoId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);

export default YouTubeEmbed;
