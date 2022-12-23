
export const PLAN = "Plan";
export const DOING = "Doing";
export const DONE = "Done";

export interface IWidlo {
    readonly id: string;
    title: string;
    description: string;
    status: string;
}
