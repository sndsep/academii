import React from 'react';
const CourseList = ({ courses }) => {
    return (<div>
      {courses.map((course) => (<div key={course._id.$oid}>{course.name}</div>))}
    </div>);
};
export default CourseList;
