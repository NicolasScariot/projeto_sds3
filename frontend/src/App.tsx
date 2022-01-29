import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import DataTable from 'components/DataTable';
function App() {
  return (
    <>
      <NavBar />
      <div >
        <h1 className="text-primary">Seu prego</h1>
      <DataTable />
      </div>
      <Footer />

    </>

  );
}

export default App;
