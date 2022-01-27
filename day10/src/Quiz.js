import React from 'react'
import { Route, useParams } from 'react-router-dom';

const questions = [
    { id: 1, question: '세균이나 바이러스는 일반적으로 열에 강하다', answer: false },
    { id: 2, question: '약은 따뜻한 물과 함께 복용해야 효과적이다', answer: true },
    { id: 3, question: '코로나바이러스는 공기만으로 전염된다', answer: false },
    { id: 4, question: '사람의 5가지 (시각, 후각, 미각, 청각, 촉각) 충에서 가장 먼저 나빠지는 감각기관은 시각이다', answer: true }
];

const question = () => {
    const params = useParams();
    questions.filter((q) => (Number(params.id) === q.id));
}

function Quiz() {
    const setAnswer = (answer) => {
        console.log(answer)
    }

    return (
        <div>
            {questions.map}
            <button onClick={setAnswer(true)}>O</button>
            <button onClick={setAnswer(false)}>X</button>
        </div>
    )
}

export default Quiz
