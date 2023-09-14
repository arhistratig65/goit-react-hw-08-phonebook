const Home = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        backgroundSize: 'cover',
        resizeMode: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <span style={{ color: '#ffffff', padding: '20px', textAlign: 'center' }}>
        Hello my dear friend. This App helps you add contacts to your own phone
        book. Register first. If you registered user, log in to service.
      </span>
    </div>
  );
};

export default Home;
