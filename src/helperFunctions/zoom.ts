export const zoom = (e: React.MouseEvent<HTMLElement>) => {
    const zoomer = e.currentTarget;
    const offsetX = e.nativeEvent.offsetX;
    const offsetY = e.nativeEvent.offsetY;

    const x = (offsetX / zoomer.offsetWidth) * 100;
    const y = (offsetY / zoomer.offsetHeight) * 100;

    zoomer.style.backgroundPosition = `${x}% ${y}%`;
  };