import PropTypes from 'prop-types';
import {Link} from 'react-router';

const MediaRow = ({item}) => {
  return (
    <tr>
      <td>
        <Link
          className="media-select-link"
          to="/single"
          state={item}
          aria-label={`View ${item.title}`}
        >
          <img
            className="media-thumbnail"
            src={item.thumbnail}
            alt={item.title}
          />
        </Link>
      </td>
      <td>
        <Link className="media-title-link" to="/single" state={item}>
          {item.title}
        </Link>
      </td>
      <td>{item.username}</td>
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
    username: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
};

export default MediaRow;
