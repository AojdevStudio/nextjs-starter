import fs from 'fs'
import path from 'path'
import ReactMarkdown from 'react-markdown'

async function getResearchContent() {
  const filePath = path.join(process.cwd(), 'src', 'content', 'research-paper.md')
  const content = await fs.promises.readFile(filePath, 'utf8')
  return content
}

export default async function ResearchPage() {
  const content = await getResearchContent()
  
  return (
    <div className="container mx-auto px-4 py-8">
      <article className="prose prose-lg dark:prose-invert mx-auto">
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </div>
  )
} 