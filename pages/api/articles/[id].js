import { articles } from '../../../data'

export default function handler({ query: { id }}, res) {
    const filtered = articles.filter(article => article.id === id)

    if (filtered.length === 0) {
        return res.status(404).json({ message: 'Article not found' })
    } else {
        res.status(200).json(filtered[0])
    }
}gi