const blobSets = {
  about: [
    { src: '/images/decorative-blob-colorful-dark.webp', style: { top: '5%', right: '5%', width: '400px', opacity: 0.5 }, duration: 20, idx: 0 },
    { src: '/images/decorative-blob-gradient-dark.webp', style: { bottom: '10%', left: '5%', width: '350px', opacity: 0.45 }, duration: 16, idx: 1 },
  ],
  services: [
    { src: '/images/decorative-blob-orange-warm-dark.webp', style: { top: '5%', left: '3%', width: '380px', opacity: 0.5 }, duration: 22, idx: 0 },
    { src: '/images/decorative-abstract-red-circles.webp', style: { bottom: '10%', right: '5%', width: '350px', opacity: 0.4 }, duration: 18, idx: 1 },
  ],
  cases: [
    { src: '/images/decorative-blob-blue-pink-dark.webp', style: { top: '5%', right: '10%', width: '450px', opacity: 0.45 }, duration: 24, idx: 0 },
    { src: '/images/decorative-blob-orange-warm-dark.webp', style: { bottom: '10%', left: '5%', width: '380px', opacity: 0.45 }, duration: 17, idx: 1 },
  ],
  process: [
    { src: '/images/decorative-blob-colorful-dark.webp', style: { top: '0%', right: '0%', width: '600px', opacity: 0.55 }, duration: 19, idx: 0 },
    { src: '/images/decorative-blob-gradient-dark.webp', style: { bottom: '5%', left: '0%', width: '550px', opacity: 0.5 }, duration: 21, idx: 1 },
  ],
  portfolio: [
    { src: '/images/decorative-blob-orange-warm-dark.webp', style: { top: '0%', left: '0%', width: '600px', opacity: 0.5 }, duration: 20, idx: 0 },
    { src: '/images/decorative-blob-blue-pink-dark.webp', style: { bottom: '0%', right: '0%', width: '550px', opacity: 0.45 }, duration: 23, idx: 1 },
  ],
  contact: [
    { src: '/images/decorative-blob-colorful-dark.webp', style: { top: '0%', left: '5%', width: '650px', opacity: 0.5 }, duration: 22, idx: 0 },
    { src: '/images/decorative-blob-gradient-dark.webp', style: { bottom: '0%', right: '0%', width: '550px', opacity: 0.45 }, duration: 19, idx: 1 },
  ],
  footer: [
    { src: '/images/decorative-blob-gradient-dark.webp', style: { top: '0%', right: '10%', width: '400px', opacity: 0.35 }, duration: 20, idx: 0 },
    { src: '/images/decorative-blob-orange-warm-dark.webp', style: { bottom: '0%', left: '5%', width: '350px', opacity: 0.3 }, duration: 17, idx: 1 },
  ],
};

export default function FloatingBlobs({ variant = 'about' }) {
  const blobs = blobSets[variant] || blobSets.about;

  return (
    <div className="floating-blobs">
      {blobs.map((blob, i) => (
        <img
          key={i}
          src={blob.src}
          alt=""
          className={`floating-blob floating-blob-drift-${blob.idx % 2 === 0 ? 'a' : 'b'}`}
          loading="lazy"
          style={{
            ...blob.style,
            animationDuration: `${blob.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
