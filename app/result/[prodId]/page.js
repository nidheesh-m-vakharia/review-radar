export function generateStaticParams() {
  return [{ prodId: "1" }, { prodId: "2" }, { prodID: "3" }];
}

export default function Page({ params }) {
  return (
    <div>
      <h1>Result</h1>
      <p>Link: {params.prodId}</p>
      {console.log(params)}
    </div>
  );
}
