
var App = React.createClass({
  render: function() {
    return (
      <div className="main-app">
        <NavBar />
        <MyHeader />
        <Bio />
        <TwitderPro />
        <Spotz />
        <DiYelpin />
      </div>
    )
  }
})

var NavBar = React.createClass({
  render: function () {
    return (<div className="nav-info">Raphael Baskerville
        <span className="contact-info email">@: raphael.baskerville@gmail.com</span>
        <span className="contact-info github"><a href="https://github.com/RaphaelBaskerville">GitHub</a></span>
        <span className="contact-info linkedin"><a href="https://www.linkedin.com/in/raphaelbaskerville">LinkedIn</a></span>
        </div>)
  }
})

var MyHeader = React.createClass({
  render: function () {
    return (
      <div>
        <img className="portfolio-back" src="http://www.public-domain-image.com/free-images/wallpapers/blue-background.jpg"></img>
        <img className="profile-image" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAltAAAAJDVmNGNhMzQyLTYyYmEtNGZiZS04NTgyLTc4YWZiZmZmNDE3MA.jpg"></img>
      </div>
    )
  }
})

var Bio = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Bio</h2>
        <p className="bio">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus justo, laoreet sit amet euismod at, vehicula non velit. Suspendisse potenti. Pellentesque feugiat sagittis cursus. Nam ultricies fermentum sodales. Etiam egestas non nisl ac vehicula. Cras id vulputate lacus. Morbi laoreet erat vitae diam tempor, eget consequat nunc venenatis. Aenean bibendum ex sed diam convallis cursus. Morbi suscipit quam vel ex pretium faucibus et et urna. Nullam congue metus erat, sed facilisis elit interdum id. Praesent nec suscipit est. Curabitur ut eros rutrum lacus sagittis ullamcorper iaculis et eros. In hac habitasse platea dictumst. Praesent eros nunc, sagittis eget libero a, pretium aliquet diam.
        </p>
      </div>
    )
  }
})

var TwitderPro = React.createClass({
  render:function () {
    return (
      <div>
        <h2>TwiDerPro</h2>
        <img className= "project-image" src="images/twiderpro.jpg"/>
        <h4> Description </h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus justo, laoreet sit amet euismod at, vehicula non velit. Suspendisse potenti. Pellentesque feugiat sagittis cursus. Nam ultricies fermentum sodales.</p>
      </div>
    )
  }
})

var Spotz = React.createClass({
  render:function () {
    return (
      <div>
        <h2>Spotz</h2>
        <img className= "project-image" src="images/spotz.jpg"/>
        <h4> Description </h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus justo, laoreet sit amet euismod at, vehicula non velit. Suspendisse potenti. Pellentesque feugiat sagittis cursus. Nam ultricies fermentum sodales.</p>
      </div>
    )
  }
})

var DiYelpin = React.createClass({
  render:function () {
    return (
      <div>
        <h2>DiYelpin</h2>
        <img className= "project-image" src="images/diyelpin.png"/>
        <h4> Description </h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus justo, laoreet sit amet euismod at, vehicula non velit. Suspendisse potenti. Pellentesque feugiat sagittis cursus. Nam ultricies fermentum sodales.</p>
      </div>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
