function QuestionCard({ question, index, onSelect, selectedOption }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
      <h4>{index + 1}. {question.question}</h4>
      {question.options.map((opt, i) => (
        <div key={i}>
          <input
            type="radio"
            name={`question-${index}`}
            value={opt.marks}
            checked={selectedOption === opt.marks}
            onChange={() => onSelect(index, opt.marks)}
          />
          <label style={{ marginLeft: '0.5rem' }}>{opt.text}</label>
        </div>
      ))}
    </div>
  )
}

export default QuestionCard