useEffect(() => {
  let mostAccessed = null;
  let mostAccessedCount = 0;

  const totalCounts = introducao.length + examefisicogeral.length;

  introducao.forEach((item) => {
    const count = parseInt(localStorage.getItem(item.id)) || 0;
    if (count > mostAccessedCount) {
      mostAccessedCount = count;
      mostAccessed = item;
    }
  });

  examefisicogeral.forEach((item) => {
    const count = parseInt(localStorage.getItem(item.id)) || 0;
    if (count > mostAccessedCount) {
      mostAccessedCount = count;
      mostAccessed = item;
    }
  });

  setMostAccessedItem(mostAccessed);
}, []);
