import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Table from './table';

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [records, setRecords] = useState([]);
  const onSubmit = data => setRecords([...records, data.recorder]);
  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("recorder")} />
        <input type="submit" />
        </form>
        <Table records={records} setRecords={setRecords}/>
    </>
  );
}