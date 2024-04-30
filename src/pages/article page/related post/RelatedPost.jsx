import "./RelatedPost.css";
import post from "../../../assets/images/article/post.png";
const RelatedPost = () => {
  return (
    <div className="related-post-main">
      <div className=" d-flex  justify-content-between py-3 ">
        <h1>
          Related <span className="span-green">Posts</span>
        </h1>
        <div className="icons-box d-none  d-sm-flex ">
          <div className="next">
            <i className="fa-solid fa-angle-left"></i>
          </div>
          <div className="prev">
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </div>
      </div>

      <div className="post-box-main d-flex row m-0 p-0 ">
      <div className=" post-box col-12 col-md-6  ">
          <img src={post} alt="" />
          <h1>The Benefits of Getting Online Marriage Counseling</h1>
          <div className="last d-flex flex-wrap gap-2">
            <p>Marriage counseling</p>
            <p>Therapy</p>
            <p>Online</p>
          </div>
        </div>
        <div className=" post-box col-12 col-md-6  ">
          <img src={post} alt="" />
          <h1>The Benefits of Getting Online Marriage Counseling</h1>
          <div className="last d-flex flex-wrap gap-2">
            <p>Marriage counseling</p>
            <p>Therapy</p>
            <p>Online</p>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default RelatedPost;
