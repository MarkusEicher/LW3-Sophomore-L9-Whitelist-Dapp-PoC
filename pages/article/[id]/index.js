import { server } from '@/config'
import { useRouter } from "next/router";
import Link from "next/link";

const useArticle = () => {
    const router = useRouter();
    const { id } = router.query;
    return { id };
  };

const Article = ({article}) => {
    // const router = useRouter();
    const { id } = useArticle();
    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br />
            <Link legacyBehavior href="/">Go Back</Link>
        </div>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`);
    const article = await res.json()

    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles`);
    const article = await res.json()

    const ids = article.map(article => article.id)
    const paths = ids.map(id => ({ params: { id: id.toString() } }))
    return {
        paths,
        fallback: false
    }
}

// The two versions below are using the jsonplaceholder.typicode.com api

// export const getServerSideProps = async (context) => {
/* export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const article = await res.json()

    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const article = await res.json()

    const ids = article.map(article => article.id)
    const paths = ids.map(id => ({ params: { id: id.toString() } }))
    return {
        paths,
        fallback: false
    }
} */

export default Article; 