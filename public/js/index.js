// document.querySelector('.comment-form').addEventListener('submit', async (event) => {
//   event.preventDefault() // Prevent default form submission

//   const formData = new FormData(event.target)
//   const formDataObject = {}
//   formData.forEach((value, key) => {
//     formDataObject[key] = value
//   });

//   try {
//     // Send AJAX POST request to submit the comment
//     const response = await fetch('/comment', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formDataObject),
//     })

//     if (response.ok) {
//       // Upon successful response, update the DOM with the new comment
//       const newCommentData = await response.json()
//       const commentsContainer = document.querySelector('.comments-container')

//       // Create HTML for the new comment
//       const newCommentHTML = `
//         <div class="m-3">
//           <p class="card-text">${newCommentData.comment}</p>
//           <p class="card-text">-${newCommentData.user.username} ${newCommentData.createdAt}</p>
//         </div>
//       `;

//       // Append the new comment HTML to the comments container
//       commentsContainer.insertAdjacentHTML('beforeend', newCommentHTML)
//     } else {
//       console.error('Failed to submit comment')
//     }
//   } catch (error) {
//     console.error('Error submitting comment', error)
//   }
// })