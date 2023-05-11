import { useMemo, useState } from "react";
import kuhl2 from "./assets/kuhl2.jpg";
import promptpay from "./assets/promptpay.jpg";
import "./App.css";

function App() {
  const [page, setPage] = useState(0);
  const showPage = useMemo(() => {
    switch (page) {
      case 0:
        return page1(page, setPage);
      case 1:
        return page2(page, setPage);
      case 2:
        return page3(page, setPage);
      case 3:
        return page4(page, setPage);
      case 4:
        return page5();
      default:
        return page1(page, setPage);
    }
  }, [page]);
  return (
    <>
      {showPage}
      {page !== 4 && (
        <div className="footer">
          <button className="donate-button" onClick={() => setPage(4)}>
            Donate Now
          </button>
        </div>
      )}
    </>
  );
}

const page1 = (page: number, onClick: any) => {
  return (
    <>
      <div>
        <img src={kuhl2} className="logo" alt="Vite logo" />
      </div>
      <h1>Support Ross Kuhl in his Battle Against Cancer</h1>
      <div className="card">
        <button className="card-button" onClick={() => onClick(page + 1)}>
          Learn more
        </button>
      </div>
    </>
  );
};

const page2 = (page: number, onClick: any) => {
  return (
    <>
      <h1>Story</h1>
      <p>
        Physics teacher Ross Kuhl has dedicated his life to helping students
        learn physics at Ruamrudee International School. Unfortunately, Ross has
        recently been diagnosed with terminal cancer, which has left him and his
        family with significant medical expenses.
      </p>
      <div className="card">
        <button className="card-button" onClick={() => onClick(page + 1)}>
          Next
        </button>
      </div>
    </>
  );
};

const page3 = (page: number, onClick: any) => {
  return (
    <>
      <h1>Story</h1>
      <p>
        Despite the difficult circumstances, Ross remains committed to his
        students and continues to support the classroom. He has inspired
        countless students over the years, and his impact on the school and
        wider community cannot be overstated.
      </p>
      <div className="card">
        <button className="card-button" onClick={() => onClick(page + 1)}>
          Next
        </button>
      </div>
    </>
  );
};

const page4 = (page: number, onClick: any) => {
  return (
    <>
      <h1>Story</h1>
      <p>
        We are asking for your help to support Ross and his family during this
        challenging time. Any donation, no matter how small, will go a long way
        in helping to alleviate the financial burden. Your contribution will not
        only help Ross and his family, but it will also be a testament to the
        impact that he has had on the lives of so many students.
      </p>
      <div className="card">
        <button className="card-button" onClick={() => onClick(page + 1)}>
          Next
        </button>
      </div>
    </>
  );
};

const page5 = () => {
  return (
    <>
      <h1>Donate</h1>
      <p>
        Please donate using the following QR code, and e-mail the receipt to
        bunnag.bn@gmail.com
      </p>
      <div>
        <img src={promptpay} className="donate-logo" alt="Vite logo" />
      </div>
      <p>
        For other methods of donations or any other questions, please contact me
        at bunnag.bn@gmail.com
      </p>
    </>
  );
};

export default App;
