import { VideoType } from "@/modules/video/domain/video";

type VideoProps = {
    videoItem: VideoType
}

function Video({ videoItem }: VideoProps) {
    return (
        <iframe
            height="315"
            width="420"
            src={`https://www.youtube.com/embed/${videoItem.id}?mute=1`}
        />
    );
}

export default Video;
