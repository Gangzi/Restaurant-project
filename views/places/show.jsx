const React = require('react')
const Def = require('../default')

function show(data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  let rating = (
    <h3 className="inactive">
      Not yet rated
    </h3>
  )
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = Math.round(sumRatings / data.place.comments.length)
    let stars = ''
    for (let i = 0; i < averageRating; i++) {
      stars += '⭐️';
    }
  
    rating = (
      <h3>
        {stars} stars
      </h3>
    )
  }
  return (
    <Def>
      <main>
        <div className="row">
          ...
        </div>
        <hr />
        <h2>Comments</h2>
        {comments}
      </main>
    </Def>
  )
}

module.exports = show


//BEFORE COMMENT
// function show(data) {
//   return (
//     <Def>
//       <main>
//         <h1>{data.place.name}</h1>
//         <a href={`/places/${data.id}/edit`} className="btn btn-warning">
//           Edit
//         </a>

//         <div>
//           <h2>Rating</h2>
//           <h3>Not Rated</h3>
//         </div>

//         <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
//           <button type="submit" className="btn btn-danger">
//             Delete
//           </button>
//         </form>



//       </main>
//     </Def>
//   )
// }

// module.exports = show
