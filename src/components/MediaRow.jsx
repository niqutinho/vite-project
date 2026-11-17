import PropTypes from 'prop-types';

const MediaRow = ({item, selectedItem, setSelectedItem}) => {
  return (
    <tr>
      <td>
        <button
          className="media-select-button"
          type="button"
          aria-label={`View ${item.title}`}
          aria-pressed={selectedItem?.media_id === item.media_id}
          onClick={() => setSelectedItem(item)}
        >
          <img
            className="media-thumbnail"
            src={item.thumbnail}
            alt={item.title}
          />
        </button>
      </td>
      <td>
        <button
          className="media-title-button"
          type="button"
          aria-pressed={selectedItem?.media_id === item.media_id}
          onClick={() => setSelectedItem(item)}
        >
          {item.title}
        </button>
      </td>
      <td>{item.description}</td>
      <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>
    </tr>
  );
};

MediaRow.propTypes = {
  item: PropTypes.shape({
    media_id: PropTypes.number.isRequired,
    user_id: PropTypes.number.isRequired,
    filename: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    filesize: PropTypes.number.isRequired,
    media_type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
  selectedItem: PropTypes.shape({
    media_id: PropTypes.number.isRequired,
  }),
  setSelectedItem: PropTypes.func.isRequired,
};

export default MediaRow;
