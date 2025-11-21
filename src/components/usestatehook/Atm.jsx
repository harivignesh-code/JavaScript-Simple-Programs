import React, { useState } from "react";
import { Formik, Form, Field } from "formik";

const Atm = () => {
    class ATM {
        constructor(balance=1000,correctpin="1234"){
            this.balance=balance;
            this.correctpin=correctpin;
            this.login=false;
        }
        login(pin){
            if(pin===this.correctpin){
            this.login=true;
            return"Login Successfully";
        }
        return"incorrect pin";
        }
        withdraw(amount){
            if(amount<this.balance)
                return"insufficient balance";
            this.balance-=amount;
            return`Withraw done.New balance:₹${this.balance}`;
        }
        checkBalance(){
            return`Your Balance:${this.balance}`;
        }
    }
    const atm=new ATM();

    const [message,setMessage]=useState("");
    const [login,setLogin]=useState(false);

 return (
    <div style={{ width: "300px", margin: "40px auto" }}>
      <h2>ATM Machine</h2>

     
      {!login && (
        <Formik
          initialValues={{ pin: "" }}
          onSubmit={(values) => {
            const res = atm.login(values.pin);
            setMessage(res);
            if (res === "Login successful") setLogin(true);
          }}
        >
          <Form>
            <label>Enter PIN:</label>
            <Field type="password" name="pin" />
            <br /><br />
            <button type="submit">Login</button>
          </Form>
        </Formik>
      )}

      {login && (
        <div>
         
          <Formik
            initialValues={{ amount: "" }}
            onSubmit={(values) => {
              setMessage(atm.withdraw(Number(values.amount)));
            }}
          >
            <Form>
              <label>Withdraw Amount:</label>
              <Field type="number" name="amount" />
              <button type="submit">Withdraw</button>
            </Form>
          </Formik>

          <br />


          
          <button onClick={() => setMessage(atm.checkBalance())}>
            Check Balance
          </button>
        </div>
      )}

      <h3 style={{ marginTop: "20px" }}>{message}</h3>
    </div>
  );
};

export default Atm;