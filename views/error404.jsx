const React = require('react')
const Def = require('./default')

function error404() {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p>Oops, sorry, we can't find this page!</p>
        <div>
          <img src="/images/dog-with-sunglasses.jpg" alt="Dog With Sunglasses" />
          <div>
            Photo by <a href="https://unsplash.com/@alanking?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">alan King</a> on <a href="https://unsplash.com/s/photos/fun?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </div>
        </div>
        <a href="/places">
          <button className="btn-primary">Error Page</button>
        </a>
      </main>
    </Def>
  )
}


module.exports = error404
