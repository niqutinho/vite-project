import {useLocation, useNavigate} from 'react-router';

const Single = () => {
  const {state: item} = useLocation();
  const navigate = useNavigate();

  if (!item) {
    return (
      <section>
        <h2>No media selected</h2>
        <button type="button" onClick={() => navigate('/')}>
          Back to media
        </button>
      </section>
    );
  }

  const isImage = item.media_type.startsWith('image/');
  const isVideo = item.media_type.startsWith('video/');

  return (
    <section className="single-view">
      <div className="single-view-header">
        <div>
          <h2>{item.title}</h2>
          <p>Owner: {item.username}</p>
          {item.description && <p>{item.description}</p>}
        </div>
        <button
          className="single-view-close"
          type="button"
          onClick={() => navigate(-1)}
        >
          Go back
        </button>
      </div>
      <div className="single-view-content">
        {isImage && <img src={item.filename} alt={item.title} />}
        {isVideo && <video src={item.filename} controls />}
        {!isImage && !isVideo && (
          <p>Preview is not available for this media type.</p>
        )}
      </div>
    </section>
  );
};

export default Single;
