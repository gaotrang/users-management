import Bai2 from './components/Bai2'
const Bai2 = () => {
    const [student, setStudent] = useState ({id: '123', score: 10})
    const onClick = () => {

    }
    return (
        <div>
            {`Hoc sinh co ma so ${student.id}, diem so la: ${student.score}`}
        </div>
    )
}