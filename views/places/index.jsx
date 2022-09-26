const React = require('react')

function Def(html) {
    return (
        <html>
            <head>
                <title>Title</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def

function index (data) {
  let placesFormatted = data.places.map((place) => {
    return (
      <div>
        <h2>{place.name}</h2>
        <img src={place.pic} alt={place.name}/>
      </div>
    )
  })
  return (
    <Def>
        <main>
            <h1>PLACES INDEX PAGE</h1>
            {placesFormatted}
        </main>
    </Def>
)
}
