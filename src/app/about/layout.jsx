

export const metadata = {
    title: 'About the author | Franc',
    description: 'All about web development',
    keywords: 'html, css, javascript, react, next, tailwind, typescript'
  }

export default function layout({children}) {
  return (
    <section>
    <h2>{children}</h2>
    </section>
  )
}
