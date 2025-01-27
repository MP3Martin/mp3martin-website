import { useEffect } from 'react';

export default function ButtonScaleEffect () {
  useEffect(() => {
    const container = document.querySelector('.button-container');
    const buttons = document.querySelectorAll('.scale-button');
    const maxScale = 1.1;
    const maxDistance = 63;

    const calculateDistance = (rect, x, y) => {
      const distanceX = Math.max(rect.left - x, x - rect.right, 0);
      const distanceY = Math.max(rect.top - y, y - rect.bottom, 0);

      return Math.sqrt(distanceX ** 2 + distanceY ** 2);
    };

    const resetScales = () =>
      buttons.forEach(button => (button.style.transform = 'scale(1)'));

    const handleMouseMove = (e) => {
      if (!container) return;

      const containerDistance = calculateDistance(
        container.getBoundingClientRect(),
        e.clientX,
        e.clientY
      );

      if (containerDistance > maxDistance) {
        resetScales();

        return;
      }

      buttons.forEach(button => {
        const rect = button.getBoundingClientRect();
        const distance = calculateDistance(rect, e.clientX, e.clientY);

        let scale =
          distance < maxDistance
            ? 1 + (1 - distance / maxDistance) * (maxScale - 1)
            : 1;

        const isInside =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom;

        if (isInside) scale = maxScale;

        button.style.transform = `scale(${scale})`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      resetScales();
    };
  }, []);
}
