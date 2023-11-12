import ClipLoader from 'react-spinners/ClipLoader';

const override = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '250px auto',
  borderColor: 'blue',
};

function Spinner() {
  return (
    <div className="sweet-loading">
      <ClipLoader
        cssOverride={override}
        loading={true}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Spinner;
