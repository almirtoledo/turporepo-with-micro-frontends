'use client';

import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  pageName: string;
};

export function RootComponent({ children, pageName }: Props) {
  return (
    <section className="h-dvh flex items-center justify-center text-stone-700 bg-stone-200">
      <div className="w-[30rem] grid gap-5 p-5 rounded-3xl border-2 border-stone-300 bg-stone-100">
        <nav className="grid">
          <span className="text-2xl font-semibold">
            <strong>Turborepo</strong> with micro-frontends
          </span>
          <span className="font-light italic">
            uses React 19, Next 15, Tailwind 4 and Docker
          </span>
        </nav>

        <section className="grid gap-1.5">
          <span className="text-sm">Navigation</span>

          <div className="flex gap-2.5">
            <a
              href="/"
              className="px-2.5 py-1.5 rounded-xl font-semibold bg-stone-200 hover:bg-stone-300 duration-150"
            >
              Dash
            </a>
            <a
              href="/products"
              className="px-2.5 py-1.5 rounded-xl font-semibold bg-stone-200 hover:bg-stone-300 duration-150"
            >
              Products
            </a>
          </div>
        </section>

        <section>
          <span className="text-xl">
            <strong>{pageName}</strong> page route
          </span>
        </section>

        {children}
      </div>
    </section>
  );
}
