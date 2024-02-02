import Link from 'next/link'

import { DrawerDemo } from '@/components/drawer-demo'

export default function Home() {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <section className="flex w-full flex-col items-center justify-center gap-12 text-center">
        <h1 className="text-4xl font-bold">Using Drawer as a mobile menu</h1>
        <div className="space-x-6">
          <DrawerDemo direction="top" />
          <DrawerDemo direction="bottom" />
          <DrawerDemo direction="right" />
          <DrawerDemo direction="left" />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            Link to{' '}
            <Link
              className="underline-offset-4 hover:underline"
              href={'https://ui.shadcn.com/'}
              target="_blank"
            >
              shadcn/ui
            </Link>
          </div>
          <Link
            className="underline-offset-4 hover:underline"
            href={'https://ui.shadcn.com/docs/components/drawer'}
            target="_blank"
          >
            Drawer Documentation
          </Link>
          <div>
            Drawer is built on top of{' '}
            <Link className="underline-offset-4 hover:underline" href={''}>
              Vaul
            </Link>{' '}
            by{' '}
            <Link className="underline-offset-4 hover:underline" href={''}>
              emilkowalski_.
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
