'use client';
export default function Page({params}) {
  return (
    <div>
      <h1>Result</h1>
      <p>Link: {params.prodId}</p>
      {console.log(params)}

    </div>
  );
}
