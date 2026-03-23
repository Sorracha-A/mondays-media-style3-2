const phrases = [
  'All-In Marketing',
  'All-Out Creative',
  'Not Just Ads',
  'Ideas With Impact',
  'Confidently Creative',
  'Purpose-Driven',
  'Bold & Clear',
  'Make Every Day A Brand New Monday',
];

export default function Marquee({ dark = false }) {
  const items = [...phrases, ...phrases, ...phrases, ...phrases];

  return (
    <div className={dark ? 'marquee-section marquee-section-dark' : 'marquee-section'}>
      <div className="marquee-track">
        {items.map((phrase, i) => (
          <div className="marquee-item" key={i}>
            <span>{phrase}</span>
            <span className="marquee-dot" />
          </div>
        ))}
      </div>
    </div>
  );
}
