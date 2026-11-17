import {useEffect, useState} from 'react';
import MediaRow from '../components/MediaRow';
import {fetchData} from '../utils/fetchData';

const Home = () => {
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    const getMedia = async () => {
      try {
        const media = await fetchData(
          `${import.meta.env.VITE_MEDIA_API}/media`,
        );
        const mediaWithUsernames = await Promise.all(
          media.map(async (item) => {
            const user = await fetchData(
              `${import.meta.env.VITE_AUTH_API}/users/${item.user_id}`,
            );
            return {...item, username: user.username};
          }),
        );

        setMediaArray(mediaWithUsernames);
        if (import.meta.env.DEV) {
          console.log(mediaWithUsernames);
        }
      } catch (error) {
        console.error('Failed to fetch media:', error);
      }
    };

    getMedia();
  }, []);

  return (
    <section>
      <h2>My Media</h2>
      <div className="media-table-container">
        <table className="media-table">
          <thead>
            <tr>
              <th scope="col">Thumbnail</th>
              <th scope="col">Title</th>
              <th scope="col">Username</th>
              <th scope="col">Description</th>
              <th scope="col">Created</th>
              <th scope="col">Size</th>
              <th scope="col">Type</th>
            </tr>
          </thead>
          <tbody>
            {mediaArray.map((item) => (
              <MediaRow key={item.media_id} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Home;
