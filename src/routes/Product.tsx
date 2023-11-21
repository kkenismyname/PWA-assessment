
export const Product = ({ params }: { params: { id: string } }) => {

  return (
    <div className="container">
      product preview with param {params.id}
    </div>
  );
}
