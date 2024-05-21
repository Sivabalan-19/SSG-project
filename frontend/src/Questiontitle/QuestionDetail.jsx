import React, { useEffect, useState,useMemo } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function QuestionDetail() {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);
  const [error, setError] = useState(null);
  console.log(id)
  useMemo(() => {
    axios.post(`http://localhost:8081/desc`, {
      index: { id }
      
    })
      .then(res => {
        console.log('Question detail fetched successfully:', res.data.message[0].descr);
      
        setQuestion(res.data.message[0].descr);
      })
      .catch(err => {
        console.error('Error fetching question detail:', err);
        setError(err);
      });
  });

  if (error) {
    return <div>Error fetching question detail.</div>;
  }

  if (!question) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Question Detail</h1>
    <p>{question}</p>
    </div>
  );
}

export default QuestionDetail;
