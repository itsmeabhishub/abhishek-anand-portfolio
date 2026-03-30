import { useEffect, useRef, useState } from 'react';

const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef   = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<boolean>(false);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;
    let raf: number;

    const onMove = (e: MouseEvent): void => {
      mx = e.clientX;
      my = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${mx}px`;
        cursorRef.current.style.top  = `${my}px`;
      }
    };

    const animate = (): void => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${rx}px`;
        ringRef.current.style.top  = `${ry}px`;
      }
      raf = requestAnimationFrame(animate);
    };

    const onEnter = (): void => setHovered(true);
    const onLeave = (): void => setHovered(false);

    document.addEventListener('mousemove', onMove);
    document.querySelectorAll<HTMLElement>('a, button').forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    animate();

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={ringRef} className={`cursor-ring${hovered ? ' hovered' : ''}`} />
    </>
  );
};

export default Cursor;
