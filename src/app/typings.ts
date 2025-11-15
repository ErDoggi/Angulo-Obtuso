export interface IChapter {
    id:          string
    order:       string
    title:       string
    subchapters: IChapter[]
}