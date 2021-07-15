var body = document.querySelector("body").style
var piece = document.querySelector(".piece")
var leftbutton = document.querySelector(".LEFT")
var rightbutton = document.querySelector(".RIGHT")
var randoml, randomt, flag = 0
addEventListener("keydown", () => {
    var key = event.key
    if (key == "ArrowLeft" && flag === 0) {
        if (pieceleft - 25 < -1)
            piece.style.left = -1
        else {
            pieceleft = pieceleft - 25
            piece.style.left = pieceleft
        }
    }
    else if (key == "ArrowRight" && flag === 0) {
        if (pieceleft + 25 > 855)
            piece.style.left = 855
        else {
            pieceleft = pieceleft + 25
            piece.style.left = pieceleft
        }
    }
})
leftbutton.addEventListener("mousedown", () => {
    if (flag === 0) {
        if (pieceleft - 25 < -1)
            piece.style.left = -1
        else {
            pieceleft = pieceleft - 25
            piece.style.left = pieceleft
        }
    }
})
rightbutton.addEventListener("mousedown", () => {
    if (flag === 0) {
        if (pieceleft + 25 > 855)
            piece.style.left = 855
        else {
            pieceleft = pieceleft + 25
            piece.style.left = pieceleft
        }
    }
})
function randomleft() {
    var random = Math.floor(Math.random() * 1000)
    if (random < 100)
        randoml = random + 100
    else if (random > 700)
        randoml = random - 300
    else
        randoml = random
}
randomleft()
function randomtop() {
    var random = Math.floor(Math.random() * 1000)
    if (random < 100)
        randomt = random + 100
    else if (random > 200) {
        var first = Math.floor(random / 100)
        random = random - first * 100
        randomt = 100 + random
    }
    else
        randomt = random
}
randomtop()

var currentleft = randoml, currenttop = randomt, collisionleft, collisiontop, pieceleft = randoml
var ball = document.querySelector(".ball").style
piece.style.left = randoml
function start() {
    function right() {
        currentleft = currentleft - 2
        currenttop = currenttop + 1
        ball.left = currentleft
        ball.top = currenttop
        collisionleft = currentleft - 2
        collisiontop = currenttop + 1
        if (collisionleft < -0.5 || collisionleft == 0.5) {
            clearInterval(time)
            leftcollision(currentleft, currenttop, collisionleft, collisiontop)
        }
        else if (collisiontop < -1 || collisiontop == -1) {
            clearInterval(time)
            topcollision(currentleft, currenttop, collisionleft, collisiontop)
        }
        else if (collisionleft > 883 || collisionleft == 883) {
            clearInterval(time)
            rightcollision(currentleft, currenttop, collisionleft, collisiontop)
        }
        else if (pieceleft <= collisionleft + 15 && collisionleft - 43 <= pieceleft && (collisiontop > 480 || collisiontop == 480)) {
            clearInterval(time)
            bottomcollision(currentleft, currenttop, collisionleft, collisiontop)
        }
        else if (collisiontop > 481) {
            clearInterval(time)
            ball.left = collisionleft
            ball.top = 482
            body.backgroundImage = "url('gamebg2.png')"
            body.backgroundRepeat = "no-repeat"
            body.backgroundSize = "cover"
            flag = 1
        }
    }
    var time = setInterval(right, 10)
}


start()


