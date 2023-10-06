import VideoSummaryItemCol from '@/components/video/VideoSummaryItemCol';
import { CategoryType } from '@/types/categoryType';
import { VideoCardType } from '@/types/videoType';
import axios from 'axios';
import { GetServerSidePropsContext } from 'next';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

interface CategoryProps {
  videos: VideoCardType[];
  catId: number;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const PAGE_SIZE = 10;

export default function Category({ catId, videos }: CategoryProps) {
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [videoList, setVideoList] = useState<VideoCardType[]>(videos);

  const fetchVideo = async (currentPage: number) => {
    const res = await axios.get(`${BASE_URL}/read/video/category/${catId}?page=${currentPage}&pageSize=${PAGE_SIZE}`, {
      withCredentials: true,
    });
    return res.data;
  };

  const fetchMoreData = async () => {
    const { data } = await fetchVideo(page);

    console.log(data);
    if (data.length === 0) {
      setHasMore(false);
    } else {
      setVideoList([...videoList, ...data]);
      setPage(page + 1);
    }
  };

  return (
    <InfiniteScroll dataLength={videoList.length} next={fetchMoreData} hasMore={hasMore} loader={<h4>Loading...</h4>}>
      {videoList.map((item) => (
        <VideoSummaryItemCol
          key={item.videoId}
          videoId={item.videoId}
          thumbnail={item.thumbnail}
          videoTitle={item.videoTitle}
          channelProfileUrl={item.channelProfileUrl}
          channelName={item.channelName}
          readCnt={item.readCnt}
          createAt={item.createAt}
        />
      ))}
    </InfiniteScroll>
  );
}

export const getStaticProps = async (context: GetServerSidePropsContext) => {
  const res = await axios.get(`${BASE_URL}/read/video/category/${context.params?.catId}?page=1&pageSize=${PAGE_SIZE}`);
  const videos = res.data;
  return {
    props: {
      catId: context.params?.catId,
      videos,
    },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  const res = await axios.get(`${BASE_URL}/read/video/category`);
  const paths = res.data.map((category: CategoryType) => ({
    params: { catId: category.categoryNameId },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};
