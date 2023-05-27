import Item from "@/components/Item";
import List from "@/components/List";
import prisma from "@/lib/prisma";
import Button from "@/components/Button";
import {Course} from "@prisma/client";

export interface CourseProps {
    id: string;
    title: string;
    body: string;
}
async function getCourses ():Promise<Course[]> {
    return prisma.course.findMany({orderBy: {
        title: 'desc'
        }});
}
export default async function Courses () {
    const courses = await getCourses();
    return (
        <>
            <h1>Courses</h1>
            <List items={courses} element={(course) => <Item name={course.title} description={course.body} href={`courses/${course.id}`}/>} heading={'My courses'}/>
            <Button href={'/courses/add'}>Add course</Button>
        </>
    )
}