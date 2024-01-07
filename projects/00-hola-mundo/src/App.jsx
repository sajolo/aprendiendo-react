import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    return (
        <section className='App'>
            <TwitterFollowCard username="kikobeats" name="Kiko Beats" />
            <TwitterFollowCard username="midudev" name="Miguel Ángel Durán" />
            <TwitterFollowCard username="elonmusk" name="Elon Musk" />
        </section>
    )
}