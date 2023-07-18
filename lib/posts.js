import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

function getID(slug) {
  return path.join(...slug)
}

export async function getPostData(slug) {
  const id = getID(slug)
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}

function getFilePaths(dir) {
  let filePaths = []

  fs.readdirSync(dir).forEach(name => {
    const fullPath = path.join(dir, name)
    if (fs.lstatSync(fullPath).isDirectory()) {
      filePaths = filePaths.concat(getFilePaths(fullPath))
    } else {
     filePaths.push(fullPath)
    }
  })

  return filePaths
}

export async function getAllPostIds() {
  const filePaths = getFilePaths(postsDirectory)

  const data = filePaths.map(filePath => {
    const fileExtension = path.extname(filePath)
    const id = filePath.replace(postsDirectory, '').replace(fileExtension, '')

    const fileContents = fs.readFileSync(filePath, 'utf8')

    const matterResult = matter(fileContents)
    
    return {
      id,
      ...matterResult.data
    }
  })

  return data.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
 
 })
}
