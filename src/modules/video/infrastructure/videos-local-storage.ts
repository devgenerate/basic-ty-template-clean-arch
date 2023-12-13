import { VideoType } from "../domain/video";
import { VideosRepository } from "../domain/videos-repository";

import { VIDEOS } from "@/constants/videos.constants";

export class VideosLocalStorage implements VideosRepository {
    private key = 'yt-videos'

    private writeToLocalStorage(videos: VideoType[]): void {
        window.localStorage.setItem(this.key, JSON.stringify(videos))
    }

    private readFromLocalStorage(): VideoType[] | null {
        const localVideos = window.localStorage.getItem(this.key)

        return localVideos
            ? JSON.parse(localVideos) as VideoType[]
            : null
    }

    fetch(): Promise<VideoType[]> {
        return new Promise<VideoType[]>((resolve) => {
            const localVideos = this.readFromLocalStorage()

            if (localVideos) {
                resolve(localVideos);
            } else {
                setTimeout(() => {
                    this.writeToLocalStorage(VIDEOS)
                    resolve(VIDEOS)
                }, 1200)
            }

        })
    }
}
