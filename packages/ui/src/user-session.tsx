'use client';

import { createSession } from '@repo/next-lib/create-session';
import { excludeSession } from '@repo/next-lib/exclude-session';
import { Button } from '@repo/ui/button';
import { PowerOff, User } from 'lucide-react';
import { useState } from 'react';

type Props = { existsSession: boolean };

export function UserSession({ existsSession }: Props) {
  const [session, setSession] = useState<boolean>(existsSession);

  const login = async () => {
    await createSession();
    setSession(true);
  };

  const exit = async () => {
    await excludeSession();
    setSession(false);
  };

  return (
    <>
      {!session ? (
        <Button onTap={login}>
          <User size={20} />
          <span>User Login</span>
        </Button>
      ) : (
        <Button onTap={exit}>
          <PowerOff size={20} />
          <span>Exit</span>
        </Button>
      )}
    </>
  );
}
