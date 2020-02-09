import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

function addCourseAction(title) {
    return { type: 'ADD_COURSE', title }
}
export default function CourseList() {
    const qtd = 2;

    const courses = useSelector(
        state =>  state.data.slice(0, qtd),
        [qtd]
    )

    const dispatch = useDispatch()

    function addCourse() {
        dispatch(addCourseAction('Ata'))
    }

    return (
        <>
            <ul>
                {courses.map(course => <li key={course}>{course}</li>)}
            </ul>
            <button type="button" onClick={addCourse}>Adicionar curso</button>
        </>
    )

}
