import type { GameEvent } from "@/types/gameEvent";

export const GameEvents: GameEvent[] = [
    {id: 1, title: "王様に会う", getFlag: "meetKing"},
    {id: 2, title: "親に会う", getFlag:"meetParents", description: "家に帰ると自動で発生"},
    {id: 3, title: "王様に剣を借りに行く", needFlag: ["meetKing", "meetParents"], getFlag: "getSword"}
];