import PropTypes from 'prop-types';

const SingleView = ({item, setSelectedItem}) => {
  const isImage = item.media_type.startsWith('image/');
  const isVideo = item.media_type.startsWith('video/');

  return (
    <dialog
      className="single-view"
      open={Boolean(item)}
      aria-labelledby="single-view-title"
    >
      <div className="single-view-header">
        <div>
          <h3 id="single-view-title">{item.title}</h3>
          {item.description && <p>{item.description}</p>}
        </div>
        <button
          className="single-view-close"
          type="button"
          onClick={() => setSelectedItem(null)}
        >
          Close
        </button>
      </div>
      <div className="single-view-content">
        {isImage && <img src={item.filename} alt={item.title} />}
        {isVideo && <video src={item.filename} controls />}
        {!isImage && !isVideo && (
          <p>Preview is not available for this media type.</p>
        )}
      </div>
    </dialog>
  );
};

SingleView.propTypes = {
  item: PropTypes.shape({
    filename: PropTypes.string.isRequired,
    media_type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  setSelectedItem: PropTypes.func.isRequired,
};

export default SingleView;
