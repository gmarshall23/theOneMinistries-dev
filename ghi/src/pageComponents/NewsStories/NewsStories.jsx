import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Row, Col } from 'react-bootstrap';

const NewsStories = () => {
  const [stories, setStories] = useState([]);
  const fetchNewsFromFile = async () => {
    axios.get('http://localhost:4040/get_news_file')
    .then(response => {
      // console.log('stories to fill:', response.data);
      setStories(response.data);
    })
    .catch(error => {
      console.error("Error fetching news from file:", error);
    });
  }

  useEffect(() => {
    // const fetchNews = async () => {
    //   const options = {
    //     method: 'GET',
    //     url: 'https://google-news13.p.rapidapi.com/world',
    //     params: { lr: 'en-US' },
    //     headers: {
    //       'x-rapidapi-host': 'google-news13.p.rapidapi.com',
    //       // Your API key is now securely accessed from the .env file
    //       'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY
    //     }
    //   };

    //   try {
    //     const response = await axios.request(options);
    //     // Get the first 5 news items from the response
    //     setStories(response.data.items.slice(0, 10));
    //   } catch (error) {
    //     console.error("Error fetching news:", error);
    //   }
    // };

    // fetchNews();
    fetchNewsFromFile();
  }, []); // The empty dependency array ensures this effect runs only once on mount

  return (
    <div className="container mt-4">
    <main>
      <h2 className="text-center mb-4">World News</h2>
      <Row>
        {stories.map((story, index) => (
          <Col key={index} md={4} className="mb-4 d-flex align-items-stretch">
            <Card>
              <Card.Img
                variant="top"
                src={story.images.thumbnailProxied}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{story.title}</Card.Title>
                <Card.Text>{story.snippet}</Card.Text>
                <Button variant="primary" href={story.newsUrl} target="_blank" rel="noopener noreferrer" className="mt-auto">
                  Read More
                </Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Source: {story.source}</small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
      </main>
    </div>
  );
};

export default NewsStories
