import { VideoType } from "./video"

export type VideosRepository = {
    fetch(): Promise<VideoType[]>
}
