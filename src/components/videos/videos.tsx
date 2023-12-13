import { useState } from "react";

import { Video } from "../video";

import { ApiStatus } from "@/modules/api/domain";
import { VideoType } from "@/modules/video/domain/video";
import { useAppContext } from "@/hooks/useAppContext";

function Videos() {
    const { videosRepository } = useAppContext()
    const [status, setStatus] = useState<ApiStatus>(ApiStatus.Idle)
    const [videos, setVideos] = useState<VideoType[]>([])

    const onHandleLoad = async () => {
        setStatus(ApiStatus.Loading)
        const newVideos = await videosRepository.fetch()
        setVideos(newVideos)
        setStatus(ApiStatus.Success)
    }

    return (
        <>
            {
                !videos.length && status !== ApiStatus.Loading && (
                    <button
                        type="button"
                        className="bg-primary"
                        onClick={onHandleLoad}
                    >
                        Load videos
                    </button>
                )
            }
            {
                status === ApiStatus.Loading && (
                    <h2>Loading...</h2>
                )
            }
            {
                videos.map(video => (
                    <Video key={video.uid} videoItem={video} />
                ))
            }
        </>
    );
}

export default Videos;
