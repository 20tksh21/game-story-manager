'use client';

import { useState } from "react";
import { GameEvents as InitialEvents } from "@/data/mockEvents";
import type { GameEvent } from "@/types/gameEvent";

export default function MainPage() {

    const [gameEvents, setGameEvent] = useState<GameEvent[]>(InitialEvents)

    const [title, setTitle] = useState<string>("");
    const [needFlag, setNeedFlag] = useState<string>("");
    const [getFlag, setGetFlag] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const handleAddEvent = () => {
        if(!title) return;

        const needFlagArray = needFlag ? needFlag.split(",").map(n => n.trim()) : [];

        const newGameEvent: GameEvent = {
            id: Date.now(),     //仮設定で現在時刻
            title: title,
            needFlag: needFlagArray,
            getFlag: getFlag,
            description: description
        };

        setGameEvent([...gameEvents, newGameEvent]);

        setTitle("");
        setNeedFlag("");
        setGetFlag("");
        setDescription("");
    }

    const handleDeleteEvent = (id: number) => {
        setGameEvent(gameEvents.filter(gEvent => gEvent.id !== id))
    }

    return (
        <main>
            <div>
                <h2>イベント入力</h2>
                <input type="text" placeholder="イベント名(必須)" onChange={(e) => setTitle(e.target.value)} value={title}></input>
                <input type="text" placeholder="必要フラグ名" onChange={(e) => setNeedFlag(e.target.value)} value={needFlag}></input>
                <input type="text" placeholder="獲得フラグ名" onChange={(e) => setGetFlag(e.target.value)} value={getFlag}></input>
                <input type="text" placeholder="説明" onChange={(e) => setDescription(e.target.value)} value={description}></input>
                <button onClick={handleAddEvent}>追加</button>
            </div>

            <hr></hr>

            {gameEvents.map((gEvent) => (
                <div key={gEvent.id}>
                    <p>{gEvent.title}</p>
                    <p>必要フラグ：{gEvent.needFlag?.join(", ") || "なし"}</p>
                    <p>獲得フラグ：{gEvent.getFlag || "なし"}</p>
                    {gEvent.description && <p>{gEvent.description}</p>}
                    <button onClick={() => handleDeleteEvent(gEvent.id)}>削除</button>
                    <hr></hr>
                </div>
            ))}
        </main>
    )
}