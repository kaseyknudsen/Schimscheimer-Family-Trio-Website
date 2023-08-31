const YouTubeEmbed = ({ videoId, width = 760, height = 415 }) => (
  <div className="video-responsive">
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
