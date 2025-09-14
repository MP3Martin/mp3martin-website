import { useEffect } from 'react';

/**
 * @param {boolean} enabled
 */
export default function useContactButtonEffect (enabled) {
  useEffect(() => {
    if (!enabled) return;

    const container = document.querySelector('.button-container');

    if (!container) return; // Exit early if the container isn't found

    /** @type {NodeListOf<HTMLButtonElement>} */
    const buttons = document.querySelectorAll('.contact-button');
    const maxScale = 1.1;
    const maxDistance = 63;
    const dimBackgroundColor = 'rgba(221, 102, 0, 0.3)';
    const buttonBaseTransition = 'transform 0.1s ease-out, ';

    let previousClosestButton = null;

    const calculateDistance = (rect, x, y) => {
      const distanceX = Math.max(rect.left - x, x - rect.right, 0);
      const distanceY = Math.max(rect.top - y, y - rect.bottom, 0);

      return Math.sqrt(distanceX ** 2 + distanceY ** 2);
    };

    const resetStyles = () => {
      buttons.forEach(button => {
        button.style.transform = 'scale(1)';
        button.style.backgroundColor = '';
        button.style.transition = buttonBaseTransition;
      });
      previousClosestButton = null;
    };

    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const containerRect = container.getBoundingClientRect();

      const containerDistance = calculateDistance(containerRect, mouseX, mouseY);

      if (containerDistance > maxDistance) {
        resetStyles();

        return;
      }

      // --- Step 1: Gather all button data ---
      const buttonData = Array.from(buttons).map(button => {
        const rect = button.getBoundingClientRect();

        return {
          button,
          rect,
          distance: calculateDistance(rect, mouseX, mouseY),
          verticalDistance: Math.abs((rect.top + rect.height / 2) - mouseY)
        };
      });

      // --- Step 2: Find the closest button ---
      const closestButtonData = buttonData.reduce((closest, current) =>
        current.verticalDistance < closest.verticalDistance ? current : closest
      );

      const horizontalBuffer = 8;
      const verticalBuffer = 2;
      const isInsideContainer = mouseX >= containerRect.left - horizontalBuffer &&
        mouseX <= containerRect.right + horizontalBuffer &&
        mouseY >= containerRect.top - verticalBuffer &&
        mouseY <= containerRect.bottom + verticalBuffer;

      const isSwitchingButtons = previousClosestButton !== null;

      // --- Step 3: Apply styles to all buttons ---
      buttonData.forEach(data => {
        const {
          button,
          rect,
          distance
        } = data;

        const isInsideButton = mouseX >= rect.left && mouseX <= rect.right &&
          mouseY >= rect.top && mouseY <= rect.bottom;

        // Calculate scale
        let scale = 1;

        if (isInsideButton) {
          scale = maxScale;
        } else if (distance < maxDistance) {
          scale = 1 + (1 - distance / maxDistance) * (maxScale - 1);
        }

        // Apply scale
        button.style.transform = `scale(${scale})`;

        // Apply background color and its specific transition
        if (data.button === closestButtonData.button && isInsideContainer) {
          // If switching between buttons, make the fade-in instant
          if (isSwitchingButtons) {
            button.style.transition = buttonBaseTransition + 'background-color 0s';
          } else {
            button.style.transition = buttonBaseTransition + 'background-color 0.08s ease-in';
          }
          button.style.backgroundColor = dimBackgroundColor;
        } else {
          button.style.transition = buttonBaseTransition + 'background-color 0.4s ease-out';
          button.style.backgroundColor = '';
        }
      });

      // Update the previous closest button reference
      if (isInsideContainer) {
        previousClosestButton = closestButtonData.button;
      } else {
        previousClosestButton = null;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      resetStyles();
    };
  }, [enabled]);
}
