
// Header

let header =
    `
    <div id = 'navbar'>

    <a href = '#'>
        <div id = 'mast'>
            <img src = 'assets/busg.jpg' alt = 'logo'>
        </div>
    </a>

    <div id = 'nav'>
        <a href = '#'>
            <h2 class = 'navbtn'>
                Home
            </h2>
        </a>
        <a href = '#about'>
            <h2 class = 'navbtn'>
                About Us
            </h2>
        </a>
        <a href = '#upcoming'>
            <h2 class = 'navbtn'>
                Upcoming Events
            </h2>
        </a>
        <a href = '#archive'>
            <h2 class = 'navbtn'>
                Past Events
            </h2>
        </a>
        <a href = '#contact'>
            <h2 class = 'navbtn'>
                Contact
            </h2>
        </a>
    </div>

    <div id = 'bars'>
        <div class = 'bar one'>
        </div>
        <div class = 'bar two'>
        </div>
    </div>
</div>

`
document.body.innerHTML = header + document.body.innerHTML


// Events

for (let i = 0; i < Events.length; i++){
    let e = Events[i]


    let div =
    `
    <div class = 'event'>
        <img src = 'assets/${e.img}' alt = 'poster'>
    </div>
    `

    if (e.upcoming) {
        Id('upcoming').innerHTML += div
    } else {
        Id('past').innerHTML += div
    }
}

for (let i = 0; i < Class('event').length; i++) {

    let e = Class('event')[i]

    e.onclick = () => {
        Id('expanded').src = 'assets/' + Events[i].img
        Id('overlay').classList.add('active')
    }
}

// Overlay

Id('overlay').onclick = () => {
    Id('overlay').classList.remove('active')
}


// Mobile Navigation

const bars = Id('bars'),
    nav = Id('nav')


bars.onclick = () => {
    bars.classList.toggle('active')
    nav.classList.toggle('active')
}

for (let i = 0; i < Class('navbtn').length; i++){
    let navbtn = Class('navbtn')[i]
    navbtn.onclick = () => {
        bars.classList.toggle('active')
    nav.classList.toggle('active')
    }
}

var userFeed = new Instafeed({   
    get: 'user',
    target: "instafeed-container",
    resolution: 'high_resolution',
    https:true,
    after: function() {
      $(".regular").slick({
            dots: false,
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            variableWidth: true,
            responsive: [
           
            {
            breakpoint: 911,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            
            variableWidth: true
    
            }
            },
            {
            breakpoint: 680,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '0vw',
            variableWidth: true
            
            }
             }
            ],
    });
  
    },
    template:	'<div class="insta slick-track"><a href="{{link}}" target="_blank"><img class="insta" title="{{caption}}" src="{{image}}" /></a></div>',
    accessToken: 'IGQVJVbXBpSHRhcmQzcGs5enY2T1F4MXJhMm5aTFNxdW1TaFU4Wm81ckx4M1dWaXQ3MkpkNGduaHhfcnFKSVZAHelV4ZA1p3V1hPT3J0dzYzc21fSHBtVGVzT2FIbXp0QkhzOUpwZAEtkSFZAQUlBuMUppWgZDZD',
  });
  userFeed.run();