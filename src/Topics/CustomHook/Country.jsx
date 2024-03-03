export default function Country({ country }) {
    return (
      <div style={styles.card}>
        <h1 style={styles.title}>Country Details</h1>
        <div style={styles.details}>
          <p><strong>Name:</strong> {country.name.common}</p>
          <p><strong>Flag:</strong></p>
          <img src={country.flags.png} alt="Flag" style={styles.flag} />
        </div>
      </div>
    );
  }
  
  const styles = {
    card: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      maxWidth: '400px',
      margin: '20px auto',
      backgroundColor: '#f9f9f9',
      textAlign: 'center',
    },
    title: {
      fontSize: '24px',
      margin: '0',
      marginBottom: '20px',
    },
    details: {
      textAlign: 'left',
    },
    flag: {
      maxWidth: '100px',
      maxHeight: '60px',
    },
  };
  