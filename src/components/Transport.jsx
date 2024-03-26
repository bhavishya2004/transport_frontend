import React, { Profiler, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import List from "./List";

const Transport = () => {
  const navigate = useNavigate();
  const [employeeData, setData] = useState([]);
var withdr_total = 0;
var withoutdr_total = 0;
var v_total = 0;

  useEffect(() => {
    axios
      .get("http://localhost:3001/employeeData")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [employeeData]);

  return (
    <>
      <center>
      <h3 className="he">
          This is Transport Report of ABCD PVT Ltd
        </h3>
        <button className="btn"
          onClick={() => {
            navigate("/AddData");
          }}
        >
          Add Data
        </button>

      </center>
      <div className="employeeList">
        <div className="employeeData">
          <div id="id" className="bg">id</div>
          <div id="pn" className="bg"> v_no </div>
          <div className="bg"> vname</div>
          <div className="bg"> kmwith_dr</div>
          <div className="bg"> with_dr_rent</div>
          <div className="bg"> withdr_total</div>
          <div className="bg"> kmwithout_dr </div>
          <div className="bg"> withoutdr_rent </div>
          <div className="bg"> withoutdr_total </div>
          <div className="bg"> v_total </div>
         
        </div>
       
        {employeeData.map((transportation) => {
       { withdr_total = transportation.kmwith_dr * transportation.with_dr_rent}
       { withoutdr_total = transportation.kmwithout_dr * transportation.withoutdr_rent}
       {v_total = withdr_total + withoutdr_total}
       {/* { amountIn = employee.withoutdr_rent * employee.v_total}
       {totalAmountIn = totalAmountIn + amountIn}  
       {profit = totalProfit + profit}  
       {totalProfit= totalPurchaseAmount + totalSellingAmount} */}
       
          return (  
            <List
              key={transportation.id}
              id={transportation.id}
             v_no={transportation.v_no}
              vname={transportation.vname}
              kmwith_dr={transportation.kmwith_dr}
              with_dr_rent={transportation.with_dr_rent}
              withdr_total={withdr_total}
              kmwithout_dr={transportation.kmwithout_dr}
              withoutdr_rent={transportation.withoutdr_rent}
              withoutdr_total={withoutdr_total}
              v_total={v_total}
             
              

            />
          );
        })}
        {/* <div>
          <div className="s1"> Total Purchase Amount = {totalPurchaseAmount} </div>
          <div className="s2"> Total Selling Amount = {totalSellingAmount} </div>
          <div className="s2"> Total amount in = {totalAmountIn} </div>
          <div className="s2"> profit = {profit} </div>
          <div className="s2"> annualTurnoverAmount = {totalProfit} </div>

          
        </div> */}
      </div>

      <button className="btn"
        onClick={() => {
            navigate("/Report");
        }}
        >GO BACK</button>
    </>
  );
};

export default Transport;
