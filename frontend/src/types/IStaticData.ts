import {IPlayer} from "./IPlayer";
import {ITeam} from "./ITeam";

export interface IStaticData {
    "events": IEvent[],
    "phases": IPhase[]
    "teams":ITeam[],
    "total_players": number
    "elements": IPlayer[],
    "element_stats": IElementStats[],
    "element_types": IElementTypes[]
}

interface IElementStats {
    "label": string,
    "name": string
}

interface IElementTypes {
    "label": string,
    "name": string
}

interface IEvent {
    "id": number,
    "name": string
    "deadline_time": string,
    "average_entry_score": number,
    "finished": boolean,
    "data_checked": boolean,
    "highest_scoring_entry": number,
    "deadline_time_epoch": number,
    "deadline_time_game_offset": number,
    "highest_score": number,
    "is_previous": boolean,
    "is_current": boolean,
    "is_next": boolean,
    "chip_plays": IChip[],
    "most_selected": number,
    "most_transferred_in": number,
    "top_element": number,
    "top_element_info": {
        "id": number,
        "points": number
    },
    "transfers_made": number,
    "most_captained": number,
    "most_vice_captained": number
}

interface IChip {
    "chip_name": Chip,
    "num_played": number
}

interface IPhase {
    "id": number,
    "name": string,
    "start_event": number,
    "stop_event": number
}

enum Chip {
    BenchBoost = "bboost",
    FreeHit = "freehit",
    Wildcard = "wildcard"
}