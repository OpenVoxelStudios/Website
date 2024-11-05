import { useRef, useState } from 'react';

const OptimizedVideo = ({ src, width, height, id }: {
    src: string;
    width: number;
    height: number;
    id: string;
}) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    return (
        <>
            <video
                ref={videoRef}
                className="notextselection"
                id={id}
                autoPlay={true}
                muted={true}
                playsInline={true}
                preload="metadata"
                controls={false}
                width={width}
                height={height}
                onLoadedData={() => setIsLoaded(true)}
                onPlay={(e: React.SyntheticEvent<HTMLVideoElement>) => e.currentTarget.pause()}
                style={{ display: isLoaded ? 'block' : 'none' }}
            >
                <source
                    className="notextselection"
                    type="video/mp4"
                    src={src}
                />
            </video>
        </>
    );
};

export default OptimizedVideo;