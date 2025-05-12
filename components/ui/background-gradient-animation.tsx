"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = "rgb(108, 0, 162)",
  gradientBackgroundEnd = "rgb(0, 17, 82)",
  firstColor = "18, 113, 255",
  secondColor = "221, 74, 255",
  thirdColor = "100, 220, 255",
  fourthColor = "200, 50, 50",
  fifthColor = "180, 180, 50",
  pointerColor = "140, 100, 255",
  size = "80%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = true,
  containerClassName,
}: {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null);

  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);
  useEffect(() => {
    document.body.style.setProperty(
      "--gradient-background-start",
      gradientBackgroundStart
    );
    document.body.style.setProperty(
      "--gradient-background-end",
      gradientBackgroundEnd
    );
    document.body.style.setProperty("--first-color", firstColor);
    document.body.style.setProperty("--second-color", secondColor);
    document.body.style.setProperty("--third-color", thirdColor);
    document.body.style.setProperty("--fourth-color", fourthColor);
    document.body.style.setProperty("--fifth-color", fifthColor);
    document.body.style.setProperty("--pointer-color", pointerColor);
    document.body.style.setProperty("--size", size);
    document.body.style.setProperty("--blending-value", blendingValue);
  }, []);

  useEffect(() => {
    function move() {
      if (!interactiveRef.current) {
        return;
      }
      setCurX(curX + (tgX - curX) / 20);
      setCurY(curY + (tgY - curY) / 20);
      interactiveRef.current.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`;
    }

    move();
  }, [tgX, tgY]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (interactiveRef.current) {
      const rect = interactiveRef.current.getBoundingClientRect();
      setTgX(event.clientX - rect.left);
      setTgY(event.clientY - rect.top);
    }
  };

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  return (
    <div
      className={cn(
        "h-screen w-screen relative overflow-hidden top-0 left-0 bg-black",
        containerClassName
      )}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={cn("", className)}>{children}</div>
      <div
        className={cn(
          "gradients-container h-full w-full blur-lg",
          isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
        )}
      >
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:center_center]`,
            `animate-first`,
            `opacity-100`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-400px)]`,
            `animate-second`,
            `opacity-100`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%+400px)]`,
            `animate-third`,
            `opacity-100`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-200px)]`,
            `animate-fourth`,
            `opacity-70`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(80,0,255,0.7)_0,_rgba(0,212,255,0)_70%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[60vw] h-[36vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`,
            `animate-fifth`,
            `opacity-70 blur-2xl drop-shadow-[0_0_80px_rgba(80,0,255,0.5)] pointer-events-none`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(0,120,255,0.6)_0,_rgba(0,212,255,0)_70%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[36vw] h-[20vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`,
            `animate-blue-bounce`,
            `opacity-60 blur-2xl drop-shadow-[0_0_60px_rgba(0,120,255,0.4)] pointer-events-none`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(255,0,180,0.5)_0,_rgba(255,0,180,0)_70%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[40vw] h-[24vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`,
            `animate-pink-bounce`,
            `opacity-50 blur-2xl drop-shadow-[0_0_60px_rgba(255,0,180,0.3)] pointer-events-none`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(0,255,255,0.4)_0,_rgba(0,255,255,0)_70%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[32vw] h-[18vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`,
            `animate-cyan-bounce`,
            `opacity-40 blur-2xl drop-shadow-[0_0_40px_rgba(0,255,255,0.2)] pointer-events-none`
          )}
        ></div>
      </div>
      {interactive && (
        <div
          ref={interactiveRef}
          onMouseMove={handleMouseMove}
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2`,
            `opacity-70`
          )}
        ></div>
      )}
      <style jsx global>{`
        @keyframes breathe1 {
          0%, 100% { transform: scale(1) translate(0, 0); }
          20% { transform: scale(1.08) translate(-30px, 20px); }
          40% { transform: scale(0.96) translate(20px, -30px); }
          60% { transform: scale(1.04) translate(30px, 10px); }
          80% { transform: scale(1.02) translate(-20px, 10px); }
        }
        @keyframes breathe2 {
          0%, 100% { transform: scale(1) translate(0, 0); }
          25% { transform: scale(1.1) translate(40px, -20px); }
          50% { transform: scale(0.95) translate(-30px, 30px); }
          75% { transform: scale(1.05) translate(10px, -40px); }
        }
        @keyframes breathe3 {
          0%, 100% { transform: scale(1) translate(0, 0); }
          30% { transform: scale(1.07) translate(-20px, 30px); }
          60% { transform: scale(0.98) translate(30px, -20px); }
          90% { transform: scale(1.03) translate(-10px, 20px); }
        }
        @keyframes breathe4 {
          0%, 100% { transform: scale(1) translate(0, 0); }
          20% { transform: scale(1.06) translate(20px, -30px); }
          50% { transform: scale(0.97) translate(-20px, 30px); }
          80% { transform: scale(1.04) translate(10px, -20px); }
        }
        @keyframes breathe5 {
          0% { transform: scale(1.1) translate(-28vw, -18vw); filter: blur(60px) brightness(1.2); }
          15% { transform: scale(1.12) translate(20vw, -18vw); filter: blur(80px) brightness(1.3); }
          30% { transform: scale(1.08) translate(28vw, 10vw); filter: blur(60px) brightness(1.2); }
          50% { transform: scale(1.12) translate(-20vw, 18vw); filter: blur(80px) brightness(1.3); }
          70% { transform: scale(1.1) translate(20vw, 18vw); filter: blur(60px) brightness(1.2); }
          85% { transform: scale(1.12) translate(-28vw, 10vw); filter: blur(80px) brightness(1.3); }
          100% { transform: scale(1.1) translate(-28vw, -18vw); filter: blur(60px) brightness(1.2); }
        }
        @keyframes blue-bounce {
          0% { transform: scale(1) translate(18vw, -12vw); filter: blur(40px) brightness(1.1); }
          20% { transform: scale(1.08) translate(-16vw, -10vw); filter: blur(60px) brightness(1.2); }
          40% { transform: scale(1.04) translate(-20vw, 12vw); filter: blur(40px) brightness(1.1); }
          60% { transform: scale(1.1) translate(12vw, 16vw); filter: blur(60px) brightness(1.2); }
          80% { transform: scale(1.06) translate(20vw, 0vw); filter: blur(40px) brightness(1.1); }
          100% { transform: scale(1) translate(18vw, -12vw); filter: blur(40px) brightness(1.1); }
        }
        @keyframes pink-bounce {
          0% { transform: scale(1) translate(-10vw, 18vw); filter: blur(40px) brightness(1.1); }
          20% { transform: scale(1.08) translate(18vw, 10vw); filter: blur(60px) brightness(1.2); }
          40% { transform: scale(1.04) translate(20vw, -12vw); filter: blur(40px) brightness(1.1); }
          60% { transform: scale(1.1) translate(-12vw, -16vw); filter: blur(60px) brightness(1.2); }
          80% { transform: scale(1.06) translate(-20vw, 0vw); filter: blur(40px) brightness(1.1); }
          100% { transform: scale(1) translate(-10vw, 18vw); filter: blur(40px) brightness(1.1); }
        }
        @keyframes cyan-bounce {
          0% { transform: scale(1) translate(10vw, 10vw); filter: blur(30px) brightness(1.1); }
          25% { transform: scale(1.07) translate(-14vw, 14vw); filter: blur(50px) brightness(1.2); }
          50% { transform: scale(1.03) translate(-12vw, -10vw); filter: blur(30px) brightness(1.1); }
          75% { transform: scale(1.09) translate(12vw, -14vw); filter: blur(50px) brightness(1.2); }
          100% { transform: scale(1) translate(10vw, 10vw); filter: blur(30px) brightness(1.1); }
        }
        .animate-first { animation: breathe1 12s ease-in-out infinite; }
        .animate-second { animation: breathe2 14s ease-in-out infinite; }
        .animate-third { animation: breathe3 16s ease-in-out infinite; }
        .animate-fourth { animation: breathe4 18s ease-in-out infinite; }
        .animate-fifth { animation: breathe5 22s ease-in-out infinite; }
        .animate-blue-bounce { animation: blue-bounce 18s ease-in-out infinite; }
        .animate-pink-bounce { animation: pink-bounce 20s ease-in-out infinite; }
        .animate-cyan-bounce { animation: cyan-bounce 24s ease-in-out infinite; }
        .gradients-container { background: transparent !important; }
        body, .bg-black { background: #000 !important; }
      `}</style>
    </div>
  );
};

// Add breathing and movement keyframes for the gradients
// These will animate scale and translate for a floating, breathing effect

export default BackgroundGradientAnimation; 