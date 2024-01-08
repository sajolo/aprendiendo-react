import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {

    const formatUserName = (username) => `@${username}`;

    return (
        <section className='App'>
            <TwitterFollowCard
                formatUserName={formatUserName}
                isFollowing
                username="kikobeats"
                name="Kiko Beats" />

            <TwitterFollowCard
                formatUserName={formatUserName}
                isFollowing={false}
                username="midudev"
                name="Miguel Ángel Durán" />

            <TwitterFollowCard
                formatUserName={formatUserName}
                isFollowing
                username="elonmusk"
                name="Elon Musk" />
        </section>
    )
}