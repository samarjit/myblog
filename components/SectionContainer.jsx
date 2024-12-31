import { ReactNode } from 'react'

 
export default function SectionContainer({ children }) {
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 flex flex-col min-h-screen">{children}</section>
  )
}