function rightcollision(currentleft, currenttop, collisionleft, collisiontop) {
    if (collisiontop - currenttop > 0) {
        if (479 - currenttop < 4) {
            ball.left = currentleft - 2
            ball.top = 479
            currentleft = currentleft - 2
            currenttop = 479
            bottomcollision(currentleft, currenttop, currentleft - 2, currenttop + 1)
        }
        else {
            function right() {
                currentleft = currentleft - 2
                currenttop = currenttop + 1
                ball.left = currentleft
                ball.top = currenttop
                collisionleft = currentleft - 2
                collisiontop = currenttop + 1
                if (collisionleft < -0.5 || collisionleft == 0.5) {
                    clearInterval(time)
                    leftcollision(currentleft, currenttop, collisionleft, collisiontop)
                }
                else if (collisiontop < -1 || collisiontop == -1) {
                    clearInterval(time)
                    topcollision(currentleft, currenttop, collisionleft, collisiontop)
                }
                else if (collisionleft > 883 || collisionleft == 883) {
                    clearInterval(time)
                    rightcollision(currentleft, currenttop, collisionleft, collisiontop)
                }
                else if (pieceleft <= collisionleft + 15 && collisionleft - 43 <= pieceleft && (collisiontop > 480 || collisiontop == 480)) {
                    clearInterval(time)
                    bottomcollision(currentleft, currenttop, collisionleft, collisiontop)
                }
                else if (collisiontop > 481) {
                    clearInterval(time)
                    ball.left = collisionleft
                    ball.top = 482
                    body.backgroundImage = "url('gamebg2.png')"
                    body.backgroundRepeat = "no-repeat"
                    body.backgroundSize = "cover"
                    flag = 1
                }
            }
            var time = setInterval(right, 10)
        }
    }
    else {
        if (currenttop - 0 < 4) {
            ball.left = currentleft - 2
            ball.top = 0
            currentleft = currentleft - 2
            currenttop = 0
            topcollision(currentleft, currenttop, currentleft - 2, currenttop - 1)
        }
        else {
            function right() {
                currentleft = currentleft - 2
                currenttop = currenttop - 1
                ball.left = currentleft
                ball.top = currenttop
                collisionleft = currentleft - 2
                collisiontop = currenttop - 1
                if (collisionleft < -0.5 || collisionleft == 0.5) {
                    clearInterval(time)
                    leftcollision(currentleft, currenttop, collisionleft, collisiontop)
                }
                else if (collisiontop < -1 || collisiontop == -1) {
                    clearInterval(time)
                    topcollision(currentleft, currenttop, collisionleft, collisiontop)
                }
                else if (collisionleft > 883 || collisionleft == 883) {
                    clearInterval(time)
                    rightcollision(currentleft, currenttop, collisionleft, collisiontop)
                }
                else if (pieceleft <= collisionleft + 15 && collisionleft - 43 <= pieceleft && (collisiontop > 480 || collisiontop == 480)) {
                    clearInterval(time)
                    bottomcollision(currentleft, currenttop, collisionleft, collisiontop)
                }
                else if (collisiontop > 481) {
                    clearInterval(time)
                    ball.left = collisionleft
                    ball.top = 482
                    body.backgroundImage = "url('gamebg2.png')"
                    body.backgroundRepeat = "no-repeat"
                    body.backgroundSize = "cover"
                    flag = 1
                }
            }
            var time = setInterval(right, 10)
        }
    }
}
function leftcollision(currentleft, currenttop, collisionleft, collisiontop) {
    if (collisiontop - currenttop > 0) {
        if (479 - currenttop < 4) {
            ball.left = currentleft + 2
            ball.top = 479
            currentleft = currentleft + 2
            currenttop = 479
            bottomcollision(currentleft, currenttop, currentleft + 2, currenttop + 1)
        }
        else {
            function left() {
                currentleft = currentleft + 2
                currenttop = currenttop + 1
                ball.left = currentleft
                ball.top = currenttop
                collisionleft = currentleft + 2
                collisiontop = currenttop + 1
                if (collisionleft < -0.5 || collisionleft == 0.5) {
                    clearInterval(time)
                    leftcollision(currentleft, currenttop, collisionleft, collisiontop)
                }
                else if (collisiontop < -1 || collisiontop == -1) {
                    clearInterval(time)
                    topcollision(currentleft, currenttop, collisionleft, collisiontop)
                }
                else if (collisionleft > 883 || collisionleft == 883) {
                    clearInterval(time)
                    rightcollision(currentleft, currenttop, collisionleft, collisiontop)
                }
                else if (pieceleft <= collisionleft + 15 && collisionleft - 43 <= pieceleft && (collisiontop > 480 || collisiontop == 480)) {
                    clearInterval(time)
                    bottomcollision(currentleft, currenttop, collisionleft, collisiontop)
                }
                else if (collisiontop > 481) {
                    clearInterval(time)
                    ball.left = collisionleft
                    ball.top = 482
                    body.backgroundImage = "url('gamebg2.png')"
                    body.backgroundRepeat = "no-repeat"
                    body.backgroundSize = "cover"
                    flag = 1
                }
            }
            var time = setInterval(left, 10)
        }
    }
    else {
        if (currenttop - 0 < 4) {
            ball.left = currentleft + 2
            ball.top = 0
            currentleft = currentleft + 2
            currenttop = 0
            topcollision(currentleft, currenttop, currentleft + 2, currenttop - 1)
        }
        else {
            function left() {
                currentleft = currentleft + 2
                currenttop = currenttop - 1
                ball.left = currentleft
                ball.top = currenttop
                collisionleft = currentleft + 2
                collisiontop = currenttop - 1
                if (collisionleft < -0.5 || collisionleft == 0.5) {
                    clearInterval(time)
                    leftcollision(currentleft, currenttop, collisionleft, collisiontop)
                }
                else if (collisiontop < -1 || collisiontop == -1) {
                    clearInterval(time)
                    topcollision(currentleft, currenttop, collisionleft, collisiontop)
                }
                else if (collisionleft > 883 || collisionleft == 883) {
                    clearInterval(time)
                    rightcollision(currentleft, currenttop, collisionleft, collisiontop)
                }
                else if (pieceleft <= collisionleft + 15 && collisionleft - 43 <= pieceleft && (collisiontop > 480 || collisiontop == 480)) {
                    clearInterval(time)
                    bottomcollision(currentleft, currenttop, collisionleft, collisiontop)
                }
                else if (collisiontop > 481) {
                    clearInterval(time)
                    ball.left = collisionleft
                    ball.top = 482
                    body.backgroundImage = "url('gamebg2.png')"
                    body.backgroundRepeat = "no-repeat"
                    body.backgroundSize = "cover"
                    flag = 1
                }
            }
            var time = setInterval(left, 10)
        }
    }
}
function topcollision(currentleft, currenttop, collisionleft, collisiontop) {
    if (collisionleft - currentleft > 0) {
        if (882 - currentleft < 4) {
            ball.left = 882
            ball.top = currenttop + 1
            currentleft = 882
            currenttop = currenttop + 1
            rightcollision(currentleft, currenttop, currentleft + 2, currenttop + 1)
        }
        else {
            function top() {
                currentleft = currentleft + 2
                currenttop = currenttop + 1
                ball.left = currentleft
                ball.top = currenttop
                collisionleft = currentleft + 2
                collisiontop = currenttop + 1
                if (collisionleft < -0.5 || collisionleft == 0.5) {
                    clearInterval(time)
                    leftcollision(currentleft, currenttop, collisionleft, collisiontop)
                }
                else if (collisiontop < -1 || collisiontop == -1) {
                    clearInterval(time)
                    topcollision(currentleft, currenttop, collisionleft, collisiontop)
                }
                else if (collisionleft > 883 || collisionleft == 883) {
                    clearInterval(time)
                    rightcollision(currentleft, currenttop, collisionleft, collisiontop)
                }
                else if (pieceleft <= collisionleft + 15 && collisionleft - 43 <= pieceleft && (collisiontop > 480 || collisiontop == 480)) {
                    clearInterval(time)
                    bottomcollision(currentleft, currenttop, collisionleft, collisiontop)
                }
                else if (collisiontop > 481) {
                    clearInterval(time)
                    ball.left = collisionleft
                    ball.top = 482
                    body.backgroundImage = "url('gamebg2.png')"
                    body.backgroundRepeat = "no-repeat"
                    body.backgroundSize = "cover"
                    flag = 1
                }
            }
            var time = setInterval(top, 10)
        }
    }
    else {
        if (currentleft - 0 < 4) {
            ball.left = 0
            ball.top = currenttop + 1
            currentleft = 0
            currenttop = currenttop + 1
            leftcollision(currentleft, currenttop, currentleft - 2, currenttop + 1)
        }
        else {
            function top() {
                currentleft = currentleft - 2
                currenttop = currenttop + 1
                ball.left = currentleft
                ball.top = currenttop
                collisionleft = currentleft - 2
                collisiontop = currenttop + 1
                if (collisionleft < -0.5 || collisionleft == 0.5) {
                    clearInterval(time)
                    leftcollision(currentleft, currenttop, collisionleft, collisiontop)
                }
                else if (collisiontop < -1 || collisiontop == -1) {
                    clearInterval(time)
                    topcollision(currentleft, currenttop, collisionleft, collisiontop)
                }
                else if (collisionleft > 883 || collisionleft == 883) {
                    clearInterval(time)
                    rightcollision(currentleft, currenttop, collisionleft, collisiontop)
                }
                else if (pieceleft <= collisionleft + 15 && collisionleft - 43 <= pieceleft && (collisiontop > 480 || collisiontop == 480)) {
                    clearInterval(time)
                    bottomcollision(currentleft, currenttop, collisionleft, collisiontop)
                }
                else if (collisiontop > 481) {
                    clearInterval(time)
                    ball.left = collisionleft
                    ball.top = 482
                    body.backgroundImage = "url('gamebg2.png')"
                    body.backgroundRepeat = "no-repeat"
                    body.backgroundSize = "cover"
                    flag = 1
                }
            }
            var time = setInterval(top, 10)
        }
    }
}
function bottomcollision(currentleft, currenttop, collisionleft, collisiontop) {
    if (collisionleft - currentleft > 0) {
        if (882 - currentleft < 4) {
            ball.left = 882
            ball.top = currentop - 1
            currentleft = 882
            currenttop = currenttop - 1
            rightcollision(currentleft, currenttop, currentleft + 2, currenttop - 1)
        }
        else {
            function bottom() {
                currentleft = currentleft + 2
                currenttop = currenttop - 1
                ball.left = currentleft
                ball.top = currenttop
                collisionleft = currentleft + 2
                collisiontop = currenttop - 1
                if (collisionleft < -0.5 || collisionleft == 0.5) {
                    clearInterval(time)
                    leftcollision(currentleft, currenttop, collisionleft, collisiontop)
                }
                else if (collisiontop < -1 || collisiontop == -1) {
                    clearInterval(time)
                    topcollision(currentleft, currenttop, collisionleft, collisiontop)
                }
                else if (collisionleft > 883 || collisionleft == 883) {
                    clearInterval(time)
                    rightcollision(currentleft, currenttop, collisionleft, collisiontop)
                }
                else if (pieceleft <= collisionleft + 15 && collisionleft - 43 <= pieceleft && (collisiontop > 480 || collisiontop == 480)) {
                    clearInterval(time)
                    bottomcollision(currentleft, currenttop, collisionleft, collisiontop)
                }
                else if (collisiontop > 481) {
                    clearInterval(time)
                    ball.left = collisionleft
                    ball.top = 482
                    body.backgroundImage = "url('gamebg2.png')"
                    body.backgroundRepeat = "no-repeat"
                    body.backgroundSize = "cover"
                    flag = 1
                }
            }
            var time = setInterval(bottom, 10)
        }
    }
    else {
        if (currentleft - 0 < 4) {
            ball.left = 0
            ball.top = currenttop - 1
            currentleft = 0
            currenttop = currenttop - 1
            leftcollision(currentleft, currenttop, currentleft - 2, currenttop - 1)
        }
        else {
            function bottom() {
                currentleft = currentleft - 2
                currenttop = currenttop - 1
                ball.left = currentleft
                ball.top = currenttop
                collisionleft = currentleft - 2
                collisiontop = currenttop - 1
                if (collisionleft < -0.5 || collisionleft == 0.5) {
                    clearInterval(time)
                    leftcollision(currentleft, currenttop, collisionleft, collisiontop)
                }
                else if (collisiontop < -1 || collisiontop == -1) {
                    clearInterval(time)
                    topcollision(currentleft, currenttop, collisionleft, collisiontop)
                }
                else if (collisionleft > 883 || collisionleft == 883) {
                    clearInterval(time)
                    rightcollision(currentleft, currenttop, collisionleft, collisiontop)
                }
                else if (pieceleft <= collisionleft + 15 && collisionleft - 43 <= pieceleft && (collisiontop > 480 || collisiontop == 480)) {
                    clearInterval(time)
                    bottomcollision(currentleft, currenttop, collisionleft, collisiontop)
                }
                else if (collisiontop > 481) {
                    clearInterval(time)
                    ball.left = collisionleft
                    ball.top = 482
                    body.backgroundImage = "url('gamebg2.png')"
                    body.backgroundRepeat = "no-repeat"
                    body.backgroundSize = "cover"
                    flag = 1
                }
            }
            var time = setInterval(bottom, 10)
        }
    }
}
