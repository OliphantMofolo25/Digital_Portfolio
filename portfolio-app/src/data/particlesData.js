// Generate static particles data (runs once at build time)
export const particles = (() => {
  const result = [];
  for (let i = 0; i < 60; i++) {
    result.push({
      id: i,
      size: (Math.random() * 4 + 2).toFixed(1),
      left: (Math.random() * 100).toFixed(1),
      top: (Math.random() * 100).toFixed(1),
      delay: (Math.random() * 5).toFixed(2),
      duration: (Math.random() * 10 + 5).toFixed(1),
      opacity: (Math.random() * 0.5 + 0.2).toFixed(2)
    });
  }
  return result;
})();