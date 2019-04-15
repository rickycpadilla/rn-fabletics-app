// @flow

import type { OnboardingScreenType } from '../../types'

export const onboardingScreenQuestions: Array<OnboardingScreenType> = [
    {
        question: "What's your favorite way to get fit?",
        options: [
            {
                type: 'yoga',
                imageUrl: "https://moadrupalweb.blob.core.windows.net/moadrupalweb/processed/4242_fabletics-small.jpg",
                name: 'Yoga'
            },
            {
                type: 'run',
                imageUrl: "https://www.worldipreview.com/media/image/maridav-shutterstock-com-running-.jpg",
                name: 'Run'
            },
            {
                type: 'gym',
                imageUrl: "https://www.cheatsheet.com/wp-content/uploads/2017/08/Female-workout-in-gym-with-barbell.jpg",
                name: 'Gym'
            },
            {
                type: 'cycle',
                imageUrl: "https://blog.fabletics.com/wp-content/uploads/2016/03/FL_0316_Cycling_Outdoor_700x365.jpg",
                name: 'Cycle'
            }
        ]
    },
    {
        question: "What's your favorite place to work out?",
        options: [
            {
                type: 'yoga_studio',
                imageUrl: "https://fundbox.com/blog/wp-content/uploads/2016/09/shutterstock_179250509-940x467.jpg",
                name: 'Yoga Studio'
            },
            {
                type: 'outdoors',
                imageUrl: "https://www.adorama.com/alc/wp-content/uploads/2018/08/san-juans-feature-825x465.jpg",
                name: 'Outdoors'
            },
            {
                type: 'gym',
                imageUrl: "https://www.rd.com/wp-content/uploads/2018/03/shutterstock_432408646-760x506.jpg",
                name: 'Gym'
            },
            {
                type: 'home',
                imageUrl: "http://mattressxpress.co/wp-content/uploads/2018/08/open-living-room-gorgeous-concept-in-contemporary-style-home.jpg",
                name: 'Home'
            }
        ]
    },
    {
        question: 'What colors best match your style?',
        options: [
            {
                type: 'grayscale',
                imageUrl: "http://fabletics-us-cdn.justfab.com/media/images/en_US/quiz/v1/Q3_1_v2.jpg",
                name: ''
            },
            {
                type: 'warm',
                imageUrl: "http://fabletics-us-cdn.justfab.com/media/images/en_US/quiz/v1/Q3_2_v2.jpg",
                name: ''
            },
            {
                type: 'cool',
                imageUrl: "http://fabletics-us-cdn.justfab.com/media/images/en_US/quiz/v1/Q3_3_v2.jpg",
                name: ''
            },
            {
                type: 'pattern',
                imageUrl: "http://fabletics-us-cdn.justfab.com/media/images/en_US/quiz/v1/Q3_4_v2.jpg",
                name: ''
            }
        ]
    },
    {
        question: 'Which best mirrors your body type?',
        options: [
            {
                type: 'petite',
                imageUrl: "http://fabletics-us-cdn.justfab.com/media/images/en_US/quiz/v1/Q4_1.jpg",
                name: 'Petite'
            },
            {
                type: 'lean',
                imageUrl: "http://fabletics-us-cdn.justfab.com/media/images/en_US/quiz/v1/Q4_2.jpg",
                name: 'Lean'
            },
            {
                type: 'curvy',
                imageUrl: "http://fabletics-us-cdn.justfab.com/media/images/en_US/quiz/v1/Q4_3.jpg",
                name: 'Curvy'
            },
            {
                type: 'athletic',
                imageUrl: "http://fabletics-us-cdn.justfab.com/media/images/en_US/quiz/v1/Q4_4.jpg",
                name: 'Athletic'
            }
        ]
    },
]
