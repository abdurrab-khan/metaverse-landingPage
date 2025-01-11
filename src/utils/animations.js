export const imageAnimationLeft = {
    offScreen: {
        left: -300,
        rotate: -90,
        opacity: 0,
    },
    onScreen: {
        left: 0,
        rotate: 0,
        opacity: 1,
        transition: {
            duration: 0.4,
            delay:0.3
        }
    }
}

export const imageAnimationRight = {
    offScreen: {
        left: 300,
        rotate: 90,
        opacity: 0,
    },
    onScreen: {
        left: 0,
        rotate: 0,
        opacity: 1,
        transition: {
            duration: 0.4,
            delay:0.3
        }
    }
}