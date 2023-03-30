import { server } from '@/config'
import ArticleList from '@/components/ArticleList'

export default function Home({ articles}) {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  )
}

// This version is using the local test file data.js as source

export const getStaticProps = async () => {
  const res = await fetch( `${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles
    }    
  }
}

// Version below is using jsonplaceholder.typicode.com api

/* export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
  const articles = await res.json()

  return {
    props: {
      articles
    }    
  }
} */