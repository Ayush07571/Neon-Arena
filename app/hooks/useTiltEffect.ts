import { useState, useCallback, useRef } from 'react';

interface TiltAngles {
  x: number;
  y: number;
}

interface UseTiltEffectProps {
  maxTiltAngle?: number;
  onTiltChange?: (angles: TiltAngles) => void;
}

export const useTiltEffect = ({
  maxTiltAngle = 15,
  onTiltChange
}: UseTiltEffectProps = {}) => {
  const [tilt, setTilt] = useState<TiltAngles>({ x: 0, y: 0 });
  const elementRef = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!elementRef.current) return;

    const rect = elementRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);

    const tiltX = Math.max(-maxTiltAngle, Math.min(maxTiltAngle, x * maxTiltAngle));
    const tiltY = Math.max(-maxTiltAngle, Math.min(maxTiltAngle, y * maxTiltAngle));

    setTilt({ x: tiltX, y: tiltY });
    onTiltChange?.({ x: tiltX, y: tiltY });
  }, [maxTiltAngle, onTiltChange]);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    onTiltChange?.({ x: 0, y: 0 });
  }, [maxTiltAngle, onTiltChange]);

  const refCallback = useCallback((node: HTMLElement | null) => {
    elementRef.current = node;
  }, []);

  return {
    ref: refCallback,
    tilt,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave
  };
};
