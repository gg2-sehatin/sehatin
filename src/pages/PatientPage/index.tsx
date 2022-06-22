const PatientPage = () => {
  return (
    <>
      <header className="h-screen flex flex-col gap-4 items-center justify-center bg-white">
        <p className="text-3xl font-semibold">Patient starter template.</p>
        <div className="flex gap-5">
          <a href="/" style={{ textDecoration: "underline" }}>
            Admin Starter Page Example
          </a>
        </div>
        <button className="btn btn-primary">Hello, lets start building!</button>
      </header>
    </>
  );
};

export default PatientPage;
