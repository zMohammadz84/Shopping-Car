import StarRatingCustomize from "@/components/common/StarRatingCustomize";
import Image from "next/image";

const Comment = ({ comments }) => {
  return (
    <>
      {comments?.map((comment, index) => (
        <div key={index} className="">
          <header className="flex justify-between items-center">
            <Image
              src={comment.image}
              width={100}
              height={100}
              alt="profile"
              className="w-12 h-12"
            />
            <div className="flex flex-col gap-1 flex-1 ml-2">
              <h4>{comment.name}</h4>
              <span className="text-primary-400 text-xs">
                {comment.occupation}
              </span>
            </div>
            <div className="flex flex-col text-right">
              <span className="text-sm">{comment.date}</span>
              <StarRatingCustomize rating={comment.rating} size="12px" />
            </div>
          </header>
          <main className="pl-14 mt-5 lg:mt-2.5">
            <p>{comment.comment}</p>
          </main>
        </div>
      ))}
    </>
  );
};

export default Comment;
