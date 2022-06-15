const AdminPage = () => {
  return (
    <>
      <header className='h-screen flex flex-col gap-4 items-center justify-center bg-white'>
        <p className='text-3xl font-semibold'>Admin starter template.</p>
        <div className='flex gap-5'>
          <a href='/patient' style={{ textDecoration: 'underline' }}>
            Patient Starter Page Example
          </a>
        </div>
        <button className='btn btn-primary'>Hello, lets start building!</button>
      </header>
    </>
  );
};

export default AdminPage;
