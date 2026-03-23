export function CurveDivider({ topColor, bottomColor }) {
  return (
    <div style={{ background: bottomColor, lineHeight: 0, overflow: 'hidden' }}>
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: '60px' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,0 L1440,0 L1440,0 C1440,0 1080,80 720,80 C360,80 0,0 0,0 Z"
          fill={topColor}
        />
      </svg>
    </div>
  );
}
