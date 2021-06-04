import { Desiderio } from "./Desiderio";
import { User } from "./User";

export interface ListaDesideri {
    id: number;
    slug: string;
    name: string;
    notify_booked?: boolean;
    invited_users?: Array<User>
    followers?: Array<User>
    desideri?: Array<Desiderio>,
    keep_surprise?: boolean,
    public?: boolean,
    owner?: User,
    created_at: string,
    description?: string
}