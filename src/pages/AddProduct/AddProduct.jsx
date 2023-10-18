import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const productName = form.productName.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const image = form.image.value;
    const rating = form.rating.value;
    const descriptions = form.descriptions.value;

    const product = {
      productName,
      brandName: brandName.toLowerCase(),
      type,
      price,
      image,
      rating,
      descriptions,
    };

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          form.reset();
          Swal.fire({
            title: "Great!",
            text: "Product Added Successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });
        }
      });
  };
  return (
    <div className="w-[90%] md:w-[60%] my-8 mx-auto">
      <div className="bg-fuchsia-100 rounded-md py-6 text-[#1b1a1ab3] px-8 md:px-16">
        <div className="text-center w-[80%] mb-5 mx-auto">
          <h3 className="text-2xl font-semibold text-[#374151]">
            Add New Product
          </h3>
        </div>
        <form onSubmit={handleAddCoffee} className="space-y-2">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="label label-text  font-semibold">
                Product Name
              </label>
              <input
                className="w-full ps-3 focus:outline-none rounded-md font-sans text-sm p-1"
                type="text"
                name="productName"
                placeholder="Product Name"
              />
            </div>
            <div>
              <label className="label label-text  font-semibold">
                Brand Name
              </label>
              <input
                className="w-full ps-3 focus:outline-none rounded-md font-sans text-sm p-1"
                type="text"
                name="brandName"
                placeholder="Brand Name"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="label label-text  font-semibold">
                Product Type
              </label>
              <input
                className="w-full ps-3 focus:outline-none font-sans text-sm rounded-md p-1"
                type="text"
                name="type"
                placeholder="Product Type"
              />
            </div>
            <div>
              <label className="label label-text font-semibold">Price</label>
              <input
                className="w-full ps-3 focus:outline-none font-sans text-sm rounded-md p-1"
                type="text"
                name="price"
                placeholder="Price"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="label label-text  font-semibold">
                Image URL
              </label>
              <input
                className="w-full ps-3 focus:outline-none font-sans text-sm rounded-md p-1"
                type="text"
                name="image"
                placeholder="Image URL"
              />
            </div>
            <div>
              <label className="label label-text font-semibold">Rating</label>
              <input
                className="w-full ps-3 focus:outline-none  font-sans text-sm rounded-md p-1"
                type="text"
                name="rating"
                placeholder="Rating"
              />
            </div>
          </div>
          <div>
            <label className="label label-text font-semibold">
              Short Description
            </label>
            <textarea
              className="w-full ps-3 focus:outline-none font-sans text-sm rounded-md p-1 mb-1"
              name="descriptions"
              id=""
              cols="30"
              rows="3"
              placeholder="Short descriptions"
            ></textarea>
          </div>
          <input
            type="submit"
            className="w-full bg-pink-300 text-[#331A15] py-1 rounded-md font-bold ring-1 ring-[#331A15] text-lg"
            value="Add Product"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
