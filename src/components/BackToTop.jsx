function BackToTop() {

  const scrollToTop = () => {

    window.scrollTo({

      top: 0,

      behavior: 'smooth'

    });

  };

  return (

    <button 

      className="back-to-top visible"

      onClick={scrollToTop}

      aria-label="Back to top"

    >

      <i className="fas fa-arrow-up"></i>

    </button>

  );

}

export default BackToTop;
