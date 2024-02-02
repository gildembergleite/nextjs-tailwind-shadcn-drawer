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
      </section>
    </main>
  )
}
