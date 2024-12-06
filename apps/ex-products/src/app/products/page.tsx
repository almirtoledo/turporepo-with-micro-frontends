import { getSession } from '@repo/next-lib/get-session';
import { RootComponent } from '@repo/ui/root-component';
import { UserSession } from '@repo/ui/user-session';

export default async function Page() {
  const session = await getSession();

  return (
    <RootComponent pageName="Products">
      <section>
        <UserSession existsSession={session} />
      </section>
    </RootComponent>
  );
}
