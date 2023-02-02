<<<<<<< HEAD
import React from 'react';


const ReviewCard = () => {



=======
import React, { useState } from 'react';


const ReviewCard = ({review}) => {


  var date = review.date.split('T')[0];
  // console.log('REVIEW FROM REVIEW CARD', review,date)
  var recText = '';
  if (review.recommend) {
   recText = "✔️ I recommend this product"
  }

  var reviewPhotos = review.photos.map(photo => {
    return <img src={photo.url} height="34" />
  })

  var starMap = [];
 for (var i = 1; i <= 5; i++) {
  if (review.rating >= i) {
    starMap.push(<i className="fa-solid fa-star"></i>)
  } else {
    starMap.push(<i className="fa-regular fa-star"></i>)
  }
 }
  // console.log('STARMAP', starMap, review.response);
return (

  <div className="reviewBox">
    <div className="reviewStars">{starMap}</div>
    <div className="reviewNameDate">{review.reviewer_name},  {date}</div>
    <strong className="reviewSummary">{review.summary}</strong>
    <div>{review.body}</div>
    <div>{recText}</div>
    <div>{review.response}</div>
    <div>{reviewPhotos}</div>
    <div>Helpfulness Ratings bottom left</div>
  </div>
)
>>>>>>> master
}


export default ReviewCard;


// Star Rating -
// Date of review - The date the review was written should appear in the format “Month DD, YYYY”
// Review Summary -
// Review Body -
// Recommend -
// Reviewer name -
// Response to Review -
// Rating Helpfulness -
