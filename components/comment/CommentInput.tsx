import { useRef } from 'react';
import Title from '../ui/Title';
import Avatar from '../ui/Avatar';

/**
 * 댓글 입력 컴포넌트입니다.
 */

export default function CommentInput() {
  const textarea = useRef<HTMLTextAreaElement>(null);
  const handleResizeHeight = () => {
    if (textarea.current === null) return;
    textarea.current.style.height = 'auto';
    textarea.current.style.height = `${textarea.current.scrollHeight}px`;
  };

  return (
    <>
      <div className='mx-1 pb-3 border-b-2'>
        <Title text='댓글' />
      </div>
      <div className='flex w-full py-3 items-center'>
        <Avatar width={10} marginX={3} />
        <div className='grow'>
          <textarea
            rows={1}
            placeholder='댓글 입력'
            ref={textarea}
            onChange={handleResizeHeight}
            className='input input-bordered input-primary rounded-md w-full resize-none h-12 p-2 '
          />
        </div>
        <button type='button' className='btn mx-3 btn-outline btn-primary'>
          등록
        </button>
      </div>
    </>
  );
}
