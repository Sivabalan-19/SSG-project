import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function QuestionDetail() {
  const { index } = useParams();
  const [question, setQuestion] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8081/desc`, {
      params: { index } // Assuming your backend expects an index parameter
    })
      .then(res => {
        console.log('Question detail fetched successfully:', res.data);
        setQuestion(res.data);
      })
      .catch(err => {
        console.error('Error fetching question detail:', err);
        setError(err);
      });
  }, [index]);

  if (error) {
    return <div>Error fetching question detail.</div>;
  }

  if (!question) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Question Detail</h1>
      <p>{question[0].descr}</p> {/* Ensure question data structure matches */}
    </div>
  );
}

export default QuestionDetail;
