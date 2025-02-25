import React, { useState, useEffect } from 'react';
import Topic from '../Topic/Topic';
import axios from 'axios';
import { Link } from 'react-router-dom';

function QuestionList() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8081/sub')
      .then(res => {
        console.log('Data fetched successfully:', res.data);
        setData(res.data);
      })
      .catch(err => console.error('Error fetching data:', err));
  });

  return (
    <div>
      <Topic />
      <main>
        {data ? (
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                <Link to={`/question/${item.id}`}>
                  {`${item.id}. ${item.question}`}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </div>
  );
}

export default QuestionList;
