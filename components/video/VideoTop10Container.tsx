import Title from '@/components/ui/Title';
import { VideoCardType } from '@/types/videoType';
import VideoSummaryItemCol from './VideoSummaryItemCol';

interface VideoListType {
  title?: string;
  videoList: Array<VideoCardType>;
}

export default function VideoSummaryContainer({ title, videoList }: VideoListType) {
  return (
    <div>
      <div className='px-2 py-4'>{title && <Title text={`${title}`} />}</div>
      <div className='pl-2 pr-5 grid grid-cols-5 gap-3 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1'>
        {videoList &&
          videoList.map((item) => (
            <VideoSummaryItemCol
              key={item.videoId}
              videoId={item.videoId}
              thumbnail={item.thumbnail}
              videoTitle={item.videoTitle}
              channelProfileUrl={item.channelProfileUrl}
              channelName={item.channelName}
              readCount={item.readCount}
              createAt={item.createAt}
            />
          ))}
      </div>
    </div>
  );
}

VideoSummaryContainer.defaultProps = {
  title: '',
};
