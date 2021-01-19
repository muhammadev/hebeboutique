function Product(props) {
  let { prod_img, prod_name, vendor, price, sold_out } = props.product;
  let prod_link = prod_name.toLowerCase();
  prod_link = prod_link.replace("// ", "").split(" ").join("-");
  return (
    <div className="product">
      <a href={"/collections/frontpage/products/" + prod_link}>
        <img src={prod_img} alt="product image" />
      </a>
      <p className="vendor_link">
        <a href={"/collections/vendors?q=" + vendor}>{vendor}</a>
      </p>
      <p className="prod_name">{prod_name}</p>
      <p className="price">${price}</p>
      <p className="sold_out">{sold_out ? "Sold Out" : null}</p>
    </div>
  );
}

export default Product;
