import {ReactNode} from 'react'
import '../styles/question.scss'

type QuestionProps= {
    content: string;
    author: {
        name: string;
        avatar: string;
    };
    children?: ReactNode;
    isHighLighted?: boolean,
    isAnswered?: boolean,
}

export function Question({
    content,
    author,
    children,
    isHighLighted = false,
    isAnswered = false,
}: QuestionProps) {
    return (
        <div className={`question ${isAnswered ? 'answered' : ''} ${isHighLighted && !isAnswered ? 'highlighted' : ''}`} >
            <p>{content}</p>

            <footer>
                <div className="user-info" title={author.name}>
                    <img src={author.avatar} alt={author.name} />
                    <span>{author.name}</span>
                </div>
                <div>
                    {children }
                </div>
            </footer>
        </div>
    );
}