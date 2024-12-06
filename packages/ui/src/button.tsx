'use client';

import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onTap?: () => void;
};

export function Button({ children, onTap }: Props) {
  const callback = () => {
    if (onTap) {
      onTap();
    }
  };

  return (
    <button
      onClick={callback}
      className="h-12 flex items-center gap-2.5 rounded-xl px-2.5 py-1.5 cursor-pointer text-stone-100 bg-stone-700"
    >
      {children}
    </button>
  );
}
