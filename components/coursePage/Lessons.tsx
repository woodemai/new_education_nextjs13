import {Lesson} from "@prisma/client";
import Item from "@/components/Item";
import List from "@/components/List";

const renderItem = (lesson: Lesson) => {
    return (
        <Item key={lesson.id} name={lesson.title} description={lesson.body}
              href={`/lesson/${lesson.id}`}/>
    )
}
export default function Lessons({lessons, dictionary}: {
    lessons: Lesson[], dictionary: {
        title: string,
        noLessons: string,
    }
}) {
    if (!lessons.length) {
        return (
            <div style={{margin: '10px 0'}}>
                <h3>{dictionary.noLessons}</h3>
            </div>
        )
    }
    return <List items={lessons}
                 element={(lesson: Lesson) => renderItem(lesson)} heading={dictionary.title}/>
}