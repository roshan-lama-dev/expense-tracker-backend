import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { CustomeTable } from "../components/customTable/CustomTable";
import { MainLayout } from "../components/mainLayout/MainLayout";
import { fetchTransaction } from "../helper/axiosHelper";

const Dashboard = (trans = []) => {
  const [transaction, setTransaction] = useState([]);
  useEffect(() => {
    fetchingTrans();
  }, []);

  const fetchingTrans = async () => {
    const { status, result } = await fetchTransaction();

    status === "success" && setTransaction(result);
  };
  return (
    <MainLayout>
      <Container>
        {/* formsection */}
        {/* tablesection */}

        <div className="ttable">
          <CustomeTable />
        </div>
      </Container>
      ;
    </MainLayout>
  );
};

export default Dashboard;
