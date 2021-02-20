import { CATEGORY_ACTION } from './category-action.enum';

export interface ISection {
    title: string;
    imageUrl: string;
    id: number;
    linkUrl: string;
}

export interface ICategoryState {
    sections: ISection[];
}

export interface ICategoryAction {
    type: CATEGORY_ACTION;
    payload: Partial<ICategoryState>
}