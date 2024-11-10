"use client";

import * as React from "react";

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = React.useState<{ hours: number; minutes: number; seconds: number } | null>(null);

  const endTime = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

  const calculateTimeLeft = () => {
    const difference = +endTime - +new Date();
    if (difference <= 0) return { hours: 0, minutes: 0, seconds: 0 };

    return {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  React.useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (timeLeft === null) return null;

  return (
    <div className="flex items-center gap-2 text-light">
      <span className="text-base font-semibold sm:text-lg md:text-xl">FLASH SALE</span>
      <div className="flex">
        <div className="bg-red-600 font-semibold w-8 h-8 flex items-center justify-center mx-0.5 rounded">
          <span>{timeLeft.hours.toString().padStart(2, "0")}</span>
        </div>
        <span className="mx-1">:</span>
        <div className="bg-red-600 font-semibold w-8 h-8 flex items-center justify-center mx-0.5 rounded">
          <span>{timeLeft.minutes.toString().padStart(2, "0")}</span>
        </div>
        <span className="mx-1">:</span>
        <div className="bg-red-600 font-semibold w-8 h-8 flex items-center justify-center mx-0.5 rounded">
          <span>{timeLeft.seconds.toString().padStart(2, "0")}</span>
        </div>
      </div>
    </div>
  );
};

export const CountdownPayment = () => {
  const [timeLeft, setTimeLeft] = React.useState<{ hours: number; minutes: number; seconds: number } | null>(null);

  const endTime = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

  const calculateTimeLeft = () => {
    const difference = +endTime - +new Date();
    if (difference <= 0) return { hours: 0, minutes: 0, seconds: 0 };

    return {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  React.useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (timeLeft === null) return null;

  return (
    <div className="flex items-center gap-2 text-light xl:px-6">
      <div className="flex justify-between w-full gap-2">
        <div className="bg-transparent border border-light/20 flex flex-col gap-4 items-center justify-center rounded-lg w-full h-28">
          <span className="text-3xl font-semibold">{timeLeft.hours.toString().padStart(2, "0")}</span>
          <p className="text-sm"> Hours</p>
        </div>
        <div className="bg-transparent border border-light/20 flex flex-col gap-4 items-center justify-center rounded-lg w-full h-28">
          <span className="text-3xl font-semibold">{timeLeft.minutes.toString().padStart(2, "0")}</span>
          <p className="text-sm"> Minutes</p>
        </div>
        <div className="bg-transparent border border-light/20 flex flex-col gap-4 items-center justify-center rounded-lg w-full h-28">
          <span className="text-3xl font-semibold">{timeLeft.seconds.toString().padStart(2, "0")}</span>
          <p className="text-sm"> Seconds</p>
        </div>
      </div>
    </div>
  );
};
