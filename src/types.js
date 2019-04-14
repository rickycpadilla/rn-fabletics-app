// @flow

export type UserProfileType = {
    onboardingSurveyResults: ?OnboardingSurveyResultsType
}

export type OnboardingSurveyResultsType = {
    favoriteExercise: ?ExerciseType,
    favoriteExercisePlace: ?ExercisePlaceType,
    favoriteColorPalette: ?ColorPaletteType,
    bodyType: ?BodyTypeType,
    sizes: {
        bottom: ClothesSize,
        top: ClothesSize,
        bra: ClothesSize
    },
    zipCode: string,
    birthDate: ?BirthDate
}

export type ExerciseType = 'yoga' | 'run' | 'gym' | 'cycle'
export type ExercisePlaceType = 'yoga studio' | 'outdoors' | 'gym' | 'home'
export type ColorPaletteType = 'grayscale' | 'warm' | 'cool' | 'pattern'
export type BodyTypeType = 'petite' | 'lean' | 'curvy' | 'athletic'
export type ClothesSize = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | '1x' | '2x' | '3x'
export type BirthDate = {
    year: ?number,
    month: ?number,
    day: ?number
}

// REDUX STATE TYPES
export type UserStateType = UserProfileType
