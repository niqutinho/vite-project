import {useEffect, useState} from 'react';
import MediaRow from '../components/MediaRow';
import {fetchData} from '../utils/fetchData';

const Home = () => {
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    const getMedia = async () => {
      try {
        const json = await fetchData('test.json');
        setMediaArray(json);
        if (import.meta.env.DEV) {
          console.log(json);
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
