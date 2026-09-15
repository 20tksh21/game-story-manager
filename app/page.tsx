import { GameEvents } from "@/data/mockEvents";

export default function MainPage() {
    return (
        <main>
            <h2>イベント一覧</h2>
            <hr/>
            {GameEvents.map((gameEvent) => (
                <div key={gameEvent.id}>
                    <p>{gameEvent.title}</p>
                    <p>必要フラグ：{gameEvent.needFlag?.join(", ") || "なし"}</p>
                    <p>獲得フラグ：{gameEvent.getFlag || "なし"}</p>
                    {gameEvent.description && <p>{gameEvent.description}</p>}
                    <hr/>
                </div>
            ))}
        </main>
    )
}