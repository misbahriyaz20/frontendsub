import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Customer } from '../types/customer';
import styles from '../styles/details.module.css';

const unsplashAccessKey = 'UNSPLASH_API_KEY';
const topics = ['nature', 'office', 'Montreal', 'animals']; // Array of topics

type CustomerDetailsProps = {
  customer: Customer | null;
};

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0); // Index to keep track of the current topic

  useEffect(() => {
    const fetchPhotos = async (topic: string) => {
      try {
        const response = await axios.get(`https://api.unsplash.com/topics/${topic}/photos`, {
          params: {
            client_id: unsplashAccessKey,
            per_page: 9,
          },
        });
        setPhotos(response.data.map((photo: any) => photo.urls.regular));
      } catch (error) {
        console.error('Error fetching photos:', error);
        setPhotos(new Array(9).fill('https://via.placeholder.com/150'));
      }
    };

    // Fetch photos for the current topic
    if (customer) {
      fetchPhotos(topics[currentTopicIndex]);
    }

    // Set interval for changing the topic every 10 seconds
    const topicChangeInterval = setInterval(() => {
      setCurrentTopicIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % topics.length;
        fetchPhotos(topics[nextIndex]); // Fetch new photos when topic changes
        return nextIndex;
      });
    }, 10000);

    // Clear interval on component unmount
    return () => {
      clearInterval(topicChangeInterval);
    };
  }, [customer]); // Dependency array includes customer

  if (!customer) return <div>Select a customer</div>;

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.textContainer}>
        <h2>{`${customer.name} details here`}</h2>
        <p>{customer.desc}</p>
      </div>
      <div className={styles.pictureGrid}>
        {photos.map((photoUrl, index) => (
          <div key={index} className={styles.photoItem}>
            <img src={photoUrl} alt={`Customer ${customer?.name} photo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerDetails;
