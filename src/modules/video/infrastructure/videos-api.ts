import { VIDEOS } from "@/constants/videos.constants";

import { VideoType } from "../domain/video";

import { VideosRepository } from "../domain/videos-repository";

export class VideosApi implements VideosRepository {
    async fetch(): Promise<VideoType[]> {
        return new Promise<VideoType[]>((resolve) => {
            setTimeout(() => {
                resolve(VIDEOS)
            }, 1200)
        })
    }
}
