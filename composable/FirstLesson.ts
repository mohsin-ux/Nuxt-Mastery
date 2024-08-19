import {useCourse} from '~/composable/Course'
export default () => {
    const {chapters} = useCourse()
    return chapters[0].lessons[0]
}