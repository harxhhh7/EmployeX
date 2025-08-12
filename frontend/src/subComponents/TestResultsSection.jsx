import ReportCard from '../components/ReportCard';

export default function TestResultsSection({ score, category, name, empID, onDashboard }) {
  return (
    <>
      <h2 className="text-3xl font-bold">Test Results</h2>
      <ReportCard
        score={score}
        category={category}
        name={name}
        empID={empID}
        onDashboard={onDashboard}
      />
    </>
  );
}